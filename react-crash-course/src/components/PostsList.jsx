import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEneteredAuthor] = useState("");

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setEneteredAuthor(event.target.value);
  };
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;
