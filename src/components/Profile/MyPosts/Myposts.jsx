import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts  = () => {
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
        <Post like='26' message='its my the second post: '/>
        <Post like='15' message='hello. how are you???' /> 
      </div>
    </div>
}

export default MyPosts