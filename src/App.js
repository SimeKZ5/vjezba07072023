import logo from "./logo.svg";
import "./App.css";

function App() {
  var randomstring = require("randomstring");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Moja prva aplikacija</h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {randomstring.generate()}
      </header>
    </div>
  );
}

export default App;
