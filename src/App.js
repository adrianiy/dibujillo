import React from 'react';
import './App.css';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Dibujillo.
            <em className="material-icons-outlined">edit</em>
        </h1>
      </header>
      <Landing/>
      <footer>
        All rights reserved &copy; 2020
      </footer>
    </div>
  );
}

export default App;
