import Image from "next/image";
import BannerImg from "public/banner01.png";

export const TopBanner = () => {
  return (
    <div className="relative">
      <Image src={BannerImg} className="z-0" />
      <div className="z-1">Enhancing with Sustainable Solutions</div>
    </div>
  );
};
