import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

instance.defaults.headers.common['Authorization'] = 'Token dbef64a307efc2df5a8cab4827a8a65833f1b5e6';

export default instance;