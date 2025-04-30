import React from "react";
import Search from "./search";
import PriceFilter from "./price-filter";
import SalesFilter from "./sales-filter";
import CategoryFilter from "./catigory-filter";
import RatingFilter from "./rating-Filter";
import BrandFilter from "./brand-filter";

const SideCategoryFilters = () => {
  const filters = [
    { id: "category", Component: CategoryFilter },
    { id: "brand", Component: BrandFilter },
    { id: "price", Component: PriceFilter },
    { id: "sales", Component: SalesFilter },
    { id: "rating", Component: RatingFilter },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Search />
      {filters.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </div>
  );
};

export default SideCategoryFilters;
