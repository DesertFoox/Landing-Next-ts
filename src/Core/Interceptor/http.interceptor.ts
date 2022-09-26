import axios, {AxiosResponse } from "axios";

axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error) => {

    const expectedError: boolean =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
    const problem = error
    if (!expectedError) {
      return problem
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