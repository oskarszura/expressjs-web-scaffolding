import React, { PropTypes } from 'react';

const ColourRow = ({ name, code }) => {
  const style = {
    'background-color': `#${code}`,
  };

  return (<li className="c-admin-colours__colour-list-item">
    <div className="c-admin-colours__colour-list-name">
      {name}
    </div>
    <div
      className="c-admin-colours__colour-list-code"
      style={style}
    >
      {code}
    </div>
  </li>);
};

ColourRow.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default ColourRow;
