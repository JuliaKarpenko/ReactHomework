import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from './header/AppHeader';
import MenuPage from './menu/MenuPage';
import order from '../order-history.json';
import OrderHistory from './orderHistory/OrderHistory';
import About from '../pages/About';
import Account from '../pages/Account';
import Auth from '../pages/Auth';
import Contact from '../pages/Contacts';
import Delivery from '../pages/Delivery';
import Favorite from '../pages/Favorite';
import Menu from '../pages/Menu';
import MenuItem from '../pages/MenuItem';
import './App.css';

// const App  = () => (
//     <Fragment>
//         <AppHeader/>
//         <MenuItem/>
//         <MenuPage/>
//         <OrderHistory params={order}/>
//         <About/>
//         <Account/>
//         <Auth/>
//         <Contact/>
//         <Delivery/>
//         <Favorite/>
//         <Menu/>
//     </Fragment>
// )

const App = () => (
    <Router>
        <AppHeader/>
        <Switch>
            <Route exact path='/' component={MenuPage} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/delivery' component={Delivery} />
            <Route path='/account' component={Account} />
            <Route path='/order_history' component={OrderHistory}/>
            <Route path='/meal_panel' component={Menu} />
            {/* <Route path='/menu/:id' component={ItemPage}/>
            <Route path='/menu' component={ArticlesPage}/> */}
            <Redirect to="./" />
        </Switch>
    </Router>
)

export default App;
