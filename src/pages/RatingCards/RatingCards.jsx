import React from "react";

const ReviewCard = ({ reviewer, role, rating }) => {
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
    <div className="bg-green-200 p-6 rounded-xl dark:text-white  hover:bg-green-300 transition duration-300 border-2 border-transparent hover:border-gray-300  shadow-md">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
          <img
            src={`https://randomuser.me/api/portraits/med/men/${reviewer.id}.jpg`}
            alt={reviewer.name}
            className="w-full  object-cover"
          />
        </div>

        {/* Review Text */}
        <p className="text-center text-sm font-medium">
          Happy reviewer is super excited being part of the happy addons family
        </p>

        {/* Reviewer Info */}
        <div className="text-center mt-3">
          <h3 className="text-lg font-bold">{reviewer.name}</h3>
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

const ReviewCards = () => {
  const reviews = [
    { id: 1, name: "Evan Rachel", role: "LinkUp", rating: 3.5 },
    { id: 2, name: "Louis Hoffman", role: "LinkUp", rating: 5.0 },
    { id: 3, name: "Thoma Middleditch", role: "LinkUp", rating: 4.0 },
  ];

  return (
    <div className=" flex dark:text-white items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((reviewer) => (
          <ReviewCard
            key={reviewer.id}
            reviewer={reviewer}
            role={reviewer.role}
            rating={reviewer.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;