import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const useGetUserProfile = () => {
  const queryKey = ["profile"];
  const queryFn = () => api.get("user/profile");

  return useQuery({ queryKey, queryFn });
};

const useGetTour = () => {
  const queryKey = ["tour"];
  const queryFn = () => api.get("tour");

  return useQuery({ queryKey, queryFn });
}

export { useGetUserProfile, useGetTour };
