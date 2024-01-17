
import React from 'react';
import './App.css';
import Home from './pages/hom/Home.jsx';
import Register from './pages/regiser/Register.jsx';
import Watch from './pages/watch/Watch.jsx';
import Login from './pages/loin/LogIn.jsx';
import {BrowserRouter as Router,Route,Routes } from"react-router-dom"

function App() {
  const user =true;
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={ user?<Home />:<Register/>} />
        <Route path="/Register" element={ !user?<Register />:<Home/>} />
        <Route path="/login" element={ !user?<Register />:<Login/>} />
        {
          user && (
        <>
        <Route path="/watch" element={<Watch />} />
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/Series" element={<Home type="Series" />} />
        </>
        )}
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
