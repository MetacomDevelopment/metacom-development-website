import React from 'react';
import propTypes from 'prop-types';
import GatsbyImage from 'gatsby-plugin-image';

// Render inline SVG with fallback non-svg images
export default function Svg({ svg, gatsbyImageData, file, alt }) {
  if (file.contentType === 'image/svg+xml') {
    if (svg && svg.content) {
      // Inlined SVGs
      return <div dangerouslySetInnerHTML={{ __html: svg.content }} />;
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />;
  }

  // Non SVG images
  return <GatsbyImage image={gatsbyImageData} alt={alt} />;
}
