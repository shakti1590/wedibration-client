import React, { useState } from "react";
import delhi_bg from "../assets/delhi_bg.webp";
import Venues from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import Catering from "../assets/pexels-fu-zhichao-176355-587741-scaled.jpg";
import Mehandi from "../assets/pexels-antonytrivet-13647131-1-scaled.jpg";
import Photoshoot from "../assets/pexels-jibarofoto-1787220-scaled.jpg";
import Transport from "../assets/pexels-hson-5542265-scaled.jpg";
import maldivesPic from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import fortPic from "../assets/pexels-riya-deb-143969192-10461752-scaled.jpg";
import weddingHall from "../assets/amish-thakkar-BEdxXAiRfRM-unsplash-scaled.jpg";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Gallery = () => {
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

  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="row">
          <div className="col">
            <h1 className="text-[40px] font-bold">Gallery</h1>
          </div>
        </div>
      </section>
      <section>
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
      </section>

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
      <Footer />
    </>
  );
};

export default Gallery;


  /* <section className="gallery">
            <div className="row">
                {/* <div className="col-1">
                    <div id="myBtnContainer">
                        <button className="btn active" 
                        >All</button>
                        <button className="btn" 
                        >Wedding Sarees</button>
                        <button className="btn" 
                        >Bridal Lehanga</button>
                        <button className="btn" 
                        >Blouse Dresigns</button>
                        <button className="btn" 
                        >Mehandi Designs</button>
                    </div>
                </div> */
// }
// {
  /* <div className="col4 weddingSarees">
                    <div className="card">
                        <div className="card-content">
                        <img src={Venues} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 mehandiDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Photoshoot} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 bridalLehanga">
                    <div className="card">
                        <div className="card-content">
                        <img src={Catering} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 weddingSarees">
                    <div className="card">
                        <div className="card-content">
                        <img src={Catering} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 bridalLehanga">
                    <div className="card">
                        <div className="card-content">
                        <img src={Mehandi} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 BlouseDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Mehandi} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 bridalLehanga">
                    <div className="card">
                        <div className="card-content">
                        <img src={maldivesPic} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 mehandiDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Venues} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 mehandiDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Photoshoot} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 mehandiDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Mehandi} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 weddingSarees">
                    <div className="card">
                        <div className="card-content">
                        <img src={maldivesPic} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 BlouseDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Catering} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 bridalLehanga">
                    <div className="card">
                        <div className="card-content">
                        <img src={Venues} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 BlouseDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Photoshoot} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 BlouseDesigns">
                    <div className="card">
                        <div className="card-content">
                        <img src={Transport} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col4 weddingSarees">
                    <div className="card">
                        <div className="card-content">
                        <img src={maldivesPic} alt="" />
                        </div>
                    </div>
                </div>
            </div> */
// }
// {
  /* </section> */
// }

