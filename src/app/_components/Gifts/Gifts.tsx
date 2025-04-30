import React from "react";
import gift1 from "@/images/Christmas shopping composition with presents and cart.png";
import gift2 from "@/images/Confetti lying near present.png";
import gift3 from "@/images/Top view hand holding gift box on work space.png";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function Gifts() {
  return (
    <div className="main-container">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
        {/* Gift Card 1 */}
        <div className="relative w-full md:w-1/3 p-3">
          <div className="relative aspect-[4/3] w-full">
            <Image 
              src={gift2} 
              alt="Gift box collection" 
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-end px-4 sm:px-6 md:px-8">
            <h2 className="text-[#F82BA9] font-bold text-lg sm:text-xl md:text-2xl">
              Gift Box
            </h2>
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-right my-3 sm:my-4 md:my-5">
              Awesome Gifts Box <br /> Collections
            </p>
            <Button 
              label="Shop Now" 
              type="button"
            />
          </div>
        </div>

        {/* Gift Card 2 */}
        <div className="relative w-full md:w-1/3 p-3">
          <div className="relative aspect-[4/3] w-full">
            <Image 
              src={gift3} 
              alt="Occasion gifts" 
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-end px-4 sm:px-6 md:px-8">
            <h2 className="text-[#F82BA9] font-bold text-lg sm:text-xl md:text-2xl">
              Occ Facetious Gifts
            </h2>
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-right my-3 sm:my-4 md:my-5">
              Best Occasion Gifts <br /> Collections
            </p>
            <Button 
              label="Discover Now" 
              type="button"
            />
          </div>
        </div>

        {/* Gift Card 3 */}
        <div className="relative w-full md:w-1/3 p-3">
          <div className="relative aspect-[4/3] w-full">
            <Image 
              src={gift1} 
              alt="Combo gift sets" 
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-end px-4 sm:px-6 md:px-8">
            <h2 className="text-[#F82BA9] font-bold text-lg sm:text-xl md:text-2xl">
              Occasion Gifts
            </h2>
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-right my-3 sm:my-4 md:my-5">
              Combo Sets Gift Box <br /> Up To 50% Off
            </p>
            <Button 
              label="Shop Now" 
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}