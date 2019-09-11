import React from 'react';
import logo from './logo.svg';
import './App.css';

const school = 'WebHeroSchool'
let age = 1;
let autumn = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p>Hello!</p>
        <p>В этом году сообществу {school} исполнился {age} год. В 2020-ом году сообществу исполнится {age + 1} года</p>
        {autumn === true &&
        <p>На дворе осень, а это значит, что:</p>
        }
        {(autumn) ? 
          <p style={{color: '#00FFFF'}}>"Winter is coming!" :))</p> : 
          <p>Это React приложение не знает какое сейчас время года, но точно не осень!</p>
        }
        <p>"true"{true}, "false"{false}, "null"{null} и "undefined"{undefined} не выводятся в разметку</p>

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