/* eslint-disable */
import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.show = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick (e) {
    console.log(e.target.innerText);
    const btn = e.target.innerText;
    calculate(this.show,btn);
  }

  render() {
    return (
      <div className="calculator">
        <ul className="main">
          <input type="text" id="Text" value={this.show.total} className="text" readOnly />
          <li className="row">
            <button onClick={this.handleClick} type="button">AC</button>
            <button onClick={this.handleClick} type="button">+/-</button>
            <button onClick={this.handleClick} type="button">%</button>
            <button onClick={this.handleClick} type="button" className="right">/</button>
          </li>
          <li className="row">
            <button onClick={this.handleClick} type="button">7</button>
            <button onClick={this.handleClick} type="button">8</button>
            <button onClick={this.handleClick} type="button">9</button>
            <button onClick={this.handleClick} type="button" className="right">*</button>
          </li>
          <li className="row">
            <button onClick={this.handleClick} type="button">4</button>
            <button onClick={this.handleClick} type="button">5</button>
            <button onClick={this.handleClick} type="button">6</button>
            <button onClick={this.handleClick} type="button" className="right">-</button>
          </li>
          <li className="row">
            <button onClick={this.handleClick} type="button">1</button>
            <button onClick={this.handleClick} type="button">2</button>
            <button onClick={this.handleClick} type="button">3</button>
            <button onClick={this.handleClick} type="button" className="right">+</button>
          </li>
          <li className="row">
            <button onClick={this.handleClick} type="button" className="zero">0</button>
            <button onClick={this.handleClick} type="button">.</button>
            <button onClick={this.handleClick} type="button" className="right">=</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
