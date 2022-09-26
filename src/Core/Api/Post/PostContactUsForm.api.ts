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

    console.log("====================================");
    console.log(res);
    console.log("====================================");
    if (res.code === "ERR_BAD_REQUEST") {
      toast.error(res.message);
      return res
    }
    toast.success(res.message);
    return res
  } catch (error: any) {
    return error;
  }
};

export default PostContactUsForm;
