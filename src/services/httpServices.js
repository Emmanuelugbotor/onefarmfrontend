import axios from 'axios';
// import url from '../constant/url';

// import { toast } from "react-toastify";

//set a token on the header of the request
// axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

// const apiEndPoint = url + '/api';
// const imageUrl = url + '/uploads';
axios.interceptors.response.use(null, (error) => {
  let expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    alert('Invalid Details');
  }
  return Promise.reject(error);
});

let http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;

 