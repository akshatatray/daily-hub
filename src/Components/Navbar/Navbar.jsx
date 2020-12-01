import React from 'react';
import './Navbar.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
     return (
          <div className="Navbar">
               <div className="left">

               </div>
               <div className="center">
                    <ul className="nav">
                         <NavLink
                              className="nav-link"
                              activeClassName="active-nav-link"
                              to="/"
                              exact
                         >
                              <li className="nav-item">
                                   Home
                              </li>
                         </NavLink>
                         <NavLink
                              className="nav-link"
                              activeClassName="active-nav-link"
                              to="/cart"
                              exact
                         >
                              <li className="nav-item">
                                   Cart
                              </li>
                         </NavLink>
                    </ul>
               </div>
               <div className="left">
                    
               </div>
          </div>
     )
}

export default Navbar;