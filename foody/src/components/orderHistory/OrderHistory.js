import React from 'react';
import style from './OrderHistory.module.css';
import order from '../../order-history.json';

const OrderHistory = () => (
    <section className={style.container}>
        <table className={style.table}>
        <thead>
            <tr className={style.header}>
                <th>Date</th>
                <th>Price</th>
                <th>Address</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {order.map(el => (
                <tr key={el.id}>
                    <td>{el.date}</td>
                    <td>{el.price}</td>
                    <td>{el.address}</td>
                    <td>{el.rating}/10</td>
                </tr>
            ))}
            </tbody>
        </table>
    </section>
);

export default OrderHistory;