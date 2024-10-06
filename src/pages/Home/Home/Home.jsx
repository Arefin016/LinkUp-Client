import ReviewCards from "../../RatingCards/RatingCards";
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div>
      <Banner />
      
      <div className="overflow-hidden w-full">
        <marquee behavior="scroll" direction="right">
          <ReviewCards />
        </marquee>
      </div>
    </div>
  );
};

export default Home;
