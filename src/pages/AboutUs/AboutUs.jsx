import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LatestCompanies from "./LatestCompanies";
import { Link } from "react-router-dom";
import meeting from "../../assets/team-meetings.png";

AOS.init();
const AboutUs = () => {
  return (
    <div className="dark:bg-[#121212] dark:text-white">
      {/* This is the First part of About Section */}
      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-center md:mt-[68px]"
      >
      
        <h2 className="md:text-7xl text-5xl mt-5 font-bold  dark:text-white animate__animated animate__bounce">
          Simplifying scheduling for 20+ <br /> million
        </h2>
        <p className="md:text-2xl text-xl mt-5 md:mt-9 font-normal dark:text-gray-300">
          This LinkUp reflects the concept of connecting people through an
          online <br /> meeting booking platform, emphasizing the idea of
          linking up for scheduled <br /> meetings and appointments.
        </p>
        <Link to={"/signUp"}>
          <button className="btn bg-[#a5e978] dark:bg-[#1C7DF7] mt-5 md:mt-9 text-[#FFFFFF]">
            Sign Up for free
          </button>
        </Link>
      </div>

      {/* Second part */}
      <div className="mt-20 text-center">
        <p className="md:text-2xl text-xl font-normal mb-5 dark:text-gray-300">
          The trusted scheduling solution for everyone, from small businesses to
          Fortune 100 companies
        </p>
        <LatestCompanies></LatestCompanies>
      </div>

      {/* Third part */}
      <div className="mt-20 text-center">
        <h2 className="md:text-7xl text-5xl mt-5 font-bold  dark:text-white animate__animated animate__pulse">
          Creating a world where people actually love meetings
        </h2>
        <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10"
        >
          {/* First card */}
          <div className="card bg-base-100 dark:bg-[#1A1A1A] w-96 shadow-xl mt-10 border bottom-2 border-[#D4E0ED] dark:border-[#2A2A2A]">
            <div className="card-body">
              <h2 className="md:text-7xl text-5xl mt-5 font-bold  dark:text-white animate__animated animate__pulse text-start">
                100k
              </h2>
              <p className="md:text-2xl text-xl font-normal md:py-10 py-2 text-start dark:text-gray-300">
                Companies use Calendly
              </p>
              <div className="divider dark:bg-[#333]"></div>
            </div>
          </div>

          {/* Second card */}
          <div className="card bg-base-100 dark:bg-[#1A1A1A] w-96 shadow-xl mt-10 border bottom-2 border-[#D4E0ED] dark:border-[#2A2A2A]">
            <div className="card-body">
              <h2 className="md:text-7xl text-5xl mt-5 font-bold  dark:text-white animate__animated animate__pulse text-start">
                230+
              </h2>
              <p className="md:text-2xl text-xl font-normal md:py-10 py-2 text-start dark:text-gray-300">
                Countries with <br />
                monthly active users
              </p>
              <div className="divider dark:bg-[#333]"></div>
            </div>
          </div>

          {/* Third card */}
          <div className="card bg-base-100 dark:bg-white w-96 shadow-xl mt-10 border bottom-2 border-[#D4E0ED] dark:border-blue-500">
            <div className="card-body">
              <h2 className="md:text-7xl text-5xl mt-5 font-bold dark:text-white animate__animated animate__pulse text-start">
                100+
              </h2>
              <p className="md:text-2xl text-xl font-normal md:py-10 py-2 text-start dark:text-gray-300">
                Partner integrations
              </p>
              <div className="divider dark:bg-[#333]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth part */}
      <div className="mt-20 text-center">
        <h2 className="md:text-7xl text-5xl mt-5 font-bold dark:text-white animate__animated animate__pulse">
          Unlock your business <br /> potential
        </h2>

        <div className="flex flex-col md:flex-row mt-20">
          {/* Accordion */}
          <div className="w-3/4">
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium text-center dark:text-white">
                What is LinkUp and how does it work?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20 dark:text-white">
                  LinkUp is an online booking platform that connects users with
                  various service providers, allowing you to book appointments,
                  services, or events with ease. Simply browse through available
                  services, select your preferred provider, and book online with
                  just a few clicks.
                </p>
              </div>
            </div>

            {/* Other accordion items (similar style) */}
            {/* ... */}

          </div>
          {/* Second Div */}
          <div>
            <img src={meeting} alt="Team meeting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
