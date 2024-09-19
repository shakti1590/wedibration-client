import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Wedding from "../assets/Wedding.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsDetails } from "@/actions/blogAction";

function Blog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogsDetails());
  }, [dispatch]);

  const getShortDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 15).join(" ") + (words.length > 6 ? " . . . " : "");
  };

  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="row">
          <div className="col">
            <h1 className="text-[40px] font-bold">Blogs</h1>
          </div>
        </div>
      </section>
      {/* ==== Endof Page Header ==== */}

      {/* ==== Blogs ====  */}
      <section className="blogs">
        <div className="row">
          {blogs.data.map((blog) => {
            return (
              <div className="col-3" key={blog._id}>
                <div className="card">
                  <div className="card-content">
                    {blog.thumbnailImage.map((image) => {
                      return (
                        <img
                          src={image.url}
                          className="rounded-lg"
                          alt=""
                          key={image.url}
                        />
                      );
                    })}
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{getShortDescription(blog.description)}</p>
                  <Link to={`/blog-details/${blog._id}`}>
                    <h6>
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </h6>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
