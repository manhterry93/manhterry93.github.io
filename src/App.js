import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
function App() {
  console.log("Render")
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} exact/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
