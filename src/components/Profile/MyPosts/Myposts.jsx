import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts  = () => {

  let postsData = [
    {id:1, like:12, message: 'hi-hi!'},
    {id:1, like:0, message: 'это новый пост'},
    {id:1, like:42, message: 'как настроение!'}
  ];

  let postsElements = postsData.map(p=>{
    return <Post message={p.message} likeCount={p.like} />
  })


    return <div className={styles.postsBlock}>
      my posts
      <div>
        <div>
          <textarea></textarea>
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