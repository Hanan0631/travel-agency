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
};

const useGetBasket = () => {
  const queryKey = ["basket"];
  const queryFn = () => api.get("basket");

  return useQuery({ queryKey, queryFn });
};

const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};

export { useGetUserProfile, useGetTour, useGetBasket, useGetUserTours };
