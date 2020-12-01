import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import ShopList from '../Shop/ShopList';

const Home = () => {
     return (
          <div className="Home">
               <Navbar />
               <ShopList />
          </div>
     )
}

export default Home;