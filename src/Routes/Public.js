import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Public = ({ component: Component, isLoggedIn, ...rest }) => {
     return (
          <Route
               { ...rest }
               render={props => {
                    return isLoggedIn ? <Redirect to="/" /> : <Component { ...props } />
               }}
          ></Route>
     );
}

const mapStateWithProps = (state) => {
     return {
          isLoggedIn: state.isLoggedIn,
     }
}

export default connect(mapStateWithProps) (Public);