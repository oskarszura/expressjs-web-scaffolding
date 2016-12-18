import React from 'react';
import ColourList from './ColourList';

const colours = [{
  code: 'fff',
}, {
  code: 'f00',
}, {
  code: '0f0',
}];

const App = () => (
  <div>
    Admin Application
    <div>
      <ColourList colours={colours} />
    </div>
  </div>
)

export default App;
