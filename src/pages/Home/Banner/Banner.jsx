import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons"; // Ensure this is installed or replace with your own icon
import capture_1 from "../../../../public/capture_1.png";
import { Link } from "react-router-dom";
import { BorderBeam } from "@stianlarsen/border-beam";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="relative w-full  px-4  ">
      <div className="w-full mx-auto my-8 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 text-left mb-8 md:mb-0">
          <h2 className="text-4xl lg:text-5xl md:text-5xl font-extrabold leading-tight">
            <Typewriter
              words={["Easy Scheduling", ""]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <br />
            <h1 className="font-right font-extrabold lg:text-6xl text-4xl text-shadow-purple transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1">
              <span className="text-emerald-500">L</span>
              <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                inkUp
              </span>
            </h1>
          </h2>
          <p className="mt-8 text-gray-400">
            LinkUp is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work.
          </p>
          <div className="flex mt-8 justify-center md:justify-start">
            <Link to="calendar">
              <div className="relative flex justify-center items-center w-[80%] mx-auto md:w-auto">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Set Meeting Now
                  </span>
                  <BorderBeam
                    size={70}
                    duration={5}
                    colorFrom="#0000ff"
                    colorTo="#0000ff"
                    borderWidth={2}
                    delay={4}
                  />
                </a>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side - Image Content */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img src={capture_1} alt="Hero" className="w-full h-auto" />
        </div>
      </div>

      <div className="mx-auto text-center mb-24">
        <h3 className="text-3xl font-bold text-gray-800">
          We make it easy to get started
        </h3>
        <div className="mt-10 flex justify-center gap-8 flex-wrap">
  {/* Card 1 */}
  <div className="shadow-lg w-80 h-64 p-6 text-left bg-gradient-to-br from-blue-100 to-white rounded-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-300">
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 w-14 h-14 rounded-full mb-5">
      <img
        src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
        alt="Checkmark"
        className="w-8 h-8"
      />
    </div>
    <h6 className="mt-4 text-xl font-semibold text-blue-700">
      Create Simple Rules
    </h6>
    <p className="mt-3 text-gray-600">
      Let Calendly know your availability preferences and it'll do the work for
      you.
    </p>
  </div>

  {/* Card 2 */}
  <div className="shadow-lg w-80 h-64 p-6 text-left bg-gradient-to-br from-blue-100 to-white rounded-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-300">
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 w-14 h-14 rounded-full mb-5">
      <img
        src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
        alt="Checkmark"
        className="w-8 h-8"
      />
    </div>
    <h6 className="mt-4 text-xl font-semibold text-blue-700">
      Share Your Link
    </h6>
    <p className="mt-3 text-gray-600">
      Send guests your Calendly link or embed it on your website.
    </p>
  </div>

  {/* Card 3 */}
  <div className="shadow-lg w-80 h-64 p-6 text-left bg-gradient-to-br from-blue-100 to-white rounded-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-300">
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 w-14 h-14 rounded-full mb-5">
      <img
        src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
        alt="Checkmark"
        className="w-8 h-8"
      />
    </div>
    <h6 className="mt-4 text-xl font-semibold text-blue-700">
      Get Booked
    </h6>
    <p className="mt-3 text-gray-600">
      They pick a time and the event is added to your calendar.
    </p>
  </div>
</div>

      </div>

      {/* Meeting Types Section */}
      <div className="w-4/5 mx-auto text-center mb-32">
  <h5 className="mb-6 text-4xl font-bold dark:text-white">
    Scheduling for any meeting type
  </h5>
  <div className="flex flex-wrap justify-center gap-8 text-left">
    {/* One-on-One Meeting Card */}
    <div className="shadow-2xl w-80 h-56 p-6 bg-gradient-to-r from-blue-100 to-white rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl border-2 border-blue-400">
      <h6 className="text-2xl font-semibold mb-3 text-blue-800">One-on-One Meetings</h6>
      <p className="text-base text-gray-700 mb-4">
        Let your clients and colleagues select open meeting times on your calendar with ease.
      </p>
      <a href="#" className="text-blue-700 font-medium inline-flex items-center">
        Learn more <ChevronRightIcon className="ml-1 w-5 h-5" />
      </a>
    </div>

    {/* Group Meeting Card */}
    <div className="shadow-2xl w-80 h-56 p-6 bg-gradient-to-r from-blue-100 to-white rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl border-2 border-green-400">
      <h6 className="text-2xl font-semibold mb-3 text-green-800">Group Meetings</h6>
      <p className="text-base text-gray-700 mb-4">
        Book events for multiple attendees and make sure everyone has a voice.
      </p>
      <a href="#" className="text-green-700 font-medium inline-flex items-center">
        Learn more <ChevronRightIcon className="ml-1 w-5 h-5" />
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default Banner;
