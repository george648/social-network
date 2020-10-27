import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return ( 
    <div className={styles.dialog + ' ' + styles.active} >
      <NavLink className={styles.dialogLink} to={path}> {props.name} </NavLink>
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
  
  let dialogData = [
    {id:1, age:42, name: 'Varya'},
    {id:2, name: 'Brother'},
    {id:3, name: 'Mother'},
    {id:4, name: 'Stas'},
    {id:5, name: 'Friend'},
  ];

  let messageData = [
    {id:1, message: 'hello'},
    {id:2, message: 'its'},
    {id:3, message: 'good'},
    {id:4, message: 'fine '},
    {id:5, message: 'message'},
  ]

  let diealogsElements  = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  
  let messagesElements = messageData.map(mes => <Message message={mes.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
              {diealogsElements}
            </div>
           <div className={styles.messages}>
              {messagesElements}
          </div>
        </div>
    )
}


export default Dialogs