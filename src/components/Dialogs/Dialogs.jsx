import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return ( 
    <div className={styles.dialog + ' ' + styles.active} >
      <NavLink className={styles.dialogLink} to={path} >{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  )
}


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
              <DialogItem id = '1' name = 'Stas'/>
              <DialogItem id = '2' name = 'Varya'/>
              <DialogItem id = '3' name = 'Mother'/>
              <DialogItem id = '4' name = 'Brother'/>
              <DialogItem id = '5' name = 'Friend'/>
            </div>
           <div className={styles.messages}>
              <Message message='Hello'/>
              <Message message='how are you'/>
              <Message message='is too easy to'/>
              <Message message='programming on'/>
              <Message message='React native'/>
          </div>
        </div>
    )
}


export default Dialogs