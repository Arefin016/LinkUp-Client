import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import LatestCompanies from "./LatestCompanies"
import { Link } from "react-router-dom"
import meeting from "../../assets/team-meetings.png"
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
        className="text-center md:mt-[68px]"
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
      {/* This is The Fourth part of this About Section */}
      <div className="mt-20 text-center">
        <h2 className="md:text-7xl text-5xl mt-5 font-bold text-[#0B3558] animate__animated animate__pulse">
          Unlock your business <br /> potential
        </h2>
        {/* This is the accordian */}
        <div className="flex flex-col md:flex-row mt-20">
          {/* First Div */}
          <div className="w-3/4">
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium text-center">
                What is LinkUp and how does it work?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  LinkUp is an online booking platform that connects users with
                  various service providers, allowing you to book appointments,
                  services, or events with ease. Simply browse through available
                  services, select your preferred provider, and book online with
                  just a few clicks.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium text-center">
                How do I create an account on LinkUp?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  To create an account, click on the "Sign Up" button at the top
                  of the homepage. You can sign up using your email address or
                  social media accounts. Once your account is created, you'll be
                  able to manage your bookings, view service details, and get
                  personalized recommendations.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium text-center">
                What services can I book through LinkUp?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  LinkUp offers a wide range of services including healthcare
                  appointments, professional consultations, event bookings,
                  salon appointments, fitness sessions, and more. Simply search
                  for your desired service category, and you'll be able to see
                  all available providers.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium text-center">
                Can I cancel or reschedule a booking?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  Yes, LinkUp allows you to cancel or reschedule your booking
                  depending on the provider’s cancellation policy. You can do
                  this from your account dashboard under "My Bookings." Make
                  sure to check the provider’s terms before making any changes.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-center">
                How do I pay for services on LinkUp?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  LinkUp offers a secure payment gateway that supports various
                  payment methods, including credit/debit cards, mobile wallets,
                  and online banking. Some services may also allow payment upon
                  arrival, depending on the provider’s preferences.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-center">
                Is my personal information safe with LinkUp?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  Absolutely. LinkUp prioritizes your privacy and security. We
                  use industry-standard encryption to protect your data, and we
                  only share your information with the service providers you
                  book through our platform. Your details will not be shared
                  with any third parties without your consent.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-center">
                What if I need help with my booking or have a problem?
              </div>
              <div className="collapse-content">
                <p className="text-justify md:ml-20">
                  If you encounter any issues or need assistance with your
                  booking, our customer support team is here to help. You can
                  reach out to us via the "Contact Us" page or use our live chat
                  feature for real-time support.
                </p>
              </div>
            </div>
          </div>
          {/* Second Div */}
          <div>
            <img src={meeting} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs