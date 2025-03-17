import { UserUrls } from "./urls";
import api from "@/lib/api-interceptor";

const fileUploader = async (payload: FormData) => {
  const res = await api.post(UserUrls.UPLOAD_IMG, payload);
  return res.data;
};

const postBlog = async (payload: any) => {
  const res = await api.post(UserUrls.POST_BLOG, payload);
  return res.data;
};

export { fileUploader, postBlog };


//the first two steps for calling an api: 
//1. define URLs in apis/urls folder
//2. create an api function in apis folder that calls the URL using axios
//3. create tanstack query hooks in hooks folder to call the api function and return the data