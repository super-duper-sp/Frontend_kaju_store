import React from "react";
import { Link } from "react-router-dom";
import Svg1 from "../components/landingPage/svg_Animations/Svg1";
import BgSvg1 from "../components/landingPage/svg_Animations/BgSvg1";

const Landing = () => {
  return (
    <>
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <main className="bg-gray-100 font-montserrat">
          <header className="h-24 sm:h-32 flex items-center">
            <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
              <div className="font-black text-blue-900 text-2xl flex items-start">
                Company
                <span className="w-3 h-3 rounded-full bg-purple-600 ml-2" />
              </div>
              <div className="flex items-center">
                <nav className="text-purple-900 text-lg hidden lg:flex items-center gap-2">
                  
              

                  <a
                    href="#"
                    className="font-semibold text-sm bg-purple-600 hover:bg-blue-400 text-white py-2 px-3 rounded-full"
                  >
                    Demo
                  </a>

                  <a
                    href="/auth"
                    className="font-semibold text-sm bg-purple-600 hover:bg-blue-400 text-white py-2 px-3 rounded-full"
                  >
                    Sign In / Up
                  </a>
                </nav>
                <button className="flex flex-col ml-4">
                  <span className="w-6 h-1 rounded-full bg-purple-800 mb-1" />
                  <span className="w-6 h-1 rounded-full bg-purple-800 mb-1" />
                  <span className="w-6 h-1 rounded-full bg-purple-800 mb-1" />
                </button>
              </div>
            </div>
          </header>
          <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row relative">
            <div className="sm:w-6/12 relative z-10">
              <Svg1 />
            </div>

            <div className="sm:w-5/12 xl:w-4/12 flex flex-col items-start sm:items-end sm:text-right ml-auto mt-8 sm:mt-0 relative z-10 xl:pt-20 mb-16 sm:mb-0">
              <h1 className="text-4xl lg:text-5xl text-blue-900 leading-none mb-4 font-black">
                Business Landing Page
              </h1>
              <p className="lg:text-lg mb-4 sm:mb-12 text-blue-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing adipiselit.
                Pellentesque suscipit tellus vitae purus dignissim, nec
                tincidunt neque condimentum. Nam nec ligula pretium mi interdum
                hendrerit in sit.
              </p>
              <a
                href="#"
                className="font-semibold text-lg bg-purple-600 hover:bg-blue-400 text-white py-3 px-12 rounded-full"
              >
                Learn more
              </a>
            </div>

            <BgSvg1 />
            
          </div>
       
        </main>
      </>
    </>
  );
};

export default Landing;
