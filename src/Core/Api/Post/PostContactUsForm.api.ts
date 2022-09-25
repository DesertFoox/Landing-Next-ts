import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import axios from "../../Interceptor/http.interceptor";

import IPostContactUsFormInterface from "../../Interface/IPostContactUsFormInterface";

const PostContactUsForm = (postData:IPostContactUsFormInterface): Promise<AxiosResponse> => {
  const { isLoading, error, data }: any = useQuery(
    ["postConData"],
    async () => {
      const res = await axios.post(
        "https://61cd783e7067f600179c5aa8.mockapi.io/api/ContactUs",
        postData
      );
      return res.data;
    }
  );

  if (isLoading) return isLoading;

  if (error) return error.message;

  return data;
};

export default PostContactUsForm;
