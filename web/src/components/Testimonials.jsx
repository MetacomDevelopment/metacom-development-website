import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Container, Section } from '.';

const Testimonials = ({ block, raw, index }) => {
  const { headline } = block;

  return (
    <Section>
      <Container>
        <h2>{headline}</h2>
      </Container>
    </Section>
  );
};

export default Testimonials;
