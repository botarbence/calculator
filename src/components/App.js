import React, { useState } from "react";

let first = "0";
let second = "0";
let func = null;

const App = () => {
  const [display, setDisplay] = useState(0);

  const handleNumClick = (e) => {
    if (func === null) {
      if (typeof first === "number") {
        first = e.target.textContent;
      } else {
        first !== "0" && first !== "Invalid"
          ? (first += e.target.textContent)
          : e.target.textContent !== "0" && (first = e.target.textContent);
      }
      setDisplay(first);
    } else {
      second !== "0"
        ? (second += e.target.textContent)
        : e.target.textContent !== "0" && (second = e.target.textContent);
      setDisplay(second);
    }
  };

  const handleAction = (e) => {
    if (e.target.textContent === "-") {
      if (first === "0") {
        first = "-";
        setDisplay(first);

        return;
      }
      if (func && second === "0") {
        second = "-";
        setDisplay(second);

        return;
      }
    }
    if (!isNaN(first) && !isNaN(second)) {
      switch (func) {
        case "+":
          first = add(parseFloat(first), parseFloat(second));

          break;
        case "-":
          first = subtract(parseFloat(first), parseFloat(second));

          break;
        case "*":
          first = multiply(parseFloat(first), parseFloat(second));

          break;
        case "/":
          second === "0"
            ? (first = "Invalid")
            : (first = divide(parseFloat(first), parseFloat(second)));
          break;
        default:
          break;
      }
    }
    func = null;
    second = "0";
    e.target.textContent === "="
      ? setDisplay(first)
      : (func = e.target.textContent);
  };

  const handleDecimal = () => {
    if (func === null && typeof first !== "number") {
      first.includes(".") || (first += ".");
      setDisplay(first);
    } else {
      second.includes(".") || (second += ".");
      setDisplay(second);
    }
  };

  const handleClear = () => {
    first = "0";
    second = "0";
    func = null;
    setDisplay(first);
  };

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="numbers">
        <div onClick={handleNumClick} id="seven" className="btn">
          7
        </div>
        <div onClick={handleNumClick} id="eight" className="btn">
          8
        </div>
        <div onClick={handleNumClick} id="nine" className="btn">
          9
        </div>
        <div onClick={handleNumClick} id="four" className="btn">
          4
        </div>
        <div onClick={handleNumClick} id="five" className="btn">
          5
        </div>
        <div onClick={handleNumClick} id="six" className="btn">
          6
        </div>
        <div onClick={handleNumClick} id="one" className="btn">
          1
        </div>
        <div onClick={handleNumClick} id="two" className="btn">
          2
        </div>
        <div onClick={handleNumClick} id="three" className="btn">
          3
        </div>
        <div onClick={handleNumClick} id="zero" className="btn btn-double">
          0
        </div>
        <div onClick={handleDecimal} id="decimal" className="btn">
          .
        </div>
      </div>
      <div className="operations">
        <div onClick={handleAction} id="add" className="btn">
          +
        </div>
        <div onClick={handleAction} id="subtract" className="btn">
          -
        </div>
        <div onClick={handleAction} id="multiply" className="btn">
          *
        </div>
        <div onClick={handleAction} id="divide" className="btn">
          /
        </div>
      </div>
      <div
        onClick={handleClear}
        id="clear"
        className="btn btn-double btn-clear"
      >
        C
      </div>
      <div
        onClick={handleAction}
        id="equals"
        className="btn btn-double btn-equals"
      >
        =
      </div>
    </div>
  );
};

export default App;
