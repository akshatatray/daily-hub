import React, { useEffect } from 'react';
import './Navbar.css';

import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
     useEffect(() => {
          console.log(props );
     }, []);
     return (
       <div className="Navbar">
         <div className="left"></div>
         <div className="center">
           <ul className="nav">
             <NavLink
               className="nav-link"
               activeClassName="active-nav-link"
               to="/"
               exact
             >
               <li className="nav-item">Home</li>
             </NavLink>
             <NavLink
               className="nav-link"
               activeClassName="active-nav-link"
               to="/cart"
               exact
             >
               <li className="nav-item">Cart</li>
             </NavLink>
           </ul>
         </div>
         <div className="right">
          <Link to="/cart" className="nav-link">
           {
               props.cart?.length ? (
                    <div className="cartWithQuant">
                         { props.cart?.length }
                    </div>
               ) : (
               <span></span>
               )
           }
           <svg
             width="26px"
             height="26px"
             viewBox="0 0 16 16"
             class="bi bi-cart2"
             fill="white"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               fill-rule="evenodd"
               d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
             />
           </svg>
          </Link>
         </div>
       </div>
     );
}

const mapStateWithProps = (state) => {
     return {
          cart: state.cart,
     }
}

export default connect(mapStateWithProps) (Navbar);