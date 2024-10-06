import React, { useState } from 'react';
import './ContactUs.css'; // Make sure to import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form data to backend or process it as needed
  };

  return (
    <div className="contact-us-container flex flex-col md:flex-row justify-center items-center min-h-screen p-6 gap-8">
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg max-w-md w-full transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">
          Contact Us
        </h2>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-400">
          We will get back to you ASAP!
        </p>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Send
        </button>
        <p className="text-center mt-4 text-gray-500 dark:text-gray-400">
          You may also call us at 333-33-33
        </p>
      </form>

      {/* Map */}
      <div className="flex justify-center items-center w-full max-w-lg h-96">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.73330660113!2d90.36163624181974!3d23.780887456846316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c794c835c8ff%3A0xa4210de1437db522!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1622183939130!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
