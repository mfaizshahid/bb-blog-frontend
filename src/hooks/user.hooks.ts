//to use tanstack query on a post request, we need to use useMutation hook from @tanstack/react-query
//to use tansstack on a get request, we need to use usequery hook from @tanstack/react-queryq

import { UserApis } from "@/apis";
import { useMutation } from "@tanstack/react-query";

const useUploadImageHook = () => {
  return useMutation({
    mutationFn: UserApis.fileUploader,
  });
};

const usePostBlogHook = () => {
  return useMutation({
    mutationFn: UserApis.postBlog,
  });
};

export { useUploadImageHook, usePostBlogHook };
