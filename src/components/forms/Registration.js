
import React, { Component } from 'react';
import style from './Forms.module.css';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone: '',
    singIn: true,
    singUp: false,
    isOpen: false,
};

export default class SingIN extends Component {

    containerRef = React.createRef();

    state = { ...INITIAL_STATE };

    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { isOpen } = this.setState;
        return nextState.isOpen !== isOpen;
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }

    hangleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleWindowClick = (e) => {
        const { isOpen } = this.state;
        console.log(isOpen);
        if (isOpen) {

            const isTargetInsideContainer = this.containerRef.current.contains(e.target);
            console.log(isTargetInsideContainer)

            if (isOpen && isTargetInsideContainer) {
                e.stopPropagation();
                this.handleCloseModal();
            }
        }
    }

    handleOpenModal = () => {
        this.setState({
            isOpen: true,
        })
    }

    handleCloseModal = () => {
        this.setState({
            isOpen: false,
        })
    }

    handleOpen = (e) => {
        e.preventDefault();

        if (e.target.name === "SingIn") {
            this.setState({
                singIn: true,
                singUp: false,
            })
        } else {
            this.setState({
                singIn: false,
                singUp: true,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.setState({
            isOpen: false,
        })
    }


    render() {

        const { email, password, singIn, singUp, name, phone, isOpen } = this.state;

        return (
            <div>
                <button onClick={this.handleOpenModal} className={style.button}>Registration</button>
                {isOpen &&
                    <div className={style.bg} ref={this.containerRef}>
                        <div className={style.formContainer}>
                            <div className={style.buttonContainer}>
                                <button name='SingIn' onClick={this.handleOpen} className={style.buttonFormTab}>Sing in</button>
                                <button name='SingUp' onClick={this.handleOpen} className={style.buttonFormTab}>Sing up</button>
                            </div>
                            {singIn &&
                                <form onSubmit={this.handleSubmit} className={style.container}>
                                    <div className={style.form}>
                                        <input
                                            className={style.input}
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.hangleChange}
                                            placeholder="Email"
                                        />
                                        <input
                                            className={style.input}
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.hangleChange}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <button className={style.buttonForm}>Sing in</button>
                                </form>}
                            {singUp &&
                                <form onSubmit={this.handleSubmit} className={style.container}>
                                    <div className={style.form}>
                                        <input
                                            className={style.input}
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={this.hangleChange}
                                            placeholder="Name"
                                        />
                                        <input
                                            className={style.input}
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.hangleChange}
                                            placeholder="Email"
                                        />
                                        <input
                                            className={style.input}
                                            type="text"
                                            name="phone"
                                            value={phone}
                                            onChange={this.hangleChange}
                                            placeholder="Phone"
                                        />
                                        <input
                                            className={style.input}
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.hangleChange}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <button className={style.buttonForm}>Sing UP</button>
                                </form>
                            }
                        </div>
                    </div>
                }
            </div>

        )
    }

};
