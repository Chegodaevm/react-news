import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Home />
      </div>
    </div>
  );
}

export default App;
