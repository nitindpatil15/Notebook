import "./nav.css";
import React from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showAlert("Successfully Logout", "success");
  };
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary title" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item ">
                <Link
                  className={`nav-link mx-1 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-1 ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                  role="button"
                >
                  About
                </Link>
              </li>
              {!localStorage.getItem("token") ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="mx-1 btn btn-primary my-1"
                      role="button"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/signup"
                      className="mx-1 btn btn-primary my-1"
                      role="button"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="mx-1 btn btn-primary my-1"
                    onClick={logout}
                    role="button"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
