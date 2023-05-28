import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Routing from '../components/Routing/Routing';


function App() {
  return (
    <div className="App">


      <header className="App-header">
        <Header />
      </header>

      <div className="App-content">
        <Routing />
      </div>
    </div>
  );
}

export default App;
