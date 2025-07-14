import React from 'react';

const reviews = [
    {
        name: 'Jatin Kumar',
        message: 'Great service and fast delivery!',
    },
    {
        name: 'Aisha Sharma',
        message: 'Very helpful staff and clean interface.',
    },
    {
        name: 'Ravi Mehta',
        message: 'Could be improved in response time.',
    },
];

const ReviewList = () => {

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="font-extrabold text-2xl mb-1">Reviews</h1>
            <p className="text-gray-600 mb-4">{reviews.length} Review{reviews.length > 1 ? 's' : ''}</p>

            {reviews.map((review, index) => (
                <div
                    className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
                >
                    {/* Avatar + Name */}
                    <div className="flex items-center mb-2">
                        <div
                            className="w-10 h-10 rounded-full mr-3 text-white uppercase flex items-center justify-center"
                            style={{ backgroundColor: '#28a745' }}
                        >
                            {review.name[0]}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">{review.name}</p>
                        </div>
                    </div>

                    {/* Review message */}
                    <p className="text-gray-700 italic">"{review.message}"</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
