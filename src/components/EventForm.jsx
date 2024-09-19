import React, { useState, useEffect } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getCityDetails } from "@/actions/cityActions";
import { getServiceDetails } from "@/actions/servicesActions";
import { getServiceTypeDetails } from "@/actions/serviceTypeActions";

const EventForm = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const dispatch = useDispatch();
  const [thumbnailImage, setThumbnailImage] = useState([])

  const { cities } = useSelector((state) => state.cities);
  const { services } = useSelector((state) => state.services);
  const { serviceTypeCategories } = useSelector(
    (state) => state.serviceTypeCategories
  );

  useEffect(() => {
    dispatch(getCityDetails());
    dispatch(getServiceDetails());
    dispatch(getServiceTypeDetails());
    // dispatch(getEventsDetails());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    cityId: "",
    serviceId: "",
    serviceTypeCategoryId: "",
    description: "",
    title: "",
    thumbnailImage: "",
    streetName: "",
    district: "",
    state: "",
    country: "",
    pinCode: "",
  });

  useEffect(() => {
    if (initialValues) {
      setFormData({
        ...initialValues,
        thumbnailImage: [],
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, '-', value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setThumbnailImage(files);
    setFormData((prev) => ({
      ...prev,
      file: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(thumbnailImage,'first')
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "file") {
        thumbnailImage.forEach((file) => {
          data.append("file", file);
        });
      } else {
        data.append(key, formData[key]);
      }
    });
    // console.log("formData--->", formData)
    onSubmit(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center px-2 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white  rounded-lg z-50 mt-[200px] px-8 mb-5">
        <span
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl cursor-pointer"
        >
          &#x2716;
        </span>
        <h2 className="text-2xl font-bold mt-3 mb-2 text-center">
          {initialValues ? "Update Event" : "Add Event"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-10 p-2 ">
            <div>
              {/* select city */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                Select <span className="text-red-500">City Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <select
                onChange={handleChange}
                name="cityId"
                className="w-full py-2 outline-none border rounded-md shadow-inner"
              >
                <option>Select City</option>
                {cities.map((city) => (
                  <option key={city._id} value={city._id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {/* select service  */}
              <label
                className="block text-gray-600 text-sm font-medium mt-4 mb-2"
                htmlFor="name"
              >
                Select <span className="text-red-500">Service Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <select
                onChange={handleChange}
                name="serviceId"
                className="w-full py-2 outline-none border rounded-md shadow-inner"
              >
                <option>Select Service</option>
                {services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
              </select>
              {/* select serviceTypeCategory  */}
              <label
                className="block text-gray-600 text-sm font-medium mt-4 mb-2"
                htmlFor="name"
              >
                Select <span className="text-red-500">Service-Type Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <select
                onChange={handleChange}
                className="w-full py-2 outline-none border rounded-md shadow-inner"
                name="serviceTypeCategoryId"
              >
                <option>Select Service-Type</option>
                {serviceTypeCategories.map((serviceType) => (
                  <option key={serviceType._id} value={serviceType._id}>
                    {serviceType.name}
                  </option>
                ))}
              </select>
              {/* Vendor Title */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                Enter <span className="text-red-500">Vendor Title</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="title"
                name="title"
                placeholder="Vendor Title"
                required
                value={formData.vendorName}
                onChange={handleChange}
              />
              {/* Vendor Description  */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                Enter{" "}
                <span className="text-red-500">About Vendor Description</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <textarea
                rows="4"
                cols="50"
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="description"
                name="description"
                placeholder="Vendor Description"
                required
                value={formData.vendorDesName}
                onChange={handleChange}
              />
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">Upload Image</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="file"
                id="thumbnailImage"
                name="thumbnailImage"
                accept="image/*"
                onChange={handleFileChange}
                multiple
              />

            </div>
            <div>
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                Enter <span className="text-red-500"> Vendor Address</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              {/* streetName */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">Street Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="streetName"
                name="streetName"
                placeholder="Street Name"
                required
                value={formData.streetName}
                onChange={handleChange}
              />
              {/* city */}
              {/* <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">City Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="city"
                name="city"
                placeholder="City Name"
                required
                value={formData.city}
                onChange={handleChange}
              /> */}
              {/* district */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">District Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="district"
                name="district"
                placeholder="District Name"
                required
                value={formData.district}
                onChange={handleChange}
              />
              {/* state */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">State Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="state"
                name="state"
                placeholder="State Name"
                required
                value={formData.state}
                onChange={handleChange}
              />
              {/* country */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">Country Name</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="country"
                name="country"
                placeholder="Country Name"
                required
                value={formData.country}
                onChange={handleChange}
              />
              {/* pinCode */}
              <label
                className="block text-gray-600 text-sm font-medium mt-2 mb-2"
                htmlFor="name"
              >
                <span className="text-red-500">PinCode</span>
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                type="text"
                id="pinCode"
                name="pinCode"
                placeholder="PinCode"
                required
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-center  mt-4">
            <Button type="submit" className="bg-[#bd0065] px-6 py-2 font-poppins font-medium text-[16px] hover:shadow-pink-400
             shadow-md rounded-md mb-5 text-white">
              {initialValues ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
