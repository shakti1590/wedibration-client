import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TiStar } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { PiLineVertical } from "react-icons/pi";
import ImageGallery from "../components/ImageGallery";
import FormCard from "../components/FormCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";

const BASE_API = import.meta.env.VITE_BASE_API;

const ServiceDetail = () => {
  const { category, vendorSlug, vendorId } = useParams();
  const [vendor, setVendor] = useState(null);
  const [activeSection, setActiveSession] = useState("About");
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  const city = sessionStorage.getItem("city");

  const handleVenueTourClick = () => {
    navigate("/venue-tour"); // Replace with your desired route
  };

  const handleCheckAvailabilityClick = () => {
    navigate("/check-availability"); // Replace with your desired route
  };

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

  const handleVendorClick = (vendorSlug, vendorId) => {
    // navigate(`/vendors/${city}/${category}/${vendorSlug}`);
    navigate(`/${category}/${vendorSlug.toLowerCase()}/${vendorId}`);
  };

  const handleSectionClick = (section) => {
    setActiveSession(section);
  };

  const getSectionClasses = (section) => {
    return `text-sm  cursor-pointer p-1 mr-4  ${
      activeSection === section ? "text-[#f10082]" : "text-black"
    }`;
  };

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

  const galleryImages = [
    {
      img:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/6544766/pexels-photo-6544766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img:
        "https://images.pexels.com/photos/12876404/pexels-photo-12876404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Function to shuffle array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Get four random vendors
  const randomVendors = shuffleArray(vendors).slice(0, 2);

  return (
    <>
      <Navbar />
      <div className="services">
        <div className="flex flex-row h-auto  justify-between px-20 py-10 gap-4">
          <div className="w-5/6">
            {/* Hero Section */}
            <div>
              <div>
                <ImageCarousel images={vendor.galleryImage} />
                {/* <img className="w-full h-[480px] rounded-md" src={delhi_bg} /> */}
                {/* {vendor.galleryImage.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-[480px] rounded-md"
                    src={image.url}
                    alt={vendor.title}
                  />
                ))} */}
              </div>

              <div className="shadow-lg rounded-xl m-2 p-2 shadow-gray-400 bg-white z-1 translate-y-[-40%]  ">
                <div>
                  <div className="p-2">
                    <div className="flex flex-row justify-between ">
                      <div>
                        <div className="font-semibold text-lg">
                          {vendor.title}
                        </div>
                        <div>
                          <div>
                            <div className="flex flex-row gap-1 text-[12px] justify-start items-center">
                              <div>
                                <IoLocationSharp
                                  size={13}
                                  className="text-gray-600"
                                />
                              </div>
                              <div className="text-sm font-semibold text-gray-600">
                                {console.log(vendor)}
                                {vendor.district}
                              </div>
                            </div>
                            <p className="text-[12px] font-semibold">
                              {vendor.streetName}, {vendor.district},{" "}
                              {vendor.state}, {vendor.country}. (
                              {vendor.pinCode})
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <a className="cursor-pointer">
                        <span className="flex flex-row gap-2 justify-center items-center text-white font-semibold bg-green-500 rounded-md">
                          <FaStar size={17} />
                          4.9
                        </span>
                        <div className="text-[10px] mt-1 font-semibold">
                          50 reviews
                        </div>
                      </a> */}
                    </div>
                    <div className="flex gap-1 text-[12px] justify-start items-center text-green-700 cursor-pointer">
                      <FaPhoneAlt size={10} />
                      <h6>Contact</h6>
                    </div>
                  </div>

                  <div className="p-2  flex flex-row gap-20">
                    <div
                      className="flex flex-row gap-1 justify-center items-center cursor-pointer"
                      onClick={() => handleSectionClick("Portfolio")}
                    >
                      <TfiGallery size={16} />
                      <span className="text-sm">56 photo</span>
                    </div>
                    {/* <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                      <CiHeart size={16} />
                      <span className="text-sm">shortlist</span>
                    </div> */}
                    <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                      <GoShareAndroid size={16} />
                      <span className="text-sm ">share</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* Event AboutUs section  */}
            <div className="rounded-md flex flex-col ">
              <div className="shadow-lg shadow-gray-400 bg-white flex flex-col p-3 m-2 rounded-lg ">
                <div className="flex flex-row bg-gray-100/65 rounded-md p-1 justify-start items-center">
                  <div
                    className={getSectionClasses("About")}
                    onClick={() => handleSectionClick("About")}
                  >
                    About
                  </div>
                  <div
                    className={getSectionClasses("Banquets")}
                    onClick={() => handleSectionClick("Banquets")}
                  >
                    Banquets
                  </div>
                  <div
                    className={getSectionClasses("Portfolio")}
                    onClick={() => handleSectionClick("Portfolio")}
                  >
                    Portfolio
                  </div>

                  {/* <div
                    className={getSectionClasses("Reviews")}
                    onClick={() => handleSectionClick("Reviews")}
                  >
                    Reviews
                  </div> */}
                </div>
                {/* Section to display content based on the active section */}
                <div className="w-full mt-5 ">
                  {activeSection === "Banquets" && (
                    <div className="bg-gray-100/65 p-2 rounded-md ">
                      <div className="text-sm font-semibold">
                        Areas Available
                      </div>
                      <div className="flex flex-row">
                        <div className="text-[10px] flex flex-row items-center justify-center">
                          {/* <div>image</div> */}
                          <div>Outdoor</div>
                          <PiLineVertical size={30} />
                        </div>

                        <div>
                          <div className="text-[10px] flex flex-row gap-1">
                            <span>500 Seating </span>|<span> 700 Floating</span>
                          </div>
                          <div className="text-[10px] flex flex-row">Lawn</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeSection === "About" && (
                    <div className="bg-gray-100/65 p-2 rounded-md">
                      <div className="flex flex-col">
                        <div>
                          <div className="text-md px-4 font-poppins font-semibold mb-2">
                            {vendor.title} -{" "}
                            {category.replace(/\b\w/g, (char) =>
                              char.toUpperCase()
                            )}
                          </div>
                          <hr />
                        </div>
                        <div className=" text-md text-justify p-4 font-poppins flex flex-col">
                          <div className="">{vendor.description}</div>

                          <div className="flex flex-col text-md gap-2 mt-2">
                            <span className=" font-semibold font-poppins">
                              {" "}
                              Space Available In MB Garden & Resorts
                            </span>
                            The venue has a spacious lawn area where you can
                            hold your wedding functions. Other than that, there
                            are also 26 rooms that can be used for accommodation
                            purposes
                          </div>

                          <div className="flex flex-col text-md mt-2">
                            <span className=" font-semibold font-poppins">
                              {" "}
                              Space Available In MB Garden & Resorts
                            </span>
                            The venue has a spacious lawn area where you can
                            hold your wedding functions. Other than that, there
                            are also 26 rooms that can be used for accommodation
                            purposes
                          </div>

                          <div className="flex flex-col text-md mt-2 ">
                            They provide their clients with a wide range of
                            services, from decorators to DJs, to ensure that all
                            their wedding needs are met and that they and their
                            guests can have a truly enjoyable experience. Here
                            are some of the facilities that they provide:
                            <div className="px-5 mt-2">
                              <ul className=" list-disc">
                                <li className="text-md text-black ">
                                  {" "}
                                  In-house catering only
                                </li>
                                <li className="text-md text-black ">
                                  {" "}
                                  In-house decorators In-house alcohol not
                                </li>
                                <li className="text-md text-black ">
                                  {" "}
                                  available/Outside alcohol permitted In-house
                                  DJ
                                </li>
                                <li className="text-md text-black ">
                                  {" "}
                                  available/Outside DJ permitted Parking
                                  Available
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeSection === "Portfolio" && (
                    <div className="bg-gray-100/65 p-2 rounded-md">
                      {/* <ImageCarousel images={vendor.galleryImage} /> */}
                      <ImageGallery galleryImages={galleryImages} />
                    </div>
                  )}

                  {/* {activeSection === "Reviews" && (
                    <div className="bg-white p-2 rounded-md">
                      <h2>Reviews</h2>
                      <p>Details about reviews...</p>
                    </div>
                  )} */}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white flex flex-col p-3 m-2 rounded-lg">
              <div className="mt-5 p-4 gap-3">
                <div className="font-semibold mb-4 ">
                  FAQs about {vendor.title}:
                </div>
                <hr />
                <div className="">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What is MB Garden & Resorts's policy on catering?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. Inhouse catering only
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        What is MB Garden & Resorts's policy on decor?
                      </AccordionTrigger>
                      <AccordionContent>Yes. Inhouse decor</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Does MB Garden & Resorts allow small size gatherings?
                      </AccordionTrigger>
                      <AccordionContent>
                        Less than 50 Pax allowed
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        Is outside alcohol permitted at MB Garden & Resorts?
                      </AccordionTrigger>
                      <AccordionContent>
                        In house alcohol not available, Outside alcohol
                        permitted.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        What is MB Garden & Resorts's policy on DJ?
                      </AccordionTrigger>
                      <AccordionContent>
                        In house DJ available, Outside DJ permitted
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* similar Vendors */}

            <div className="bg-white flex flex-col p-3 m-2 rounded-lg">
              <div>
                <div className="text-md px-4 font-poppins font-semibold mb-2">
                  Similar{" "}
                  {category.replace(/\b\w/g, (char) => char.toUpperCase())}:
                </div>
                <hr />
              </div>
              <div
                className="grid  grid-cols-2 p-5 gap-10 "
                // style={{ justifyContent:"space-between" }}
              >
                {randomVendors.map((vendor) => (
                  <div
                    key={vendor._id}
                    onClick={() =>
                      handleVendorClick(
                        vendor.title.replace(/ /g, "-"),
                        vendor._id
                      )
                    }
                    className="w-[350px] rounded-md flex flex-col justify-between overflow-hidden bg-gray-100 p-4 cursor-pointer hover:shadow-lg"
                  >
                    {vendor.galleryImage.slice(0, 1).map((image, index) => (
                      <img
                        key={index}
                        className="w-full h-[180px] rounded-md object-cover"
                        src={image.url}
                        alt={vendor.title}
                      />
                    ))}

                    <div className="py-2 ">
                      <div className="flex flex-row justify-between">
                        <div className="w-[200px] font-normal justify-start truncate text-md">
                          {vendor.title}
                        </div>
                        <div className="text-[12px] flex justify-center items-center gap-1">
                          <span className="text-pink-600 text-[20px]">
                            <TiStar />
                          </span>
                          {"5.0"}
                        </div>
                      </div>
                      <p className="text-gray-700 text-[12px] font-normal">
                        {vendor.streetName}, {vendor.district}, {vendor.state}
                      </p>
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
          </div>
          <div className="w-2/6 h-auto">
            {category === "venues" ? (
              <div className="flex flex-row justify-between pb-2">
                <Button
                  className="bg-pink-600 rounded-lg hover:bg-pink-700"
                  onClick={handleVenueTourClick}
                >
                  Venue Tour
                </Button>
                <Button
                  className="bg-pink-600 rounded-lg hover:bg-pink-700"
                  onClick={handleCheckAvailabilityClick}
                >
                  Check Availability
                </Button>
              </div>
            ) : (
              <div>Check Availability</div>
            )}
            <FormCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
