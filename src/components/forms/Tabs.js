// import React, { Component } from 'react';
// import ButtonsForm from './ButtonsForms';
// import SingIn from './Registration';
// // import SingUp from './SingUp';

// export default class Tabs extends Component {

//   containerRef = React.createRef();

//   state = {
//     singIn: false,

//   }

//   //   componentDidMount() {
//   //     window.addEventListener('click', this.handleWindowClick);
//   //   }

//   //   shouldComponentUpdate(nextProps, nextState) {
//   //     const { singIn} = this.setState;

//   //     return (nextState.singIn !== singUp);
//   //   }

//   //   componentWillUnmount() {
//   //     window.removeEventListener('click', this.handleWindowClick);
//   //   }

//   //   handleWindowClick = (e) => {
//   //     const isTargetInsideContainer = this.containerRef.current.contains(e.target);
//   //     const { singIn } = this.state;

//   //     if (singIn && !isTargetInsideContainer) {
//   //       this.closeDropDown();
//   //     }
//   //   }
//   // closeDropDown = () => {
//   //   this.setState({
//   //     singIn: false,
//   //   })
//   // }

//   handleOpen = (e) => {
//     e.preventDefault();
//     this.setState({
//       singIn: true,
//     })
//   }

//   render() {
//     const { singIn } = this.state;
//     return (
//       <div ref={this.containerRef} >
//         <ButtonsForm onClick={this.handleOpen} />
//         {singIn && <SingIn />}
//       </div>
//     )
//   }
// }