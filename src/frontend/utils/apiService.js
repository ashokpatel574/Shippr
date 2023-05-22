import axios from "axios";

export const LoginService = async ({ email, password }) =>
  axios.post("/api/auth/login", {
    email,
    password,
  });

export const SignUpService = async ({ email, password, name }) => {
  return axios.post("/api/auth/signup", {
    email,
    password,
    name,
  });
};
