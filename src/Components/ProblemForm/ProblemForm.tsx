import Image from "next/image";
import React from "react";
import Button from "../common/Button/Button";

const ProblemForm: React.FC = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-t from-[#E2F2FF] to-[#E7F4FF]">
      <div className="max-w-7xl mx-auto flex flex-col items-center pt-16 pb-[60px] relative form-container">
       

        <h2 className="text-[#222] text-[36px]">Facing Problem? </h2>
        <h2 className="text-[#222] text-[36px]">Lets Get In Touch Now</h2>

        <div className="w-[668px] pt-[60px] bg-white rounded-xl mt-12 px-[52px] pb-[48px]">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[#222] text-[14px]">First Name</p>
              <input
                type="text"
                className="border-b border-[#E5E5E5] py-3 text-[13px]"
                placeholder="Robert Lee"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p className="text-[#222] text-[14px]">Last Name</p>
              <input
                type="text"
                className="border-b border-[#E5E5E5] py-3 text-[13px]"
                placeholder="Anderson"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full mt-12">
            <p className="text-[#222] text-[14px]">Your Email Address</p>
            <input
              type="text"
              className="border-b border-[#E5E5E5] py-3 text-[13px]"
              placeholder="kevin.jones@mail.com"
            />
          </div>

          <div className="flex flex-col gap-2 w-full mt-12">
            <p className="text-[#222] text-[14px]">
              Which Related Problem You Are Facing?
            </p>
            <select className="border-b border-[#E5E5E5] py-3 text-[13px]">
              <option value="" disabled selected>
                Select One
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full mt-12">
            <p className="text-[#222] text-[14px]">Type Your Message</p>
            <textarea
              className="max-h-[100px] text-[13px] min-h-[100px] border-b border-[#E5E5E5] mt-3"
              placeholder="Lorem Ipsum is simply dummy text of the printing and...……."
            ></textarea>
          </div>

          <Button className="w-[145px] h-[48px] bg-gradient-to-r  from-[#6362D7] via-purple-500 to-[#FF8FE2] text-center px-4 py-2 mt-6 text-md rounded text-white">
            Our Works
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProblemForm;
