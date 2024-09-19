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
const BASE_API = import.meta.env.VITE_BASE_API;


function VenueTour() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    VenueTourType: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the date in the local IST timezone (India)
    const formattedDate = formData.date.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

    // Create a new object to send, replacing the date with the formatted date
    const dataToSend = {
        ...formData,
        date: formattedDate,
    };
    navigate("/"); 

    try {
      const response = await axios.post(
        `${BASE_API}/api/email/venue-tour`,
        dataToSend
      );
      console.log("Form submitted successfully", response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error (e.g., show an error message)
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
            Venue Tour
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex flex-row justify-between gap-10">
                <div>
                  {/* Full Name */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Full Name</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    className="w-[420px] outline-none px-2 py-1.5 border rounded-md text-gray-700"
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
                    inputClass="w-full px-10 py-2 border rounded-md text-gray-700"
                  />
                </div>
              </div>

              {/* Email */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                <span>Email</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="w-full px-2 py-1.5 border outline-none rounded-md text-gray-700"
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <div className="flex flex-row justify-between">
                <div>
                  {" "}
                  {/* Date Picker */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Select Date</span>
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
                  {/* Time Input */}
                  <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                    <span>Select Time</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-[340px] px-2 py-1.5 border rounded-md text-gray-700"
                    required
                  />
                </div>
              </div>

              {/* Select Venue Tour Type */}
              <label className="block text-gray-600 text-md font-medium mt-4 mb-2">
                Select <span>Venue Tour Type</span>
                <span className="text-red-500 font-bold">*</span>
              </label>
              <select
                name="VenueTourType"
                className="w-full py-2 outline-none border rounded-md shadow-inner"
                value={formData.VenueTourType}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="Video Call">Video Call</option>
                <option value="Venue Visit">Venue Visit</option>
              </select>
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

export default VenueTour;
