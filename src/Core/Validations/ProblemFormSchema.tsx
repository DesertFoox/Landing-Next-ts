import * as yup from "yup";

const ProblemFormSchema = yup.object().shape({
  first_name: yup.string().required("firstname is required"),
  last_name: yup.string().required("lastname is required"),
  email: yup
    .string()
    .email("format is not email")
    .required("email is required"),
  message: yup.string().required("message is required"),
  problemId: yup.string().required("select is required"),
});

export default ProblemFormSchema;
