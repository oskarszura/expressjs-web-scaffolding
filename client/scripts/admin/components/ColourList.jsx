import React, { PropTypes } from 'react';
import ColourRow from './ColourRow';

const ColourList = ({ colours }) => (
  <ul>
    { colours.map(colour => <ColourRow
      key={colour.id}
      code={colour.code}
    />)}
  </ul>
);

ColourList.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired,
}

export default ColourList;
