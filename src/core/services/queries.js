import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const useGetUserProfile = () => {
  const queryKey = ["profile"];
  const queryFn = () => api.get("user/profile");

  return useQuery({ queryKey, queryFn });
};

export { useGetUserProfile };
