import React, { useEffect } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import Framer Motion
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import img_2 from "../../../assets/capture_2.png"; 
import img_3 from "../../../assets/capture_3.png"; 
import img_4 from "../../../assets/capture_4.png"; 

const SolutionsSection = ({ capture_2, capture_3, capture_4 }) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Animation variants for elements
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-8    text-center">
      {/* Heading Section */}
      <motion.h2 
        className="mb-6 text-4xl font-bold dark:text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        Streamline Your Meetings with LinkUp
      </motion.h2>
      
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center text-left gap-5">
  {/* Sales Card */}
  <div 
    className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-2xl w-[370px] h-[300px] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" 
    data-aos="zoom-in"
  >
    <img className="w-[30px] mb-4" src="https://images.ctfassets.net/k0lk9kiuza3o/2k4JUWdoiELNlIOiAgY8ZP/989d5854e82505f2c711363ed9d002e4/Icon-Sales.svg" alt="Sales Icon" />
    <h3 className="mt-5 text-xl font-bold text-white">Seamless Client Coordination</h3>
    <p className="mt-2 mb-4 text-sm text-white">
      Empower your sales team to focus on closing deals. With LinkUp, clients can schedule meetings at their convenience, leading to faster, hassle-free conversions.
    </p>
    <Link to='#'>
      <div className="flex items-center">
        <p className="bg-white text-[#006bff] px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn more</p>
        <ChevronRightIcon className="text-[#006bff] ml-2" />
      </div>
    </Link>
  </div>

  {/* Marketing Card */}
  <div 
    className="bg-gradient-to-r from-green-400 to-green-600 shadow-2xl w-[370px] h-[300px] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" 
    data-aos="zoom-in"
  >
    <img className="w-[30px] mb-4" src="https://images.ctfassets.net/k0lk9kiuza3o/2WoX1M1Mu6lUwJrfSGjX5b/a42359992f267f338df0161ba40acc7f/Icon-Demand-Generation.svg" alt="Marketing Icon" />
    <h3 className="mt-5 text-xl font-bold text-white">Efficient Marketing Campaigns</h3>
    <p className="mt-2 mb-4 text-sm text-white">
      LinkUp helps you convert leads into meetings with fewer steps, ensuring higher engagement with your marketing campaigns.
    </p>
    <Link to='#'>
      <div className="flex items-center">
        <p className="bg-white text-[#006bff] px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn more</p>
        <ChevronRightIcon className="text-[#006bff] ml-2" />
      </div>
    </Link>
  </div>

  {/* Customer Success Card */}
  <div 
    className="bg-gradient-to-r from-purple-400 to-purple-600 shadow-2xl w-[370px] h-[300px] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" 
    data-aos="zoom-in"
  >
    <img className="w-[30px] mb-4" src="https://images.ctfassets.net/k0lk9kiuza3o/6KO0vF2ofioxGmQJGQBdT1/329be086ba555bf2393dd99c32753521/Icon-Customer-Success.svg" alt="Customer Success Icon" />
    <h3 className="mt-5 text-xl font-bold text-white">Exceptional Client Support</h3>
    <p className="mt-2 mb-4 text-sm text-white">
      Simplify support management and delight clients with easy scheduling and instant responsiveness through LinkUp.
    </p>
    <Link to='#'>
      <div className="flex items-center">
        <p className="bg-white text-[#006bff] px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn more</p>
        <ChevronRightIcon className="text-[#006bff] ml-2" />
      </div>
    </Link>
  </div>

  {/* Revenue Operations Card */}
  <div 
    className="bg-gradient-to-r from-red-400 to-red-600 shadow-2xl w-[370px] h-[300px] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" 
    data-aos="zoom-in"
  >
    <img className="w-[30px] mb-4" src="https://images.ctfassets.net/k0lk9kiuza3o/1kecwP9aYPUOD7cgexPgW5/bf271becdb7ff17e2939353e82792f9c/Icon-Revenue-Ops.svg" alt="Revenue Operations Icon" />
    <h3 className="mt-5 text-xl font-bold text-white">Optimize Revenue Operations</h3>
    <p className="mt-2 mb-4 text-sm text-white">
      Increase efficiency with LinkUp's integration capabilities, syncing seamlessly with tools like Salesforce for complete activity data.
    </p>
    <Link to='#'>
      <div className="flex items-center">
        <p className="bg-white text-[#006bff] px-4 py-2 rounded shadow hover:bg-gray-200 transition">Learn more</p>
        <ChevronRightIcon className="text-[#006bff] ml-2" />
      </div>
    </Link>
  </div>
</div>


      {/* Bottom Section */}
      <motion.div 
        className="text-center mb-[10%] mt-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.9 }}
      >
        <h2 className="mb-2 text-4xl font-bold  dark:text-white">Achieve More with LinkUp</h2>
        <p className="text-lg dark:text-white">LinkUp eliminates scheduling conflicts, giving you more time to focus on what matters most.</p>
      </motion.div>

      {/* Workflow Management Section */}
      <motion.div 
        className="w-[80%] mx-auto flex justify-between items-center mb-[15%]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div className="w-[40%] text-left" data-aos="zoom-in">
          <h4 className="mb-5 text-sm font-semibold text-[#006bff] tracking-wider">AUTOMATED WORKFLOWS</h4>
          <h3 className="mb-5 text-lg font-bold">Let LinkUp Do the Work</h3>
          <p className="text-lg">
            From reminders to follow-ups, LinkUp automates the entire scheduling process, so you can focus on your business.
          </p>
        </div>
        <div className="w-[40%]" data-aos="zoom-in">
          <img src={img_2} alt="Workflow Image" />
        </div>
      </motion.div>

      {/* On-Demand Scheduling Section */}
      <motion.div 
        className="w-[80%] mx-auto flex justify-between items-center mb-[15%]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.1 }}
      >
        <div className="w-[40%]" data-aos="zoom-in">
          <img src={img_3} alt="On-Demand Scheduling Image" />
        </div>
        <div className="w-[38%] text-left" data-aos="zoom-in">
          <h4 className="mb-5 text-sm font-semibold text-[#006bff] tracking-wider">REAL-TIME AVAILABILITY</h4>
          <h3 className="mb-5 text-lg font-bold">Never Miss an Opportunity</h3>
          <p className="text-lg">
            Let clients schedule meetings instantly with real-time availability, reducing no-shows and improving engagement.
          </p>
        </div>
      </motion.div>

      {/* Courteous Approach Section */}
      <motion.div 
        className="w-[80%] mx-auto flex  justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.2 }}
      >
        <div className="w-[38%] text-left" data-aos="zoom-in">
          <h4 className="mb-5 text-sm font-semibold text-[#006bff] tracking-wider">PERSONALIZED EXPERIENCE</h4>
          <h3 className="mb-5 text-lg font-bold">A Courteous Approach</h3>
          <p className="text-lg">
            Customize your meeting scheduling process to reflect your brand and provide a thoughtful client experience.
          </p>
        </div>
        <div className="w-[60%]" data-aos="zoom-in">
          <img src={img_4} alt="Courteous Approach Image" />
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionsSection;
