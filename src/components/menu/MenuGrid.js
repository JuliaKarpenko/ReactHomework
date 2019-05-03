import React from 'react';
import MenuCard from './MenuCard';
import style from './MenuGrid.module.css';

const MenuGrid = ({ items, onDelete, onShowInfo }) => (
    <ul className={style.list}>
        {items.map(item => (
            <li key={item.id} className={style.item}>
                <MenuCard 
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    onDelete={() => onDelete(item.id)}
                    onShowInfo={() =>onShowInfo(item.id)}
                />
            </li>
        ))}
    </ul>
);

export default MenuGrid;