// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dropbox from './components/Dropbox';
import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <Navbar title="React Tailwind"/>
      <Dropbox/>
      <TextBox/>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
