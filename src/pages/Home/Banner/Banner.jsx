import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons'; // Ensure this is installed or replace with your own icon
import capture_1 from "../../../../public/capture_1.png";
import { Link } from 'react-router-dom';
import { BorderBeam } from "@stianlarsen/border-beam"
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div className="relative w-full py-8 px-4  mt-8">
      {/* Hero Section */}
      <div className="w-full mx-auto my-8 flex flex-col md:flex-row justify-between">
  {/* Left Side - Text Content */}
  <div className="w-full md:w-1/3 text-left mb-8 md:mb-0">
    <h2 className="text-5xl font-extrabold leading-tight">
    <Typewriter
  words={['Easy Scheduling', '']}
  loop={false}
  cursor
  cursorStyle='|'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
    <br />
      <span className="text-[#10B981]">With LinkUp</span>
    </h2>
    <p className="mt-8 text-gray-400">
      LinkUp is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.
    </p>
    <div className="flex mt-8 justify-center md:justify-start">
      <Link to='celender'>
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
              Meeting Now
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


      {/* Features Section */}
      <div className="mx-auto text-center mb-24">
      <h3 className="text-3xl font-bold">
        We make it easy to get started
      </h3>
        <div className="mt-10 flex justify-center gap-8 flex-wrap">
          <div className="shadow-2xl w-80 h-52 p-5 text-left bg-white rounded-lg">
            <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' alt="Checkmark" className="w-8 h-8" />
            <h6 className="mt-4 text-lg font-semibold">Create simple rules</h6>
            <p className="mt-3 text-gray-600">Let Calendly know your availability preferences and it'll do the work for you.</p>
          </div>
          <div className="shadow-2xl w-80 h-52 p-5 text-left bg-white rounded-lg">
            <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' alt="Checkmark" className="w-8 h-8" />
            <h6 className="mt-4 text-lg font-semibold">Share your link</h6>
            <p className="mt-3 text-gray-600">Send guests your Calendly link or embed it on your website.</p>
          </div>
          <div className="shadow-2xl w-80 h-52 p-5 text-left bg-white rounded-lg">
            <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' alt="Checkmark" className="w-8 h-8" />
            <h6 className="mt-4 text-lg font-semibold">Get booked</h6>
            <p className="mt-3 text-gray-600">They pick a time and the event is added to your calendar.</p>
          </div>
        </div>
      </div>

      {/* Meeting Types Section */}
      <div className="w-4/5 mx-auto text-center mb-32">
        <h5 className="mb-6 text-3xl font-bold">Scheduling for any meeting type</h5>
        <div className="flex flex-wrap justify-center gap-5 text-left">
          <div className="shadow-2xl w-80 h-56 p-5 bg-white rounded-lg">
            <h6 className="text-xl font-semibold mb-2">One-on-One Meetings</h6>
            <p className="text-sm text-gray-600">Let your clients and colleagues select open meeting times on your calendar with ease.</p>
            <a href="#" className="text-blue-600 inline-flex items-center mt-2">
              Learn more <ChevronRightIcon className="ml-1" />
            </a>
          </div>
          <div className="shadow-2xl w-80 h-56 p-5 bg-white rounded-lg">
            <h6 className="text-xl font-semibold mb-2">Group Meetings</h6>
            <p className="text-sm text-gray-600">Book events for multiple attendees and make sure everyone has a voice.</p>
            <a href="#" className="text-blue-600 inline-flex items-center mt-2">
              Learn more <ChevronRightIcon className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
