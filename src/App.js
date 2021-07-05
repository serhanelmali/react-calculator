import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="calculator__wrapper">
        <div className="calculator__screen">
          <span>0</span>
        </div>
        <div className="calculator__buttons">
          <div className="calculator__buttons__numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button id="clear">clear</button>
          </div>
          <div className="calculator__buttons__functions">
            <button>÷</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
