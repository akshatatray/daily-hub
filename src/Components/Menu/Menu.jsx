import React, { useEffect } from 'react';
import './Menu.css';

import { getMenuInfo } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Menu = (props) => {

     const { id } = useParams();
     useEffect(() => {
          props.getMenuInfo(id);
     }, []);

     return (
          <div className="Menu">
               <Navbar />
                    <div className="menuinfo">
                    <h1 className="MenuShopName">
                         { props.menuInfo?.name }
                    </h1>
                    <img src={ props.menuInfo?.photoURL } alt="" className="MenuShopLogo"/>
               </div>
          </div>
     )
}

const mapActionWithProps = {
     getMenuInfo,
}

const mapStateWithProps = (state) => {
     return {
          menuInfo: state.menuInfo,
     }
}

export default connect(mapStateWithProps, mapActionWithProps) (Menu);