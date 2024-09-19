import React, { useEffect, useState } from "react";
import delhi_bg from "../assets/delhi_bg.webp";
import { FaSearch } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const BASE_API = import.meta.env.VITE_BASE_API;

const 
Vendors = () => {
  const { city, category } = useParams();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API}/api/events/${city}/${category}`)
      .then(({ data }) => {
        setVendors(data.vendors);
      })
      .catch((error) => {
        console.error("There was an error fetching the vendors!", error);
      });
  }, [city, category]);

  const navigate = useNavigate();

  const handleVendorClick = (vendorSlug, vendorId) => {
    // navigate(`/vendors/${city}/${category}/${vendorSlug}`);
    navigate(`/${category}/${vendorSlug.toLowerCase()}/${vendorId}`);
  };

  return (
    <>
      <Navbar />
      <section className="services">
        <div className="row">
          <div className="flex justify-between">
            <div>
              <div className="text-lg font-semibold flex justify-start items-center">
                {category
                  .toLowerCase()
                  .replace(/-/g, " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
                in {city}
              </div>
              <div className="text-[12px] items-center">
                Showing {vendors.length} results as per your search criteria
              </div>
            </div>
            <div>
              <div className="flex flex-row bg-white rounded-md px-2 justify-center items-center gap-1">
                <FaSearch size={12} />
                <input
                  type="text"
                  className="px-2 py-1 outline-none"
                  placeholder="Search Wedding photographers"
                  name=""
                />
              </div>
            </div>
          </div>

          <div className="grid w-[100%] grid-cols-4 gap-4">
            {vendors.map((vendor) => (
              <div
                key={vendor._id}
                onClick={() =>
                  handleVendorClick(
                    vendor.title.replace(/ /g, "-"),
                    vendor._id
                  )
                }
                className="max-w-sm rounded-md overflow-hidden bg-white	 shadow-lg p-4 cursor-pointer"
              >
                {vendor.galleryImage.slice(0, 1).map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-[180px] rounded-md object-cover"
                    src={image.url}
                    alt={vendor.title}
                  />
                ))}

                <div className=" py-2">
                  <div className="flex flex-row justify-between">
                    <div className="w-[200px] font-normaljustify-start truncate text-md ">
                      {vendor.title}
                    </div>
                    <div className=" text-[12px] flex justify-center items-center gap-1">
                      <span className="text-pink-600 text-[20px]">
                        <TiStar />
                      </span>
                      {"5.0"}
                    </div>
                  </div>
                  <p className="text-gray-700 text-[12px] font-normal">
                    {vendor.streetName}, {vendor.district}, {vendor.state}
                  </p>
                  {/* <div className="flex">
                    <p className="text-gray-900 font-sans font-bold">
                      ₹{vendor.price}
                    </p>
                    <span className="px-2 text-[10px] flex justify-center items-center">
                      per day
                    </span>
                  </div> */}
                </div>
                <div>
                  {vendor.votes &&
                    vendor.votes.map((vote, voteIndex) => (
                      <span
                        key={voteIndex}
                        className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-[10px] font-semibold text-gray-700 mr-2"
                      >
                        {vote}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Vendors;
