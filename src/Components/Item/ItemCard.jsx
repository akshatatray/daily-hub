import React, { useState } from 'react';
import './ItemCard.css';

import { addItem, incItemQuantity, decItemQuantity } from '../../Redux/actions';
import { connect } from 'react-redux';

const ItemCard = (props) => {
     const [quantity, setQuantity] = useState(0);

     const add = () => {
          setQuantity(quantity + 1);
          const item = {
               id: props.id,
               name: props.name,
               photoURL: props.photoURL,
               price: props.price,
               description: props.description,
               availability: props.availability,
               atShop: props.atShop,
               quantity: 1,
          }
          props.addItem(item);
     }

     const plus = () => {
          setQuantity(quantity + 1);
          props.incItemQuantity(props.id);
     }

     const minus = () => {
          setQuantity(quantity - 1);
          props.decItemQuantity(props.id);
     }
     return (
          <div className="ItemCard">
               <img 
                    src={ props.photoURL } 
                    alt="Item" 
                    className="itemImage"
               />
               <h1 className="itemName">
                    { props.name }
               </h1>
               <p className="description">
                    { props.description }
               </p>
               <p className="itemPrice">
                    Rs. { props.price } /-
               </p>
               {
                    quantity === 0 ? (
                         <button 
                              className="add"
                              onClick = { add }
                         >
                              ORDER
                         </button>
                    ) : (
                         <>
                              <button 
                                   className="minus"
                                   onClick = { minus }
                              >
                                   -
                              </button>

                              <input 
                                   type="text" 
                                   className="quant"
                                   value = { quantity }
                              />

                              <button 
                                   className="plus"
                                   onClick = { plus }
                              >
                                   +
                              </button>
                         </>
                    )
               }
          </div>
     )
}

const mapActionWithProps = {
     addItem,
     incItemQuantity,
     decItemQuantity,
}

const mapStateWithProps = (state, ownProps) => {
     return {
          cart: state.cart,
     }
}

export default connect(mapStateWithProps, mapActionWithProps) (ItemCard);