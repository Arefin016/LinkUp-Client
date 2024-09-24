import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F0F0F0] dark:bg-gray-900 lg:pt-16 md:pt-16 pt-40 ">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                <h1 className="font-right font-extrabold text-4xl text-shadow-purple dark:text-white">
    <span className="text-emerald-500 ">L</span>inkUp
  </h1>
                </a>
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Book meetings effortlessly with LinkUp's streamlined scheduling. Perfect for professionals, teams, and individuals.
                </p>
                <div className="flex mt-6 -mx-2">
                  <a href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} className="w-10 h-10" />
                  </a>
                  <a href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
                  </a>
                  <a href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
                  </a>
                  <a href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
                  </a>
                  <a href="#"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github">
                    <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-black uppercase dark:text-white font-semibold">Company</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About Us</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Partners</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Press</a>
                </div>
                <div>
                  <h3 className="text-black uppercase dark:text-white font-semibold">Help</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Support Center</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact Us</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">API Documentation</a>
                </div>
                <div>
                  <h3 className="text-black uppercase dark:text-white font-semibold">Resources</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Blog</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tutorials</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Events</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Community</a>
                </div>
                <div>
                  <h3 className="text-black uppercase dark:text-white font-semibold">Legal</h3>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Terms & Conditions</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Privacy Policy</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Cookie Policy</a>
                  <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Security</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
          <div className="flex-col-1 lg:flex md:flex justify-between items-center mt-4">
            <p className="text-center text-gray-500 dark:text-gray-400">© LinkUp 2024, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
