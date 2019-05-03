import React, { Component } from 'react';
import * as API from '../../services/api';
import MenuGrid from './MenuGrid.js';
import style from './MenuPage.module.css';

export default class MenuPage extends Component {

    state = {
        menu: []
    };

    componentDidMount() {
        API.getAllMenuItems().then(menu => {
            this.setState({ menu });
        })
    }

    handleDeleteItem = id => {
        API.delById(id).then(isOk => {
            if(!isOk) return;
            this.setState(prevState => ({
                menu: prevState.menu.filter(item => item.id !== id),
            }));
        });
    };

    handleShowInfo = id => {
        API.getById(id).then(item => {
            console.log(item);
        })
    }

    handleAddItem = () => {
        const item = {
            name: 'New dish',
            price: Math.floor(Math.random()*1000), 
            image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640'
        };
        API.addItem(item).then(newItem => {
            this.setState(prevState => ({
                menu: [newItem, ...prevState.menu]
            }))
        });
    };

    render() {

        const {menu} = this.state
        return (
            <section className={style.container}>
                <button className={style.button} type="button" onClick={this.handleAddItem}>Add</button>
                <MenuGrid items={menu} onDelete={this.handleDeleteItem} onShowInfo={this.handleShowInfo}/>
            </section>
        )
    }
}