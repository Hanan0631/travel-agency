"use client";

//core
import { useGetUserProfile } from "@/services/queries";

//components
import CheckoutPage from "src/components/templates/CheckoutPage";

function Page() {
  const { data } = useGetUserProfile();
  return <CheckoutPage userData={data} />;
}

export default Page;
