import { useEffect, useState } from 'react/cjs/react.development';
import { httpRequests } from '../../services/httpRequest';

import FullComment from '../../components/fullComment/fullComment';
import AddCommentForm from '../../Pages/addCommentForm/addCommentForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './discussion.module.scss';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import NotFoundPage from '../../Pages/not-found/not-found';

import Layout from '../../Layout/layout';

const Discussion = () => {
  const [comments, setComments] = useState([]);

  const sendComment = async (info) => {
    try {
      const { status } = await httpRequests.addNewComment(info);
      if (status < 299 && 199 < status) {
        const commentsClone = await httpRequests.getAllComments();
        setComments(commentsClone.data);
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
        const commentsClone = await httpRequests.getAllComments();
        await setComments((p) => commentsClone.data);
      } else {
        toast.error('unknown error');
      }
    } catch (error) {
      toast.error(error.response.statusText);
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <main className={styles.mainTag}>
          <ToastContainer theme="colored" />

          <Switch>
            <Route path={'/comment/:id'} key={0}>
              <FullComment onClick={deleteHandler} />
            </Route>

            <Route path={'/new-comment'} key={1}>
              <AddCommentForm sendComment={sendComment} />
            </Route>
            <Route exact path={'/'} key={2}>
              <HomePage comments={comments} />
            </Route>
            <Route path={'*'} key={3} component={NotFoundPage} />
          </Switch>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default Discussion;
