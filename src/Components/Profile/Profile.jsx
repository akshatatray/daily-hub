import React from 'react';
import './Profile.css';

import Navbar from '../Navbar/Navbar';
import ProfileCard from './ProfileCard';
import { useHistory } from 'react-router-dom';

const Profile = (props) => {
     return (
          <div className="Profile">
               <Navbar />
               <ProfileCard />
          </div>
     )
}

export default Profile;