import React from 'react';
import './CartItemList.css';

import CartItemCard from './CartItemCard';
import { connect } from 'react-redux';

const CartItemList = (props) => {
     return (
          <div className="CartItemList">
               {
                    props.cart.map(item => {
                         return (
                              <CartItemCard 
                                   key={ item.id }
                                   id={ item.id }
                                   name={ item.name }
                                   photoURL={ item.photoURL }
                                   price={ item.price }
                                   quantity={ item.quantity }
                                   description={ item.description }
                              />
                         );
                    })
               }
          </div>
     );
}

const mapStateWithProps = (state) => {
     return {
          cart: state.cart,
     }
}

export default connect(mapStateWithProps) (CartItemList);