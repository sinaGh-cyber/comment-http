import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/commentsDUMMY';

const httpRequests = {
  getAllComments() {
    return axios.get();
  },

  addNewComment(body) {
    return axios.post('', body);
  },

  deleteComment(id) {
    return axios.delete(`/${id}`);
  },

  updateComment(id, body) {
    return axios.put(`/${id}`, body);
  },
};

export { httpRequests };
