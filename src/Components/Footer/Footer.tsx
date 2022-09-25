import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineSkype, AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {MdOutlineMailOutline, MdLocationOn} from 'react-icons/md'

import HeaderItem from "../../Constant/HeaderItem.json";
import SocialContacts from "../../Constant/SocialContacts.json";
import Contactus from "../../Constant/ContactUs.json";

const Footer: React.FC = (): JSX.Element => {
  const [contactElement] = React.useState([<BsFillTelephoneFill className="text-[#9D60EB]" />, <MdLocationOn className="text-[#9D60EB] text-xl" />, <MdOutlineMailOutline className="text-[#9D60EB] text-xl" />])
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex flex-col items-center mt-6">
        <div className="my-14">
          <Image src={"/images/Logo.svg"} width="141px" height="41px" />
        </div>

        <div className="grid grid-cols-4 w-full">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#222] text-lg font-bold  mb-[23px]">
              Contact Us
            </h4>
            {Contactus.map((item: any, index: number) => (
              <p key={index} className="mb-[16px] text-[#777777] hover:underline cursor-pointer flex flex-row gap-3 items-center">
                {contactElement[index]}
                {item.name}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#222] mb-[23px] text-lg font-bold">
              Our Company
            </h4>
            {HeaderItem.map((item: any, index: number) => (
              <Link key={index} href={item.href}>
                <h2 className="mb-[16px] text-[#777777] hover:underline cursor-pointer">{item.name}</h2>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 ">
            <h4 className="text-[#222] text-lg font-bold mb-[23px]">
              Social Contacts
            </h4>
            {SocialContacts.map((item: any, index: number) => (
              <Link key={index} href={item.href}>
                <h3 className="mb-[16px] text-[#777777] hover:underline cursor-pointer">{item.name}</h3>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#222] text-lg font-bold">Address</h4>
            <p className="mt-[23px]">
              Internet Systems Consortium, Inc. 950 Charter Street Redwood City,
              CA USA.
            </p>
            <h4 className="text-[#222] text-lg mt-[20px] font-bold">
              Follow Us
            </h4>
            <div className="mt-4 flex flex-row gap-5">
              <a className="rounded-full w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-tr from-[#7166D8] text-white text-xl to-[#C57EDE] cursor-pointer hover:scale-110 transition">
                <CgFacebook />
              </a>
              <a className="rounded-full w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-tr from-[#1FBE75] text-white text-xl to-[#8AE097] cursor-pointer hover:scale-110 transition">
                <AiOutlineSkype />
              </a>
              <a className="rounded-full w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-tr from-[#FA78AD] text-white text-xl to-[#F13998] cursor-pointer hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
              <a className="rounded-full w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-tr from-[#F09877] text-white text-xl to-[#F0C278] cursor-pointer hover:scale-110 transition">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full footer-bg h-[298px]">
        <div className="max-w-7xl mx-auto h-full footer-char flex flex-col items-center justify-center">
          <p className="text-[#999] underline">Copyright@themefisher2020</p>
        </div>
      </div>
      {/* <img src="/images/FooterImage.png" alt="footerimage"  /> */}
    </div>
  );
};

export default Footer;
