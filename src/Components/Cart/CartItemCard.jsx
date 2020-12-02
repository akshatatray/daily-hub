import React from 'react';
import './CartItemCard.css';

const CartItemCard = (props) => {
     return (
          <div className="CartItemCard">
               <img 
                    src={ props.photoURL } 
                    alt="Item" 
                    className="CartItemImage"
               />
               <h1 className="CartItemName">
                    { props.name }
               </h1>
               <p className="CartItemDescription">
                    { props.description }
               </p>
               <p className="CartItemPrice">
                    Rs. { props.price } /-
               </p>
               <p className="CartItemQuantity">
                    { props.quantity }
               </p>
          </div>
     )
}

export default CartItemCard;