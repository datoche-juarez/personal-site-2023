import Banner from "../../assets/Banner.png";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="h-500">
      <div className="absolute inset-0 z-20 bg-orange-200 opacity-10"></div>
      <Image className="relative z-10 min-w-full" src={Banner} alt="Banner" />
    </div>
  );
};

export default HeroBanner;
