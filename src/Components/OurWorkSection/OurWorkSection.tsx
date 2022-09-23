import React from "react";
import Image from "next/image";

import Button from "../common/Button/Button";

const OurWorkSection = () => {
  return (
    <section className="container mx-auto ourworks mt-56">
      <div className="grid grid-cols-2">
        <div>
          <p className="text-4xl w-[296px]">The Process</p>
          <h2 className="text-4xl mt-2 font-bold w-[296px]">About Our Work</h2>
          <p className="mt-6 w-[486px]">
            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
            elaboraret interpretaris, sed diceret concludaturque ndo. Verear
            habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed
          </p>
          <p className="mt-5 w-[481px]">
            vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos
          </p>
          <Button className="w-[145px] h-[48px] bg-gradient-to-r  from-[#6362D7] via-purple-500 to-[#FF8FE2] text-center px-4 py-2 mt-6 text-md rounded text-white">
            Know More
          </Button>
        </div>
        <div>
          <Image width={"557"} height={"466"} src={"/images/Ourwork.svg"}/>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
