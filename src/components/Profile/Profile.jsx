import React from 'react';
import MyPosts from './MyPosts/Myposts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'


const Profile  = () => {
    return <div> 
      <ProfileInfo/>
      <MyPosts />    
  </div>
}

export default Profile