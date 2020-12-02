import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
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
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-nav-link"
            to="/cart"
            exact
          >
            <li className="nav-item">
              {props.cart?.length ? (
                <div className="cartWithQuant">{props.cart?.length}</div>
              ) : (
                <span></span>
              )}
              Cart
            </li>
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-nav-link"
            to="/profile"
            exact
          >
            <li className="nav-item">Profile</li>
          </NavLink>
        </ul>
      </div>
      <div className="right"></div>
    </div>
  );
};

const mapStateWithProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateWithProps)(Navbar);