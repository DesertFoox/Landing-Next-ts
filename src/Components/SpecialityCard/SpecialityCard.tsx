import React from "react";
import Image from "next/image";

import ISpecialityCardProps from "../../Core/PropInterface/ISpecialityCardProps";

const SpecialityCard: React.FC<ISpecialityCardProps> = ({
  image,
  title,
  description,
  className,
}): JSX.Element => {
  return (
    <div className="flex justify-center items-center mt-6 mb-6 mx-">
      <div
        className={`w-[350px] h-[440px] rounded-md shadow-[0px_10px_20px_#99999940]  text-center p-5 bg-300 ${className}`}
      >
        <Image
          alt={title.bold}
          className="mt-[37px]"
          src={image}
          width={210}
          height={211}
        />
        <p className="text-2xl  mt-[15px]">
          {title.normal} <strong className="font-bold">{title.bold}</strong>
        </p>
        <p className="text-sm text-center w-[300px] h-[75] mt-[15px] text-[#666]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SpecialityCard;
