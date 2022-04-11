import styles from './commentPreview.module.scss';

const CommentPreview = ({ commentInfo }) => {
  return (
    <article className={`${styles.commentPreviewContainer}`}>
      <p className={styles.namePTag}>{commentInfo.name}</p>
      <p className={styles.emailPTag}>{commentInfo.email}</p>
    </article>
  );
};

export default CommentPreview;
