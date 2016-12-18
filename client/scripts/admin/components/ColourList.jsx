import React, { PropTypes } from 'react';
import ColourRow from './ColourRow';

const ColourList = ({ colours }) => (
  <ul>
    { colours.map(colour => <ColourRow
      code={colour.code}
    />)}
  </ul>
);

ColourList.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default ColourList;
