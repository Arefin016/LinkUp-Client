import ReviewCards from "../../RatingCards/RatingCards"
import Banner from "../Banner/Banner"
import SolutionsSection from "../SolutionsSection/SolutionsSection"

const Home = () => {
  return (
    <div>
      <Banner />
      <SolutionsSection></SolutionsSection>
      <div className="overflow-hidden w-full">
        <marquee behavior="scroll" direction="right">
          <h2 className="md:text-5xl text-5xl mt-5 font-bold text-[#0B3558] text-center">
            Customer Feedback
          </h2>
          <ReviewCards />
        </marquee>
      </div>
    </div>
  )
}

export default Home
