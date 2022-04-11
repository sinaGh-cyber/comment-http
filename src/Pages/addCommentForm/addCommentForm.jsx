import { useState } from 'react/cjs/react.development';
import styles from './addCommentForm.module.scss';
import { toast } from 'react-toastify';

const AddCommentForm = ({ sendComment }) => {
  const initState = { name: '', email: '', body: '' };
  const [formInfo, setFormInfo] = useState(initState);

  const onChangeHandler = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formInfo.name && formInfo.email) {
      sendComment(formInfo);
      setFormInfo(initState);
    } else {
      toast.error('invalid inputs');
    }
  };
  return (
    <form className={styles.formTag} onSubmit={submitHandler}>
      <div className={styles.inputDiv}>
        <label htmlFor="name">Name: </label>
        <input
          value={formInfo.name}
          onChange={onChangeHandler}
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="email">Email: </label>
        <input
          value={formInfo.email}
          onChange={onChangeHandler}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="message">Message: </label>
        <textarea
          value={formInfo.body}
          onChange={onChangeHandler}
          name="body"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default AddCommentForm;
