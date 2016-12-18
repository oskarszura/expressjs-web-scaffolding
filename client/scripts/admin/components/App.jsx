import React from 'react';
import ColourList from '../containers/ColourList';
import AddColour from './AddColour';

const App = () => (
  <div>
    Admin Application
    <div>
      <ColourList />
      <AddColour />
    </div>
  </div>
)

export default App;
