import axios from "axios";
import { AuthUrls } from "./urls";
import { IAuth } from "@/interfaces";

const registerApi = async (payload: IAuth.RegisterApiPayload) => {
  const resp = await axios.post(AuthUrls.REGISTER_API_URL, payload);
  return resp;
};

export { registerApi };
