import Image from "next/image";
import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const ClientsSection: React.FC = (): JSX.Element => {
  return (
    <div className="h-[800px] client flex flex-col items-center">
      <h2 className="text-[#222] text-[36px] my-10">What Our Client Says</h2>
      <div className="rounded-full my-4">
        <Image
          src={"/images/albert-dera-ILip77SbmOE-unsplash.png"}
          width={"187px"}
          height={"187px"}
        />
      </div>

      <div className="flex flex-row gap-14">
        <div>
            <Image src={'/images/quote-left.png'} width='41px' height='28px' />
        </div>
        <p className="text-[#777] text-[24px] w-[532px] text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore dolore magna
        </p>
        <div>
            <Image src={'/images/quote-left.png'} className='-scale-x-100' width='41px' height='28px' />
        </div>
      </div>

      <p className="text-[16px] text-center mt-8">Rubiya Mond De-Patrica</p>
      <p className="text-[16px] text-center mt-4">CEO, Zexbay-Fine</p>

      <div className="flex flex-row gap-16 text-[#222] mt-8 text-xl">
        <AiOutlineArrowLeft className="cursor-pointer hover:scale-125 transition" />
        <AiOutlineArrowRight className="cursor-pointer hover:scale-125 transition" />
      </div>
    </div>
  );
};

export default ClientsSection;
