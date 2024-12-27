"use client";

import { useAddToBasket } from "@/services/mutation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();

  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        console.log(data)
        toast.success(data?.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        toast.success(data?.data.message)
      }
    });
  };
  return (
    <div>
      <button onClick={cartHandler}>رزرو و خرید</button>
    </div>
  );
}

export default ReserveButton;
