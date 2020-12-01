import React from 'react';
import './ShopCard.css';
import { Link } from 'react-router-dom';

const ShopCard = (props) => {
     return (
          <div className="ShopCard">
               <img src={ props.photoURL } alt="logo" className="ShopCardLogo"/>
               <p className="ShopName">
                    { props.name }
               </p>
               <p className="ShopType">
                    { props.shopType }
               </p>
               <Link to={ '/shop/' + props.id } >
                    <button className="OrderBtn">
                         ORDER
                    </button>
               </Link>
          </div>
     );
}

export default ShopCard;