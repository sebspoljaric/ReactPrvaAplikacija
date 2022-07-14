import logo from "./logo.svg";
import "./App.css";
import Vijest from "./Vijest";

function App() {
  let sime = "Dobar dan svijete!";
  return (
    <div className="App">
      <Vijest />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{sime}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
