import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import WeddingStress from "../assets/Wedding_Stress.png";
import discount_model from "../assets/discount_model.png";
import SideCarousel from "./SideCarousel";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_API = import.meta.env.VITE_BASE_API;

const FormCard = () => {
  const { category, vendorSlug, vendorId } = useParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [vendor, setVendor] = useState(null);
  

  useEffect(() => {
    // Fetch vendor details using vendorId
    axios
      .get(`${BASE_API}/api/events/${vendorId}`)
      .then(({ data }) => {
        // console.log(data.event)
        setVendor(data.event);
      })
      .catch((error) => {
        console.error("There was an error fetching the vendor details!", error);
      });
  }, [vendorId]);

  if (!vendor) {
    return <div>Loading...</div>;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const slides = [
    "https://badhaaiho.s3.ap-south-1.amazonaws.com/Badhaai_content/Our+Services+banner/pexels-md-iftekhar-uddin-emon-403495.jpg",
    "https://badhaaiho.s3.ap-south-1.amazonaws.com/Badhaai_content/Our+Services+banner/pexels-naimbic-2291367.jpg",
    "https://badhaaiho.s3.ap-south-1.amazonaws.com/Badhaai_content/Our+Services+banner/pexels-sam-clickx-24038849-15460659.jpg",
    "https://badhaaiho.s3.ap-south-1.amazonaws.com/Badhaai_content/Home+page+banner/pexels-asadphoto-169209.jpg",
  ];

  return (
    <>
      <div className="h-auto bg-white rounded-lg">
        {/* form */}
        <div className="p-5">
          {/* Starting Price Section */}

          {/* <div className="flex flex-col divide-y">
            <div className="flex flex-row justify-between items-center mb-2 ">
              <div className="text-sm font-semibold">Starting Price</div>
              <button
                onClick={toggleDropdown}
                className="text-pink-600 text-sm flex flex-row justify-center items-center gap-2 focus:outline-none"
              >
                Pricing Info{" "}
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {isDropdownOpen && (
              <div className=" mb-3 flex flex-row justify-between ">
                <div className="text-[10px] flex flex-col ">
                  <div>Starting price of room</div>
                  <div className="text-gray-500 font-semibold mt-1">
                    ₹ 3,000 per room
                  </div>
                </div>
                <div className="text-[10px] flex flex-col">
                  <div>Starting Price of Decor</div>
                  <div className="text-gray-500 font-semibold mt-1">
                    ₹ 250,000
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-row justify-between items-center">
              <div className=" text-pink-600 flex justify-center items-center font-serif gap-1 text-lg">
                ₹ 800
                <span className="text-pink-600 text-[10px]">
                  per plate <span className="text-gray-600">(taxes extra)</span>
                </span>
              </div>
              <div className="text-[12px]">Veg price</div>
            </div>
          </div> */}

          {/* Form Section */}
          <div className="mt-4">
            <div className="text-lg font-semibold mb-2">
              Hi {vendor.title},
            </div>
            <form className="space-y-3">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border p-2 rounded-lg"
                  placeholder="Full name*"
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  className="border p-2 rounded-lg"
                  placeholder="Email address"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  className="border p-2 rounded-lg"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Function date*</label>
                <input type="date" className="border p-2 rounded-lg" required />
              </div>
              <div className="flex flex-row space-x-2">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm"></label>
                  <input
                    type="number"
                    className="border p-2 rounded-lg"
                    placeholder="No of guests* (min 50)"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-sm"></label>
                  <input
                    type="number"
                    className="border p-2 rounded-lg"
                    placeholder="No of rooms"
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm font-semibold">Function Type</label>
                  <div className="flex space-x-2">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="functionType"
                        value="pre-wedding"
                      />
                      <span className="text-sm">Pre-Wedding</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input type="radio" name="functionType" value="wedding" />
                      <span className="text-sm">Wedding</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 justify-end items-end">
                  <label className="text-sm font-semibold">Function Time</label>
                  <div className="flex space-x-2">
                    <label className="flex items-center space-x-1">
                      <input type="radio" name="functionTime" value="evening" />
                      <span className="text-sm">Evening</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input type="radio" name="functionTime" value="day" />
                      <span className="text-sm">Day</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <label className="text-sm">Notify me on Whatsapp</label>
              </div> */}
              <button
                type="submit"
                className="w-full bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700"
              >
                Check Availability & Prices
              </button>
            </form>
          </div>
          <div className="text-[11px] flex mt-2 text-gray-500 justify-center items-center">
            Complete information ensures you get accurate and timely vendor
            responses
          </div>

          {/* Enquiries Section */}
          {/* <div className="mt-2 text-sm text-gray-600 flex flex-row justify-center items-center gap-4">
            <div className=" items-center bg-red-200 px-2  text-[10px]">
              In High Demand
            </div>
            <div className="items-center  text-[10px] ">
              20 enquiries last week
            </div>
          </div> */}
        </div>
        {/* banner */}
        <hr />
        <div className="p-5 ">
          <img src={WeddingStress} />
        </div>
        <hr />
        <div className="p-5 ">
          <img src={discount_model} className="h-[660px] w-full" />
        </div>
        <div className="p-5">
          <div>
            <SideCarousel>
              {[...slides.map((s) => <img src={s} className="" />)]}
            </SideCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCard;
