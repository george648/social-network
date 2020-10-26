import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts  = () => {
    return <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post like='26' message='its my the second post: '/>
        <Post like='15' message='hello. how are you???' /> 
      </div>
    </div>
}

export default MyPosts