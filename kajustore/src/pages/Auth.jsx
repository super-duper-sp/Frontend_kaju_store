import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  // State to keep track of the current screen
  const [currentScreen, setCurrentScreen] = useState("login");

  // Function to switch between "Register" and "Login" screens
  const toggleScreen = () => {
    setCurrentScreen((prevScreen) =>
      prevScreen === "login" ? "register" : "login"
    );
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="p-4 bg-gray-200 rounded-md shadow-md">
          
            {currentScreen === "register" && (
              <div className="flex p-4">
                <div className="flex-none w-1/2 p-4 bg-white rounded-tl-md rounded-bl-md shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Login</h2>
                  <Login/>
                </div>

                <div className="flex-none w-1/2 p-4 bg-[orange] rounded-tr-md rounded-br-md shadow-md">
                  <h1 className="text-white text-2xl mb-4">Hello, Explorer!</h1>
                  <p className="text-white mb-4">
                    Enter your personal details and start your journey with us.
                  </p>
                  <button
                    onClick={toggleScreen}
                    className="bg-transparent hover:bg-white text-white hover:text-[orange] border border-white rounded-full px-6 py-2 transition duration-300"
                    id="signIn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}

            {currentScreen === "login" && (
             <div className="flex p-4">
                <div className="flex-none w-1/2 p-4 bg-[orange] rounded-tl-md rounded-bl-md shadow-md">
                  <h2 className="text-white text-2xl font-bold mb-4">
                    Welcome Back!
                  </h2>
                  <p className="text-white text-sm mb-4">
                    To keep connected with us, please login with your personal
                    info.
                  </p>

                  <button
                    onClick={toggleScreen}
                    className="bg-transparent hover:bg-white text-white hover:text-[orange] border border-white rounded-full px-6 py-2 transition duration-300"
                    id="signIn"
                  >
                    Sign In
                  </button>
                </div>

                <div className="flex-none w-1/2 p-4 bg-white rounded-tr-md rounded-br-md shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Register</h2>
                  <Register/>
                </div>
              </div>
            )}
          </div>
        </div>
      
    </>
  );
};

export default Auth;
