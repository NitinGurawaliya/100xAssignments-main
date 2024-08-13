import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="relative overflow-hidden">
      {/* Gradients */}
      <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      {/* End Gradients */}

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">

            {/* Title */}
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                100x Devs Assignment Solutions
              </h1>
            </div>
            {/* End Title */}

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-white">
                Welcome to our platform where we provide detailed solutions and insights for 100x Devs assignments.
              </p>
            </div>

            {/* Buttons */}
            <div onClick={()=>{
              navigate("/web-assignments")
            }} className="mt-8 gap-3 flex justify-center">
              <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#assignments"
              >
                Web Dev Assignment
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#myprojects"
              >
                Personal Projects
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
