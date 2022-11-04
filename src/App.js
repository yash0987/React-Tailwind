// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import './index.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  const [mode, setMode] = useState('dark');

  function modeColor() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#352F44';
    }
  }

  
  return (
    <>
      <Navbar title="React Tailwind" toggleMode={modeColor} modeState={mode} />
      <TextBox modeState={mode} />
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