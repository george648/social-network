import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'



const Navbar  = () => {
    return <nav className={styles.nav}>
    <div className={styles.item}> 
      <NavLink activeClassName={styles.active + ' ' + styles.linkNavItem} to='/profile'> Profile</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink activeClassName={styles.active+ ' ' + styles.linkNavItem} to='/dialogs'> Messages</NavLink>
    </div>
    <div className={`${styles.active} ${styles.item}`}> 
      <NavLink activeClassName={styles.active+ ' ' + styles.linkNavItem} to='/news'> News</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink activeClassName={styles.active+ ' ' + styles.linkNavItem} to='/music'> Music</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink activeClassName={styles.active+ ' ' + styles.linkNavItem} to='/settings'> Settings</NavLink>
    </div>        
  </nav>
} 

export default Navbar