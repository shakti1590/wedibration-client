import React, { useState, useEffect } from "react";
import { RiDashboard2Line } from "react-icons/ri";
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
import { getCityDetails } from "@/actions/cityActions";
import { deleteServiceType, getServiceTypeDetails, serviceTypeAdd, serviceTypeUpdate } from "@/actions/serviceTypeActions";

const TABLE_HEAD = ["Services"];

function ServicesTypeDashboard() {
  const dispatch = useDispatch();
  const { serviceTypeCategories, loading } = useSelector((state) => state.serviceTypeCategories);
  const { services } = useSelector((state) => state.services);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [serviceTypeName, setServiceTypeName] = useState("");
  const [serviceTypeId, setServiceTypeId] = useState("");
  const [updateServiceId, setUpdateServiceTypeId] = useState("");
  const [currentServicesType, setCurrentServicesType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const totalPages = Math.ceil(serviceTypeCategories.length / resultsPerPage);

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

  const currentTableData = serviceTypeCategories.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  useEffect(() => {
    dispatch(getServiceTypeDetails());
  }, [dispatch, isModalOpen]);

  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openUpdateModal = (service) => {
    setCurrentServicesType(service);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setCurrentServicesType(null);
    setUpdateModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(serviceTypeAdd(serviceTypeName, serviceTypeId));
    closeModal();
  }

  const openDeleteModal = (Id) => {
    dispatch(deleteServiceType(Id));
    dispatch(getCityDetails()); // Re-fetch data 
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (currentServicesType) {
      dispatch(serviceTypeUpdate(currentServicesType._id, currentServicesType.name, updateServiceId));
      closeUpdateModal();
      // dispatch(getCityDetails()); // Re-fetch data 

    }
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
                    <RiDashboard2Line size={25} className="text-[#E25C25] " />
                    <div className=" text-2xl font-semibold">
                      Service-Type Dashboard
                    </div>
                  </div>
                  <div className="bg-[#E25C25] hover:text-white hover:shadow-orange-300 shadow-lg p-2 rounded-lg text-white font-poppins font-semibold items-center">
                    <button 
                    onClick={openModal}
                    >
                      Add New Service-Type <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* add serviceType model */}
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
                    Add Service-Type{" "}
                  </h2>
                  <div className="p-3">
                    <form 
                    onSubmit={handleSubmit}
                    >
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Service-Type Categories Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="ServiceType"
                          name="ServiceType"
                          placeholder="Service-Type Name"
                          required
                          value={serviceTypeName}
                          onChange={(e) => setServiceTypeName(e.target.value)}
                        />
                        <label
                          className="block text-gray-600 text-sm font-medium mt-4 mb-2"
                          htmlFor="name"
                        >
                          Select <span className="text-red-500">Service Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <select
                          onChange={(e) => {
                            setServiceTypeId(e.target.value);
                          }}
                          className="w-full py-2 outline-none border rounded-md shadow-inner"
                        >
                          <option>Select Service</option>
                          {services.map((service) => (
                            <option key={service._id} value={service._id}>{service.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center justify-center mt-10 ">
                        <button
                          className="px-10 py-2 bg-[#bd0065] text-white font-medium rounded-lg hover:shadow-pink-800 shadow-md"
                          type="submit"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {/* update serviceType model */}
            {isUpdateModalOpen && currentServicesType && (
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
                    Update Service-Type{" "}
                  </h2>
                  <div className="p-3">
                    <form 
                    onSubmit={handleUpdateSubmit}
                    >
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Service-Type ID:{" "}
                          <span className="text-red-500">
                            {currentServicesType._id}
                          </span>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">Service-Type Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="serviceTypeCategories"
                          name="serviceType"
                          placeholder="Service-Sub Name"
                          required
                          value={currentServicesType.name}
                          onChange={(e) =>
                            setCurrentServicesType({
                              ...currentServicesType,
                              name: e.target.value,
                            })
                          }
                        />
                        <label
                          className="block text-gray-600 text-sm font-medium mt-4 mb-2"
                          htmlFor="name"
                        >
                          Select <span className="text-red-500">Service Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <select
                          onChange={(e) => {
                            setUpdateServiceTypeId(e.target.value);
                          }}
                          className="w-full py-2 outline-none border rounded-md shadow-inner"
                        >
                          <option>Select Services</option>
                          {services.map((service) => (
                            <option key={service._id} value={service._id}>{service.name}</option>
                          ))}
                        </select>
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
                      {currentTableData.map(({ _id, name }, index) => {
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
                                  onClick={() =>
                                    openDeleteModal(_id )
                                  }
                                >
                                  <MdDelete className="h-4 w-4 text-red-600 " />
                                </IconButton>
                              </Tooltip>
                            </td>
                          </tr>
                        );
                      })}
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

export default ServicesTypeDashboard;
