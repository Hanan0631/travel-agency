//tanstack
import { useMutation, useQueryClient } from "@tanstack/react-query";

//core
import api from "@/config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = () =>
    queryClient.invalidateQueries({ queryKey: ["profile"] });

  return useMutation({
    mutationFn,
    onSuccess,
  });
};

export { useSendOtp, useCheckOtp };
