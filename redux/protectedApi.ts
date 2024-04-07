// api.ts
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import store from './store';
import { selectTokens, setTokens } from './userSlice';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

// Custom interface extending AxiosRequestConfig
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}
const BASE_URL = 'https://stg-ibagent-api.onrender.com/api/v1';
const api = axios.create({
  baseURL:BASE_URL
});

// Axios interceptor for handling token refresh
api.interceptors.request.use(
  async (config: CustomAxiosRequestConfig): Promise<any> => {
    // Ensure config.headers is initialized
    config.headers = config.headers || {};

    const tokens = selectTokens(store.getState());

    if (tokens.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig; // Explicitly type as CustomAxiosRequestConfig

    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;

      // Your logic to refresh the token and set the user in Redux state
      const newTokens = await refreshTokens();

      // Use type assertion to override the type of headers
      (originalRequest.headers as any) = (originalRequest.headers as any) || {};
      (originalRequest.headers as any)['Authorization'] = `Bearer ${newTokens.accessToken}`;

      return api(originalRequest as AxiosRequestConfig);
    }

    return Promise.reject(error);
  }
);

// Function to refresh the tokens and set the user in Redux state
const refreshTokens = async (): Promise<Tokens> => {
  // Your logic to refresh the tokens, e.g., making a request to the server
  const response = await axios.post('/api/refresh-token', {
    refreshToken: selectTokens(store.getState()).refreshToken,
  });

  const newTokens: Tokens = {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
  };

  // Set the new tokens in Redux state
  store.dispatch(setTokens(newTokens));

  return newTokens;
};

export default api;
