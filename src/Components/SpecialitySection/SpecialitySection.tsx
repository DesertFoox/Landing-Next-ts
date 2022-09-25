import React, { useState, useRef } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider, { Settings } from "react-slick";

import SpecialityCard from "../SpecialityCard/SpecialityCard";

const SpecialitySection: React.FC = (): JSX.Element => {
  const [sliderSetting, setSlderSetting] = useState<Settings>({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
  });

  const slider: any = useRef(null);

  return (
    <>
      <section className="speciality container mx-auto mt-32">
        <div className="description text-4xl text-center">
          <p>What is the</p>
          <h2 className="font-bold"> Speciality Of Us ?</h2>
        </div>
        <Slider ref={slider} className="bg-white" {...sliderSetting}>
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
          />{" "}
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
        </Slider>
        <div className="flex justify-center gap-[30px] mt-[30px]">
          <div
            onClick={() => slider?.current?.slickPrev()}
            className="w-[50px] h-[50px] shadow-[0px_10px_30px_#99999955]  flex justify-center items-center  rounded-full text-center cursor-pointer"
          >
            <AiOutlineArrowLeft className="text-[20px] text-[#000000]" />
          </div>
          <div
            onClick={() => slider?.current?.slickNext()}
            className="w-[50px] h-[50px] shadow-[0px_10px_30px_#99999955] flex justify-center items-center rounded-full text-center cursor-pointer"
          >
            <AiOutlineArrowRight className="text-[20px] text-[#000000]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialitySection;
