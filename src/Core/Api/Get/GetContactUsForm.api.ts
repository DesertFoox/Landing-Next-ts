import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import axios from "../../Interceptor/http.interceptor";

const GetContactUsFormApi = async (): Promise<AxiosResponse> => {
  const res = await axios.get(
    "https://61cd783e7067f600179c5aa8.mockapi.io/api/ContactUsForm"
  );

  return res.data;
};

export default GetContactUsFormApi;
