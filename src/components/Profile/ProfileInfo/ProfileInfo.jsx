import React from 'react';
import styles from './ProfileInfo.module.css'


const ProfileInfo  = () => {
    return <div> 
      <div>
        <img className='mainImage' src='https://html5css.ru/css/img_forest.jpg' /> 
      </div>
      <div className={styles.descriptionBlock}>
        ava+description
      </div>
  </div>
}

export default ProfileInfo