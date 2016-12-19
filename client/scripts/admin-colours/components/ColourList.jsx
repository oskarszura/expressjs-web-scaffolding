import React, { PropTypes } from 'react';
import ColourRow from './ColourRow';

const ColourList = ({ colours }) => (
  <ul className="c-admin-colours__colour-list">
    { colours.map(colour => <ColourRow
      key={colour.id}
      name={colour.name}
      code={colour.code}
    />)}
  </ul>
);

ColourList.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired,
}

export default ColourList;
