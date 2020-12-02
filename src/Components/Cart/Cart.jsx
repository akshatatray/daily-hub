import React, { useEffect } from 'react';
import './Cart.css';

import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import CartItemList from './CartItemList';

const Cart = (props) => {

     useEffect(() => {
          console.log(props.cart);
     }, []);

     return (
          <div className="Cart">
               <Navbar />
               <h1 className="CartHeading">
                    Cart
               </h1>
               <CartItemList />
          </div>
     )
}

const mapStateWithProps = (state) => {
     return {
          cart: state.cart,
     }
}

export default connect(mapStateWithProps) (Cart);