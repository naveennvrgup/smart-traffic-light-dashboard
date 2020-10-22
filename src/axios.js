import axios from 'axios';

let baseURL = 'http://34.87.155.79:8000/';
const instance = axios.create({
    baseURL
});

instance.defaults.headers.common['Authorization'] = 'Token dbef64a307efc2df5a8cab4827a8a65833f1b5e6';

export default instance;