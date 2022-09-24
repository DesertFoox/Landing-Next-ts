import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import SpecialityCard from "../SpecialityCard/SpecialityCard";

const SpecialitySection: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="speciality container mx-auto mt-32">
        <div className="description text-4xl text-center">
          <p>What is the</p>
          <h2 className="font-bold"> Speciality Of Us ?</h2>
        </div>
        <div className="cards flex justify-center gap-[30px] mt-[40px] ">
          <SpecialityCard
            image={"/images/QuickRes.svg"}
            title={{ normal: "Quick ", bold: "Response" }}
            description={
              "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec  concludaturque ndo. Verear"
            }
            className={""}
          />
          <SpecialityCard
            image={"/images/GreatCom.svg"}
            title={{ normal: "Great ", bold: "Communication" }}
            description={
              "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec  concludaturque ndo. Verear"
            }
            className={""}
          />
          <SpecialityCard
            image={"/images/Satisfaction.svg"}
            title={{ normal: "Customer", bold: "Satisfaction" }}
            description={
              "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec  concludaturque ndo. Verear"
            }
            className={""}
          />
        </div>
        <div className="flex justify-center gap-[30px] mt-[30px]">
          <div className="w-[50px] h-[50px] shadow-[0px_10px_20px_#ccc]  flex justify-center items-center  rounded-full text-center cursor-pointer">
            <AiOutlineArrowLeft className="text-[25px] text-[#000000]" />
          </div>
          <div className="w-[50px] h-[50px] shadow-[0px_10px_20px_#ccc] flex justify-center items-center rounded-full text-center cursor-pointer">
            <AiOutlineArrowRight className="text-[25px] text-[#000000]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialitySection;
