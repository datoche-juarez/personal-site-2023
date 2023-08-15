import Banner from "../../assets/Banner.png";
import Image from "next/image";

const HeroBanner = () => {
  const imageURL = "../../assets/Banner.png";

  return (
    <div className="relative z-10 bg-cover h-500">
      <div className="absolute inset-0 z-30 bg-orange-500 opacity-10"></div>
      <Image
        className="absolute inset-0 z-20 object-cover w-full h-full"
        src={Banner}
        alt="Banner"
      />
      <div className="absolute bottom-0 right-0 z-40 flex justify-center px-16 pb-10 m-auto">
        <p className="font-semibold text-white text-7xl font-dmMono">
          Daniel Atoche-Juarez
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
