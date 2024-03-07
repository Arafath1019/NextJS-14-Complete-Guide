import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximillian" body="Reactjs" />
      <Post author="Manuel" body="Check out" />
    </ul>
  );
}

export default PostsList;
