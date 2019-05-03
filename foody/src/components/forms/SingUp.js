// import React, { Component } from 'react';
// import style from './Forms.module.css';


// const INITIAL_STATE = {
//     name: '',
//     password: '',
//     phone: '',
//     email: '',
// };

// export default class SingUp extends Component {

//     state = { ...INITIAL_STATE };

//     hangleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }

//     submit = (e) => {
//         e.preventDefault();
//     }

//     render() {

//         const { name, email, phone, password } = this.state;
//         const {onSubmit, onClick} = this.props

//         return (
//             <div className={style.bg}>
//                 <div className={style.formContainer}>
//                     <div className={style.buttonContainer}>
//                         <button name='SingIn' onClick={onClick} on className={style.buttonFormTab}>Sing in</button>
//                         <button name='SingUp' onClick={onClick} className={style.buttonFormTab}>Sing up</button>
//                     </div>
//                     <form onSubmit={onSubmit} className={style.container}>
//                         <div className={style.form}>
//                             <input
//                                 className={style.input}
//                                 type="text"
//                                 name="name"
//                                 value={name}
//                                 onChange={this.hangleChange}
//                                 placeholder="Name"
//                             />
//                             <input
//                                 className={style.input}
//                                 type="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={this.hangleChange}
//                                 placeholder="Email"
//                             />
//                             <input
//                                 className={style.input}
//                                 type="text"
//                                 name="phone"
//                                 value={phone}
//                                 onChange={this.hangleChange}
//                                 placeholder="Phone"
//                             />
//                             <input
//                                 className={style.input}
//                                 type="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={this.hangleChange}
//                                 placeholder="Password"
//                             />
//                         </div>
//                         <button className={style.buttonForm}>Sing UP</button>
//                     </form>
//                 </div>
//             </div>

//         );
//     }

// };
