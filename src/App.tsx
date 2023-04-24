import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewPage from './pages/NewPage';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </header>
        </div>
  );
}

export default App;
