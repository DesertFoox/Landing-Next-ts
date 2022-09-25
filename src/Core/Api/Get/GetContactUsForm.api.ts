import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import axios from "../../Interceptor/http.interceptor";

const GetContactUsFormApi = (): Promise<AxiosResponse> => {
  const { isLoading, error, data }: any = useQuery(["getConData"], async () => {
    const res = await axios.get(
      "https://61cd783e7067f600179c5aa8.mockapi.io/api/ContactUsForm"
    );
    return res.data;
  });

  if (isLoading) return isLoading;

  if (error) return error.message;

  return data;
};

export default GetContactUsFormApi;
