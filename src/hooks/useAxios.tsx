import axios from 'axios';
import { AxiosType } from '../types/AxiosType';

export const useAxios = () => {
  const config = {
    headers: {
      Authorization: `Basic ${btoa(
        `${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`
      )}`,
      'Content-Type': 'application/json',
    },
  };

  const api: AxiosType = {
    get: (path: string) => axios.get(path, { ...config }),
    post: (path: string, data?: object) =>
      axios.post(path, { ...data, ...config }),
  };

  return { ...api };
};
