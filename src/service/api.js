import axios from 'axios';

const app = axios.create({
  baseURL: 'http://localhost:4000'
});

export default app;