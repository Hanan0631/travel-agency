"use client";

// import useQuery from "@/core/hooks/query";
import Link from "next/link";
import useQuery from "src/core/hooks/query";

function PaymentPage() {
  const { getQuery } = useQuery();

  const status = getQuery("status");

  if (status === "success")
    return (
      <div style={{minHeight:"300px",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"30px"}}>
        <p>پرداخت شما با موفقیت انجام شد</p>
        <Link href="/profile/my-tours" style={{backgroundColor:"#28A745", padding:"8px", borderRadius:"10px", color:"#ffffff"}}>برو به پروفایل</Link>
      </div>
    );

  return (
    <div style={{minHeight:"300px",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <p>پرداخت انجام نشد</p>
    </div>
  );
}

export default PaymentPage;
