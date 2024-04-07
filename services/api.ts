// api.ts
import axios from 'axios';

const BASE_URL = 'https://stg-ibagent-api.onrender.com/api/v1';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
});


