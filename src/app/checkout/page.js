"use client";

import { useGetUserProfile } from "@/services/queries";
import CheckoutPage from "src/components/templates/CheckoutPage";

function page() {
  const { data } = useGetUserProfile();
  return <CheckoutPage userData={data} />;
}

export default page;
