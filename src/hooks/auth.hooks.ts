import { AuthApis } from "@/apis";
import { useMutation } from "@tanstack/react-query";

const useRegisterApiHook = () => {
  return useMutation({
    mutationFn: AuthApis.registerApi,
  });
};

export { useRegisterApiHook };
