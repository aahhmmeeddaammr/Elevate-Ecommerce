import React from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";

const SizeFilter = () => {
  const sizes = [
    { id: "xs", label: "Extra Small" },
    { id: "s", label: "Small" },
    { id: "m", label: "Medium" },
    { id: "l", label: "Large" },
    { id: "xl", label: "Extra Large" },
  ];

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Size</h2>
      <div className="h-[1px] mx-2 w-full bg-gray-500"></div>
      <div className="">
        {sizes.map((size) => (
          <FilterCheckBox key={size.id} label={size.label} id={size.id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default SizeFilter;
