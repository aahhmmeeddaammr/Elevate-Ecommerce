"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const RatingFilter = () => {
  const [selectedRatings, setSelectedRating] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const ratings = [
    { id: "5-star", stars: 5, filled: "5" },
    { id: "4-star", stars: 5, filled: "4" },
    { id: "3-star", stars: 5, filled: "3" },
    { id: "2-star", stars: 5, filled: "2" },
    { id: "1-star", stars: 5, filled: "1" },
  ];

  const renderStars = (filled: string, total: number) => (
    <div className="flex gap-1">
      {[...Array(total)].map((_, index) => (
        <Star
          key={index}
          className={`size-5 ${
            index < Number(filled)
              ? "fill-primary stroke-0"
              : "stroke-primary stroke-1"
          }`}
        />
      ))}
    </div>
  );
  useEffect(() => {
    params.delete("rateAvg");
    selectedRatings.forEach((rating) => {
      params.append("rateAvg", rating);
    });
    router.push(`/all-category?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRatings]);
  return (
    <Wrapper>
      <h2 className="font-bold text-main">Rate</h2>
      <div className="h-[1px] w-full bg-gray-500"></div>
      <div className="max-md:flex max-md:gap-3 max-md:flex-wrap">
        {ratings.map(({ id, filled, stars }) => (
          <FilterCheckBox
            onChange={() => {
              setSelectedRating((prev) =>
                prev.includes(filled)
                  ? prev.filter((catId) => catId !== filled)
                  : [...prev, filled]
              );
            }}
            key={id}
            id={id}
            label={renderStars(filled, stars)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default RatingFilter;
