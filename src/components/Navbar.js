import "./nav.css"
import React from "react";
import { useEffect } from "react";
import { Link ,useLocation } from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation()
    useEffect(()=>{
        console.log(location.pathname)
    },[location])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand text-primary note" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className={`nav-link ${location.pathname==="/About"?"active":""}`} to="/About" role="button">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex form">
            <Link to ="/login" className="mx-1 btn b btn-primary btn-lg" role="button">Login</Link>
          <Link to ="/signup" className="mx-1 btn b btn-primary btn-lg" role="button">SignUp</Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
