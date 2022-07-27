import axios, {AxiosError} from "axios";

const user = localStorage.getItem('UserData')
const token = user ? JSON.parse(user).token : '';

export const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const errorFunc = (error: any) => {
  if (error instanceof AxiosError && error.response) {
    if (typeof error.response.data.message !== 'undefined') {
      return error.response.data.message;
    }
    return error.response.data;
  }
  throw error;
}
