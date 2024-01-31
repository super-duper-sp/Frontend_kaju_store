import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { useDispatch,useSelector } from "react-redux";

import Spinner from "../components/Spinner";

import { register, reset } from "../features/auth/authSlice";



const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }

    // dispatch(reset());
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
      name,
      email,
      password,
    };
    dispatch(register(userData));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          value={name}
          id="name"
          name="name"
          placeholder="Name"
          onChange={onChange}
        />
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
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Have an account?{" "}
        <a
          className="text-red-600 hover:underline hover:underline-offset-4"
          href="#"
        >
          <Link to="/auth/login">Login</Link>
        </a>
      </div>
    </>
  );
};

export default Register;
