import React, { useState, useEffect } from "react";
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
  deleteProduct,
  getProductsDetails,
  productAdd,
  productUpdate,
} from "@/actions/productAction";

const TABLE_HEAD = [
  "Product Name",
  "Product Category",
  "Product Sub-Category",
  "Price",
  "Location",
  "Edit",
  "Delete",
];

function ProductDashboard() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    location: "",
    price: "",
    productCategory: "",
    productSubCategory: "",
    files: null, // Updated to handle files
  });

  // console.log("formData->>>", formData);
  const handleChange = (e) => {
    if (e.target.type === "files") {
      setFormData({ ...formData, files: e.target.files }); // Store all selected files
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
    dispatch(getProductsDetails());
  }, [dispatch]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openUpdateModal = (product) => {
    // Set the current product details to the form state
    setCurrentProduct(product);
    setFormData({
      productName: product.productName,
      productCategory: product.productCategory,
      productSubCategory: product.productSubCategory,
      description: product.description,
      price: product.price,
      location: product.location,
      files: null,
    });
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setCurrentProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create FormData object
    const dataToSend = new FormData();
    dataToSend.append("productName", formData.productName);
    dataToSend.append("description", formData.description);
    dataToSend.append("location", formData.location);
    dataToSend.append("price", formData.price);
    dataToSend.append("productCategory", formData.productCategory);
    dataToSend.append("productSubCategory", formData.productSubCategory);

    if (formData.files) {
      dataToSend.append("files", formData.files); // Append files with key 'files'
    }

    // console.log("dataToSend->>", dataToSend); // For debugging: See what's in FormData

    dispatch(productAdd(dataToSend));
    closeModal();
    dispatch(getProductsDetails()); // Re-fetch data after adding a city
  };
  const openDeleteModal = (cityId) => {
    dispatch(deleteProduct(cityId));
    dispatch(getProductsDetails()); // Re-fetch data after adding a city
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (currentProduct) {
      // Generate slug from productName
      const slug = formData.productName
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
      updatedFormData.append("productName", formData.productName);
      updatedFormData.append("description", formData.description);
      updatedFormData.append("location", formData.location);
      updatedFormData.append("price", formData.price);
      updatedFormData.append("productCategory", formData.productCategory);
      updatedFormData.append("productSubCategory", formData.productSubCategory);

      updatedFormData.append("slug", slug);
      if (formData.files) {
        updatedFormData.append("files", formData.files); // Append files with key 'files'
      }

      // console.log(currentProduct._id);  // Log slug

      dispatch(productUpdate(currentProduct._id, updatedFormData));
      closeUpdateModal();
      dispatch(getProductsDetails()); // Re-fetch data after adding a city
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
                    <i className="bx bxs-store icon text-[#E25C25] text-[25px]"></i>
                    <div className=" text-2xl font-semibold">
                      Product Dashboard
                    </div>
                  </div>
                  <div className="bg-[#E25C25] hover:text-white hover:shadow-orange-300 shadow-lg p-2 rounded-lg text-white font-poppins font-semibold items-center">
                    <button onClick={openModal}>
                      Add New Product <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* add city model */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center px-2 z-50    overflow-y-auto">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white m-10 rounded-lg z-50 mt-[130px]  ">
                  <span
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-2xl cursor-pointer"
                  >
                    &#x2716;
                  </span>
                  <h2 className="text-2xl font-bold mb-2 text-center">
                    Add Product{" "}
                  </h2>
                  <div className="p-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Product Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="productName"
                          name="productName"
                          placeholder="Product Name"
                          required
                          value={formData.productName}
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
                          Enter <span className="text-red-500">Location</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">Price</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="price"
                          name="price"
                          placeholder="Price"
                          required
                          value={formData.price}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Product Category</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="productCategory"
                          name="productCategory"
                          placeholder="Product Category"
                          required
                          value={formData.productCategory}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">
                            Product Sub-Category
                          </span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="productSubCategory"
                          name="productSubCategory"
                          placeholder="Product-SubCategory"
                          required
                          value={formData.productSubCategory}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="thumbnail"
                        >
                          Upload <span className="text-red-500">Image</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="file"
                          id="files"
                          name="files"
                          multiple // Allow multiple file selection
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
            {isUpdateModalOpen && currentProduct && (
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
                    Update Product{" "}
                  </h2>
                  <div className="p-3">
                    <form onSubmit={handleUpdateSubmit}>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Product ID:{" "}
                          <span className="text-red-500">
                            {currentProduct._id}
                          </span>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Product Name</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="productName"
                          name="productName"
                          placeholder="Product Name"
                          required
                          value={formData.productName}
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
                          Enter <span className="text-red-500">Location</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter <span className="text-red-500">Price</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="price"
                          name="price"
                          placeholder="Price"
                          required
                          value={formData.price}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">Product Category</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="productCategory"
                          name="productCategory"
                          placeholder="Product Category"
                          required
                          value={formData.productCategory}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="name"
                        >
                          Enter{" "}
                          <span className="text-red-500">
                            Product Sub-Category
                          </span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="text"
                          id="productSubCategory"
                          name="productSubCategory"
                          placeholder="Product-SubCategory"
                          required
                          value={formData.productSubCategory}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          className="block text-gray-600 text-sm font-medium mb-2"
                          htmlFor="thumbnail"
                        >
                          Upload <span className="text-red-500">Image</span>
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded-md text-gray-700"
                          type="file"
                          id="files"
                          name="files"
                          multiple // Allow multiple file selection
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="flex items-center justify-center mt-10 ">
                        <button
                          className="px-10 py-2 bg-[#bd0065] text-white font-medium rounded-lg hover:shadow-pink-800 shadow-md"
                          type="submit"
                        >
                          Update Product
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
                          {
                            _id,
                            productName,
                            productCategory,
                            productSubCategory,
                            price,
                            location,
                          },
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
                                  {productName}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {productCategory}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {productSubCategory}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {price}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium font-poppins text-black "
                                >
                                  {location}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Tooltip content="Edit User">
                                  <IconButton
                                    variant="text"
                                    onClick={() =>
                                      openUpdateModal({
                                        _id,
                                        productName,
                                        productCategory,
                                        productSubCategory,
                                        price,
                                        location,
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

export default ProductDashboard;
