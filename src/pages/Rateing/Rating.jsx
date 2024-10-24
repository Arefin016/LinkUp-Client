import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// StarRating Component for rendering static stars (display only)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500 text-xl" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 text-xl" />}
      {[...Array(emptyStars)].map((_, i) => (
        <AiOutlineStar key={i} className="text-gray-400 text-xl" />
      ))}
    </div>
  );
};

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (review.trim()) {
      const email = user ? user.email : "Unknown";
      const userName = user ? user.displayName : "Unknown";
      const photoURL = user ? user.photoURL : "Unknown";

      const newReview = {
        rating,
        review,
        email,
        userName,
        photoURL,
      };
  
      setIsSubmitting(true);
      setErrorMessage("");
      setSuccessMessage("");
  
      try {
        const response = await axiosPublic.post("/reviews", newReview);
        setRating(0);
        setReview("");
        setSuccessMessage("Review submitted successfully!");
        window.location.reload(); // Refresh to display new review
      } catch (error) {
        setErrorMessage("Error submitting review. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosPublic.get("/reviews");
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews: ", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="justify-center mx-auto p-4">
      {/* Rating Submission Card */}
      <div className="rounded-xl overflow-hidden w-full shadow-md p-6 bg-white transition">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Rate and Review</h2>
          {/* Star rating selection */}
          <div className="flex justify-center mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  {rating >= star ? (
                    <FaStar className="text-yellow-500 text-xl" />
                  ) : (
                    <AiOutlineStar className="text-gray-400 text-xl" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border p-2 mt-4 w-full rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </div>
      </div>

      {/* Displaying Submitted Reviews */}
      <div className="flex justify-center mt-10 flex-col w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet</p>
          ) : (
            reviews.slice(-6).map((reviewItem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition duration-300 max-w-sm w-full text-center"
              >
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">{reviewItem.rating}</span>
                  <span className="ml-2 text-gray-500 text-sm">
                    Out of 5 stars
                  </span>
                </div>
                <StarRating rating={reviewItem.rating} />
                <p className="text-gray-600 break-words mt-2">{reviewItem.review}</p>
                <p className="text-gray-500 mt-4 text-sm">Powered by LinkUp</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Rating;
