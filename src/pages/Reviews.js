import React from 'react';

const Reviews = () => {
  // Fetch and display reviews from the database or third-party service
  return (
    <div className="bg-gray-100 font-sans">
    <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Customer Reviews</h1>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">Write a Review</button>
        </div>
    </header>

    <div className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Map over reviews and render each one */}
            {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            {/* Assuming user profile pictures are available in the data */}
                            <img src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index}.jpg`} alt="User Avatar" />
                        </div>
                        <div className="ml-4">
                            {/* Assuming user names are available in the data */}
                            <h3 className="text-lg font-bold">{review.user_id}</h3>
                            {/* Assuming review dates are available in the data */}
                            <p className="text-gray-600">{review.created_at}</p>
                        </div>
                    </div>
                    {/* Assuming review comments are available in the data */}
                    <p className="text-gray-800">{review.comment}</p>
                    <div className="mt-4 flex items-center">
                        <span className="text-gray-600">Stars:</span>
                        {/* Assuming ratings are available in the data */}
                        <span className="text-yellow-500 ml-2">{renderStars(review.rating)}</span>
                    </div>
                </div>
            ))}
            {/* End Review Mapping */}
        </div>
        {/* End Reviews Grid */}

        {/* Review Form */}
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
            <form action="#" method="POST" className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="review" className="block text-gray-800 font-semibold mb-2">Your Review</label>
                    <textarea id="review" name="review" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit Review</button>
            </form>
        </div>
        {/* End Review Form */}
    </div>
</div>
);
}

// Function to render star icons based on the rating
function renderStars(rating) {
const filledStars = '★'.repeat(rating);
const emptyStars = '☆'.repeat(5 - rating);
return filledStars + emptyStars;
}


export default Reviews;
