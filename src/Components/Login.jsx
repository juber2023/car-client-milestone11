import React, { useContext, useState } from "react";

import img from "../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./ContextApi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [success, SetSuccess] = useState("");
  const [error, SetError] = useState("");
  const { signIn, googleLogIn, githubLogIn } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    SetSuccess("");
    SetError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        SetSuccess("Successfully logged in");
        // navigate(from, { replace: true });

      })
      .catch((error) => {
        const errorMessage = error.message;
        SetError(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  const handleGithub = () => {
    githubLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mr-10">
            <img src={img} alt="" />
          </div>
          <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
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
                    value="Login"
                  />
                </div>
              <p>
                New to car doctors?{" "}
                <span className="text-yellow-500 font-bold">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
            <p className="text-center">Or</p>
            <div onClick={handleGoogle} className='flex items-center space-x-2 border shadow-lg rounded-2xl p-2 hover:bg-sky-200 cursor-pointer'>
            <FcGoogle></FcGoogle>
            <p> Sign in with <span>google</span></p>
            </div>
          </form>


            {/* <div onClick={handleGithub} className='flex items-center space-x-2 border shadow-lg rounded-2xl p-2 hover:bg-sky-200 cursor-pointer mt-1'>
            <GoMarkGithub></GoMarkGithub>
            <p> Sign in with <span>Github</span></p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
