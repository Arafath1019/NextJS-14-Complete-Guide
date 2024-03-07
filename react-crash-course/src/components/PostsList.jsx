import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import {useState} from 'react';

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="asdasda" body="asdasd" />
      </ul>
    </>
  );
}

export default PostsList;
