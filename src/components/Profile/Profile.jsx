import React from 'react';
import MyPosts from './MyPosts/Myposts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';



const Profile  = (props) => {

    return <div> 
      <ProfileInfo/>
      <MyPosts postsData={props.postsData}/>    
  </div>
}

export default Profile