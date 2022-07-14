import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Navbar /></div>
        <div><Searchbar /></div>
      </header>
      <body>

      </body>
    </div>

  );
}

export default App;
