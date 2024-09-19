import React, { useEffect, useState } from "react";
import logo from "../assets/WedBration_logo.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearErrors, logout } from "../actions/loginAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_API = import.meta.env.VITE_BASE_API;

export const Navbar = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(
    sessionStorage.getItem("city") || ""
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get(`${BASE_API}/api/cities/`)
      .then((response) => {
        setCities(response.data.cities);
      })
      .catch((error) => {
        console.error("There was an error fetching the cities!", error);
      });
  }, []);

  const handleLocationSelection = (selectedLocation) => {
    setSelectedCity(selectedLocation);
    sessionStorage.setItem("city", selectedLocation);
    navigate(`/${selectedLocation.toLowerCase()}`);
  };

  const handleServicesClick = (e) => {
    if (!selectedCity) {
      e.preventDefault();
      toast.info("Please select a location first!");
    }
  };

  const logoutFun = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };

  return (
    <>
      {/* ==== Header ==== */}
      <div className="header">
        <div className="row">
          <div className="col-2">
            <ul>
              <li>
                <Link to="tel:  +91 63883 74921">
                  <i className="bx bxs-phone"></i>&nbsp;
                  <span> +91 63883 74921 </span>
                </Link>
              </li>
              <li>
                <Link to="mailto:info@wedibration.com">
                  <i className="bx bxs-envelope"></i>&nbsp;
                  <span>info@wedibration.com</span>
                </Link>
              </li>
              <li>
                <Select
                  onValueChange={handleLocationSelection}
                  value={selectedCity}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      placeholder="Select a location"
                      className="font-semibold"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Cities</SelectLabel>
                      {cities.map((city, index) => (
                        <SelectItem key={index} value={city.name}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <Link to="/new-vendor-setup-form">
              <button className="bg-white">
                List Your Business <i className="bx bx-right-arrow-alt"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="/">
              <img className="logo" src={logo} alt="" />
            </a>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About</a>
                </li>
                <li>
                  <a
                    href={`/${selectedCity ? selectedCity.toLowerCase() : ""}`}
                    onClick={handleServicesClick}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                {/* <select
                  id="dropdown"
                  // value={selectedValue}
                  // onChange={handleChange}
                >
                  <option value="">E-invite</option>
                  <option value="option1">E-invitation Card</option>
                  <option value="option2">Order Wedding Cards</option>
                </select> */}
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/blog">Blogs</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-3">
            {accessToken ? (
              <Link to="/login" onClick={logoutFun} className="group relative">
                <div className="absolute -bottom-2 text-sm font-semibold text-gray-600">
                  Logout
                </div>
              </Link>
            ) : (
              <a href="/login">
                <button>Log In</button>
              </a>
            )}
          </div>
        </div>
      </div>
      {/* ==== Endof Header ==== */}
    </>
  );
};
