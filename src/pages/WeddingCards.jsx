import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./EditInvite.css";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

function WeddingCards() {
  const location = useLocation();
  const { cardId, label } = useParams();
  const { image } = location.state || {};

  if (!image) {
    return <div>No card selected!</div>;
  }

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    pieces: 100,
    deliveryAddress: "",
    relativeAddress: "",
    deliveryDate: "",
    paymentMethod: "cod",
    additionalRequirements: "",
  });

  const cardRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData here (e.g., send it to the backend)
    // console.log(formData);

    // Format formData into a message string
    const message = `Hello, I would like to place an order for physical invitation card with the following details:
    
    - *Name*: ${formData.name}
    - *WhatsApp Number*: ${formData.whatsapp}
    - *Minimum Pieces*: ${formData.pieces}
    - *Delivery Address*: ${formData.deliveryAddress}
    - *Relative Address*: ${formData.relativeAddress || 'N/A'}
    - *Preferred Delivery Date*: ${formData.deliveryDate}
    - *Payment Method*: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
    - *Additional Requirements*: ${formData.additionalRequirements || 'N/A'}`;

    // Admin's WhatsApp number
    const adminPhoneNumber = "8881635039";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect user to WhatsApp chat with admin
    window.open(whatsappUrl, "_blank");



    // Reset the form after submission if needed
    setFormData({
      name: "",
      whatsapp: "",
      pieces: 100,
      deliveryAddress: "",
      relativeAddress: "",
      deliveryDate: "",
      paymentMethod: "cod",
      additionalRequirements: "",
    });
  };

  return (
    <>
      <Navbar />
      <section className="edit-invite-page min-h-screen">
        <div className="row">
          <div className="app-invite ">
            <div className="preview-section-invite">
              <div
                className="card-invite "
                ref={cardRef}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="form-section-invite border border-pink-600 p-4 rounded-lg ">
              <div className="font-poppins text-[25px] p-5 flex justify-center items-center font-semibold">
                Please Fill the Requirements
              </div>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  className="outline-none rounded-md"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                {/* WhatsApp Number */}
                <input
                  type="tel"
                  name="whatsapp"
                  className="outline-none rounded-md"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                />

                {/* Minimum Pieces */}
                <label className="block mb-2 font-semibold font-poppins text-[14px] px-1">
                  Minimum Pieces Required :
                </label>
                <input
                  type="number"
                  name="pieces"
                  className="outline-none rounded-md"
                  placeholder="100"
                  min="100"
                  value={formData.pieces}
                  onChange={handleInputChange}
                  required
                />

                {/* Delivery Address */}
                <textarea
                  name="deliveryAddress"
                  rows="3"
                  className="outline-none rounded-md px-2 pt-2 border-none"
                  placeholder="Enter Delivery Address"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  required
                />

                {/* Relative Address (Optional) */}
                <textarea
                  name="relativeAddress"
                  className="outline-none rounded-md mt-5 px-2 pt-2  border-none"
                  placeholder="Enter Relative's Address (if applicable)"
                  value={formData.relativeAddress}
                  onChange={handleInputChange}
                />

                {/* Delivery Date */}
                <label className="block mt-4 mb-2 font-semibold font-poppins text-[14px] px-1">
                  Preferred Delivery Date
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  className="outline-none rounded-md  px-2 "
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  required
                />

                {/* Additional Requirements */}
                <textarea
                  name="additionalRequirements"
                  rows="3"
                  className="outline-none rounded-md mt-2 px-2 pt-2  border-none"
                  placeholder="Additional Requirements (optional)"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                />

                {/* Payment Method */}
                <label className="block mt-4 mb-2 font-semibold font-poppins text-[14px] px-1">
                  Payment Method :
                </label>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="cod"
                    className="block mb-2 font-semibold font-poppins text-[14px] "
                  >
                    Cash on Delivery
                  </label>

                  <input
                    type="radio"
                    id="online"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === "online"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="online"
                    className="block mb-2 font-semibold font-poppins text-[14px] "
                  >
                    Online Payment
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="mt-5 w-[220px] gap-2 bg-green-700 flex justify-center items-center hover:bg-white 
                   hover:text-green-700 border hover:border-green-700"
                >
                  <div>
                    <FaWhatsapp size={16} />
                  </div>{" "}
                  <div>Book Now on WhatsApp</div>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WeddingCards;
