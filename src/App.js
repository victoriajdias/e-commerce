import './App.css';
import React from "react";
import Routes from './Routes';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="NavLinks">
        <NavLink className="NavLink" to="/">
          Início
        </NavLink>

        <NavLink className="NavLink" to="/about">
          Sobre
        </NavLink>

        <NavLink className="NavLink" to="/user">
          Promoção
        </NavLink>
        
        <NavLink className="NavLink" to="/Produtos">
          Produtos
        </NavLink>
      </div>
      <Routes />
    </div>
  );
}

export default App;
