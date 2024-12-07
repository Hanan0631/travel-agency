import logo from "@/public/images/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image src={logo} width={146} height={44} alt="Logo" />
    </div>
  );
}

export default Logo;
