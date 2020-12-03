import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Menu from './Components/Menu/Menu.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Loader from './Loader/Loader';

import Private from './Routes/Private';
import Public from './Routes/Public';

function App() {
  return (
    <Router>
      <Loader />
      <Private path="/" exact component={ Home } />
      <Private path="/cart" exact component={ Cart } />
      <Private path="/shop/:id" exact component={ Menu } />
      <Public path="/signin" exact component={ SignIn } />
      <Public path="/signup" exact component={ SignUp } />
      <Private path="/profile" exact component={ Profile } />
    </Router>
  );
}

export default App;