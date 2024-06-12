import axios from 'axios';

// Base URL'i ayarlama
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/', // Buraya kendi base URL'inizi girin
});

export default instance;
