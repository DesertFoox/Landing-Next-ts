import React from "react";

import ProductCard from "../ProductCard/ProductCard";

import ProdocutCardData from "../../Constant/ProductCardData.json";

const ProductSection: React.FC = (): JSX.Element => {
  return (
    <section className="speciality container mx-auto mt-32">
      <div className="description text-4xl text-center">
        <p>
          Our Owning
          <strong className="font-bold"> Products </strong>
        </p>

        <p className="text-[15px] text-[#777] mt-[30px] leading-[27px] w-[490px] mx-auto">
          Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
          habemus sea ut. His nibh scripta in. In sea vocibus facilisis.
        </p>
      </div>
      <div className="cards flex flex-wrap flex-row p-8 justify-center items-center gap-[30px] mt-2">
        {ProdocutCardData.map((item: any, index: number) => (
          <ProductCard
            key={index}
            className={index === 1 || index === 4 ? "mb-[40px]" : ""}
            image={`/images/${item.image}`}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
      <div className="flex justify-center gap-[30px] mt-[30px]"></div>
    </section>
  );
};
export default ProductSection;
