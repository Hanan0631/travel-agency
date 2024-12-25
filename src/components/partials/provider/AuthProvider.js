"use client"

//
import { useRouter } from "next/navigation";
import { useGetUserProfile } from "@/services/queries";
import Loader from "@/ui/atom/Loader";
import { useEffect } from "react";

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
