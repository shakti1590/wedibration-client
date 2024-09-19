import delhi_bg from "../assets/delhi_bg.webp";
import Venues from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import Catering from "../assets/pexels-fu-zhichao-176355-587741-scaled.jpg";
import Mehandi from "../assets/pexels-antonytrivet-13647131-1-scaled.jpg";
import Photoshoot from "../assets/pexels-jibarofoto-1787220-scaled.jpg";
import Transport from "../assets/pexels-hson-5542265-scaled.jpg";
import maldivesPic from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import fortPic from "../assets/pexels-riya-deb-143969192-10461752-scaled.jpg";
import weddingHall from "../assets/amish-thakkar-BEdxXAiRfRM-unsplash-scaled.jpg";
import card from "../assets/card.jpg";
import party from "../assets/party.webp";
import honeymoon from "../assets/honeymoon.webp";
import testimonialone from "../assets/testimonal1.png";
import testimonialtwo from "../assets/testimonial2.png";
import testimonialthree from "../assets/testimonial3.png";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LoveStory from "../components/LoveStory";
import ShopSection from "@/components/ShopSection";
import Banner from "@/components/Banner";
import { Link, useNavigate } from "react-router-dom";

// import Temp from "@/components/Temp";

const packages = [
  {
    title: "Shimla Kullu Manali",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/07/18131039/shimla-feature-compressed.jpg", // Replace with your image URL
    originalPrice: "₹35,000.00",
    discountedPrice: "₹28,000.00",
    rating: 5,
    link: "/shimla-kullu-manali-package",
  },
  {
    title: "Mosaic Ladakh",
    image:
      "https://www.alpineascents.com/wp-content/uploads/2017/09/ladakh-trek-e1635267234139.jpg", // Replace with your image URL
    originalPrice: "₹35,000.00",
    discountedPrice: "₹28,000.00",
    rating: 4,
    link: "/mosaic-ladakh-package",
  },
  {
    title: "Discover Kashmir",
    image:
      "https://bookingkashmir.com/wp-content/uploads/2023/10/imad-clicks-DsST40JDEoc-unsplash.jpg", // Replace with your image URL
    originalPrice: "₹14,999.00",
    discountedPrice: "₹11,499.00",
    rating: 5,
    link: "/kashmir-tour-package",
  },
];

