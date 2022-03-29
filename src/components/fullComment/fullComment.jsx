import styles from './fullComment.module.scss';
const FullComment = ({ comment, onClick }) => {
  return (
    <article className={styles.fullCommentContainer}>
      {!comment ? (
        <p>Please select a comment</p>
      ) : (
        <>
          {' '}
          <p className={styles.name}>Name: {comment.name} </p>
          <p className={styles.email}>Email: {comment.email} </p>
          <p className={styles.body}>{comment.body}</p>
          <button
            onClick={() => {
              onClick(comment.id);
            }}
          >
            Delete
          </button>{' '}
        </>
      )}
    </article>
  );
};

export default FullComment;
