import React from "react";
import discount_model from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Banner = () => {
  return (
    <div className="">
      <AspectRatio ratio={16 / 7} className="relative bg-red-500 rounded-md">
        <img
          src={discount_model}
          alt="Image"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white sm:text-[70px] text-[14px] font-bold sm:pl-28 sm:pr-28 bg-black bg-opacity-50">
          <div className="" style={{ textAlign: "center" }}>
            Plan Any Event With India's Biggest Event Co.
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default Banner;
