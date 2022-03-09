import React from 'react';

import { FeaturesAltNoCta, FeaturesAltCta } from '.';

const Features = ({ block, raw, index }) => {
  const {
    layout,
    idName,
    header,
    feature,
    headline,
    _rawDescription,
    image,
    ctaButton,
  } = block;

  switch (layout) {
    case 'alternatingNoCta':
      return (
        <FeaturesAltNoCta
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
        />
      );
    case 'alternatingCta':
      return (
        <FeaturesAltCta
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
          ctaButton={ctaButton}
        />
      );
    default:
      return (
        <FeaturesAltNoCta
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          feature={feature}
          headline={headline}
          _rawDescription={_rawDescription}
          image={image}
        />
      );
  }
};

export default Features;
