import React from 'react';
import './Profile.css';

import Navbar from '../Navbar/Navbar';
import { signOut } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Profile = (props) => {
     const history = useHistory();
     const handleOnClick = async (e) => {
          await props.signOut();
          history.push('/signin');
     }

     return (
          <div className="Profile">
               <Navbar />
               <button 
                    className="SignOut"
                    onClick={ handleOnClick }
               >
                    Sign out
               </button>
          </div>
     )
}

const mapActionsWithProps = {
     signOut,
}

const mapStateWithProps = (state) => {
     return {
          user: state.user,
     }
}

export default connect(mapStateWithProps, mapActionsWithProps) (Profile);