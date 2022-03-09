import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import SVG from 'react-inlinesvg';

import {
  SanityBlockContent,
  Section,
  SectionHeader,
  Container,
  Grid,
  Col,
} from '.';
import { useSanity } from '../hooks';

const StyledBenefits = styled((props) => <Section {...props} />)`
  background-color: ${(props) => props.$bgColor};
  & span {
    color: ${(props) => props.$spanColor};
  }
`;

const StyledIcon = styled.div`
  color: ${(props) => props.$color};
`;

const StyledAuthor = styled.p`
  color: ${(props) => props.$color};
`;

const BenefitsIcons = ({ block, raw, index, idName, header, benefit }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <StyledBenefits
      idName={idName}
      type="sm"
      bgColor={neutral.light.color}
      h2Color={neutral.darker.color}
      h3Color={primary.dark.color}
      $spanColor={accent.light.color}
    >
      <Container classes="max-w-md px-4 text-center sm:max-w-3xl lg:max-w-7xl">
        <SectionHeader
          tagline={header?.tagline}
          headline={header?.headline}
          description={header?._rawDescription}
        />
        <Grid classes="mt-20 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {benefit.map((item) => (
            <Col
              key={item?._key}
              classes="pt-6 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <StyledIcon
                className="mx-auto h-40 w-40"
                $color={accent.dark.color}
              >
                <SVG
                  cacheRequests={true}
                  description={item?.iconUpload?.alt}
                  loader={<span>Loading...</span>}
                  onError={(error) => console.log(error.message)}
                  onLoad={(src, hasCache) => console.log(src, hasCache)}
                  src={item?.iconUpload?.asset?.url}
                  title={item?.iconUpload?.alt}
                  className="h-40 w-40 fill-current"
                >
                  <img
                    src={item?.iconUpload?.asset?.url}
                    alt={item?.iconUpload?.alt}
                  />
                </SVG>
              </StyledIcon>
              <div className="relative z-10">
                <h3 className="mt-8 text-3xl font-medium">{item?.title}</h3>
                <p className="mt-5 mb-8 text-left text-base text-zinc-500">
                  <SanityBlockContent blocks={item?._rawDescription} />
                </p>
                <StyledAuthor
                  className="mt-5 text-base font-bold"
                  $color={primary.dark.color}
                >
                  <span>{item?.author}</span>
                </StyledAuthor>
                <p className="mb-8 text-base font-semibold text-zinc-800">
                  <span>{item?.info}</span>
                </p>
              </div>
            </Col>
          ))}
        </Grid>
      </Container>
    </StyledBenefits>
  );
};

export default BenefitsIcons;
