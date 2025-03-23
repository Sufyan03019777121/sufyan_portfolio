import React, { useState } from "react";


const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5 mb-5">
      <h2 className="mb-3"> Calculator</h2>
      <div className="card p-3 bg-light shadow" style={{ maxWidth: "300px" }}>
        <input
          type="text"
          className="form-control text-right mb-2"
          value={input}
          readOnly
        />
        <div className="alert alert-primary text-center">{result}</div>
        <div className="btn-group d-flex flex-wrap">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="btn btn-dark m-1 flex-fill"
              onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button className="btn btn-danger m-1 flex-fill" onClick={handleClear}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