function Home() {
  const navigate = useNavigate();
  const city = sessionStorage.getItem("city");

  return (
    <>
      <Navbar />
      {/* <Temp /> */}
      {/* ==== Banner Section ==== */}
      {/* <section className="banner">
        <div className="row">
          <div className="col">
            <img src={delhi_bg} alt="" />
          </div>
        </div>
      </section> */}
      <Banner />
      {/* ==== Endof Banner Section ====  */}

      {/* ==== Our Services ==== */}
      <section className="services">
        <div className="row">
          <div className="col-2">
            <h2>Our services</h2>
          </div>
          <div className="col-2">
            <button
              className="view-more"
              //  onclick="viewMore()"
            >
              <h5 id="viewMore">
                View More <i className="bx bx-right-arrow-alt"></i>
              </h5>
            </button>
          </div>
          <div className="col-4">
            <div className="card">
              <Link to={`/vendors/${city}/venues`}>
                <div className="card-content">
                  <img src={Venues} alt="" />
                </div>
                <h5>Venues</h5>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <Link to={`/vendors/${city}/photography`}>
                <div className="card-content">
                  <img src={Photoshoot} alt="" />
                </div>
                <h5>Photography</h5>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <Link to={`/caterers`}>
                <div className="card-content">
                  <img src={Catering} alt="" />
                </div>
                <h5>Catering</h5>
              </Link>
            </div>
          </div>
          {/* <div className="col-4">
            <div className="card">
              <Link to={`/makeup-artist`}>
                <div className="card-content">
                  <img src={Mehandi} alt="" />
                </div>
                <h5>Makeup Artists</h5>
              </Link>
            </div>
          </div> */}
          <div className="col-4">
            <div className="card">
              <Link to={`/mehendi-artists`}>
                <div className="card-content">
                  <img src={maldivesPic} alt="" />
                </div>
                <h5>Mehandi Artists</h5>
              </Link>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card">
              <Link to={`/court-marriage`}>
                <div className="card-content">
                  <img src={party} alt="" />
                </div>
                <h5>Court Marriage</h5>
              </Link>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card">
              <Link to={`/honeymoon-package`}>
                <div className="card-content">
                  <img src={honeymoon} alt="" />
                </div>
                <h5>Honeymoon Packages</h5>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <Link to={`/wedding-transport`}>
                <div className="card-content">
                  <img src={Transport} alt="" />
                </div>
                <h5>Wedding Transport</h5>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <Link to={`/e-invites`}>
                <div className="card-content">
                  <img src={card} alt="" />
                </div>
                <h5>Invitation Card</h5>
              </Link>
            </div>
          </div>
          <div className="col-4 hideDIV">
            <div className="card">
              <div className="card-content">
                <img src={maldivesPic} alt="" />
              </div>
              <h5>Destination Wedding</h5>
            </div>
          </div>
          <div className="col-4 hideDIV">
            <div className="card">
              <div className="card-content">
                <img src={maldivesPic} alt="" />
              </div>
              <h5>Invitation Card</h5>
            </div>
          </div>
          <div className="col-4 hideDIV">
            <div className="card">
              <div className="card-content">
                <img src={maldivesPic} alt="" />
              </div>
              <h5>Other Events</h5>
            </div>
          </div>
        </div>
      </section>
      {/* ==== Endof Our Services Section ==== */}
      {/* event gallery */}
      <section className="event-gallery">
        <div className="row flex justify-between">
          <div className="col-1 ">
            <h2>Event Gallery</h2>
            <p>
              Immerse yourself in the enchanting world of our event gallery,
              where every image tells a story of love, laughter, and
              celebration. Explore a curated collection of unforgettable moments
              captured in vibrant detail, each reflecting the essence of our
              passion for creating extraordinary events.
            </p>
          </div>
          <div className="col-5 ">
            <img src={weddingHall} className=" rounded-lg" alt="" />
            <div className="overlay">
              <h5>Wedding Sarees</h5>
              <button>
                Show More <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
          <div className="col-5">
            <img src={Photoshoot} className=" rounded-lg" alt="" />
            <div className="overlay">
              <h5>Photoshoot</h5>
              <button>
                Show More <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
          <div className="col-5">
            <img src={Mehandi} className=" rounded-lg" alt="" />
            <div className="overlay">
              <h5>Mehandi Designs</h5>
              <button>
                Show More <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
          <div className="col-5">
            <img src={maldivesPic} className=" rounded-lg" alt="" />
            <div className="overlay">
              <h5>Wedding Venues</h5>
              <button>
                Show More <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end event gallery */}
      <section>
        <div className="bg-gray-100 py-12">
          <h1 className="text-center text-3xl font-semibold text-black mb-8">
            HoneyMoon Packages
          </h1>
          <div className="flex justify-center space-x-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs"
                onClick={() => navigate(pkg.link)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold justify-center flex text-gray-800">
                    {pkg.title}
                  </h2>
                  {/* <div className="flex items-center my-2">
                    {[...Array(pkg.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-6 3.9 2.3-7.2L.2 7.5l7.4-.3L10 0l2.3 7.2 7.4.3-5.9 4.2L16 18.9z" />
                      </svg>
                    ))}
                  </div> */}
                  {/* <div className="text-gray-500 line-through">
                    {pkg.originalPrice}
                  </div> */}
                  {/* <div className="text-xl font-bold text-gray-800">
                    {pkg.discountedPrice}
                  </div> */}
                  {/* <button className="mt-4 w-full bg-[#F10081] text-white font-semibold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-green-600 transition duration-200">
                    Book Now
                  </button> */}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to={`/honeymoon-package`} className="text-[#F10081] text-[22px] font-semibold flex items-center hover:text-gray-900 transition duration-200">
              View More
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <LoveStory />
      <ShopSection />
      {/* Testimonial section */}
      <section className="testimonials">
        <div className="row">
          <div className="col-2">
            <h2>Testimonials</h2>
          </div>
          <div className="col-2">
            {/* <button
              className="view-more"
              // onclick="viewMoreTestimonials()"
            >
              <h5 id="viewMoreTestimonials">
                View More <i className="bx bx-right-arrow-alt"></i>
              </h5>
            </button> */}
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={testimonialthree} alt="" />
                <h4>Rahul & Dipti</h4>
                <span>Husband & Wife</span>
                <p>
                  Rahul and Dipti's wedding ceremony was an enchanting blend of
                  elegance and love. From the exquisite décor to the heartfelt
                  vows, every detail was meticulously planned, creating a
                  magical atmosphere that left guests spellbound. It was an
                  absolute honor to be part of their special day and witness the
                  beginning of their beautiful journey together.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={testimonialone} alt="" />
                <h4>Adam & Analia</h4>
                <span>Husband & Wife</span>
                <p>
                  Adam and Analia's wedding ceremony was a beautiful testament
                  to their love and faith. With heartfelt vows exchanged against
                  the backdrop of a serene chapel, their union radiated with the
                  purest essence of Christian values. It was an honor to witness
                  their sacred commitment, surrounded by family and friends, in
                  a celebration filled with grace, joy, and everlasting
                  blessings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={testimonialtwo} alt="" />
                <h4>Akalmeet & Kuljot</h4>
                <span>Husband & Wife</span>
                <p>
                  Akalmeet and Kuljot's wedding ceremony was a vibrant
                  celebration of love, rich in Punjabi traditions and heartfelt
                  moments. From the lively music and colorful attire to the warm
                  hospitality, their union truly embodied the spirit of Punjab.
                  It was a joyous occasion filled with laughter, dance, and
                  everlasting memories, honoring their heritage while marking
                  the start of a new chapter together.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-3 hideDIVTestimonials">
                    <div className="card">
                        <div className="card-content">
                            <img src={testimonialthree} alt="" />
                            <h4>Abhishek & Shruti</h4>
                            <span>Husband & Wife</span>
                            <p>Abhishek and Shruti's wedding ceremony was a breathtaking celebration of love and unity. From the mesmerizing decor to the heartfelt vows, every moment radiated pure joy and happiness. It was truly an honor to witness their beautiful union and be a part of their unforgettable journey.</p>
                        </div>
                    </div>
                </div> */}
        </div>
      </section>
      {/* Testimonial end */}
      {/* ==== Blogs ==== */}
      <section className="blogs">
        <div className="row">
          <div className="col-2">
            <h2 className="text-2xl ">Latest Blogs</h2>
          </div>
          <div className="col-2">
            <a href="/blog">
              <h5 className="text-md">
                View More <i className="bx bx-right-arrow-alt"></i>
              </h5>
            </a>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={maldivesPic} alt="" />
              </div>
              <h3 className="text-lg">
                Best Destinations Wedding Venues in Varanasi
              </h3>
              <p>
                Planning a wedding is an exciting journey, and when you choose a
                destination wedding, it becomes an ...
              </p>
              <a href="">
                <h6>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </h6>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={fortPic} alt="" />
              </div>
              <h3 className="text-lg">
                Best Destinations Wedding Venues in Varanasi
              </h3>
              <p>
                Planning a wedding is an exciting journey, and when you choose a
                destination wedding, it becomes an....
              </p>
              <a href="">
                <h6>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </h6>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={weddingHall} alt="" />
              </div>
              <h3 className="text-lg">
                Best Destinations Wedding Venues in Varanasi
              </h3>
              <p>
                Planning a wedding is an exciting journey, and when you choose a
                destination wedding, it becomes an....
              </p>
              <a href="">
                <h6>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </h6>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ==== Endof Blogs Section ==== */}
      <Footer />
    </>
  );
}

export default Home;
