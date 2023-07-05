import axios from 'axios';

export const postNewsletter = async (email: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/newsletter`,
      { email },
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

    return response;
  } catch (err: any) {
    console.error(`Error: ${err}`);
    return err?.response.data.message;
  }
};
