import classes from "./NewPost.module.css";
import {useState} from 'react';

function NewPost({ onCancel }) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEneteredAuthor] = useState("");
  
    const changeBodyHandler = (event) => {
      setEnteredBody(event.target.value);
    };
  
    const changeAuthorHandler = (event) => {
      setEneteredAuthor(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            body: enteredBody
        }
        console.log(postData);
        onCancel();
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
