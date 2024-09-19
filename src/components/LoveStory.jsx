import React, { useState, useEffect } from "react";
import lovestory from "../assets/lovestory.png";
import { useDispatch } from "react-redux";
import { loveStoryAdd } from "@/actions/loveStoryAction";

const LoveStory = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    coupleName: "",
    mobileNo: "",
    loveStory: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;

  useEffect(() => {
    setCharCount(formData.loveStory.length);
  }, [formData.loveStory]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "loveStory" && value.length > maxChars) return;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.coupleName.trim() || charCount > maxChars) return;
    // console.log("Form submitted", formData);
    dispatch(loveStoryAdd(formData));

    // Simulate sending data to backend
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({ coupleName: "", mobileNo: "", loveStory: "" });
      // In a real application, you would navigate to the LoveStories page here
    }, 1000);
  };

  const isSubmitDisabled = !formData.coupleName.trim() || charCount > maxChars;

  return (
    <div className="flex min-h-screen bg-[#F8F4EF]">
      <div
        className="w-1/2 bg-cover bg-center pl-9"
        style={{ backgroundImage: `url(${lovestory})` }}
      ></div>
      <div className="w-1/2 p-8 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Share Your Love Story
          </h2>

          <div className="mb-4">
            <label
              className="text-black text-sm font-bold mb-2"
              htmlFor="coupleName"
            >
              Couple Name <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="coupleName"
              type="text"
              placeholder="Enter couple name"
              value={formData.coupleName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="text-black text-sm font-bold mb-2"
              htmlFor="mobileNo"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNo"
              type="tel"
              placeholder="Enter mobile number"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              className="text-black text-sm font-bold mb-2"
              htmlFor="loveStory"
            >
              Love Story Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="loveStory"
              placeholder="Share your love story here..."
              rows="4"
              value={formData.loveStory}
              onChange={handleChange}
              required
            ></textarea>
            <p
              className={`text-sm mt-1 ${
                charCount > maxChars ? "text-red-500" : "text-gray-500"
              }`}
            >
              {charCount}/{maxChars} characters
            </p>
          </div>

          <div className="flex items-center justify-center flex-col">
            <button
              className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ${
                isSubmitDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#F10081] hover:bg-black"
              }`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
            {isSubmitted && (
              <p className="text-green-600 mt-4">
                Your response has been submitted!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoveStory;

// import React from "react";
// import lovestory from "../assets/lovestory.png";

// const LoveStory = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

//   return (
//     <div className="flex min-h-screen bg-[#F8F4EF]">
//       <div
//         className="w-1/2 bg-cover bg-center pl-9"
//         style={{ backgroundImage: `url(${lovestory})` }}
//       ></div>
//       <div className="w-1/2 p-8 flex items-center justify-center">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         >
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Share Your Love Story
//           </h2>

//           <div className="mb-4">
//             <label
//               className=" text-black text-sm font-bold mb-2"
//               htmlFor="coupleName"
//             >
//               Couple Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="coupleName"
//               type="text"
//               placeholder="John & Jane Doe"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className=" text-black text-sm font-bold mb-2"
//               htmlFor="mobileNo"
//             >
//               Mobile Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobileNo"
//               type="tel"
//               placeholder="+1 (123) 456-7890"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               className=" text-black text-sm font-bold mb-2"
//               htmlFor="loveStory"
//             >
//               Love Story Message
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="loveStory"
//               placeholder="Share your love story here..."
//               rows="4"
//             ></textarea>
//           </div>

//           <div className="flex items-center justify-center">
//             <button className=" w-full bg-[#F10081] text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition duration-200">
//               Book Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoveStory;
