import React, { useState } from "react";
import "./App.scss";

function App() {
  const [input, setInput] = useState([]);

  const inputHandler = (e) => {
    let value = e.target.value;
    console.log(value);

    return setInput(input + value);
  };

  return (
    <div className="App">
      <div className="calculator__wrapper">
        <div className="calculator__screen">
          <span>{input ? input : 0}</span>
        </div>
        <div className="calculator__buttons">
          <div className="calculator__buttons__numbers">
            <button value={1} onClick={(e) => inputHandler(e)}>
              1
            </button>
            <button value={2} onClick={(e) => inputHandler(e)}>
              2
            </button>
            <button value={3} onClick={(e) => inputHandler(e)}>
              3
            </button>
            <button value={4} onClick={(e) => inputHandler(e)}>
              4
            </button>
            <button value={5} onClick={(e) => inputHandler(e)}>
              5
            </button>
            <button value={6} onClick={(e) => inputHandler(e)}>
              6
            </button>
            <button value={7} onClick={(e) => inputHandler(e)}>
              7
            </button>
            <button value={8} onClick={(e) => inputHandler(e)}>
              8
            </button>
            <button value={9} onClick={(e) => inputHandler(e)}>
              9
            </button>
            <button value={0} onClick={(e) => inputHandler(e)}>
              0
            </button>
            <button value={"clear"} id="clear" onClick={() => setInput("")}>
              clear
            </button>
          </div>
          <div className="calculator__buttons__functions">
            <button value={"/"} onClick={(e) => inputHandler(e)}>
              ÷
            </button>
            <button value={"-"} onClick={(e) => inputHandler(e)}>
              -
            </button>
            <button value={"+"} onClick={(e) => inputHandler(e)}>
              +
            </button>
            <button value={"="} onClick={() => setInput(String(eval(input)))}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
