import axios from 'axios';

const token = localStorage.getItem('jwt');

const Instance = axios.create({
  baseURL: 'http://localhost:82/api/v1',
  headers: `Bearer ${token}`,
});

export default Instance;
