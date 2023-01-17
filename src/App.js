import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/Pages/About';
import Quote from './components/Pages/Quote';
import Fcalculator from './components/Fcalculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.input = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Calculator" element={<Fcalculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
