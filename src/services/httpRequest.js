import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/comments';

const httpRequests = {
  getAllComments() {
    console.log(axios.get());
  },
};

export { httpRequests };
