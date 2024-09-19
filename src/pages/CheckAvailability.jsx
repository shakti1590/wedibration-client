import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import logo from "../assets/sasdx-e17166331911862.png";
import { useNavigate } from "react-router-dom";
import { getServiceDetails } from "@/actions/servicesActions";
import { useDispatch, useSelector } from "react-redux";
const BASE_API = import.meta.env.VITE_BASE_API;

function CheckAvailability() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    venueName: "",
    phone: "",
    date: null,
    functionType: "",
    serviceNames: [], // Array to hold selected service names
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleServiceSelect = (e) => {
    const selectedServiceId = e.target.value;
    const selectedService = services.find(
      (service) => service._id === selectedServiceId
    );

    if (selectedService && !selectedServices.includes(selectedService)) {
      setSelectedServices([...selectedServices, selectedService]);
      setFormData({
        ...formData,
        serviceNames: [...formData.serviceNames, selectedService.name],
      });
    }
  };

  const handleRemoveService = (serviceName) => {
    setSelectedServices(
      selectedServices.filter((service) => service.name !== serviceName)
    );
    setFormData({
      ...formData,
      serviceNames: formData.serviceNames.filter(
        (name) => name !== serviceName
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formData.date.toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata",
    });

    const dataToSend = {
      ...formData,
      date: formattedDate,
    };

    navigate("/");

    try {
      const response = await axios.post(
        `${BASE_API}/api/email/venue-check-availability`,
        dataToSend
      );
      console.log("Form submitted successfully", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  useEffect(() => {
    dispatch(getServiceDetails());
  }, [dispatch]);

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
            Check Availability
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex flex-row gap-10">
                <div>
                  {/* Full Name */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Full Name</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    className="w-[340px] outline-none px-2 py-1.5 border rounded-md text-gray-700"
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  {/* Phone Number with Country Code */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Phone Number</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <PhoneInput
                    country={"us"} // Default country
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass="w-[340px] px-10 py-2 border rounded-md text-gray-700"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between gap-10">
                <div>
                  {/* Email */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Email</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    className="w-[340px] px-2 py-1.5 border outline-none rounded-md text-gray-700"
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  {/* Venue Name */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Venue Name</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    className="w-[340px] outline-none px-2 py-1.5 border rounded-md text-gray-700"
                    type="text"
                    id="venueName"
                    name="venueName"
                    required
                    value={formData.venueName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div>
                  {" "}
                  {/* Date Picker */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Function Date</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    className="w-[340px] px-2 py-1.5 border rounded-md text-gray-700"
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select Date"
                    required
                  />
                </div>
                <div>
                  {/* Select Venue Tour Type */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    Function Types
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <select
                    name="functionType"
                    className="w-[340px] py-2 outline-none border rounded-md shadow-inner"
                    value={formData.functionType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Pre Wedding">Pre Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Other Function">Other Function</option>
                  </select>
                </div>
              </div>

              <label className="block text-gray-600 text-sm font-medium mt-4 mb-2">
                Other Services
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <select
                onChange={handleServiceSelect}
                className="w-full py-2 outline-none border rounded-md shadow-inner"
              >
                <option>Select Service</option>
                {services
                  .filter((service) => !selectedServices.includes(service))
                  .map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  ))}
              </select>

              <div className="mt-4">
                {selectedServices.map((service) => (
                  <div
                    key={service._id}
                    className="w-[150px] flex items-center text-[12px] justify-between bg-pink-200 px-3 py-1 rounded-md mb-2"
                  >
                    <span>{service.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveService(service.name)}
                      className="text-red-500 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

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

export default CheckAvailability;
