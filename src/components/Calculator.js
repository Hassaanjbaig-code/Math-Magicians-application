import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.show = {};
  }

  render() {
    return (
      <div className="calculator">
        <ul className="main">
          <input type="text" id="Text" className="text" readOnly />
          <li className="row">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="right">/</button>
          </li>
          <li className="row">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="right">*</button>
          </li>
          <li className="row">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="right">-</button>
          </li>
          <li className="row">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="right">+</button>
          </li>
          <li className="row">
            <button type="button" className="zero">0</button>
            <button type="button">.</button>
            <button type="button" className="right">=</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
