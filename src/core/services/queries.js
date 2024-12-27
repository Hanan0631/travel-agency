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

const useGetTransactions = () => {
  const queryKey = ["transactions"];
  const queryFn = () => api.get("user/transactions");

  return useQuery({ queryKey, queryFn });
};

export { useGetUserProfile, useGetTour, useGetBasket, useGetUserTours, useGetTransactions };
