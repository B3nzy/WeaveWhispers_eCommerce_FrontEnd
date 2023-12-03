import * as yup from "yup";

const passwordRules =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/;
//Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 6-10 characters long.
export const signUpSchema = yup.object().shape({
  username: yup.string().required("*required"),
  email: yup
    .string()
    .email("*please enter a valid email")
    .required("*required"),
  password: yup
    .string()
    .min(5, "*too short!")
    .max(10, "*too long!")
    .matches(passwordRules, { message: "*please create a stronger password!" })
    .required("*required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "*password must match!")
    .required("*password must match!"),
  type: yup.string().required(),
});
