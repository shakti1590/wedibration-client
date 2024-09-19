import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import shopslider from "../assets/lahengaBlack.jpg";
import shopslider2 from "../assets/lahengadark.jpg";
import shopslider3 from "../assets/lahengaGrey.jpg";
import shopslider4 from "../assets/lahengalite.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProductDetails } from "@/actions/productAction";

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const images = [shopslider, shopslider4, shopslider2, shopslider3];
  const dispatch = useDispatch();

  const { id } = useParams();
  const singleProduct = useSelector((state) => state.singleProduct);
  const data = singleProduct.data;

  useEffect(() => {
    dispatch(singleProductDetails(id));
  }, [dispatch]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % (data?.thumbnailImage?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + (data?.thumbnailImage?.length || 1)) %
        (data?.thumbnailImage?.length || 1)
    );
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const handleViewMore = () => {
    navigate("/all-product"); // Assuming you have a shop page route
  };

  // Function to handle WhatsApp sharing
  const handleWhatsAppShare = () => {
    // Prepare the data for WhatsApp sharing
    const message = `
    Hello! I’m interested in the ${data?.productName} I found on your website. Could you please provide more details about it?
    
    Product Details:
  - *Product Name*: ${data?.productName}
  - *Category*: ${data?.productCategory}
  - *Sub-Category*: ${data?.productSubCategory}
  - *Location*: ${data?.location}
  - *Price*: ₹${data?.price}
  - *Image URL*: ${data?.thumbnailImage?.[0]?.url || "Image not available"}
  
  Thanks!
  `;

    // WhatsApp URL scheme
    const whatsappUrl = `https://wa.me/8881635039?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      {/* Page header */}
      <div
        className="relative w-full h-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://classyevent.com.au/wp-content/uploads/2023/09/outdoor-wedding-aisle.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Product details</h1>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-10 font-sans">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Image slider */}
          <div className="md:w-2/3 relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {data?.thumbnailImage?.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={`Product ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg mb-2"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {data?.thumbnailImage?.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Product details */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              {data.productSubCategory}
            </h2>
            <h1 className="text-3xl font-bold mb-4">{data.productName}</h1>
            <p className="text-gray-600 mb-2">
              {data.productCategory} | {data.location}
            </p>
            <p className="text-2xl font-bold mb-6">₹{data.price}</p>

            <button
              className="w-72 bg-green-500 text-white py-3 rounded-md mb-6 flex items-center justify-center gap-2"
              onClick={handleWhatsAppShare}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat with Designer
            </button>

            <div className="border-t border-gray-200 pt-4">
              <button
                className="flex justify-between items-center w-full py-2 text-left"
                onClick={() => toggleSection("productDetails")}
              >
                <span className="font-semibold">Product Details</span>
                {expandedSection === "productDetails" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {expandedSection === "productDetails" && (
                <div className="mt-2 text-gray-600">
                  <p>{data.description}</p>
                </div>
              )}
            </div>
            {/* <div className="border-t border-gray-200 pt-4">
              <button
                className="flex justify-between items-center w-full py-2 text-left"
                onClick={() => toggleSection("fabricDetails")}
              >
                <span className="font-semibold">Fabric details</span>
                {expandedSection === "fabricDetails" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {expandedSection === "fabricDetails" && (
                <div className="mt-2 text-gray-600">
                  <p>Organza, Net / Tulle</p>
                </div>
              )}
            </div> */}
            <div className="border-t border-gray-200 pt-4">
              <button
                className="flex justify-between items-center w-full py-2 text-left"
                onClick={() => toggleSection("howToOrder")}
              >
                <span className="font-semibold">How to order?</span>
                {expandedSection === "howToOrder" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {expandedSection === "howToOrder" && (
                <div className="mt-2 text-gray-600">
                  <p>
                    Use the "Chat with Designer" button to get in touch with the
                    designer.
                  </p>
                </div>
              )}
              <h1 className="text-justify font-poppins mt-9 text-xl mb-5">
                Customers also viewed this product from here{" "}
              </h1>
              <div className="flex gap-4  overflow-x-auto">
                {data?.thumbnailImage?.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-36 h-40 object-cover cursor-pointer ${
                      index === currentImageIndex
                        ? "border-2 border-pink-500"
                        : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center mb-4">
        <button
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-pink-600 transition-colors"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div> */}

      <Footer />
    </>
  );
};

export default ProductPage;
