import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Badge  from "../assets/badge.png";
import call from "../assets/call.png";
import marriage from "../assets/marriage.png"
import { badge } from "@material-tailwind/react";

function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="choose">
            <div className="row">
                <div className="col-1">
                    <p><a href="">Wedibration</a> - Your Premier Wedding Vendor Marketplace
                        At Wedibration, we know that your wedding day is one of the most cherished moments of your life—a day filled with love, laughter, and unforgettable memories. Our mission is to simplify the wedding planning process by connecting you with the finest wedding vendors across India, all in one convenient online platform.</p>
                    <h2>Why Choose Wedibration?</h2>
                    <p>We understand that every couple has a unique vision for their special day, and finding the right vendors to bring that vision to life can be overwhelming. That's why wedibration was created—to be your trusted partner in planning the wedding of your dreams. Whether you're searching for the perfect venue, a talented photographer, or a creative florist, our curated directory of top-rated vendors is designed to cater to your every need.</p>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-content">
                            <img src={Badge} alt="" />
                            <h4>Our Commitment to Quality</h4>
                            <p>At Wedibration, we are committed to offering only the best. Each vendor listed on our platform is carefully vetted to ensure they meet our high standards of quality, reliability, and professionalism. Our easy-to-use platform allows you to browse through detailed profiles, read genuine customer reviews, and compare services, making it easier for you to make informed decisions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-content">
                            <img src={marriage} alt="" />
                            <h4>Personalized Wedding Planning</h4>
                            <p>We believe that your wedding should reflect your unique style and personality. That’s why we offer personalized recommendations based on your preferences, helping you find the vendors that align perfectly with your vision. With wedibration, you can plan your wedding your way, with tools and resources that make the process smooth and enjoyable.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-content">
                            <img src={call} alt="" />
                            <h4>Exceptional Support</h4>
                            <p>Our dedicated customer support team is here to assist you every step of the way. From the moment you start your planning journey with us to the final details of your big day, we are here to ensure everything runs smoothly. Your satisfaction is our top priority, and we are committed to making your wedding planning experience as stress-free as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="join">
            <div className="row">
                <div className="col-2">
                    <h2><i className='bx bxs-bell'></i> Join the Wedibration Community</h2>
                    <p>Wedibration is your essential resource for all things wedding, from planning to final details. Join our community of couples who found their perfect vendors and celebrate your love story confidently. <i>Discover, Plan, and Celebrate with Wedibration — Where Dream Weddings Come to Life.</i></p>
                </div>
                <div className="col-2">
                    <a href=""><button>Join Our Community <i className='bx bxs-bell'></i></button></a>
                </div>
            </div>
        </section>

      <Footer />
    </>
  );
}

export default AboutUs;
