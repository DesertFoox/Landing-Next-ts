import Image from "next/image";
import Link from "next/link";
import React from "react";

import HeaderItem from "../../Constant/HeaderItem.json";
import SocialContacts from "../../Constant/SocialContacts.json";
import Contactus from "../../Constant/ContactUs.json";

const Footer: React.FC = (): JSX.Element => {
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
              <p key={index} className="mb-[16px] text-[#777777}">
                {item.name}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#222] mb-[23px] text-lg font-bold">
              Our Company
            </h4>
            {HeaderItem.map((item: any,index:number) => (
              <Link key={index} href={item.href}>
                <h2 className="mb-[16px] text-[#777777}">{item.name}</h2>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 ">
            <h4 className="text-[#222] text-lg font-bold mb-[23px]">
              Social Contacts
            </h4>
            {SocialContacts.map((item: any,index:number) => (
              <Link key={index} href={item.href}>
                <h3 className="mb-[16px] text-[#777777}">{item.name}</h3>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#222] text-lg font-bold">Address</h4>
            <p className="mt-[23px]">
              Internet Systems Consortium, Inc. 950 Charter Street Redwood City,
              CA USA.
            </p>
            <h4 className="text-[#222] text-lg mt-[20px]">Follow Us</h4>
          </div>
        </div>
      </div>
      {/* <img src="/images/FooterImage.png" alt="footerimage"  /> */}
    </div>
  );
};

export default Footer;
