import { useEffect, useState } from 'react/cjs/react.development';
import { httpRequests } from '../../services/httpRequest';

import CommentPreview from '../../components/commentPreview/commentPreview';
import FullComment from '../../components/fullComment/fullComment';
import AddCommentForm from '../../components/addCommentForm/addCommentForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './discussion.module.scss';

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const commentSelector = (id) => {
    setSelectedCommentId(id);
  };

  const sendComment = async (info) => {
    try {
      const { status } = await httpRequests.addNewComment(info);
      if (status < 299 && 199 < status) {
        const { data } = await httpRequests.getAllComments();
        setComments(data);
        toast.success('New comment sended successfully');
      }
    } catch (err) {
      toast.error('sending the comment failed ');
    }
  };

  useEffect(() => {
    httpRequests
      .getAllComments()
      .then((res) => setComments(res.data))
      .catch((error) => {
        toast.error(`Comments ${error.response.statusText}`);
      });
    return () => {
      toast.dismiss();
    };
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { status } = await httpRequests.deleteComment(id);
      if (status < 299 && 199 < status) {
        const commentsClone = await comments.filter(
          (comment) => comment.id !== selectedCommentId
        );
        await setComments(commentsClone);
        await setSelectedCommentId(null);
        toast.success('deleted successfully');
      } else {
        toast.error('unknown error');
      }
    } catch (error) {
      toast.error(error.response.statusText);
    }
  };

  return (
    <main className={styles.mainTag}>
      <ToastContainer theme="colored" />

      <section className={styles.commentGroupSection}>
        {comments.length === 0 ? (
          <p>No comments, please add a comment.</p>
        ) : comments === null ? (
          'Loading...'
        ) : (
          comments.map((comment) => {
            return (
              <CommentPreview
                key={comment.id}
                commentInfo={comment}
                onClick={commentSelector}
                isSelected={selectedCommentId === comment.id}
              />
            );
          })
        )}
      </section>

      <section>
        <FullComment
          comment={comments.find((comment) => comment.id === selectedCommentId)}
          onClick={deleteHandler}
        />
      </section>

      <section>
        <AddCommentForm sendComment={sendComment} />
      </section>
    </main>
  );
};

export default Discussion;
