import React from 'react';
import styles from './Post.module.css'


const Post  = (props) => {
    return <div className={styles.item}>
      <img alt='avatar' src='https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg' />
      {props.message} 
      <div> 
        <button>send message</button>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
}

export default Post