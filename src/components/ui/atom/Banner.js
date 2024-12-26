import Image from "next/image";
import banner from "@/public/images/banner.png";

function Banner() {
  return (
    <Image
      src={banner}
      width={0}
      height={0}
      alt="Banner"
      style={{ width: "100vw", height: "auto" }}
    />
  );
}

export default Banner;
