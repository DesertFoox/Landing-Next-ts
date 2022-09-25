import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error) => {

    const expectedError: boolean =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      // tweak it later
      console.log(error.response.data.message[0]);
    }
    return Promise.reject(error);
  }
);


const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;