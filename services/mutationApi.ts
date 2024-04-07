import { axiosInstance } from "./api";

export const loginApi = async (credentials: { email: string; password: string }) => {
  const response = await axiosInstance.post('auth/login', credentials);
  return response.data;
};