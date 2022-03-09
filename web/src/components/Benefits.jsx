import React from 'react';

import { BenefitsIcons } from '.';

const Benefits = ({ block, raw, index }) => {
  const { layout, idName, header, benefit } = block;

  switch (layout) {
    case 'icons':
      return (
        <BenefitsIcons
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          benefit={benefit}
        />
      );
    default:
      return (
        <BenefitsIcons
          block={block}
          raw={raw}
          index={index}
          idName={idName}
          header={header}
          benefit={benefit}
        />
      );
  }
};

export default Benefits;
