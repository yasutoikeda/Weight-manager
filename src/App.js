import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Hello World!!!
        </p> */}

        <h1>
          Weight-manager
        </h1>

        <div>
          <Button variant="primary">Primary</Button>
        </div>

        

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         

      </header>
    </div>
  );
}

export default App;


