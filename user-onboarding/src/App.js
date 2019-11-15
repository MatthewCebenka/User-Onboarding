import React from 'react';
import Form from './Components/Form';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Onboarding
        </a>
        <Form/>
      </header>
    </div>
  );
}

export default App;
