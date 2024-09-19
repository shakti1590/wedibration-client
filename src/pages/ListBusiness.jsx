import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServiceDetails } from "@/actions/servicesActions";
import logo from "../assets/sasdx-e17166331911862.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_API = import.meta.env.VITE_BASE_API;

function ListBusiness() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { services } = useSelector((state) => state.services);
  useEffect(() => {
    dispatch(getServiceDetails());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    shortBio: "",
    companyName: "",
    serviceName: "",
    productsOffer: "",
    companyWebsite: "",
    companyFoundingYear: "",
    companyAddress: "",
    Address1: "",
    Address2: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
    };

    navigate("/");

    try {
      const response = await axios.post(
        `${BASE_API}/api/email/list-your-business`,
        dataToSend
      );
      toast.success("Submission Successful. Admin will review shortly.");
      navigate("/");
    } catch (error) {
      toast.error("Error submitting form, please try again.");
    }
  };


  
  
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center px-2">
        <div className="relative bg-white rounded-lg z-50 mt-10 px-10 mb-5">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              className="flex mt-5 h-[60px] justify-center items-center"
            />
          </div>
          <div className="text-2xl font-bold mt-10 mb-2 text-start">
            List Your Business
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              {/* Full Name */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                <span>Full Name</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="w-full px-2 py-2 border rounded-md text-gray-700"
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
              />

              {/* Email */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                <span>Email</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="w-full px-2 py-2 border rounded-md text-gray-700"
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              {/* Short Bio */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                <span>Short Bio</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full px-2 py-2 borderTextArea bg-white rounded-md text-gray-700"
                id="shortBio"
                name="shortBio"
                required
                value={formData.shortBio}
                onChange={handleChange}
              />

              {/* Company's Legal Name */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                <span>Company's Legal Name</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="w-full px-2 py-2 border rounded-md text-gray-700"
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
              />

              {/* Select Service */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                Select <span>Service Name</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <select
                name="serviceName"
                className="w-full py-2 outline-none borderTextArea rounded-md shadow-inner"
                value={formData.serviceName}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>

              {/* about company */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                {" "}
                <span>
                  What kind of products/services does your company offer?
                </span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full px-2 py-2 borderTextArea bg-white rounded-md text-gray-700"
                id="productsOffer"
                name="productsOffer"
                required
                value={formData.productsOffer}
                onChange={handleChange}
              />
            </div>

            {/* Company Website */}
            <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
              <span>Company Website</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full px-2 py-2 border rounded-md text-gray-700"
              type="text"
              id="companyWebsite"
              name="companyWebsite"
              required
              value={formData.companyWebsite}
              onChange={handleChange}
            />

            {/* Company Founding Year */}
            <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
              <span>Company Founding Year</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full px-2 py-2 border rounded-md text-gray-700"
              type="text"
              id="companyFoundingYear"
              name="companyFoundingYear"
              required
              value={formData.companyFoundingYear}
              onChange={handleChange}
            />

            {/* Company Address */}
            <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
              <span>Company Address</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full px-2 py-2 border rounded-md text-gray-700"
              type="text"
              id="companyAddress"
              name="companyAddress"
              required
              value={formData.companyAddress}
              onChange={handleChange}
            />

            {/* Address Line 1 */}
            <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
              <span>Address Line 1</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full px-2 py-2 border rounded-md text-gray-700"
              type="text"
              id="Address1"
              name="Address1"
              required
              value={formData.Address1}
              onChange={handleChange}
            />
            {/* Address Line 2 */}
            <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
              <span>Address Line 2</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full px-2 py-2 border rounded-md text-gray-700"
              type="text"
              id="Address2"
              name="Address2"
              required
              value={formData.Address2}
              onChange={handleChange}
            />
            <div className="flex flex-row justify-between ">
              <div>
                {/* City */}
                <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                  <span>City</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="w-full px-2 py-2 border rounded-md text-gray-700"
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* State / Province / Region */}
                <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                  {" "}
                  <span>State / Province / Region</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="w-full px-2 py-2 border rounded-md text-gray-700"
                  type="text"
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {/* Postal Code */}
                <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                  <span>Postal Code</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="w-full px-2 py-2 border rounded-md text-gray-700"
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  required
                  value={formData.pinCode}
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* Country */}
                <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                  <span>Country</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="w-full px-2 py-2 border rounded-md text-gray-700"
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Notes */}
            <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
              <span>Notes</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full px-2 py-2 border rounded-md text-gray-700"
              type="text"
              id="notes"
              name="notes"
              required
              value={formData.notes}
              onChange={handleChange}
            />

            <div className="flex items-center justify-center mt-4">
              <Button
                type="submit"
                className="bg-[#bd0065] px-6 py-2 font-medium text-[16px] hover:shadow-pink-400 shadow-md rounded-md mb-5 text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ListBusiness;
