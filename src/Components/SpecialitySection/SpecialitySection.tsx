import React, { useState, useRef } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider, { Settings } from "react-slick";

import Button from "../common/Button/Button";
import SpecialityCard from "../SpecialityCard/SpecialityCard";

import SpecialityCardData from "../../Constant/SpecialityCardData.json";

const SpecialitySection: React.FC = (): JSX.Element => {
  const [sliderSetting] = useState<Settings>({
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
        <Slider ref={slider} className="bg-white mt-[40px]" {...sliderSetting}>
          {SpecialityCardData.map((item: any, index: number) => (
            <SpecialityCard
              key={index}
              image={`/images/${item.image}`}
              title={{ normal: item.title.normal, bold: item.title.bold }}
              description={item.description}
              className={""}
            />
          ))}
        </Slider>
        <div className="flex justify-center gap-[30px] mt-[30px]">
          <Button
            onClick={() => slider?.current?.slickPrev()}
            className="w-[50px] h-[50px] shadow-[0px_10px_30px_#99999955]  flex justify-center items-center  rounded-full text-center cursor-pointer hover:scale-110 transition"
          >
            <AiOutlineArrowLeft className="text-[20px] text-[#000000]" />
          </Button>
          <Button
            onClick={() => slider?.current?.slickNext()}
            className="w-[50px] h-[50px] shadow-[0px_10px_30px_#99999955] flex justify-center items-center rounded-full text-center cursor-pointer hover:scale-110 transition"
          >
            <AiOutlineArrowRight className="text-[20px] text-[#000000]" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default SpecialitySection;
