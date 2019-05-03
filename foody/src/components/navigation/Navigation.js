import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
    <ul className={style.list}> 
        <li>
            <NavLink exact className={style.link} to="/">Menu</NavLink>
        </li>
        <li>
            <NavLink exact className={style.link} to="/about">About</NavLink>
        </li>
        <li>
            <NavLink exact className={style.link} to="/contact">Contact</NavLink>
        </li>
        <li>
            <NavLink exact className={style.link} to="/delivery">Delivery</NavLink>
        </li>
    </ul>
)

export default Navigation;