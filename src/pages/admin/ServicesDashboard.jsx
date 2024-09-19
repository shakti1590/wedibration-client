import React, { useState, useEffect } from "react";
import {
  deleteService,
  getServiceDetails,
  serviceAdd,
  serviceUpdate,
} from "@/actions/servicesActions";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
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
  Avatar,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Thumbnail Image","Services"];

function ServicesDashboard() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null); // State for image
  const [currentServices, setCurrentServices] = useState(null);
  const { services, loading } = useSelector((state) => state.services);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const totalPages = Math.ceil(services.length / resultsPerPage);

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

  const currentTableData = services.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  useEffect(() => {
    dispatch(getServiceDetails());
  }, [dispatch, isModalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openUpdateModal = (service) => {
    setCurrentServices(service);
    setServiceName(service.name); // Set initial value
    setUpdateModalOpen(true);
  };

  // const closeUpdateModal = () => {
  //   setCurrentServices(null);
  //   setUpdateModalOpen(false);
  // };
  const closeUpdateModal = () => {
    setCurrentServices(null);
    setServiceName("");
    setThumbnailImage(null); // Clear image
    setUpdateModalOpen(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(serviceAdd(serviceName));
  //   closeModal();
  //   // dispatch(getServiceDetails()); // Re-fetch data after adding a city
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (thumbnailImage) {
      dispatch(serviceAdd(serviceName, thumbnailImage));
      closeModal();
    } else {
      toast.error("Please upload a thumbnail image.");
    }
  };

  const handleImageChange = (e) => {
    setThumbnailImage(e.target.files[0]);
  };

  const openDeleteModal = (serviceId) => {
    dispatch(deleteService(serviceId));
    dispatch(getServiceDetails()); // Re-fetch data after adding a city
  };

  // const handleUpdateSubmit = async (e) => {
  //   e.preventDefault();
  //   if (currentServices) {
  //     dispatch(serviceUpdate(currentServices._id, currentServices.name));
  //     closeUpdateModal();
  //     // dispatch(getServiceDetails()); // Re-fetch data after adding a city
  //   }
  // };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (currentServices) {
      dispatch(serviceUpdate(currentServices._id, serviceName, thumbnailImage));
      closeUpdateModal();
    } else {
      toast.error("Service details are missing.");
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
                  <i className="bx bx-archive icon text-[#E25C25] text-[25px]"></i>
                    <div className=" text-2xl font-semibold">
                      Service Dashboard
                    </div>
                  </div>
                  <div className="bg-[#E25C25] hover:text-white hover:shadow-orange-300 shadow-lg p-2 rounded-lg text-white font-poppins font-semibold items-center">
                    <button onClick={openModal}>
                      Add New Service <i className="bi bi-arrow-right"></i>
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
                    Add Service{" "}
                  </h2>
                  <div className="p-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Service Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="Service"
                          name="Service"
                          placeholder="Service Name"
                          required
                          value={serviceName}
                          onChange={(e) => setServiceName(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="thumbnail"
                        >
                          Upload{" "}
                          <span className="text-red-500">Thumbnail Image</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          type="file"
                          id="thumbnail"
                          name="thumbnail"
                          accept="image/*"
                          onChange={handleImageChange}
                          required
                        />
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
            {/* update city model */}
            {isUpdateModalOpen && currentServices && (
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
                          Service ID:{" "}
                          <span className="text-red-500">
                            {currentServices._id}
                          </span>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Service Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        {/* <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="services"
                          name="service"
                          placeholder="Service Name"
                          required
                          value={currentServices.name}
                          onChange={(e) =>
                            setCurrentServices({
                              ...currentServices,
                              name: e.target.value,
                            })
                          }
                        /> */}
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="services"
                          name="service"
                          placeholder="Service Name"
                          required
                          value={serviceName}
                          onChange={(e) => setServiceName(e.target.value)}
                        />
                      </div>

                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="thumbnail"
                        >
                          Upload{" "}
                          <span className="text-red-500">Thumbnail Image</span>
                        </label>
                        <input
                          type="file"
                          id="thumbnail"
                          name="thumbnail"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
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
                        ({ _id, name, thumbnailImage }, index) => {
                          const isLast = index === currentTableData.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
                          return (
                            <tr key={_id}>
                              <td className={classes}>
                                {thumbnailImage && thumbnailImage.url ? (
                                  <Avatar
                                    src={thumbnailImage.url}
                                    alt={name}
                                    size="sm"
                                  />
                                ) : (
                                  <Avatar src="" alt="No Image" size="sm" />
                                )}
                              </td>
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

export default ServicesDashboard;
