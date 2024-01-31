import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { motion } from "framer-motion"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <Spinner />
 
    );
  }

  return (

    <>
         {/* <form>
            <div className="mb-4">
              <label htmlFor="signin-username" className="block text-gray-700 text-sm font-medium mb-2">Username:</label>
              <input type="text" id="signin-username" name="signin-username" className="border p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="signin-password" className="block text-gray-700 text-sm font-medium mb-2">Password:</label>
              <input type="password" id="signin-password" name="signin-password" className="border p-2 w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
          </form> */}

    
    <form onSubmit={onSubmit}>
   
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="text"
        value={email}
        id="email"
        onChange={onChange}
        name="email"
        placeholder="Email Address"
      />
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />
      <div className="mt-4 flex justify-between font-semibold text-sm">
        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
          <input className="mr-1" type="checkbox" />
          <span>Remember Me</span>
        </label>
        <a
          className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center md:text-left">
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
      Don&apos;t have an account?{" "}
      <a
        className="text-red-600 hover:underline hover:underline-offset-4"
        href="#"
      >
        <Link to="/auth/register">Register</Link>
      </a>
    </div>
  

  </>


  );
};

export default Login;
