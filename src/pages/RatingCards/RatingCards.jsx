import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// ReviewCard Component
const ReviewCard = ({ reviewer, role, rating, photoURL, reviewText }) => {
  // Function to render stars
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;


    
    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={index}>⭐</span>
        ))}
        {halfStar && <span>⭐</span>}
      </>
    );
  };

  return (
    <div className="bg-green-200 p-3 rounded-xl dark:text-white hover:bg-green-300 transition duration-300 border-2 border-transparent hover:border-gray-300 shadow-md">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-24 h-20 rounded-full  overflow-hidden mb-3">
          <img
            src={photoURL}
            alt={reviewer}
            className="w-full object-cover"
          />
        </div>

        {/* Review Text */}
        <p className="text-center p-2 w-80 text-sm font-medium break-words whitespace-normal">
          {reviewText}
        </p>

        {/* Reviewer Info */}
        <div className="text-center mt-3">
          <h3 className="text-lg font-bold">{reviewer}</h3>
          <p className="text-gray-600 text-sm">{role}</p>

          {/* Rating */}
          <div className="mt-2 text-yellow-500 text-xl">
            {renderStars()} <span className="text-gray-600">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ReviewCards Component
const ReviewCards = () => {
  const [reviews, setReviews] = useState([]);
const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosPublic.get("/reviews"); // Your API endpoint
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews: ", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="flex dark:text-white items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.slice(-6).map((review) => (
          <ReviewCard
            key={review.id}
            reviewer={review.userName}
            role={review.role}
            rating={review.rating}
            photoURL={review.photoURL}
            reviewText={review.review} // Pass the review text here
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;
