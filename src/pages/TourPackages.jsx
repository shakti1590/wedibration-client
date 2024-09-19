import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


const TourPackages = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    "Description",
    "Inclusions",
    "Exclusions",
    "Remarks",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div>
            <ul className="list-disc pl-5">
              <li>01 Night in Srinagar Hotel Rose Petal / Grand Kaiser</li>
              <li>01 Night in Deluxe Houseboat at Dal Lake</li>
              <li>
                01 Night in Pahalgam Hotel Green Heights / Pahalgam Retreat
              </li>
              <li>02 Nights in Gulmarg Hotel Royal Park / The Meadows</li>
              <li>Candle Light Dinner + Flower Bed Decoration + Cake</li>
              <li>Sedan Car / Toyota Innova</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">
              Day 1: Srinagar Arrival – Gulmarg Transfers (50 Kms)
            </h3>
            <p className="mt-2 text-gray-600">
              Upon your arrival at Srinagar airport, you will be received by our
              driver and straightway transferred to Gulmarg (Meadow of Flowers).
              After reaching Gulmarg, check-in at your pre-booked hotel and
              relax. On the same day, you can visit the nearby famous Ancient
              Shiv Temple and the 100-year-old...
            </p>
          </div>
        );
      case "Inclusions":
        return (
          <div>
            <h3 className="text-lg font-semibold mt-4">Inclusions</h3>
            <p className="mt-2 text-gray-600">
              - Dummy inclusion content goes here.
            </p>
          </div>
        );
      case "Exclusions":
        return (
          <div>
            <h3 className="text-lg font-semibold mt-4">Exclusions</h3>
            <p className="mt-2 text-gray-600">
              - Dummy exclusion content goes here.
            </p>
          </div>
        );
      case "Remarks":
        return (
          <div>
            <h3 className="text-lg font-semibold mt-4">Remarks</h3>
            <p className="mt-2 text-gray-600">
              - Dummy remarks content goes here.
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-4 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://bookingkashmir.com/wp-content/uploads/2023/10/imad-clicks-DsST40JDEoc-unsplash.jpg" // Replace with your image URL
              alt="Kashmir Honeymoon Tour"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Kashmir Honeymoon Tour
            </h1>
            <div className="text-gray-500 line-through mt-2">₹35,000.00</div>
            <div className="text-yellow-900 text-2xl font-semibold">
              ₹28,000.00
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-[#F10081] text-white font-semibold rounded-lg transition duration-200">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 focus:outline-none ${
                  activeTab === tab
                    ? "text-[#F10081] border-b-2 border-green-600"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TourPackages;
