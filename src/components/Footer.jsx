import React from 'react'
import loveHand from "../assets/pic-20.png";
import { Link } from 'react-router-dom';

export const Footer = () => {
  const city = sessionStorage.getItem("city").toLowerCase();

  return (
    <>
      {/* ==== Footer ==== */}
      <footer className="footer">
        <div className="row">
          <div className="col-3">
            <img src={loveHand} alt="" />
          </div>
          <div className="col-3">
            <h1 className="text-4xl font-bold">
              Get Ready For Your Wedding <span>Wedibration</span>
            </h1>
            <p>
              At Wedibration, we're more than just event planners - we're
              storytellers, dream-weavers, and creators of unforgettable
              moments. Founded with a passion for turning visions into reality,
              our journey began with a simple belief: every celebration deserves
              to be extraordinary.
            </p>
            <p>
              <a href="">
                Know More <i className="bx bx-right-arrow-alt"></i>
              </a>
            </p>
          </div>
          <div className="col-3">
            <h2 className="text-2xl font-bold">Subscribe Our Newsletter</h2>
            <p>
              Subscribe to our weekly Newsletter & receive updates via email.
            </p>
            <form>
              <input type="email" placeholder="Enter Your Email*" name="" />
              <input type="button" value="Subscribe Now" />
            </form>
          </div>
          <hr />
          <div className="col-5">
            <h4 className="footerMenuTitle">
              Quick Links{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </h4>
            <ul className="footerMenuContent">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/about-us">
                <li>About Us</li>
              </a>
              <a href="/gallery">
                <li>Gallery</li>
              </a>
              <a href="/blog">
                <li>Blogs</li>
              </a>
              <a href="/contact-us">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div className="col-5">
            <h4 className="footerMenuTitle">
              Our Services{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </h4>
            <ul className="footerMenuContent">
              <Link to={`/vendors/${city}/venues`}>
                <li>Venues</li>
              </Link>
              <Link to={`/caterers`}>
                <li>Catering</li>
              </Link>
              <Link to={`/mehendi-artists`}>
                <li>Mehandi Artist</li>
              </Link>
              {/* <a href="/">
                <li>Wedding Artist</li>
              </a> */}
              <Link to={`/vendors/${city}/photography`}>
                <li>Photography</li>
              </Link>
              <a href="/shop">
                <li>Shop Now</li>
              </a>
            </ul>
          </div>
          <div className="col-5">
            <h4 className="footerMenuTitle">
              E-Invitation{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </h4>
            <ul className="footerMenuContent">
              <a href="/e-invites">
                <li>Wedding</li>
              </a>
              <a href="/e-invites">
                <li>Sangeet</li>
              </a>
              <a href="/e-invites">
                <li>Mehandi</li>
              </a>
              <a href="/e-invites">
                <li>Birthday</li>
              </a>
              <a href="/e-invites">
                <li>Engagement</li>
              </a>
            </ul>
          </div>
          <div className="col-5">
            <h4 className="footerMenuTitle">
              Follow Us{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </h4>
            <ul className="footerMenuContent">
              <a href="https://www.facebook.com/profile.php?id=61565522472970">
                <li>
                  <i className="bx bxl-facebook"></i> Facebook
                </li>
              </a>
              <a href="https://www.instagram.com/wedibration/">
                <li>
                  <i className="bx bxl-instagram"></i> Instagram
                </li>
              </a>
              <a href="https://x.com/wedibration">
                <li>
                  <i className="bx bxl-twitter"></i> Twitter
                </li>
              </a>
              <a href="https://www.linkedin.com/in/wedi-bration-190a13319/">
                <li>
                  <i className="bx bxl-linkedin"></i> Linkedin
                </li>
              </a>
              <a href="https://www.quora.com/profile/Wedibration">
                <li>
                  <i className="bx bxl-quora"></i> Quora
                </li>
              </a>
            </ul>
          </div>
          <div className="col-5">
            <h4 className="footerMenuTitle">
              Contact Us{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </h4>
            <ul className="footerMenuContent">
              <a href="">
                <li>
                  <i className="bx bxs-phone"></i> +91-63883 74921
                </li>
              </a>
              <a href="">
                <li>
                  <i className="bx bxs-envelope"></i> info@wedibration.com
                </li>
              </a>
              <a href="">
                <li>
                  <i className="bx bxs-map"></i> Varanasi, Uttar Pradesh
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <p>
              Copyright &#169; Wedibration | Developed by{" "}
              <a href="https://nouviex.com/">Nouviex Technologies</a>
            </p>
          </div>
          <div className="col-2">
            <p>
              <a href="/privacy-policy">Privacy Policy</a> |{" "}
              <a href="/term-conditions">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </footer>
      {/* ==== Endof Footer ==== */}
    </>
  );
}
