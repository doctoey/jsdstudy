import logo from './logo.svg';
import './App.css';
import React from "react";

const hello = "Hello, world!";
const number = 26;
//number % 2 === 0 ? "even" : "odd"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Hello Ja</div>{/*Hello Ja*/}
        <div>{hello}</div>{/*Hello, world!*/}<br/>

        <div>{2+2}</div> {/*4*/}
        <div>2+2</div>{/*2+2*/}<br/>

        <div>{number}</div>{/*26*/}
        <div>{number % 2 === 0 ? "is even" : "is odd"}</div><br/>{/*is even*/}
        

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
