import React from 'react';
import logo from './assets/pandacafeLC1.png';
import avatar from './assets/sleep_panda.jpg';
import style from './AppHeader.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import SingIn from '../forms/Registration';

// const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
    <header className={style.header}>
        <div className={style.logo}>
            <Logo image={logo}/>
        </div>
        <Navigation/>
        <div className={style.usermenu}>
            <SingIn/>
            <UserMenu avatar={avatar} name="Julia Karpenko"/>
        </div>
    </header>
)

export default AppHeader;