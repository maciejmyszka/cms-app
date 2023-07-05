import axios from 'axios';
import { PageDetails } from '../types/Page';

export const getPageDetails = async (id: string) => {
  try {
    const response = await axios.get<PageDetails>(
      `${process.env.REACT_APP_API_URL}/page/${id}`,
      {
        headers: {
          Authorization: `Basic ${btoa(
            `${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`
          )}`,
        },
      }
    );

    if (
      response.status !== 200 &&
      response.status !== 201 &&
      response.statusText === 'OK'
    ) {
      throw new Error(JSON.parse(response.request.response).message);
    }

    return response.data;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};
