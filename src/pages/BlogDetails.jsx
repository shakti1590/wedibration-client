import React, { useEffect } from "react";
import Venues from "../assets/pexels-asad-photo-maldives-169198-scaled.jpg";
import Discount from "../assets/discount_model.png";
import Wedding from "../assets/Wedding.jpg";
import GoodBye from "../assets/Wedding_Stress.png";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsDetails, singleBlogsDetails } from "@/actions/blogAction";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader";

function BlogDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.singleBlog);
  console.log(data);

  useEffect(() => {
    dispatch(singleBlogsDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <section className="blog-details">
            <div className="row">
              <div className="col-2">
                {data?.thumbnailImage &&
                  data.thumbnailImage.length > 0 &&
                  data.thumbnailImage.map((image) => {
                    return (
                      <img
                        src={image.url}
                        className="rounded-lg"
                        alt=""
                        key={image.url}
                      />
                    );
                  })}

                <h2>{data.title}</h2>
                <ul>
                  <li>
                    <i className="bx bx-user-circle"></i>&nbsp;{" "}
                    <span>{data.author}</span>
                  </li>
                  <li>
                    <i className="bx bx-calendar-heart"></i>&nbsp;{" "}
                    <span>
                      {data?.createdAt &&
                        new Date(data.createdAt).toISOString().split("T")[0]}
                    </span>
                  </li>

                  {/* <li>
                <i className="bx bx-category"></i>&nbsp; <span>Venue</span>
              </li> */}
                </ul>
                <p className="text-justify">{data.description}</p>
                <br />
              </div>
              <div className="col-2 flex flex-col gap-10">
                <div>
                  <img src={Discount} className="rounded-lg" alt="" />
                </div>{" "}
                <div>
                  <img src={GoodBye} className="rounded-lg" alt="" />
                </div>
                <a href="/contact-us">
                  <button>
                    Get In Touch Now <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </a>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default BlogDetails;

{
  /* <!-- ==== Endof Blog Details ==== --> */
}
{
  /* <!-- ==== Blogs ==== --> */
}
{
  /* <section className="blogs">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={Wedding} alt="" />
              </div>
              <h3>Best Destinations Wedding Venues in Varanasi</h3>
              <p>
                Planning a wedding is an exciting journey, and when you choose a
                destination wedding, it becomes an ...
              </p>
              <a href="/blog">
                <h6>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </h6>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-content">
                <img src={Wedding} alt="" />
              </div>
              <h3>Best Destinations Wedding Venues in Varanasi</h3>
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
                <img src={Wedding} alt="" />
              </div>
              <h3>Best Destinations Wedding Venues in Varanasi</h3>
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
      </section> */
}
