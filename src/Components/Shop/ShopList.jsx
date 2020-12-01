import React, { useEffect } from 'react';
import './ShopList.css';
import ShopCard from './ShopCard';

import { connect } from 'react-redux';
import { getShops } from '../../Redux/actions';

const ShopList = (props) => {

     useEffect(() => {
          props.getShops();
     }, []);

     return (
          <div className="ShopList">
               {
                    props?.shops?.map(shop => {
                         return (
                              <ShopCard
                                   key = { shop._id }
                                   name = { shop.name }
                                   photoURL = { shop.photoURL }
                                   id = { shop._id }
                              />
                         );
                    })
               }
          </div>
     )
}

const mapActionWithProps = {
     getShops,
}

const mapStateWithProps = (state) => (
     {
          shops: state.shops,
     }
)

export default connect(mapStateWithProps, mapActionWithProps) (ShopList);