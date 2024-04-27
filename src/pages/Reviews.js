import React, { useState } from 'react';

function CustomerReviewSection() {
    // State to manage submitted reviews
    const [reviews, setReviews] = useState([
        {
            user_id: 'John Doe',
            rating: 4,
            comment: 'Overall, my experience with the smartphone repair service was decent. The staff was friendly and accommodating, and they were able to fix my device in a timely manner. However, there were a few hiccups along the way. Firstly, the communication could have been better; I had to follow up multiple times to get updates on the status of my repair. Secondly, while the repair itself was successful, I noticed a small issue with the screen sensitivity post-repair, which was a bit disappointing. Nonetheless, the price was reasonable, and my phone is now functioning again. It wasnot a flawless experience, but it got the job done.',
            avatar: generateAvatar()
        },
        {
            user_id: 'Jane Smith',
            rating: 2,
            comment: '"Disappointing experience overall. While the staff seemed knowledgeable, the repair process took longer than expected, extending beyond the estimated timeframe. Communication was lacking, with minimal updates provided on the status of my device. Additionally, upon receiving my smartphone back, I noticed some minor issues persisting, indicating that the repair may not have been as thorough as I had hoped. Overall, the service fell short of my expectations."',
            avatar: generateAvatar()
        },
        {
            user_id: 'David Johnson',
            rating: 3,
            comment: '"Overall, my experience with the smartphone repair service was decent. The staff was friendly and accommodating, and they were able to fix my device in a timely manner. However, there were a few hiccups along the way. Firstly, the communication could have been better; I had to follow up multiple times to get updates on the status of my repair. Secondly, while the repair itself was successful, I noticed a small issue with the screen sensitivity post-repair, which was a bit disappointing. Nonetheless, the price was reasonable, and my phone is now functioning again."',
            avatar: generateAvatar()
        },
        {
            user_id: 'Emily Davis',
            rating: 5,
            comment: 'Great service! Quick, friendly staff fixed my phone perfectly. Fair prices, no surprises. Highly recommend!',
            avatar: generateAvatar()
        }
    ]);

    // State to manage form input
    const [formData, setFormData] = useState({
        user_id: '',
        rating: 0,
        comment: ''
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the submitted review to the reviews state
        setReviews([...reviews, { ...formData, avatar: generateAvatar() }]);
        // Reset the form data
        setFormData({
            user_id: '',
            rating: 0,
            comment: ''
        });
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to render stars based on the rating
    const renderStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };

    // Function to generate a random user avatar URL
    function generateAvatar() {
        const gender = Math.random() < 0.5 ? 'men' : 'women';
        const randomNumber = Math.floor(Math.random() * 99) + 1;
        return `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
    };

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
                    {/* Display pre-made and submitted reviews */}
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img src={review.avatar} alt="User Avatar" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{review.user_id}</h3>
                                    <p className="text-gray-600">Rating: {renderStars(review.rating)}</p>
                                </div>
                            </div>
                            <p className="text-gray-800">{review.comment}</p>
                        </div>
                    ))}
                    {/* End Display Reviews */}
                </div>

                {/* Review Form */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="user_id" className="block text-gray-800 font-semibold mb-2">User ID</label>
                            <input type="text" id="user_id" name="user_id" value={formData.user_id} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-gray-800 font-semibold mb-2">Rating</label>
                            <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-gray-800 font-semibold mb-2">Comment</label>
                            <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit Review</button>
                    </form>
                </div>
                {/* End Review Form */}
            </div>
        </div>
    );
}

export default CustomerReviewSection;
