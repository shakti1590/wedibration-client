import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { getHoneymoonsDetails } from "@/actions/honeymoonActions";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_API = import.meta.env.VITE_BASE_API;

const HoneymoonPackages = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [selectedPackage, setSelectedPackage] = useState(null); // Track selected package for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    packageTitle: "",
    packageId: "",
  });
  const pkgPerPage = 10;

  const { data, loading } = useSelector((state) => state.allHoneymoonPackages);

  useEffect(() => {
    dispatch(getHoneymoonsDetails());
  }, [dispatch]);

  const totalPages = Math.ceil(data.length / pkgPerPage) || 1;

  const indexOfLastPkg = currentPage * pkgPerPage;
  const indexOfFirstPkg = indexOfLastPkg - pkgPerPage;
  const currentPkgs = data.slice(indexOfFirstPkg, indexOfLastPkg);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setFormData({
      ...formData,
      packageTitle: pkg.title,
      packageId: pkg._id,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      packageTitle: "",
      packageId: "",
    });
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_API}/api/email/honeymoon-enquire`,
        formData
      );
      // toast.success("Submission Successful. Admin will contact shortly.");

    } catch (error) {
      toast.error("Error submitting form, please try again.");
      closeModal();

    }

     // Add form submit logic here
     closeModal();
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="bg-gray-100 py-12 ">
          <h1 className="text-center text-3xl font-semibold text-black mb-8">
            Honeymoon Packages
          </h1>
          <div className="flex flex-wrap p-10 gap-10 justify-center ">
            {currentPkgs.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-[400px]"
              >
                <img
                  src={pkg.thumbnailImage[0]?.url}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h2 className="text-lg font-semibold text-pink-600">
                    {pkg.title}
                  </h2>
                  <p className="text-justify text-[12px] text-black ">
                    {pkg.description}
                  </p>

                  <div className="flex flex-row gap-2 items-center text-gray-500">
                    <div className="text-[14px]">₹</div>
                    <div className="text-gray-500 line-through font-sans_Serif text-[14px]">
                      {pkg.originalPrice}
                    </div>
                    <div className="text-[12px] text-pink-600 font-semibold">
                      {" "}
                      Per Person
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-800 font-sans_Serif">
                    ₹ {pkg.offerPrice}
                  </div>
                  <button
                    onClick={() => openModal(pkg)}
                    className="mt-4 w-full bg-[#F10081] text-white font-semibold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-green-600 transition duration-200"
                  >
                    Enquire Now
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
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="ml-2 p-2 border rounded"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-black opacity-60"
              onClick={closeModal}
            ></div>
            {/* Modal content */}
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 relative w-[400px]">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">
                Honeymoon Packages
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Selected Package
                  </label>
                  <input
                    type="text"
                    name="packageTitle"
                    value={formData.packageTitle}
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm bg-gray-100"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-[#F10081] text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default HoneymoonPackages;
