import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySliderItem = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`/all-category?category=${category._id}`}
      className="flex items-center gap-4 bg-[#FEEDF7] min-w-fit p-4 rounded-[20px] h-full"
    >
      <div
        className={`bg-[#F82BA9] rounded-full size-16 flex justify-center items-center text-white`}
      >
        <Image
          width={36}
          height={36}
          src={category.image}
          alt={category.slug}
        />
      </div>
      <div className="title">
        <h2 className="text-[#160E4B] font-bold">{category.name}</h2>
        <p className="text-[#757F95]">{category.productsCount} items</p>
      </div>
    </Link>
  );
};

export default CategorySliderItem;
