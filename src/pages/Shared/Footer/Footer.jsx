import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 dark:bg-gray-900 lg:pt-16 md:pt-16 pt-40">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                  <h1 className="font-right font-extrabold lg:text-4xl text-2xl text-shadow-purple transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1">
                    <span className="text-emerald-500">L</span>
                    <span className="bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">inkUp</span>
                  </h1>
                </a>
                <p className="max-w-sm mt-2 text-gray-300 dark:text-gray-400">
                  Book meetings effortlessly with LinkUp's streamlined scheduling. Perfect for professionals, teams, and individuals.
                </p>
                <div className="flex mt-6 -mx-2">
                  {[
                    { icon: faFacebook, label: 'Facebook' },
                    { icon: faTwitter, label: 'Twitter' },
                    { icon: faInstagram, label: 'Instagram' },
                    { icon: faLinkedin, label: 'LinkedIn' },
                    { icon: faGithub, label: 'Github' },
                  ].map(({ icon, label }) => (
                    <a key={label} href="#"
                      className="mx-2 text-gray-400 transition-colors duration-300 hover:text-emerald-500"
                      aria-label={label}>
                      <FontAwesomeIcon icon={icon} className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    title: 'Company',
                    links: [
                      'About Us',
                      'Careers',
                      'Partners',
                      'Press'
                    ]
                  },
                  {
                    title: 'Help',
                    links: [
                      'Support Center',
                      'Contact Us',
                      'API Documentation'
                    ]
                  },
                  {
                    title: 'Resources',
                    links: [
                      'Blog',
                      'Tutorials',
                      'Events',
                      'Community'
                    ]
                  },
                  {
                    title: 'Legal',
                    links: [
                      'Terms & Conditions',
                      'Privacy Policy',
                      'Cookie Policy',
                      'Security'
                    ]
                  },
                ].map(({ title, links }) => (
                  <div key={title} className='dark:text-white'>
                    <h3 className="text-white uppercase font-semibold">{title}</h3>
                    {links.map(link => (
                      <a key={link} href="#" className="block mt-2 text-sm text-gray-400 hover:underline">{link}</a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-700 border-none" />
          <div className="flex-col-1 lg:flex md:flex justify-between items-center mt-4">
            <p className="text-center text-gray-500 dark:text-gray-400">© LinkUp 2024, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
