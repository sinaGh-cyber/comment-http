import styles from './commentPreview.module.scss';

const CommentPreview = ({ commentInfo, onClick, isSelected }) => {
  return (
    <article
      onClick={()=> onClick(commentInfo.id)}
      className={`${styles.commentPreviewContainer} ${
        isSelected && styles.selected
      }`}
    >
      <p className={styles.namePTag}>{commentInfo.name}</p>
      <p className={styles.emailPTag}>{commentInfo.email}</p>
    </article>
  );
};

export default CommentPreview;
