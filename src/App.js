import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Menu from './Components/Menu/Menu.jsx';

function App() {
  return (
    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/cart" exact component={ Cart } />
      <Route path="/shop/:id" exact component={ Menu } />
    </Router>
  );
}

export default App;