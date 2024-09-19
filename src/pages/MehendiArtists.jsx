import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { Button } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import Catering from "../assets/pexels-fu-zhichao-176355-587741-scaled.jpg";
import Mehandi from "../assets/pexels-antonytrivet-13647131-1-scaled.jpg";
import Photoshoot from "../assets/pexels-jibarofoto-1787220-scaled.jpg";
import Transport from "../assets/pexels-hson-5542265-scaled.jpg";
import maldivesPic from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import fortPic from "../assets/pexels-riya-deb-143969192-10461752-scaled.jpg";
import weddingHall from "../assets/amish-thakkar-BEdxXAiRfRM-unsplash-scaled.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import delhi_bg from "../assets/delhi_bg.webp";
import Venues from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServiceDetails } from "@/actions/servicesActions";

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
      <FaArrowAltCircleLeft onClick={onClick} className="text-white text-3xl" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
      <FaArrowAltCircleRight
        onClick={onClick}
        className="text-white text-3xl"
      />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FLAVORS THAT CELEBRATE LOVE",
    buttonText: "Get Expert Advice",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576842546422-60562b9242ae?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A SPECIAL DAY DESERVES SPECIAL TASTE",
    buttonText: "Get Expert Advice",
  },
  {
    image:
      "https://images.unsplash.com/photo-1480455454781-1af590be2a58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PERFECT PLANNING FOR YOUR PERFECT DAY",
    buttonText: "Get Expert Advice",
  },
];

function MehendiArtists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
      //   const response = await axios.post(
      //     `${BASE_API}/api/email/venue-check-availability`,
      //     dataToSend
      //   );
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
      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <button className="mt-8 px-6 py-3 text-lg font-semibold text-pink-600 bg-white rounded-lg hover:bg-gray-200">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Food gallery */}

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
        <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
          <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
            <div className="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={Venues}
                onClick={() => handleImageClick(Venues)}
              />
            </div>
            <div className="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={Catering}
                onClick={() => handleImageClick(Catering)}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px] cursor-pointer"
                src={Mehandi}
                onClick={() => handleImageClick(Mehandi)}
              />
            </div>

            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px] cursor-pointer"
                src={weddingHall}
                onClick={() => handleImageClick(weddingHall)}
              />
            </div>
          </div>
          <div className="flex w-full sm:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={Photoshoot}
                onClick={() => handleImageClick(Photoshoot)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={Transport}
                onClick={() => handleImageClick(Transport)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={delhi_bg}
                onClick={() => handleImageClick(delhi_bg)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={fortPic}
                onClick={() => handleImageClick(fortPic)}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center cursor-pointer"
                src={maldivesPic}
                onClick={() => handleImageClick(maldivesPic)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the content
          >
            <button
              className="absolute top-2 right-2 text-gray-700 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-h-screen max-w-full"
            />
          </div>
        </div>
      )}

      {/* form */}

      <div className="flex items-center justify-center px-2">
        <div className="relative bg-white rounded-lg z-50 mt-10 px-10 mb-5">
          <div className="text-2xl flex justify-center font-bold mt-10 mb-2 text-start">
          Enquiry Now
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

export default MehendiArtists;
