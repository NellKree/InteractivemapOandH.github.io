import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './../images/logo.png';
import home from './../images/home.svg';

export default function Navbar() {
    return (
        <div className="navbar">
            {/* Левая часть: Логотип и заголовок */}
            <div className="left-section">
                <NavLink to="/" className="logo-container">
                    <img src={logo} alt="Логотип" className="logo" />
                </NavLink>
                <h1 className="title">Вёсла-ремёсла</h1>
            </div>

            <div className="left-section">
                {/* Блок для кнопок, который будет показываться на больших экранах */}
                <div className="nav-buttons">
                    <NavLink to="/upper-chusovskie-gorodki" className="nav-button">
                        Верхнечусовские Городки
                    </NavLink>
                    <NavLink to="/kyn" className="nav-button">
                        Кын
                    </NavLink>
                </div>

                {/* Кнопка-ссылка с изображением (логотипом) в правом верхнем углу */}
                <NavLink to="/" className="home-button">
                    <img src={home} alt="Home" className="home-logo" />
                </NavLink>
            </div>
        </div>
    );
}



