import { Navbar } from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearErrors, login } from "../actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "@/components/Footer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, user, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (error) {
      // alert.error(error);
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated == true) {
      navigate("/admin-dashboard");

      // history.push("/account")
    }
  }, [dispatch, error, navigate, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <section className="login-sec">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-2">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input type="submit" value="Login" />
                </form>
                <p>
                  Don't have an account?{" "}
                  <span>
                    <a href="/sign-up">Sign Up</a>
                  </span>
                </p>
                {/* <hr /> */}
                {/* <h3>Or Continue With</h3>
                <div className="social-login">
                  <ul>
                    <li>
                      <i className="bx bxl-google"></i>
                    </li>
                    <li>
                      <i className="bx bxl-facebook"></i>
                    </li>
                    <li>
                      <i className="bx bxl-linkedin"></i>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      )}
    </>
  );
}

export default Login;
