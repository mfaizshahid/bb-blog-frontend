import { AuthApis } from "@/apis";
import { useMutation } from "@tanstack/react-query";

const useRegisterApiHook = () => {
  return useMutation({
    mutationFn: AuthApis.registerApi,
  });
};



//create a userLoginApiHook here
const useLoginApiHook = () => {
  return useMutation({
    mutationFn: AuthApis.loginApi
  });
};


export { useRegisterApiHook, useLoginApiHook};
