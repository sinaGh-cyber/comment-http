import styles from './fullComment.module.scss';
import { httpRequests } from '../../services/httpRequest';
import { useEffect, useState } from 'react/cjs/react.development';
import { withRouter } from 'react-router-dom';
const FullComment = ({ onClick, match, history }) => {

  const [comment, setComment] = useState({});
  useEffect(() => {
    httpRequests.getSingleComment(match.params.id).then((res) => {
      setComment(res.data);

    }).catch(err => {
      console.log(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              history.push('/')
            }}
          >
            Delete
          </button>{' '}
        </>
      )}
    </article>
  );
};

export default withRouter(FullComment);
