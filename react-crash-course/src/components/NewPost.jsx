import classes from './NewPost.module.css';

function NewPost() {
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} />
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" required />
        </p>
    </form>
  )
}

export default NewPost