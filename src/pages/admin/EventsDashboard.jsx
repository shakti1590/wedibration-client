import { RiDashboard2Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventsDetails,
  eventAdd,
  eventUpdate,
  deleteEvent,
  clearErrors,
} from "../../actions/eventsActions";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventForm from "../../components/EventForm";
import EventTable from "../../components/EventTable";
import AdminNav from "./AdminNav";

const EventsDashboard = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.events);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    dispatch(getEventsDetails());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  const handleAddEvent = (event) => {
    dispatch(eventAdd(event));
    setIsAddModalOpen(false);
  };

  const handleUpdateEvent = (event) => {
    dispatch(eventUpdate(currentEvent._id, event));
    setIsUpdateModalOpen(false);
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(getEventsDetails());
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openUpdateModal = (event) => {
    setCurrentEvent(event);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setCurrentEvent(null);
    setIsUpdateModalOpen(false);
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
                  <i className='bx bxs-user-detail icon text-[#E25C25] text-[25px]' ></i>
                    {/* <RiDashboard2Line size={25} className="text-[#E25C25] " /> */}
                    <div className=" text-2xl font-semibold">
                      Vendor Dashboard
                    </div>
                  </div>
                  <div className="bg-[#E25C25] hover:text-white hover:shadow-orange-300 shadow-lg p-2 rounded-lg text-white font-poppins font-semibold items-center">
                    <button
                     onClick={openAddModal}
                    >
                      Add New Event <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {isAddModalOpen && (
          <EventForm
            isOpen={isAddModalOpen}
            onClose={closeAddModal}
            onSubmit={handleAddEvent}
          />
        )}

        {isUpdateModalOpen && currentEvent && (
          <EventForm
            isOpen={isUpdateModalOpen}
            onClose={closeUpdateModal}
            onSubmit={handleUpdateEvent}
            initialValues={currentEvent}
          />
        )}

            {loading ? (
              <Loader />
            ) : (
              <Card className="h-full w-full p-5">
                <CardBody className="overflow-scroll px-0">
                  <EventTable
                    events={events}
                    onEdit={openUpdateModal}
                    onDelete={handleDeleteEvent}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsDashboard;
