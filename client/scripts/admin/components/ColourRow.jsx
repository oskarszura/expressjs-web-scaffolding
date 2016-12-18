import React, { PropTypes } from 'react';

const ColourRow = ({ code }) => (
  <li>{code}</li>
);

ColourRow.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ColourRow;
