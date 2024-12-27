"use client";

//next
import Image from "next/image";

//public
import errorImage from "@/public/images/error.png";

export default function Error({ reset }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "20px auto 40px",
      }}
    >
      <Image src={errorImage} width={322} height={322} />
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#282828" }}>
        مشکلی پیش آمده است!
      </h2>

      <button
        style={{
          backgroundColor: "#D8FFE1",
          borderRadius: "16px",
          padding: "8px",
          border: "none",
          color: "#28A745",
          fontSize: "1.2rem",
          fontWeight: "600",
          width: "240px",
        }}
        onClick={() => reset()}
      >
        لطفا دوباره امتحان کنید
      </button>
    </div>
  );
}
