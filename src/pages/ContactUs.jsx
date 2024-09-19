import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Optional for showing success/failure messages
const BASE_API = import.meta.env.VITE_BASE_API;

function ContactUs() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_API}/api/email/contact`, formData);
      toast.success("Message sent successfully!"); // Optional toast message
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form after submission
    } catch (error) {
      toast.error("Failed to send message, please try again."); // Optional toast message
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.korilu.it/wp/wp-content/uploads/2020/03/contact-us-3.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>
      <section className="contact">
        <div className="row">
          <div className="col-2">
            <h2 className="font-semibold text-2xl">
              <i className="bx bxs-message-square-dots"></i> Contact Us
            </h2>
            <p>
              We're Here to Help! Reach Out for Support, Inquiries, or Just to
              Say Hello.
            </p>
            <form onSubmit={handleSubmit}>
              {/* <input type="text" placeholder="Name" name="" /> */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                aria-label="Email ID"
              />
              <input
                type="tel"
                placeholder="Phone No"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                aria-label="Phone Number"
              />
              <div className="pt-3">
                {/* <textarea
                  rows="3"
                  placeholder="Enter You Message"
                  className="px-5 pt-2"
                /> */}
                <textarea
                  rows="3"
                  placeholder="Enter Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl"
                  aria-label="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Submit Message
              </button>
            </form>
          </div>
          <div className="col-2">
            <h2 className="font-semibold text-2xl">
              <i className="bx bxs-buildings"></i> Reach Us
            </h2>
            <p>
              Connect with Us: Call, Email, or Visit - We're Just a Message
              Away.
            </p>
            <ul>
              <li>
                <i className="bx bxs-phone"></i>&nbsp; +91 63883 74921
              </li>
              <li>
                <i className="bx bxs-phone"></i>&nbsp; +91 87567 67567
              </li>
              <li>
                <i className="bx bxs-envelope"></i>&nbsp; info@wedibration.com
              </li>
              <li>
                <i className="bx bxs-map"></i>&nbsp; Varanasi, Uttar Pradesh,
                India
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
