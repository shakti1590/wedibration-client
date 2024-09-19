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
import {
  blogAdd,
  blogUpdate,
  deleteBlog,
  getBlogsDetails,
} from "@/actions/blogAction";

const TABLE_HEAD = ["Title", "Author", "Created At", "Edit", "Delete"];

function BlogDashboard() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blog);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [currentBlog, setCurrentBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    file: null, // Updated to handle file
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

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

  useEffect(() => {
    dispatch(getBlogsDetails());
  }, [dispatch]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openUpdateModal = (blog) => {
    // Set the current blog details to the form state
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      author: blog.author,
      file: null,
    });
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setCurrentBlog(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create FormData object
    const dataToSend = new FormData();
    dataToSend.append("title", formData.title);
    dataToSend.append("description", formData.description);
    dataToSend.append("author", formData.author);
    if (formData.file) {
      dataToSend.append("file", formData.file); // Append file with key 'file'
    }

    dispatch(blogAdd(dataToSend));
    closeModal();
    dispatch(getBlogsDetails()); // Re-fetch data after adding a city
  };
  const openDeleteModal = (cityId) => {
    dispatch(deleteBlog(cityId));
    dispatch(getBlogsDetails()); // Re-fetch data after adding a city
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (currentBlog) {
      // Generate slug from title
      const slug = formData.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      // const updatedFormData = {
      //   ...formData,
      //   slug: slug,
      // };
       // Create FormData object
       const updatedFormData = new FormData();
       updatedFormData.append("title", formData.title);
       updatedFormData.append("description", formData.description);
       updatedFormData.append("author", formData.author);
       updatedFormData.append("slug", slug);
       if (formData.file) {
         updatedFormData.append("file", formData.file); // Append file with key 'file'
       }
 

      // console.log(currentBlog._id);  // Log slug

      dispatch(blogUpdate(currentBlog._id, updatedFormData));
      closeUpdateModal();
      dispatch(getBlogsDetails()); // Re-fetch data after adding a city
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
                    <i className="bx bxl-blogger icon text-[#E25C25] text-[25px]"></i>
                    <div className=" text-2xl font-semibold">
                      Blog Dashboard
                    </div>
                  </div>
                  <div className="bg-[#E25C25] hover:text-white hover:shadow-orange-300 shadow-lg p-2 rounded-lg text-white font-poppins font-semibold items-center">
                    <button onClick={openModal}>
                      Add New Blog <i className="bi bi-arrow-right"></i>
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
                    Add Blog{" "}
                  </h2>
                  <div className="p-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">Title</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Description</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="w-full px-3 py-2 borderTextArea bg-white rounded-md text-gray-700"
                          id="description"
                          name="description"
                          placeholder="Description"
                          required
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Author Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="author"
                          name="author"
                          placeholder="Author"
                          required
                          value={formData.author}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="thumbnail"
                        >
                          Upload{" "}
                          <span className="text-red-500">Image</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                        className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="file"
                          id="file"
                          name="file"
                          // accept="image/*"
                          // value={formData.file}
                          onChange={handleChange}
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
            {isUpdateModalOpen && currentBlog && (
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
                    Update Blog{" "}
                  </h2>
                  <div className="p-3">
                    <form onSubmit={handleUpdateSubmit}>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Blog ID:{" "}
                          <span className="text-red-500">
                            {currentBlog._id}
                          </span>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">Title</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Description</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="w-full px-3 py-2 borderTextArea bg-white rounded-md text-gray-700"
                          id="description"
                          name="description"
                          placeholder="Description"
                          required
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Author Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="author"
                          name="author"
                          placeholder="Author"
                          required
                          value={formData.author}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="thumbnail"
                        >
                          Upload{" "}
                          <span className="text-red-500">Image</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                        className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="file"
                          id="file"
                          name="file"
                          // accept="image/*"
                          // value={formData.file}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="flex items-center justify-center mt-10 ">
                        <button
                          className="px-10 py-2 bg-[#bd0065] text-white font-medium rounded-lg hover:shadow-pink-800 shadow-md"
                          type="submit"
                        >
                          Update Blog
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
                        (
                          { _id, title, description, author, createdAt },
                          index
                        ) => {
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
                                  {title}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {author}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {createdAt}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Tooltip content="Edit User">
                                  <IconButton
                                    variant="text"
                                    onClick={() =>
                                      openUpdateModal({
                                        _id,
                                        title,
                                        description,
                                        author,
                                      })
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

export default BlogDashboard;
