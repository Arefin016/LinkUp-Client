import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()
const AboutUs = () => {
  return (
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
      <p className="md:text-3xl text-xl mt-5 md:mt-9">
        This title reflects the concept of connecting people through an online{" "}
        <br /> meeting booking platform, emphasising the idea of linking up for
        scheduled <br /> meetings and appointments
      </p>
      <button className="btn bg-[#006BFF] mt-5 md:mt-9 text-[#FFFFFF]">
        Sign Up for free
      </button>
    </div>
  )
}

export default AboutUs
