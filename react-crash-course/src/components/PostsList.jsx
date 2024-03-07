import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEneteredAuthor] = useState("");
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setEneteredAuthor(event.target.value);
  };
  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;
