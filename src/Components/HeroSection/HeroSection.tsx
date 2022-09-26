import Image from "next/image";
import React from "react";
import Button from "../common/Button/Button";

const HeroSection: React.FC = (): JSX.Element => {
  return (
    <section className="herosection hero-bg mt-16 h-[688.3px]">
      <div className="flex flex-col  items-center">
        <h1 className="text-5xl text-[#222222] font-bold">
          We Create Simple Solution
        </h1>
        <h2 className="text-5xl text-[#222222] mt-2">For Your Complex Task</h2>
        <p className="text-[14px] text-[#555555] w-[532px] mt-6 text-center">
          Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
          elaboraret interpretaris, sed diceret concludaturque no. Verear
          habemus sea ut
        </p>

        <div className="flex gap-4 mt-8">
          <Button className="w-[140px] h-[48px] bg-gradient-to-r  from-[#6362D7] via-purple-500 to-[#FF8FE2] text-center px-4 py-2 text-md rounded text-white">
            Our Works
          </Button>{" "}
          <Button className="w-[140px] h-[48px] text-[#9D60EB] border rounded border-[#9D60EB] px-4 py-2 text-md">
            Know More
          </Button>
        </div>
        <div className="mt-3 w-[827px] h-full text-center">
          <Image
            width="827"
            className="mx-auto"
            height={"384"}
            alt="heroimage"
            src={"/images/Group 2476.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
