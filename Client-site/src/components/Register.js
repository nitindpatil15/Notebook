import React from "react";
import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const [createuser, setcreateuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = createuser;
    try {
      const response = await fetch(
        `https://notebook-k05h.onrender.com/api/auth/createuser/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const json = await response.json();
      console.log(json);
      localStorage.setItem("token", json.token);
      navigate("/login");
      props.showAlert("User Created ! Login to continue", "success");
    } catch (error) {
      props.showAlert("Error in Sign Up", "danger");
      console.log(error, ": Email or password Exists");
    }
  };
  const onchange = (e) => {
    setcreateuser({ ...createuser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header>
        <br />
        <form onSubmit={handleSubmit} className="or">
          <div id="logo">
            <h1 className="text-center mt-4">
              <i class="fa-solid fa-user-plus" style={{ fontSize: "80%" }}></i>
            </h1>
            <h5 className="text-center text-primary">Signup</h5>
          </div>
          <div className="container">
            <div className="form-group my-2 container">
              <label htmlFor="name" style={{ fontSize: "20px" }}>
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control f my-3"
                defaultValue={createuser.name}
                placeholder="Enter User Name"
                id="name"
                minLength={5}
                onChange={onchange}
              />
            </div>

            <div className="form-group container">
              <label htmlFor="email1" style={{ fontSize: "20px" }}>
                Email address<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control f my-2"
                defaultValue={createuser.email}
                placeholder="Enter Email Address"
                id="email"
                onChange={onchange}
                aria-describedby="emailHelp"
                minLength={5}
                required
              />
            </div>

            <div className="form-group container">
              <label htmlFor="password" style={{ fontSize: "20px" }}>
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="form-control f my-2"
                defaultValue={createuser.password}
                placeholder="Enter Password"
                id="password"
                onChange={onchange}
                minLength={5}
                required
              />
            </div>
            <div className="container">
              <button
                type="submit"
                style={{ fontSize: "20px" }}
                className="btn btn-primary mt-3"
              >
                Submit
              </button>
              <br />
              <Link
                to="/login"
                style={{ fontSize: "15px" }}
                className="my-2 text-decoration-none text-dark"
              >
                Already a user? <span className="text-primary">Login here</span>
              </Link>
            </div>
            <br />
          </div>
        </form>
      </header>
    </>
  );
};

export default Register;
