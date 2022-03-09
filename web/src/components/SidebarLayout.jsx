import React from 'react';
import PropTypes from 'prop-types';
import { useSanity } from '../hooks';

import { Section, Container, Grid, Col, Sidebar } from '.';

const SidebarLayout = ({ children, sidebarType, idName }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section idName={idName} padding="lg" bgColor={neutral?.white?.color}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-24">
          <div className="lg:col-span-7">
            <article className="px-4 lg:px-0">{children}</article>
          </div>
          <div className="lg:col-span-5 lg:h-full">
            <Sidebar sidebarType={sidebarType} />
          </div>
        </div>
      </div>
    </Section>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;
