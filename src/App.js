import React, { useState } from 'react';
import './App.css';

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameHeader() {
  return(
    <div className='NameTitle'>
     <h1>JOHN MARK SALAS BSIT - 3A</h1>
    </div>
  )
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("John Mark Salas");
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  const genericClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    
    if (value.toLowerCase() === 'c') {
      setDisp(0);
      setNum1(null);
      setNum2(null);
      setOp(null);
      return;
    }

    setDisp('Coming Soon');
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  };

  const eqClickHandler = (e) => {
    e.preventDefault();
    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      switch (op) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*':
          result = n1 * n2;
          break;
        case '÷':
          result = n2 !== 0 ? n1 / n2 : 'Error';
          break;
        default:
          return;
      }
      setDisp(result);
      setNum1(result.toString());
      setNum2(null);
      setOp(null);
    }
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <div>
          <NameHeader />
        </div>
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={"÷"} clickHandler={opClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={"*"} clickHandler={opClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={"-"} clickHandler={opClickHandler} />
          <Key label={"C"} clickHandler={genericClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"="} clickHandler={eqClickHandler} />
          <Key label={"+"} clickHandler={opClickHandler} />
          <Key label={"Salas"} clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
