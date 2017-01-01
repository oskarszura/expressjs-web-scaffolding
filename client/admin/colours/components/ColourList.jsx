import React, { PropTypes } from 'react';
import ColourRow from './../containers/ColourRow';
import AddColour from './../containers/AddColour';

const ColourList = ({ colours }) => (
  <ul className="colour-list">
    { colours.map(colour => <ColourRow
      key={colour._id}
      _id={colour._id}
      name={colour.name}
      code={colour.code}
    />)}
    <li className="colour-list__item">
      <AddColour />
    </li>
  </ul>
);

ColourList.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired,
}

export default ColourList;
