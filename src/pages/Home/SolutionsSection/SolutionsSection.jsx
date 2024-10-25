import React, { useEffect, useState } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img_2 from "../../../assets/capture_2.png";
import img_3 from "../../../assets/capture_3.png";
import img_4 from "../../../assets/capture_4.png";
import Modal from 'react-modal'; // Import the Modal component

const SolutionsSection = ({ capture_2, capture_3, capture_4 }) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State for the modal and selected solution details
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: 1,
      title: "Seamless Client Coordination",
      description: "Empower your sales team to focus on closing deals. With LinkUp, clients can schedule meetings at their convenience, leading to faster, hassle-free conversions.",
      image: "https://images.ctfassets.net/k0lk9kiuza3o/2k4JUWdoiELNlIOiAgY8ZP/989d5854e82505f2c711363ed9d002e4/Icon-Sales.svg",
    },
    {
      id: 2,
      title: "Efficient Marketing Campaigns",
      description: "LinkUp helps you convert leads into meetings with fewer steps, ensuring higher engagement with your marketing campaigns.",
      image: "https://images.ctfassets.net/k0lk9kiuza3o/2WoX1M1Mu6lUwJrfSGjX5b/a42359992f267f338df0161ba40acc7f/Icon-Demand-Generation.svg",
    },
    {
      id: 3,
      title: "Exceptional Client Support",
      description: "Simplify support management and delight clients with easy scheduling and instant responsiveness through LinkUp.",
      image: "https://images.ctfassets.net/k0lk9kiuza3o/6KO0vF2ofioxGmQJGQBdT1/329be086ba555bf2393dd99c32753521/Icon-Customer-Success.svg"
    },
    {
      id: 4,
      title: "Optimize Revenue Operations",
      description: "Increase efficiency with LinkUp's integration capabilities, syncing seamlessly with tools like Salesforce for complete activity data.",
      image: "https://images.ctfassets.net/k0lk9kiuza3o/1kecwP9aYPUOD7cgexPgW5/bf271becdb7ff17e2939353e82792f9c/Icon-Revenue-Ops.svg"
    },
  ];

  // Animation variants for elements
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleLearnMoreClick = (solution) => {
    setSelectedSolution(solution);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSolution(null);
  };

  return (
    <div className="p-8 text-center">
      {/* Modal for displaying solution details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        {selectedSolution && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedSolution.title}</h2>
            <img src={selectedSolution.image} alt={selectedSolution.title} className="w-16 mb-4" />
            <p>{selectedSolution.description}</p>
            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Close</button>
          </div>
        )}
      </Modal>

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
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-gradient-to-r from-blue-100 to-white shadow-2xl w-[370px] h-[300px] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
          >
            <img className="w-[30px] mb-4" src={solution.image} alt={`${solution.title} Icon`} />
            <h3 className="mt-5 text-xl font-bold text-blue-800">{solution.title}</h3>
            <p className="mt-2 mb-4 text-sm text-black">{solution.description}</p>
            <button
              onClick={() => handleLearnMoreClick(solution)}
              className="flex items-center bg-white text-[#006bff] px-4 py-2 rounded shadow hover:bg-gray-200 transition"
            >
              Learn more
              <ChevronRightIcon className="text-[#006bff] ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <motion.div
        className="text-center mb-[10%] mt-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.9 }}
      >
        <h2 className="mb-2 text-4xl font-bold dark:text-white">Achieve More with LinkUp</h2>
        <p className="text-lg dark:text-white">LinkUp eliminates scheduling conflicts, giving you more time to focus on what matters most.</p>
      </motion.div>

      <div className="w-full lg:w-[80%] mx-auto flex flex-col sm:flex-col lg:flex-row lg:justify-between items-center mb-[15%]">
        <div className="w-full lg:w-[40%] text-left mb-5 lg:mb-0" data-aos="zoom-in">
          <h4 className="mb-5 text-sm font-semibold text-[#006bff] tracking-wider">AUTOMATED WORKFLOWS</h4>
          <h3 className="mb-5 text-lg font-bold">Let LinkUp Do the Work</h3>
          <p className="text-lg">From reminders to follow-ups, LinkUp automates the entire scheduling process, so you can focus on your business.</p>
        </div>
        <div className="w-full lg:w-[60%]" data-aos="zoom-in">
          <img src={img_2} alt="Workflow Image" className="w-full" />
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto flex flex-col sm:flex-col lg:flex-row lg:justify-between items-center mb-[15%]">
        <div className="w-full lg:w-[38%] text-left" data-aos="zoom-in">
          <h4 className="mb-5 text-sm font-semibold text-[#006bff] tracking-wider">REAL-TIME AVAILABILITY</h4>
          <h3 className="mb-5 text-lg font-bold">Never Miss an Opportunity</h3>
          <p className="text-lg">Let clients schedule meetings instantly with real-time availability, reducing no-shows and improving engagement.</p>
        </div>
        <div className="w-full lg:w-[60%] mb-5 lg:mb-0" data-aos="zoom-in">
          <img src={img_3} alt="On-Demand Scheduling Image" className="w-full" />
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto flex flex-col sm:flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[38%] text-left mb-5 lg:mb-0" data-aos="zoom-in">
          <h4 className="mb-5 text-sm font-semibold text-[#006bff] tracking-wider">PERSONALIZED EXPERIENCE</h4>
          <h3 className="mb-5 text-lg font-bold">A Courteous Approach</h3>
          <p className="text-lg">Customize your meeting scheduling process to reflect your brand and provide a thoughtful client experience.</p>
        </div>
        <div className="w-full lg:w-[60%]" data-aos="zoom-in">
          <img src={img_4} alt="Courteous Approach Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
