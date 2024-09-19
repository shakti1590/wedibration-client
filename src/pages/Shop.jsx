import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Slider from "react-slick";
import shopslider from "../assets/lahenga.jpg";
import shopslider1 from "../assets/lahengaBlack.jpg";
import shopslider2 from "../assets/lahengadark.jpg";
import shopslider3 from "../assets/lahengaGrey.jpg";
import shopslider4 from "../assets/lahengalite.jpg";
import shopslider5 from "../assets/lahengaPink.jpg";
import shop1 from "../assets/shop1.jpg";
import shop2 from "../assets/shop2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "@/actions/productAction";

const lehengas = [
  {
    name: "Chloe Lehenga",
    brand: "Studio Iris",
    location: "Delhi NCR",
    price: "₹1,43,000",
    image: shopslider,
  },
  {
    name: "Full Bloom Lehenga",
    brand: "Prevasu",
    location: "Delhi NCR",
    price: "₹1,10,000",
    image: shopslider1,
  },
  {
    name: "Dilruba",
    brand: "Prevasu",
    location: "Delhi NCR",
    price: "₹85,000",
    image: shopslider2,
  },
  {
    name: "Honeylust Lehenga",
    brand: "Studio Iris",
    location: "Delhi NCR",
    price: "₹97,000",
    image: shopslider3,
  },
  {
    name: "Honeylust Lehenga",
    brand: "Studio Iris",
    location: "Noida",
    price: "₹97,000",
    image: shopslider4,
  },
  {
    name: "Honeylust Lehenga",
    brand: "Studio Iris",
    location: "Mumbai",
    price: "₹97,000",
    image: shopslider5,
  },
];
const clothingTypes = [
  { name: "Lehenga", image: shopslider },
  { name: "Sarees", image: shopslider1 },
  { name: "Kanjeevarams", image: shopslider2 },
  { name: "Gowns", image: shopslider3 },
  { name: "Anarkali", image: shopslider4 },
  { name: "Salwar Kameez", image: shopslider5 },
  { name: "Churidar", image: shopslider },
  { name: "Sharara", image: shopslider1 },
  { name: "Palazzo Suits", image: shopslider2 },
  { name: "Patiala Suits", image: shopslider4 },
  { name: "Indo Western", image: shopslider5 },
  { name: "Bridal Lehenga", image: shopslider },
  { name: "Drape Sarees", image: shopslider3 },
];

const colorClasses = [
  "bg-orange-100",
  "bg-yellow-100",
  "bg-orange-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-pink-100",
];

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const products = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProductsDetails());
  }, [dispatch]);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(lehengas.length - 4, prevIndex + 1));
  };

  const handleViewMore = () => {
    navigate("/all-product"); // Assuming you have a shop page route
  };

  const [startIndexing, setStartIndexing] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : clothingTypes.length - 6
    );
  };

  const handleNextt = () => {
    setStartIndexing((prevIndex) =>
      prevIndex < clothingTypes.length - 6 ? prevIndex + 1 : 0
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleClicks = (cardId) => {
    navigate(`/product-page/${cardId}`);
  };

  return (
    <>
      <Navbar />
      {/* Slider */}
      <div className="relative w-full h-[520px] overflow-hidden">
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Discover Our <br /> Exclusive Collection
          </h2>
          <button className="mt-5 bg-pink-600 text-white py-3 px-8 rounded-full hover:bg-pink-700 transition drop-shadow-lg">
            Shop Now
          </button>
        </div> */}
        <Slider {...settings} className="w-full  absolute inset-0 object-cover">
          <div>
            {/* <div className="absolute inset-0 h-screen bg-black opacity-50"></div> */}
            <img src={shop1} alt="Slide 1" className="w-full object-cover" />
          </div>
          <div>
            <img src={shop1} alt="Slide 2" className="w-full  object-cover" />
          </div>
        </Slider>
      </div>
      {/* browse by type */}
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Browse by type
        </h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-hidden">
            {clothingTypes
              .slice(startIndexing, startIndexing + 6)
              .map((type, index) => (
                <div
                  key={type.name}
                  className={`flex-shrink-0 w-1/6 ${colorClasses[index]} rounded-lg p-4 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-white shadow-md">
                      <img
                        src={type.image}
                        alt={type.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {type.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNextt}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      {/* Trending now */}
      <div className="max-w-7xl mx-auto pt-5">
        <h2 className="text-3xl font-semibold text-gray-800 ">Trending Now</h2>
      </div>
      <div className="container mx-auto max-w-7xl pt-10">
        <div className="relative">
          <div className="flex overflow-hidden">
            {products.data
              .slice(startIndex, startIndex + 5)
              .map((product, index) => (
                <div
                  key={index}
                  className="flex-none w-64 px-2 "
                  onClick={() => handleClicks(product._id)}
                >
                  {product.thumbnailImage && product.thumbnailImage.length > 0 && (
                    <div className="cursor-pointer">
                      {product.thumbnailImage.length && (
                        <img
                          src={product.thumbnailImage[0].url} // Accessing the first image URL
                          alt={product.productName}
                          className="w-full h-80 object-cover rounded-lg mb-2"
                        />
                      )}
                    </div>
                  )}
                  <h3 className="font-semibold">{product.productName}</h3>
                  <p className="text-sm text-gray-600">
                    {product.productCategory}
                  </p>
                  <p className="text-sm text-gray-600">{product.location}</p>
                  <p className="font-bold mt-1">₹{product.price}</p>
                </div>
              ))}
          </div>
          {/* <button
            className="absolute left-0 top-40 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button> */}
          {/* <button
            className="absolute right-0 top-40 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
            onClick={handleNext}
            disabled={startIndex >= lehengas.length - 4}
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}
        </div>
      </div>
      <div className="text-center mb-10 mt-10 ">
        <button
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-pink-600 transition-colors"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
