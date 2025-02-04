import { BaseUrls } from ".";

const REGISTER_API_URL = BaseUrls.AUTH_BASE_URL + "/local/register";


//changed url from /local/ to /local/login
const LOGIN_API_URL = BaseUrls.AUTH_BASE_URL + "/local/login";

export { REGISTER_API_URL, LOGIN_API_URL };
