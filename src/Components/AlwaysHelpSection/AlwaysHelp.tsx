import React from "react";
import Image from "next/image";

const AlwaysHelp = () => {
  return (
    <section className="container mx-auto ourworks mt-32">
      <div className="grid grid-cols-2">
        <div>
          <Image
            alt="help"
            width={"666"}
            height={"458"}
            src={"/images/AlwaysHelp.svg"}
          />
        </div>
        <div className="ml-16 mt-32">
          <p className="text-4xl w-[296px]">We are here to </p>
          <div className="text-4xl mt-2  w-[271px]">
            <h2 className="font-bold">always help</h2> <p>you</p>
          </div>
          <p className="mt-6 w-[444px] text-[#777]">
            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, a
            elaboraret interpretaris, sed diceret concludaturque nasdo habemus
            sea ut. His nibh scripta in. In sea vocibus facilisis.
          </p>
          <p className="mt-5 w-[434px] text-[#777]">
            vel cu paulo doctus vidsse. Iudico dicant nostrum nec aIn detraxit
            eleifend duo, alterum iudicabit consectetuer per.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlwaysHelp;
