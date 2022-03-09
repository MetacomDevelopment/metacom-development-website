import React from 'react';
import styled from 'styled-components';

import { SanityBlockContent, Container } from '.';
import { useSanity } from '../hooks';

const StyledTagline = styled.span`
  color: ${(props) => props.$spanColor};
`;

const SectionHeader = ({ tagline, headline, description }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();
  return (
    <Container classes="text-center">
      <StyledTagline
        $spanColor={accent?.dark?.color}
        className="text-base font-semibold tracking-wider uppercase"
      >
        {tagline}
      </StyledTagline>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:max-w-xl mx-auto">
        {headline}
      </h2>
      <div className="mt-6 max-w-prose mx-auto text-xl text-zinc-600">
        <SanityBlockContent blocks={description} />
      </div>
    </Container>
  );
};

export default SectionHeader;
