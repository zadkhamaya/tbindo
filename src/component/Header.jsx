import Image from "next/image";
import LogoImg from "public/tb-logo-w.svg";

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-mainBlue">
      <Image src={LogoImg} width={100} />
      <div className=" flex space-x-4 text-xs font-medium text-white">
        <div>Products</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};
