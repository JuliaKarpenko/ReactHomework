import React, { Component } from 'react';
import style from './UserMenu.module.css';
import DropDown from './dropDown/DropDown';
import Avatar from '../avatar/Avatar';

export default class UserMenu extends Component {

    containerRef = React.createRef();

    state ={
        isDropdownOpen: false,
    }

    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {isDropdownOpen} = this.setState;

        return nextState.isDropdownOpen !== isDropdownOpen;
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }

    handleWindowClick = (e) => {
        const isTargetInsideContainer = this.containerRef.current.contains(e.target);
        const { isDropdownOpen } = this.state;
        if (isDropdownOpen && !isTargetInsideContainer) {
            this.closeDropDown();
        }
    }

    openDropDown = () => {
        this.setState({
            isDropdownOpen: true
        })
    }

    closeDropDown = () => {
        this.setState({
            isDropdownOpen: false
        })
    }

    
    render() {
        const {isDropdownOpen} = this.state;
        const {name, avatar} = this.props;

        return (
            <div className={style.container} onClick={this.openDropDown} ref={this.containerRef}>
                <Avatar image={avatar}/>
                <span className={style.name}>{name}</span>
                { isDropdownOpen && <DropDown/> }
            </div>
        )
    }

}

