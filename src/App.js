import React from 'react';
import './App.css';

import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.input = {};
  }

  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
