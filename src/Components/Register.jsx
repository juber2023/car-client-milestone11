import React, { useContext, useRef, useState } from "react";
import img from "../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { UserContext } from "./ContextApi";

const Register = () => {
  const { user, createUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [liveError, SetLiveError] = useState("");
  const [success, SetSuccess] = useState("");
  const refPassword = useRef();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const photo=event.target.url.value
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfile(loggedUser, { displayName: name })
          .then(() => {})
          .catch((error) => {});

        event.target.reset();
        setPassword("");
        SetSuccess("Successfully Created Account");
      })
      .catch((error) => {
        SetSuccess("");
      });
  };
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      SetLiveError("Please input minimum 6 characters");
    } else {
      SetLiveError("");
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mr-10">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl font-bold text-center">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePassword}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p>{liveError}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>

              <p>{success}</p>
              <p>
                Already have an account?{" "}
                <span className="text-yellow-500 font-bold">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
