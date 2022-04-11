import AddCommentForm from './Pages/addCommentForm/addCommentForm';
import FullComment from './components/fullComment/fullComment';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/not-found/not-found';

const mainRoutes = [
  {
    isExact: false,
    component: FullComment,
    path: '/comment/:id',
    title: 'FullComment',
    hasLink: false,
    id: 0,
  },
  {
    isExact: false,
    component: AddCommentForm,
    path: '/new-comment',
    title: 'New Comment',
    hasLink: true,
    id: 1,
  },
  {
    isExact: true,
    component: HomePage,
    path: '/',
    title: 'Home',
    hasLink: true,
    id: 2,
  },

  {
    isExact: false,
    component: NotFoundPage,
    path: '*',
    title: 'Not found',
    hasLink: false,
    id: 3,
  },
];

export { mainRoutes };
