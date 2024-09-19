import React, { useState, useEffect } from "react";
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
const BASE_API = import.meta.env.VITE_BASE_API;
import { deleteLoveStory, getLoveStory } from "@/actions/loveStoryAction";
import axios from "axios";

const TABLE_HEAD = [
  "Couple Name",
  "Mobile Number",
  "IsApproved",
  "Toggle",
  "Delete",
];

function LoveStoryDashboard() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.allloveStory);
  const [currentPage, setCurrentPage] = useState(1);

  console.log("data->>>", data);
  const resultsPerPage = 10;
  const totalPages = Math.ceil(data.length / resultsPerPage);

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

  const currentTableData = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  console.log("currentTableData", currentTableData);

  useEffect(() => {
    dispatch(getLoveStory());
  }, [dispatch]);

  
  const openDeleteModal = (Id) => {
    dispatch(deleteLoveStory(Id));
    dispatch(getLoveStory()); // Re-fetch data after adding a city
  };

  const handleToggleApproval = async (id, newApprovalStatus) => {
    try {
      const response = await axios.put(`${BASE_API}/api/loveStory/${id}/approval`, {
        approved: newApprovalStatus,
      });
  
      if (response.data.success) {
        toast.success("Approval status updated successfully");
        dispatch(getLoveStory()); // Re-fetch the data to reflect the changes
      } else {
        toast.error("Failed to update approval status");
      }
    } catch (error) {
      toast.error("Error updating approval status");
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
                    <i className="bx bxs-cable-car icon text-[#E25C25] text-[25px]"></i>
                    <div className=" text-2xl font-semibold">
                      Love Story Dashboard
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                        ({ _id, coupleName, mobileNo, approved }, index) => {
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
                                  {coupleName}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {mobileNo}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {approved ? "Yes" : "No"}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <label className="switch">
                                  <input
                                    type="checkbox"
                                    checked={approved}
                                    onChange={() =>
                                      handleToggleApproval(_id, !approved)
                                    }
                                  />
                                  <span className="slider round"></span>
                                </label>
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

export default LoveStoryDashboard;
