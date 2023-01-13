import React from 'react';
import './App.css';

import Fcalculator from './components/Fcalculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.input = {};
  }

  render() {
    return (
      <>
        <Fcalculator />
      </>
    );
  }
}

export default App;
