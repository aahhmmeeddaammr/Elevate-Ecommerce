import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="main-container">
      <div className="flex gap-12">
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            Phone
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 p-1">
        <label htmlFor="" className="text-main text-base leading-3">
          Address Line 1
        </label>
        <input
          type="tel"
          placeholder="Address Line 1"
          className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
        />
      </div>
      <div className="w-full flex flex-col gap-2 p-1">
        <label htmlFor="" className="text-main text-base leading-3">
          Address Line 2
        </label>
        <input
          type="tel"
          placeholder="Address Line 2"
          className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
        />
      </div>
      <div className="flex gap-12">
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            Country
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            Post Code
          </label>
          <input
            type="text"
            placeholder="Post Code"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
        <div className="w-full flex flex-col gap-2 p-1">
          <label htmlFor="" className="text-main text-base leading-3">
            State
          </label>
          <input
            type="text"
            placeholder="State"
            className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 p-1">
        <label htmlFor="" className="text-main text-base leading-3">
          Your Message For Order
        </label>
        <textarea
          placeholder="Your Message"
          className="w-full py-3 text-[#212529BF] px-2 focus:outline-primary rounded-sm outline-[#212529BF] outline"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <Button>
          <div className="flex gap-2 py-2">
            Confirm
            <ArrowRight />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Page;
