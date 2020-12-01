import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import ShopList from '../Shop/ShopList';

const Home = () => {
     return (
          <div className="Home">
               <Navbar />
               <ShopList />
               Home Works!
          </div>
     )
}

export default Home;