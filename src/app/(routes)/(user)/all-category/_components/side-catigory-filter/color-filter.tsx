import React from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";

const ColorFilter = () => {
  const colors = [
    { id: "blue", hex: "#606DDD" },
    { id: "green", hex: "#4CAF50" },
    { id: "cyan", hex: "#17A2B8" },
    { id: "yellow", hex: "#FFC107" },
    { id: "red", hex: "#F44336" },
  ];

  const renderColor = (hex: string) => (
    <div className={`bg-[${hex}] size-7 rounded-full`}></div>
  );

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Color</h2>
      <div className="h-[1px] mx-2 w-full bg-gray-500"></div>
      <div className="flex justify-between">
        {colors.map(({ id, hex }) => (
          <FilterCheckBox key={id} id={id} hidden label={renderColor(hex)} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ColorFilter;
