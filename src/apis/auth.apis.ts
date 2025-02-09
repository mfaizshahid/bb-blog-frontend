import { AuthUrls, UserUrls } from "./urls";
import { IAuth } from "@/interfaces";
import api from "@/lib/api-interceptor";

const registerApi = async (payload: IAuth.RegisterApiPayload) => {
  const resp = await api.post(AuthUrls.REGISTER_API_URL, payload);
  return resp;
};

//create a new login api endpoint

const loginApi = async (payload: IAuth.LoginApiPayload) => {
  const resp = await api.post(AuthUrls.LOGIN_API_URL, payload);
  return resp;
};

const initUser = async () => {
  const resp = await api.get(UserUrls.GET_USER);
  return resp.data;
};
export { registerApi, loginApi, initUser };
