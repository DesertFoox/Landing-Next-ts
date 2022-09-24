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
    <>
      <div
        className={`w-[350px] h-[440px] rounded-md shadow-[0px_10px_30px_#ccc] text-center p-5 bg--300 ${className}`}
      >
        <Image className="mt-[37px]" src={image} width={210} height={211} />
        <p className="text-2xl  mt-[15px]">
          {title.normal} <strong className="font-bold">{title.bold}</strong>
        </p>
        <p className="text-sm text-center w-[300px] h-[75] mt-[15px]">{description}</p>
      </div>
    </>
  );
};

export default SpecialityCard;
