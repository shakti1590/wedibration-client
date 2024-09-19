import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "@/actions/productAction";

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch products from Redux state
  // const { data: products, count: totalProducts } = useSelector((state) => state.products);

  const products = useSelector((state) => state.products.data || []); // Fallback to empty array
  useEffect(() => {
    dispatch(getProductsDetails());
  }, [dispatch]);

  const totalPages = Math.ceil(products.length / productsPerPage) || 1;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // const categories = [
  //   { name: "LEHENGA", count: 48 },
  //   { name: "JEWELLERY", count: 178 },
  //   { name: "WEDDING", count: 39 },
  //   { name: "MEHENDI", count: 3 },
  //   // Add more categories as needed or fetch them from the backend
  // ];
  
  const handleClicks = (cardId) => {
    navigate(`/product-page/${cardId}`);
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-40 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://classyevent.com.au/wp-content/uploads/2023/09/outdoor-wedding-aisle.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">All Products</h1>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row">
          {/* Categories */}
          {/* <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Product Categories</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.name} className="mb-2">
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                    <span className="w-4 h-4 mr-2 border border-gray-400 rounded"></span>
                    {category.name} ({category.count})
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Product Grid */}
          <div className="w-full md:w-4/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {currentProducts.map((product) => (
                <div key={product._id} className="border rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.thumbnailImage[0]?.url}
                      alt={product.productName}
                      className="w-full h-64 object-cover"
                    />
                    <button className="absolute top-2 right-2 text-red-500">
                      <Heart size={24} />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{product.productCategory}</p>
                    <h3 className="text-lg font-semibold mb-2">
                      {product.productName}
                    </h3>
                    <p className="text-red-500 font-bold mb-2">
                      ₹ {product.price}
                    </p>
                    <button
                      className="w-full bg-black hover:bg-pink-600 text-white py-2 px-4 rounded"
                      // onClick={() => navigate(`/product/${product.slug}`)}
                      onClick={() => handleClicks(product._id)}
                    >
                      {product.productCategory === "Clothes" ? "Select options" : "Buy Now"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 mb-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="mr-2 p-2 border rounded"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="mx-4">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="ml-2 p-2 border rounded"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProduct;
