import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import BlogPost from './BlogPost';
function Blog({ isAuth }) {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const postsCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  return (
    <>
      <BlogPost isAuth={isAuth} />
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post... "
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </>
  );
}

export default Blog;
