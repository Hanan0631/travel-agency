"use client";

//next
import { useRouter } from "next/navigation";

//react-hot-toast
import toast from "react-hot-toast";

//core
import { useAddToBasket } from "@/services/mutation";

import Authentication from "src/components/templates/Authentication";
import { getCookie } from "@/utils/cookie";

function ReserveButton({ id, modalIsOpen, setModalIsOpen }) {
  

  const { mutate, isPending } = useAddToBasket();
console.log(getCookie("accessToken"))
  const router = useRouter();

  const cartHandler = () => {
    if (!getCookie("accessToken")) {
      setModalIsOpen(true);
      console.log(modalIsOpen)
    }

    
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data?.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        toast.success(data?.data.message);
      },
    });
  };
  return (
    <div>
      <button onClick={cartHandler}>رزرو و خرید</button>
      {modalIsOpen && <Authentication modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}
    </div>
  );
}

export default ReserveButton;
