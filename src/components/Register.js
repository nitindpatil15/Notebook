import React from "react";
import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate()
  const [createuser, setcreateuser] = useState({ name :"", email : "", password: "", });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const{name,email,password}=createuser
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/createuser/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name, email, password, }),
        }
      );
      const json = await response.json();
      console.log(json);
      localStorage.setItem('token',json.token);
      navigate('/login')
      props.showAlert("User Created ! Login to continue","success")
    } catch (error) {
      props.showAlert("Error in Sign Up","danger");
      console.log(error,": Email or password Exists");
    }
  };
  const onchange = (e) => {
    setcreateuser({ ...createuser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header className="or my-4">
        <br />
        <div className="text-center my-2"><i class="fa-solid fa-user-plus" style={{fontSize:"40px"}}></i></div>
        <form onSubmit={handleSubmit} className="forregi">
          <div className="form-group my-2 container">
            <label htmlFor="name" style={{fontSize:'20px'}}>
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
            <label htmlFor="email1" style={{fontSize:'20px'}}>
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
            <label htmlFor="password" style={{fontSize:'20px'}}>
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
          <button type="submit" style={{fontSize:'20px'}} className="btn btn-primary mt-3">
            Submit
          </button>
          <br />
          <Link to="/login" style={{fontSize:'20px'}} className="nav-item text-decoration-none text-secondary">
            Already a user? <span className="text-dark">Login here</span>
          </Link>
          </div>
          <br />
          <div className="my-5"></div>
        </form>
      </header>
    </>
  );
};

export default Register;
