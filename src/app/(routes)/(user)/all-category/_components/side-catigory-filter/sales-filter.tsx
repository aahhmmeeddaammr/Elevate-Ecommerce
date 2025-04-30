import React from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";

const SalesFilter = () => {
  const salesOptions = [
    { id: "on-sale", label: "On Sale" },
    { id: "in-stock", label: "In Stock" },
    { id: "out-of-stock", label: "Out Of Stock" },
    { id: "discount", label: "Discount" },
  ];

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Sales</h2>
      <div className="h-[1px] w-full bg-gray-500"></div>
      <div className="max-md:flex max-md:gap-3 max-md:flex-wrap">
        {salesOptions.map((option) => (
          <FilterCheckBox key={option.id} label={option.label} id={option.id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default SalesFilter;
