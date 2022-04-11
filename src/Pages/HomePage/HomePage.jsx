import { Link } from 'react-router-dom';
import CommentPreview from '../../components/commentPreview/commentPreview';
import styles from './HomePage.module.scss';
const HomePage = ({ comments }) => {
  return (
    <section className={styles.commentGroupSection}>
      {comments.length === 0 ? (
        <p>No comments, please add a comment.</p>
      ) : comments === null ? (
        'Loading...'
      ) : (
        comments.map((comment) => {
          return (
            <Link key={comment.id} to={`/comment/${comment.id}`}>
              <CommentPreview commentInfo={comment} />
            </Link>
          );
        })
      )}
    </section>
  );
};

export default HomePage;
