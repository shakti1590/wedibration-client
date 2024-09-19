
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Catering from "../assets/pexels-fu-zhichao-176355-587741-scaled.jpg";
import Mehandi from "../assets/pexels-antonytrivet-13647131-1-scaled.jpg";
import Photoshoot from "../assets/pexels-jibarofoto-1787220-scaled.jpg";
import Transport from "../assets/pexels-hson-5542265-scaled.jpg";
import maldivesPic from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import fortPic from "../assets/pexels-riya-deb-143969192-10461752-scaled.jpg";
import weddingHall from "../assets/amish-thakkar-BEdxXAiRfRM-unsplash-scaled.jpg";
import pizza from "../assets/Pizza.jpg";
import chicken from "../assets/chicken.png";
import burger from "../assets/burger.jpg";
import hotdog from "../assets/hotdog.jpg";
import { useState } from "react";

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
      <FaArrowAltCircleLeft onClick={onClick} className="text-white text-3xl" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
      <FaArrowAltCircleRight
        onClick={onClick}
        className="text-white text-3xl"
      />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "FLAVORS THAT CELEBRATE LOVE",
    buttonText: "Get Expert Advice",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576842546422-60562b9242ae?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A SPECIAL DAY DESERVES SPECIAL TASTE",
    buttonText: "Get Expert Advice",
  },
  {
    image:
      "https://images.unsplash.com/photo-1480455454781-1af590be2a58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PERFECT PLANNING FOR YOUR PERFECT DAY",
    buttonText: "Get Expert Advice",
  },
];

const tags = ["veg", "non-veg", "all"];

const images = {
  veg: [Catering, Transport, maldivesPic],
  "non-veg": [Mehandi, Photoshoot, fortPic,],
  all: [
    Catering, Transport, maldivesPic,
    Mehandi, Photoshoot, fortPic,
  ],
};
  const vegMenu = [
    {
      name: "Garden Salad",
      description: "Fresh mixed greens with house dressing",
      price: 8.99,
    },
    {
      name: "Vegetable Pasta",
      description: "Penne with seasonal vegetables in tomato sauce",
      price: 12.99,
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy Arborio rice with assorted mushrooms",
      price: 14.99,
    },
    {
      name: "Vegetable Stir Fry",
      description: "Mixed vegetables in a savory sauce with rice",
      price: 11.99,
    },
    {
      name: "Eggplant Parmesan",
      description: "Breaded eggplant with marinara and mozzarella",
      price: 13.99,
    },
  ];

  const nonVegMenu = [
    {
      name: "Grilled Chicken",
      description: "Herb-marinated chicken breast with roasted potatoes",
      price: 14.99,
    },
    {
      name: "Beef Burger",
      description: "Angus beef patty with lettuce, tomato, and special sauce",
      price: 11.99,
    },
    {
      name: "Salmon Fillet",
      description: "Grilled salmon with lemon butter sauce",
      price: 16.99,
    },
    {
      name: "Shrimp Scampi",
      description: "Garlic shrimp with linguine pasta",
      price: 15.99,
    },
    {
      name: "BBQ Ribs",
      description: "Slow-cooked pork ribs with homemade BBQ sauce",
      price: 18.99,
    },
  ];
const foodItems = [
  { id: 1, name: "Pizza", image: pizza },
  { id: 2, name: "Burger", image: burger },
  {
    id: 3,
    name: "Chicken Tabaka with sauce",
    image: chicken,
  },
  { id: 4, name: "Hot Dog", image: hotdog },
];

function Caterers() {
      const [activeTag, setActiveTag] = useState("all");

      const handleTagClick = (tag) => {
        setActiveTag(tag);
      };
      const [activeMenu, setActiveMenu] = useState("veg");
      const [showAll, setShowAll] = useState(false);
      const [hoveredIndex, setHoveredIndex] = useState(null);

 const MenuItem = ({ name, description, price }) => (
  <div className="border-b border-gray-200 py-4">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="text-green-600 font-bold">${price}</span>
    </div>
    <p className="text-gray-600 mt-1">{description}</p>
  </div>
);
  const displayedMenu = activeMenu === "veg" ? vegMenu : nonVegMenu;
  const menuToShow = showAll ? displayedMenu : displayedMenu.slice(0, 3);
      
  return (
    <>
      <Navbar />
      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <button className="mt-8 px-6 py-3 text-lg font-semibold text-pink-600 bg-white rounded-lg hover:bg-gray-200">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Menu section */}
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
        <p className="mb-8 ">
          <b>Beyond Catering:</b> We Create Wedding Dinning Experiences. Your
          Dream Wedding Menu Starts Here.
        </p>
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 rounded-l-full ${
              activeMenu === "veg" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setActiveMenu("veg");
              setShowAll(false);
            }}
          >
            Vegetarian
          </button>
          <button
            className={`px-6 py-2 rounded-r-full ${
              activeMenu === "nonveg" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setActiveMenu("nonveg");
              setShowAll(false);
            }}
          >
            Non-Vegetarian
          </button>
        </div>
        <div className="text-center font-bold mb-4">
          {activeMenu === "veg"
            ? "Starting Rate = 300/Plate"
            : "Starting Rate = 500/Plate"}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {menuToShow.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
        {!showAll && displayedMenu.length > 3 && (
          <div className="text-center mt-4">
            <button
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500"
              onClick={() => setShowAll(true)}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* // gallery section */}
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-black text-3xl font-semibold mt-7 justify-center">
          Food Gallery
        </h1>
        <div className="flex justify-center space-x-4 mb-8 mt-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeTag === tag
                  ? "bg-pink-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {images[activeTag].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${activeTag} image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
      {/* Call to action */}
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold leading-tight text-gray-900 ">
              If you are confused about what menu to select and what not.
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg">
              So, Don't worry about it Contact us right now. To choose right
              dish at your table.
            </p>
            <a
              href="/contact-us"
              class="text-white hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-pink-600 hover:bg-pink-500 focus:outline-none focus:ring-primary-800"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>

      {/* Food gallery */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {foodItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? "col-span-2 row-span-2 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              {hoveredIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <p className="text-lg font-bold text-white">{item.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Caterers;
