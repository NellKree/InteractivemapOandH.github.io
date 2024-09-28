import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './../images/logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">  
        <img src={logo} alt="Логотип" className="logo" />
      </NavLink>
      <h1 className="title">Вёсла-ремёсла</h1>
    </div>
  );
}
