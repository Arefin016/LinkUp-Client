import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import LatestCompanies from "./LatestCompanies"
import { Link } from "react-router-dom"
// ..
AOS.init()
const AboutUs = () => {
  return (
    <div>
      {/* This is the First part of About Section */}
      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-center"
      >
        <button className="rounded-full bg-[#E6F0FF] p-2 text-[#004EBA]">
          About LinkUp
        </button>
        <h2 className="md:text-7xl text-5xl mt-5 font-bold text-[#0B3558] animate__animated animate__bounce">
          Simplifying scheduling for 20+ <br /> million
        </h2>
        <p className="md:text-2xl text-xl mt-5 md:mt-9 font-normal">
          This LinkUp reflects the concept of connecting people through an
          online <br /> meeting booking platform, emphasising the idea of
          linking up for scheduled <br /> meetings and appointments
        </p>
        <Link to={"/signUp"}>
          <button className="btn bg-[#006BFF] mt-5 md:mt-9 text-[#FFFFFF]">
            Sign Up for free
          </button>
        </Link>
      </div>
      {/* This is Second part of this About Section */}
      <div className="mt-20 text-center">
        <p className="md:text-2xl text-xl font-normal mb-5">
          The trusted scheduling solution for everyone, from small businesses to
          Fortune 100 companies
        </p>
        <LatestCompanies></LatestCompanies>
      </div>
      {/* This is the Third part of this About Section */}
      <div className="mt-20 text-center">
        <h2 className="md:text-7xl text-5xl mt-5 font-bold text-[#0B3558] animate__animated animate__pulse">
          Creating a world where people actually love meetings
        </h2>
        <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10"
        >
          {/* This is the first card */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10 border bottom-2 border-[#D4E0ED]">
            <div className="card-body">
              <h2 className="md:text-7xl text-5xl mt-5 font-bold text-[#0B3558] animate__animated animate__pulse text-start">
                100k
              </h2>
              <p className="md:text-2xl text-xl font-normal md:py-10 py-2 text-start">
                Companies use Calendly
              </p>
              <div className="divider"></div>
            </div>
          </div>
          {/* This is the Second card */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10 border bottom-2 border-[#D4E0ED]">
            <div className="card-body">
              <h2 className="md:text-7xl text-5xl mt-5 font-bold text-[#0B3558] animate__animated animate__pulse text-start">
                230+
              </h2>
              <p className="md:text-2xl text-xl font-normal md:py-10 py-2 text-start">
                Countries with <br />
                monthly active users
              </p>
              <div className="divider"></div>
            </div>
          </div>
          {/* This is the third card */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10 border bottom-2 border-[#D4E0ED]">
            <div className="card-body">
              <h2 className="md:text-7xl text-5xl mt-5 font-bold text-[#0B3558] animate__animated animate__pulse text-start">
                100+
              </h2>
              <p className="md:text-2xl text-xl font-normal md:py-10 py-2 text-start">
                Partner integrations
              </p>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
