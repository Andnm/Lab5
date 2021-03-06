// import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import DishDetail from './component/DishdetailComponent';

// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }

  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='component'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <DishDetail dishes={this.state.dishes} />
      </div>

    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <Navbar dark color="primary">
  //         <div className="container">
  //           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
  //         </div>
  //       </Navbar>

  //       <Menu dishes={this.state.dishes} />
  //     </div>
  //   );
  // }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// 
// export default App;
