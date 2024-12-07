import hero from "@/public/images/hero.png";
import Image from "next/image";

function HeroImage() {
  return (
    <div>
      <Image
        src={hero}
        width={0}
        height={0}
        alt="hero"
        style={{ width: "100vw", height: "auto" }}
      />
    </div>
  );
}

export default HeroImage;
