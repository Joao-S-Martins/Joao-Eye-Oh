import React from 'react';
import PropTypes from 'prop-types';

export default function Root({children}) {
  return <>{children}</>;
}

Root.propTypes = {
  children: PropTypes.node.isRequired
};
