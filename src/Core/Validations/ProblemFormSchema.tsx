import * as yup from "yup";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string(),
  email:yup.string().email().required(),
  message:yup.string().required(),
});
