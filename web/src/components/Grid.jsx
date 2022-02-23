import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Grid = ({ children, classes }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={`grid grid-cols-1 ${classes}`}
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

Grid.defaultProps = {
  classes: ``,
};

Grid.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Grid;
