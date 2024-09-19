import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shopslider from "../assets/lahenga.jpg";
import shopslider1 from "../assets/lahengaBlack.jpg";
import shopslider2 from "../assets/lahengadark.jpg";
import shopslider3 from "../assets/lahengaGrey.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "@/actions/productAction";

const ShopSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const products = useSelector((state) => state.products);

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

  useEffect(() => {
    dispatch(getProductsDetails());
  }, [dispatch]);

  const handleClicks = (cardId) => {
    console.log(cardId);
    navigate(`/product-page/${cardId}`);
  };

  // const products = [
  //   {
  //     id: 1,
  //     name: "Dilruba",
  //     category: "Fashion",
  //     price: 2000,
  //     image: shopslider,
  //   },
  //   {
  //     id: 2,
  //     name: "Chloe Lehenga",
  //     category: "Fashion",
  //     price: 3000,
  //     image: shopslider1,
  //   },
  //   {
  //     id: 3,
  //     name: "Honeylust Lehenga",
  //     category: "Fashion",
  //     price: 7999,
  //     image: shopslider2,
  //   },
  //   {
  //     id: 4,
  //     name: "Wedding Lehenga",
  //     category: "Fashion",
  //     price: 9999,
  //     image: shopslider3,
  //   },
  // ];

  return (
    <section className="bg-white py-12">
      <h1 className="text-center text-3xl font-semibold text-black mb-8">
        Featured Products
      </h1>
      {/* <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-gray-800 mb-4">
                  ₹{product.price.toFixed(2)}
                </p>
                <button className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="container mx-auto max-w-7xl pt-10">
        <div className="relative">
          <div className="flex overflow-hidden">
            {products.data
              .slice(startIndex, startIndex + 4)
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

      <div className="flex justify-center mt-8">
        <Link to="/shop" className="inline-flex items-center">
          <button className="text-[#F10081] text-[22px] font-semibold flex items-center hover:text-gray-900 transition duration-200">
            View More
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ShopSection;
