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
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_API = import.meta.env.VITE_BASE_API;

import { useParams, Link } from "react-router-dom";

function CityServices() {
  const [categories, setCategories] = useState([]);
  const city =  sessionStorage.getItem("city");
  // console.log(city)

  // const { city } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_API}/api/cities/${city}`)
      .then((response) => {
        setCategories(response.data.services);
      })
      .catch((error) => {
        console.error("There was an error fetching the cities!", error);
      });
  }, [city]);

  const handleServiceSelection = (selectedServices) => {
    navigate(`/vendors/${city}/${selectedServices.toLowerCase().replace(/ /g, "-")}`);
  };


  return (
    <>
      <Navbar />
      {/* ==== Our Services ==== */}
      <section className="services">
        <div className="row flex justify-start items-center ">
          <div className="text-2xl font-semibold flex justify-start items-center ">
          Plan a {city} Wedding
          </div>
          {categories.map((category, index) => {
            return (
              <div
                className="col-5"
                key={index}
                onClick={() => handleServiceSelection(category.slug)}
              >
                <div className="card">
                  <div className="card-content">
                    <img src={category.thumbnailImage.url} alt="" />
                  </div>
                  <h5>{category.name}</h5>
                </div>
              </div>
            );
          })}
          -
          {/* <div className="col-5">
            <div className="card">
              <div className="card-content">
                <img src={Catering} alt="" />
              </div>
              <h5>Catering</h5>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-content">
                <img src={Mehandi} alt="" />
              </div>
              <h5>Mehandi Artist</h5>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-content">
                <img src={Photoshoot} alt="" />
              </div>
              <h5>Photoshoot</h5>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-content">
                <img src={Transport} alt="" />
              </div>
              <h5>Transport</h5>
            </div>
          </div> */}
        </div>
      </section>
      {/* ==== Endof Our Services Section ==== */}

      <Footer />
    </>
  );
}

export default CityServices;
