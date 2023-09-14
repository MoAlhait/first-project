import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberInput = (value) => {
    if (operator === '') {
      setNum1(num1 + value);
    } else {
      setNum2(num2 + value);
    }
  };

  const handleOperatorClick = (value) => {
    setOperator(value);
  };

  const handleCalculate = () => {
    if (num1 !== '' && num2 !== '' && operator !== '') {
      const calculatedResult = eval(`${num1} ${operator} ${num2}`);
      setResult(calculatedResult);
    } else {
      setResult('Invalid input');
    }
  };

  const handleDelete = () => {
    if (operator === '') {
      setNum1(num1.slice(0, -1));
    } else {
      setNum2(num2.slice(0, -1));
    }
  };

  const clearFields = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult('');
  };

  const numberPad = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.', '=',
    'C',  // for clear
    'DEL',  // for delete
  ];

  return (
    <div className="calculator-box">
      <div className="App">
        <div className="App-content">
          <div>
            <h1>Simple Calculator</h1>
            <input type="text" value={num1} readOnly />
            <select value={operator} onChange={(e) => handleOperatorClick(e.target.value)}>
              <option value="">Select Operator</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <input type="text" value={num2} readOnly />
            <button onClick={handleCalculate}>=</button>
            <button onClick={clearFields}>C</button>
            <button onClick={handleDelete}>DEL</button>
            <input type="text" value={result} readOnly />
          </div>
          <div className="number-pad">
            <div className="number-pad-row">
              {numberPad.slice(0, 3).map((item, index) => (
                <button key={index} onClick={() => handleNumberInput(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="number-pad-row">
              {numberPad.slice(3, 6).map((item, index) => (
                <button key={index} onClick={() => handleNumberInput(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="number-pad-row">
              {numberPad.slice(6, 9).map((item, index) => (
                <button key={index} onClick={() => handleNumberInput(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="number-pad-row">
              {numberPad.slice(9).map((item, index) => (
                <button key={index} onClick={() => {
                  if (item === 'C') {
                    clearFields();
                  } else if (item === 'DEL') {
                    handleDelete();
                  } else {
                    handleNumberInput(item);
                  }
                }}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
