//tanstack
import { useMutation, useQueryClient } from "@tanstack/react-query";

//core
import api from "@/config/api";
import { setCookie } from "@/utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data.accessToken, 30);
    setCookie("refreshToken", data?.data.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
};

const useUpdateEmail = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
};

const useUpdatePersonalInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
};

const useAddToBasket = () => {
  const mutationFn = (id) => api.put(`basket/${id}`);

  return useMutation({ mutationFn });
};

const useCheckout = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("order", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["tour"] });
    queryClient.invalidateQueries({ queryKey: ["user-tours"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

export {
  useSendOtp,
  useCheckOtp,
  useUpdateEmail,
  useUpdatePersonalInfo,
  useAddToBasket,
  useCheckout
};
