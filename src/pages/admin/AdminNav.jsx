import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaDoorOpen } from "react-icons/fa";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors, logout } from "../../actions/loginAction";
import { useDispatch, useSelector } from "react-redux";

function AdminNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarClosed, setSidebarClosed] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const { isAuthenticated, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, dispatch, navigate]);

  const handleToggleClick = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const handleSearchClick = () => {
    setSidebarClosed(true);
  };

  // const handleModeSwitchClick = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const logoutFun = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div>
      <nav className={`sidebar ${sidebarClosed ? "close" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <Link to="/">
                <img src="https://shorturl.at/Bk6Sh" alt="" />
              </Link>
            </span>

            <div className="text logo-text">
              <span className="name">Wedibration</span>
              <span className="profession">Admin Panel</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle" onClick={handleToggleClick}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={handleSearchClick}>
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className={`nav-link ${isActive("/admin-dashboard/")}`}>
                <Link to="/admin-dashboard/">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className={`nav-link ${isActive("/city")}`}>
                <Link to="/city">
                  <i className='bx bxs-city icon'></i>
                  <span className="text nav-text">City</span>
                </Link>
              </li>
              <li className={`nav-link ${isActive("/services")}`}>
                <Link to="/services">
                  <i className="bx bx-archive icon"></i>
                  <span className="text nav-text">Services</span>
                </Link>
              </li>
              {/* <li className={`nav-link ${isActive("/service-type")}`}>
                <Link to="/service-type">
                  <i className="bx bx-pie-chart-alt-2 icon"></i>
                  <span className="text nav-text">Service-Type</span>
                </Link>
              </li> */}
              <li className={`nav-link ${isActive("/events")}`}>
                <Link to="/events">
                <i className='bx bxs-user-detail icon' ></i>
                  <span className="text nav-text">Vendors</span>
                </Link>
              </li>
              <li className={`nav-link ${isActive("/blog-dashboard")}`}>
                <Link to="/blog-dashboard">
                <i className='bx bxl-blogger icon' ></i>
                  {/* <i className="bx bx-bar-chart-alt-2 icon"></i> */}
                  <span className="text nav-text">Blog</span>
                </Link>
              </li>
              <li className={`nav-link ${isActive("/product-dashboard")}`}>
                <Link to="/product-dashboard">
                <i className='bx bxs-store icon'></i>
                  <span className="text nav-text">Product</span>
                </Link>
              </li>
              <li className={`nav-link ${isActive("/honeymoon-dashboard")}`}>
                <Link to="/honeymoon-dashboard">
                <i className='bx bxs-cable-car icon'></i>
                  <span className="text nav-text">Honeymoon</span>
                </Link>
              </li>
              <li className={`nav-link ${isActive("/loveStory-dashboard")}`}>
                <Link to="/loveStory-dashboard">
                <i className='bx bxs-layer icon'></i>
                  <span className="text nav-text">Love Stories</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <Link to="/login" onClick={logoutFun}>
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </Link>
            </li>

            {/* <li className="mode" onClick={handleModeSwitchClick}>
              <div className="sun-moon">
                <i className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"} icon`}></i>
              </div>
              <span className="mode-text text">{isDarkMode ? "Light mode" : "Dark mode"}</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
