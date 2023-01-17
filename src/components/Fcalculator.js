import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Fcalculator = () => {
  const [items, setitems] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    setitems(calculate(items, e.target.textContent));
  };
  const { total, operation, next } = items;
  return (
    <div className="calculator">
      <h3>Let&apos;s do some math!</h3>
      <ul className="main">
        <p className="text" type="text">
          <span>
            {total}
            {operation}
            {next}
          </span>
        </p>
        <li className="row">
          <button onClick={handleClick} type="button">AC</button>
          <button onClick={handleClick} type="button">+/-</button>
          <button onClick={handleClick} type="button">%</button>
          <button onClick={handleClick} type="button" className="right">&#247;</button>
        </li>
        <li className="row">
          <button onClick={handleClick} type="button">7</button>
          <button onClick={handleClick} type="button">8</button>
          <button onClick={handleClick} type="button">9</button>
          <button onClick={handleClick} type="button" className="right">x</button>
        </li>
        <li className="row">
          <button onClick={handleClick} type="button">4</button>
          <button onClick={handleClick} type="button">5</button>
          <button onClick={handleClick} type="button">6</button>
          <button onClick={handleClick} type="button" className="right">-</button>
        </li>
        <li className="row">
          <button onClick={handleClick} type="button">1</button>
          <button onClick={handleClick} type="button">2</button>
          <button onClick={handleClick} type="button">3</button>
          <button onClick={handleClick} type="button" className="right">+</button>
        </li>
        <li className="row">
          <button onClick={handleClick} type="button" className="zero">0</button>
          <button onClick={handleClick} type="button">.</button>
          <button onClick={handleClick} type="button" className="right">=</button>
        </li>
      </ul>
    </div>
  );
};

export default Fcalculator;
