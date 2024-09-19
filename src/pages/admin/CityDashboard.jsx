import React, { useState, useEffect } from "react";
import {
  cityAdd,
  cityUpdate,
  deleteCity,
  getCityDetails,
} from "@/actions/cityActions";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import AdminNav from "./AdminNav";
import "./Dashboard.css";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { getServiceDetails } from "@/actions/servicesActions";

const TABLE_HEAD = ["Name", "Services"];

function CityDashboard() {
  const dispatch = useDispatch();
  const { cities, loading } = useSelector((state) => state.cities);
  const { services } = useSelector((state) => state.services);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [cityName, setCityName] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [currentCity, setCurrentCity] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    newName: "",
    newSlug: "",
    serviceIds: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resultsPerPage = 10;
  const totalPages = Math.ceil(cities.length / resultsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentTableData = cities.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  useEffect(() => {
    dispatch(getCityDetails());
    dispatch(getServiceDetails());
  }, [dispatch]);

  const handleServiceSelect = (e) => {
    const selectedServiceId = e.target.value;
    if (selectedServiceId && !selectedServices.includes(selectedServiceId)) {
      setSelectedServices([...selectedServices, selectedServiceId]);
      setFormData({
        ...formData,
        serviceIds: [...formData.serviceIds, selectedServiceId],
      });
    }
  };

  const handleRemoveService = (serviceId) => {
    setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    setFormData({
      ...formData,
      serviceIds: formData.serviceIds.filter((id) => id !== serviceId),
    });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openUpdateModal = (city) => {
    setCurrentCity(city);
    setFormData({
      newName: city.name, // Pre-fill with current city name
      newSlug: city.slug || "", // Assuming city might have a slug or it's empty initially
      serviceIds: [],
    });
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setCurrentCity(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(cityAdd(cityName, serviceId));
    closeModal();
    dispatch(getCityDetails()); // Re-fetch data after adding a city
  };
  const openDeleteModal = (cityId) => {
    dispatch(deleteCity(cityId));
    dispatch(getCityDetails()); // Re-fetch data after adding a city
  };


  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      newSlug: formData.newName.toLowerCase().replace(/\s+/g, "-"), // Generate slug from the new name
    };
    if (currentCity) {
      dispatch(cityUpdate(currentCity._id, dataToSend));
      closeUpdateModal();
      dispatch(getCityDetails()); // Re-fetch data after adding a city
    }
    // You can now send dataToSend to your API or perform other actions
    closeUpdateModal();
  };
  return (
    <div>
      <AdminNav />
      <section className="home">
        <div className="container">
          <div className="row ">
            <div className="col-right flex flex-row gap-10 justify-between  w-full">
              <div className="item-box">
                <div className="flex flex-row gap-3 justify-between items-center">
                  <div className="flex flex-row gap-3 items-center">
                  <i className='bx bxs-city icon text-[#E25C25] text-[25px]' ></i>
                    <div className=" text-2xl font-semibold">
                      Cities Dashboard
                    </div>
                  </div>
                  <div className="bg-[#E25C25] hover:text-white hover:shadow-orange-300 shadow-lg p-2 rounded-lg text-white font-poppins font-semibold items-center">
                    <button onClick={openModal}>
                      Add New City <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* add city model */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center px-2 z-50   overflow-y-auto">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white p-4 rounded-lg z-50 mt-[130px]  ">
                  <span
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-2xl cursor-pointer"
                  >
                    &#x2716;
                  </span>
                  <h2 className="text-2xl font-bold mb-2 text-center">
                    Add City{" "}
                  </h2>
                  <div className="p-3">
                    <form>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">City Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="city"
                          name="city"
                          placeholder="City Name"
                          required
                          value={cityName}
                          onChange={(e) => setCityName(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mt-4 mb-2"
                          htmlFor="name"
                        >
                          Select{" "}
                          <span className="text-red-500">Service Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <select
                          onChange={(e) => {
                            setServiceId(e.target.value);
                          }}
                          className="w-full py-2 outline-none border rounded-md shadow-inner"
                        >
                          <option>Select service</option>
                          {services.map((service) => (
                            <option key={service._id} value={service._id}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center justify-center mt-10 ">
                        <button
                          className="px-10 py-2 bg-[#bd0065] text-white font-medium rounded-lg hover:shadow-pink-800 shadow-md"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* update city model */}
            {isUpdateModalOpen && currentCity && (
              <div className="fixed inset-0 flex items-center justify-center px-2 z-50   overflow-y-auto">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white p-4 rounded-lg z-50 mt-[130px]  ">
                  <span
                    onClick={closeUpdateModal}
                    className="absolute top-2 right-2 text-2xl cursor-pointer"
                  >
                    &#x2716;
                  </span>
                  <h2 className="text-2xl font-bold mb-2 text-center">
                    Update City{" "}
                  </h2>
                  <div className="p-3">
                    <form onSubmit={handleUpdateSubmit}>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          City ID:{" "}
                          <span className="text-red-500">
                            {currentCity._id}
                          </span>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">City Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="newName"
                          name="newName"
                          placeholder="City Name"
                          required
                          value={formData.newName}
                          onChange={handleChange}
                        />

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
                            .filter(
                              (service) =>
                                !selectedServices.includes(service._id)
                            )
                            .map((service) => (
                              <option key={service._id} value={service._id}>
                                {service.name}
                              </option>
                            ))}
                        </select>

                        <div className="mt-4">
                          {selectedServices.map((serviceId) => {
                            const service = services.find(
                              (service) => service._id === serviceId
                            );
                            return (
                              <div
                                key={serviceId}
                                className="w-[150px] flex items-center text-[12px] justify-between bg-pink-200 px-3 py-1 rounded-md mb-2"
                              >
                                <span>{service?.name}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveService(serviceId)}
                                  className="text-red-500 font-bold"
                                >
                                  ✕
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 ">
                        <button
                          className="px-10 py-2 bg-[#bd0065] text-white font-medium rounded-lg hover:shadow-pink-800 shadow-md"
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {loading ? (
              <Loader />
            ) : (
              <Card className="h-full w-full p-5">
                <CardBody className="overflow-scroll px-0">
                  <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th
                            key={head}
                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold leading-none font-poppins text-[#E25C25] opacity-100"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentTableData.map(
                        ({ _id, name, services }, index) => {
                          const isLast = index === currentTableData.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
                          return (
                            <tr key={_id}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {name}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {services
                                    .map((service) => service.name)
                                    .join(", ")}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Tooltip content="Edit User">
                                  <IconButton
                                    variant="text"
                                    onClick={() =>
                                      openUpdateModal({ _id, name })
                                    }
                                  >
                                    <PencilIcon className="h-4 w-4" />
                                  </IconButton>
                                </Tooltip>
                              </td>
                              <td>
                                <Tooltip content="Delete User">
                                  <IconButton
                                    variant="text"
                                    onClick={() => openDeleteModal(_id)}
                                  >
                                    <MdDelete className="h-4 w-4 text-red-600 " />
                                  </IconButton>
                                </Tooltip>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Page {currentPage} of {totalPages}
                  </Typography>
                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CityDashboard;
