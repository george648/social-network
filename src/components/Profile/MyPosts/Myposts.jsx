import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts  = (props) => {

  let postsElements = props.postsData.map(p=>{
    return <Post message={p.message} likeCount={p.like}/>
  })


    return <div className={styles.postsBlock}>
      my posts
      <div>
        <div>
          <textarea>q</textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
}

export default MyPosts