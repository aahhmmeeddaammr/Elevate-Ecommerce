import React from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";

const BrandFilter = () => {
  const brands = [
    { id: "tovola", label: "Tovola" },
    { id: "s-Rogndoy", label: "Sundoy" },
    { id: "sahoo-gifts", label: "Sahoo Gifts" },
    { id: "casterly", label: "Casterly" },
    { id: "mainden-gifts", label: "Mainden Gifts" },
  ];

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Brands</h2>
      <div className="h-[1px] w-full bg-gray-500"></div>
      <div className="max-md:flex max-md:gap-3 max-md:flex-wrap">
        {brands.map(({ id, label }) => (
          <FilterCheckBox key={id} id={id} label={label} />
        ))}
      </div>
    </Wrapper>
  );
};

export default BrandFilter;