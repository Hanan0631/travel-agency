"use client"

//next
import { useRouter } from "next/navigation";

//react
import { useEffect } from "react";

//components
import Loader from "@/ui/atom/Loader";

//core
import { useGetUserProfile } from "@/services/queries";

function AuthProvider({children}) {
    const router = useRouter();
    const { isPending, data } = useGetUserProfile();
  
    useEffect(() => {
      if (!isPending && !data?.data) router.push("/");
    }, [isPending]);
  
    if (isPending)
      return (
        <Loader />
      );
  
    return children;
}

export default AuthProvider
