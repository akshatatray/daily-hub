import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Menu from './Components/Menu/Menu.jsx';
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
    </Router>
  );
}

export default App;