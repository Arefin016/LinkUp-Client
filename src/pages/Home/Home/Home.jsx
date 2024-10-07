import ReviewCards from "../../RatingCards/RatingCards";
import Banner from "../Banner/Banner";
import SolutionsSection from "../SolutionsSection/SolutionsSection";


const Home = () => {
  return (
    <div>
      <Banner />
      <SolutionsSection></SolutionsSection>
      <div className="overflow-hidden w-full">
        <marquee behavior="scroll" direction="right">
          <ReviewCards />
        </marquee>
      </div>
    </div>
  );
};

export default Home;
