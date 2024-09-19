import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import { RiDashboard2Line } from "react-icons/ri";
import { LuThumbsUp } from "react-icons/lu";
import { FaCity } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import AdminNav from "./AdminNav";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getCityDetails } from "@/actions/cityActions";
import { getServiceDetails } from "@/actions/servicesActions";
import { getEventsDetails } from "@/actions/eventsActions";

function Dashboard() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleModeSwitchClick = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  const dispatch = useDispatch();
  const { totalCount } = useSelector((state) => state.cities);
  const { totalServices } = useSelector((state) => state.services);
  const { totalEvents } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getCityDetails());
    dispatch(getServiceDetails());
    dispatch(getEventsDetails());
  }, [dispatch]);

  return (
    <div>
      <AdminNav />
      <section className="home">
        <div className="container">
          <div className="row ">
            <div className="col-right flex flex-row gap-10 justify-between  w-full">
              <div className="item-box">
                <div className="flex flex-row gap-3  items-center">
                  <RiDashboard2Line size={25} className="text-[#E25C25] " />
                  <div className=" text-2xl font-semibold">Dashboard</div>
                </div>
                <hr className="divider" />
                <div className="flex flex-row gap-20 justify-center mt-10 mb-10 items-center">
                  <div className="bg-blue-200 flex flex-col justify-center items-center w-[270px] py-5 rounded-xl gap-2">
                    <FaCity size={25} />
                    <div className="font-semibold">Total Cities</div>
                    <div className="text-[24px] font-medium">{totalCount}</div>
                  </div>
                  <div className="bg-yellow-100 flex flex-col justify-center items-center w-[270px] py-5 rounded-xl gap-2">
                    <LuThumbsUp size={25} />
                    <div className="font-semibold">Total Services</div>
                    <div className="text-[24px] font-medium">{totalServices}</div>
                  </div>
                  <div className="bg-purple-200 flex flex-col justify-center items-center w-[270px] py-5 rounded-xl gap-2">
                    <IoPeopleSharp size={25} />
                    <div className="font-semibold">Total Vendors</div>
                    <div className="text-[24px] font-medium">{totalEvents}</div>
                  </div>
                </div>
                <div>
                  <p>
                    Click the button below to complete your profile and get a
                    free consultation.
                  </p>
                  <Link to="/schedule-counselling/" className="profile-btn">
                    <button>
                      Get Started Now <i className="bi bi-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
