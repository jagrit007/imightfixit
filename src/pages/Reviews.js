import React, {useEffect, useState} from 'react';
import axios from "axios";

function CustomerReviewSection() {
    const userToken = localStorage.getItem('token');
    useEffect(() => {
        // Fetch additional service cards from the database
        fetchReviews();
    }, []);
    // State to manage submitted reviews
    const [reviews, setReviews] = useState([]);

    // State to manage form input
    const [formData, setFormData] = useState({
        username: '',
        rating: 0,
        comment: ''
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        submitReview()
        // Reset the form data
        setFormData({
            username: '',
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

    function fetchReviews() {
        axios.get('http://localhost:5000/review/')
            .then(response => {
                console.log(response.data.data);
                if (response.data.status === 'success') {
                    if (response.data.data.length > 0){

                        setReviews([...reviews, ...response.data.data]);
                    }
                } else {
                    throw new Error('Failed to fetch review cards');
                }
            })
            .catch(error => {
                console.error('Error fetching review cards:', error);
            });
    }

    function submitReview() {
        axios.post('http://localhost:5000/review/', {
            comment: formData.comment,
            rating: formData.rating
        }, {
            headers: {
                'Authorization': `${userToken}`
            }
        })
            .then(response => {
                console.log(response.data);
                console.log('Service details saved successfully:', response.data);
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    }

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
                    {/*{reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img src={generateAvatar()} alt="User Avatar" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{review.username}</h3>
                                    <p className="text-gray-600">Rating: {renderStars(review.rating)}</p>
                                </div>
                            </div>
                            <p className="text-gray-800">{review.comment}</p>
                        </div>
                    ))}*/}
                    {reviews.map((review, index) => (
                        <OneReview review = {review} index={index} />
                    ))}
                    {/* End Display Reviews */}
                </div>

                {/* Review Form */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
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

const OneReview = ({review, index}) => {
    console.log(review);
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const gender = Math.random() < 0.5 ? 'men' : 'women';
        const randomNumber = Math.floor(Math.random() * 99) + 1;
        const url = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
        setAvatarUrl(url);
    }, []); // Run only once on component mount

    const renderStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };

    return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={avatarUrl} alt="User Avatar"/>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{review.username}</h3>
                    <p className="text-gray-600">Rating: {renderStars(review.rating)}</p>
                </div>
            </div>
            <p className="text-gray-800">{review.comment}</p>
        </div>
    );
};

export default CustomerReviewSection;
