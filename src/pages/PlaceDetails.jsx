import React from 'react';
import { useLocation } from 'react-router-dom';
import PlaceRoute from './PlaceRoute';

const PlaceDetails = ({handleOrderPopup}) => {
    const location = useLocation(); 
    console.log(location, " useLocation Hook");

    const { img, title, description, price, type, aosDelay } = location.state || {};

    return (
        <div className="min-h-screen pt-20 bg-gray-100">
            {/* Image Section */}
            <div className="h-[350px] overflow-hidden relative">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-3xl md:text-4xl text-white font-bold">{title}</h1>
                </div>
            </div>

            {/* Details Section */}
            <div className="container mx-auto p-6 md:p-10 bg-white shadow-lg rounded-lg -mt-10 relative z-10">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600">{description}</p>

                <div className="flex flex-wrap justify-between items-center mt-6">
                    <span className="text-lg font-semibold text-blue-600">💰 Price: ${price}</span>
                    <span className="text-lg font-semibold text-green-600">🏠 Type: {type}</span>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8">
                    <button 
                                    onClick={ handleOrderPopup}
                    className="bg-gradient-to-tr from-primary to-secondary text-white px-6 py-3 rounded-lg shadow-lg transition">
                        Book Now
                    </button>
                </div>
            </div>

            {/* All Blogs / Related Places */}
            <div className="mt-16">
                <PlaceRoute />
            </div>
        </div>
    );
};

export default PlaceDetails;
