import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { Typewriter } from "react-simple-typewriter"
import { BorderBeam } from "@stianlarsen/border-beam"

const Banner = () => {
  return (
    <div className="mt-16">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" relative bg-cover">
            <img
              className="max-h-[700px] w-full min-h-[500px]"
              src="https://i.ibb.co.com/Wxzq8p2/glenn-carstens-peters-npx-XWg-Q33-ZQ-unsplash-1.jpg"
              alt=""
            />
            <div className="absolute top-12  flex justify-center items-center w-[80%] mx-auto">
              <h2 className="text-3xl md:text-5xl italic font-semibold flex justify-center items-center text-[#4141ad]">
                Arrange
                <Typewriter
                  words={[" Your Meeting"]}
                  loop={false}
                  cursor
                  cursorStyle="__!"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <div className="absolute bottom-16 flex justify-center items-center w-[80%] mx-auto">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              className="max-h-[700px] w-full min-h-[500px]"
              src="https://i.ibb.co.com/pQnhwXV/christin-hume-Hcfwew744z4-unsplash.jpg"
              alt=""
            />
            <div className="absolute top-12  flex justify-center items-center w-[80%] mx-auto">
              <h2 className="text-3xl md:text-5xl italic font-semibold flex justify-center items-center text-[#4141ad]">
                Arrange
                <Typewriter
                  words={[" Your Meeting"]}
                  loop={false}
                  cursor
                  cursorStyle="__!"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <div className="absolute bottom-16 flex justify-center items-center w-[80%] mx-auto">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              className="max-h-[700px] w-full min-h-[500px]"
              src="https://i.ibb.co.com/TPjnt0S/Whats-App-Image-2024-09-17-at-14-27-18-a2f6a9fb-1.jpg"
              alt=""
            />
            <div className="absolute top-12  flex justify-center items-center w-[80%] mx-auto">
              <h2 className="text-3xl md:text-5xl italic font-semibold flex justify-center items-center text-[#4141ad]">
                Arrange
                <Typewriter
                  words={[" Your Meeting"]}
                  loop={false}
                  cursor
                  cursorStyle="__!"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <div className="absolute bottom-16 flex justify-center items-center w-[80%] mx-auto">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              className="max-h-[700px] w-full min-h-[500px]"
              src="https://i.ibb.co.com/ZX7CmRR/kobu-agency-7okk-Fhxrx-Nw-unsplash.jpg"
              alt=""
            />
            <div className="absolute top-12  flex justify-center items-center w-[80%] mx-auto">
              <h2 className="text-3xl md:text-5xl italic font-semibold flex justify-center items-center text-[#4141ad]">
                Arrange
                <Typewriter
                  words={[" Your Meeting"]}
                  loop={false}
                  cursor
                  cursorStyle="__!"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <div className="absolute bottom-16 flex justify-center items-center w-[80%] mx-auto">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Join Meeting
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              className="max-h-[700px] w-full min-h-[500px]"
              src="https://i.ibb.co.com/V9s3WRV/Whats-App-Image-2024-09-17-at-14-27-19-d47d9286.jpg"
              alt=""
            />
            <div className="absolute top-12  flex justify-center items-center w-[80%] mx-auto">
              <h2 className="text-3xl md:text-5xl italic font-semibold flex justify-center items-center text-[#4141ad]">
                Arrange
                <Typewriter
                  words={[" Your Meeting"]}
                  loop={false}
                  cursor
                  cursorStyle="__!"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <div className="absolute bottom-16 flex justify-center items-center w-[80%] mx-auto">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
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
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
