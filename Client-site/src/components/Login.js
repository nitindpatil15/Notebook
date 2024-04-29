import React, { useState } from "react";
import "./nav.css";
import loginimg from ".//Login.webp";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  // props.showAlert("Login to Your Account","success")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://notebook-k05h.onrender.com/api/auth/login/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Successfully Logged in", "success");
      } else {
        // alert("Invalid Credentials")
        props.showAlert("Error! Invalid Username or Password", "danger");
      }
    } catch (error) {
      alert("Error in Login");
      console.log(error, ": Failed to Fetch API");
    }
  };
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <header className="for">
        <br />
        {/* // eslint-disable-next-line  */}
        <form onSubmit={handleSubmit} id="login">
          <div className="container">
            <div className="text-center mt-4">
              <img className="img" src={loginimg} alt="login Image" />
            </div>
            <h5 className="text-center text-primary mb-4">Login</h5>

            <div className="form-group my-2 container">
              <label htmlFor="email" style={{ fontSize: "20px" }}>
                Email address<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={onchange}
                minLength={5}
                className="form-control f my-3"
                placeholder="Enter Your personal email Id"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group my-2 container">
              <label htmlFor="password" style={{ fontSize: "20px" }}>
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={onchange}
                minLength={5}
                className="form-control f my-3"
                placeholder="Enter strong password"
                id="password"
              />
            </div>
            <div className="container">
              <button
                type="submit"
                style={{ fontSize: "20px" }}
                className="btn btn-primary my-2 "
              >
                {" "}
                Submit{" "}
              </button>
              <br />

              <Link
                to="/signup"
                style={{ fontSize: "15px" }}
                className="text-decoration-none text-dark"
              >
                Don't have login?{" "}
                <span className="text-primary ">Register here</span>
              </Link>
              <div></div>
              <br />
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default Login;
