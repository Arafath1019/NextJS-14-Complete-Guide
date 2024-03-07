import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximillian" body="Reactjs" />
        <Post author="Manuel" body="Check out" />
      </ul>
    </>
  );
}

export default PostsList;
