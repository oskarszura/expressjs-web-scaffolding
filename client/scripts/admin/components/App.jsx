import React from 'react';
import ColourList from '../containers/ColourList';
import AddColour from '../containers/AddColour';

const App = () => (
  <div className="c-admin">
    <h2>Colour Manager</h2>
    <ColourList />
    <AddColour />
  </div>
)

export default App;
