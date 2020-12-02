import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Private = ({ component: Component, isLoggedIn, ...rest }) => {
     return (
          <Route
               { ...rest }
               render={props => {
                    return isLoggedIn ? <Component { ...props } /> : <Redirect to="/signin" />
               }}
          ></Route>
     );
}

const mapStateWithProps = (state) => {
     return {
          isLoggedIn: state.isLoggedIn,
     }
}

export default connect(mapStateWithProps) (Private);