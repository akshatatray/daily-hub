import React from 'react';
import './ProfileCard.css';

import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';

const ProfileCard = () => {
     const history = useHistory();
     const { signout, currentUser } = useAuth();
     const handleOnClick = async (e) => {
          e.preventDefault();
          await signout();
          history.push('/signin');
     }
     return (
          <div className="ProfileCard">
               <img 
                    src={ currentUser.photoURL } 
                    alt={ currentUser.displayName } 
                    className="ProfileImage"
               />
               <h1 className="UserName">
                   { currentUser.displayName } 
               </h1>
               <p className="UserMail">
                    { currentUser.email }
               </p>
               <button
                    className="SignOut btn"
                    onClick={ handleOnClick }
               >
                    Sign out
               </button>
          </div>
     )
}

export default ProfileCard;