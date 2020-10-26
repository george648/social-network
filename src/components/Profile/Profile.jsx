import React from 'react';
import MyPosts from './MyPosts/Myposts';
import styles from './Profile.module.css'


const Profile  = () => {
    return <div> 
    <div>
      <img className='mainImage' src='https://html5css.ru/css/img_forest.jpg' /> 
    </div>
    <div>
      ava+description
    </div>
    <MyPosts />    
  </div>
}

export default Profile