import axios from "axios";
import { AuthUrls, UserUrls } from "./urls";
import { IAuth } from "@/interfaces";

const registerApi = async (payload: IAuth.RegisterApiPayload) => {
  const resp = await axios.post(AuthUrls.REGISTER_API_URL, payload);
  return resp;
};

//create a new login api endpoint

const loginApi = async (payload: IAuth.LoginApiPayload) => {
  const resp = await axios.post(AuthUrls.LOGIN_API_URL, payload);
  return resp;
};

const initUser = async (token: string) => {
  const resp = await axios.get(UserUrls.GET_USER, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp.data;
};
export { registerApi, loginApi, initUser };
