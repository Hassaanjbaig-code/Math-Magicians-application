import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Ccalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <ul className="main">
          <p className="text" type="text">
            <span>
              {total}
              {operation}
              {next}
            </span>
          </p>
          <li className="row">
            <button onClick={this.handleClick} type="button">AC</button>
            <button onClick={this.handleClick} type="button">+/-</button>
            <button onClick={this.handleClick} type="button">%</button>
            <button onClick={this.handleClick} type="button" className="right">&#247;</button>
          </li>
          <li className="row">
            <button onClick={this.handleClick} type="button">7</button>
            <button onClick={this.handleClick} type="button">8</button>
            <button onClick={this.handleClick} type="button">9</button>
            <button onClick={this.handleClick} type="button" className="right">x</button>
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

export default Ccalculator;
