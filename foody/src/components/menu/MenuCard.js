import React from 'react';
import style from './MenuCard.module.css';
import { Link } from 'react-router-dom';

const MenuCard = ({ name, image, price, onDelete, onShowInfo}) => (
    <div>
        <div className={style.imgWrapper}>
            <img className={style.img} src={image} alt={name} width={320} height={240}/>
        </div>
        <p className={style.name}>{name}</p>
        <p className={style.price}>Price: {price}</p>
        <div className={style.buttonsContainer}>
            <Link className={style.link}>
                <button className={style.button} type="button" onClick={onShowInfo}>Show Info</button>
            </Link>
            <button className={style.button} type="button" onClick={onDelete}>Delete</button>
        </div>
    </div>
);

export default MenuCard;