import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DropDown.module.css';

// const list =['account', 'order history', 'meal panel'];

const DropDown = () => (
  <div className={style.container}>
    <ul className={style.list}> 
      {/* {list.map((i) => (
          <li key={i} className={style.item}><a className={style.link} href='/'>{i}</a></li>
      ))} */}
      <li className={style.item}>
            <NavLink exact className={style.link} to="/account">account</NavLink>
        </li>
        <li className={style.item}>
            <NavLink exact className={style.link} to="/order_history">order history</NavLink>
        </li>
        <li className={style.item}>
            <NavLink exact className={style.link} to="/meal_panel">meal panel</NavLink>
        </li>
    </ul>
    <button className={style.button} type="button">Logout</button>
  </div>
)

export default DropDown;