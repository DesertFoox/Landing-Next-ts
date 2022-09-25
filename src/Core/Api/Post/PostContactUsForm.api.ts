import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import axios from "../../Interceptor/http.interceptor";

import IPostContactUsFormInterface from "../../Interface/IPostContactUsFormInterface";

const PostContactUsForm = async (
  postData: IPostContactUsFormInterface
): Promise<AxiosResponse> => {
  try {
    const res: any = await axios.post(
      "https://61cd783e7067f600179c5aa8.mockapi.io/api/ContactUs",
      postData
    );
    toast.done(res);

    return res;
  } catch (error: any) {
    toast.error(error);

    return error;
  }
};

export default PostContactUsForm;
