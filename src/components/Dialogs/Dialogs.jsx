import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItem}>
             <div className={styles.dialog + ' ' + styles.active}><NavLink to='/dialogs/1'> Stas</NavLink></div>
             <div className={styles.dialog}><NavLink to='/dialogs/1'> Varya</NavLink></div>
             <div className={styles.dialog}><NavLink to='/dialogs/2'> Mother</NavLink></div>
             <div className={styles.dialog}><NavLink to='/dialogs/3'> Brother</NavLink></div>
             <div className={styles.dialog}><NavLink to='/dialogs/4'> Friend</NavLink></div>
           </div>
           <div className={styles.messages}>
                <div className={styles.message}>Hello</div>
                <div className={styles.message}>how are you</div>
                <div className={styles.message}>is too easy to</div>
                <div className={styles.message}>programming on</div>
                <div className={styles.message}>React native!</div>
           </div>
        </div>
    )
}


export default Dialogs