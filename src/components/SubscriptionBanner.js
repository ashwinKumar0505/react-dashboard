import React from "react";

const SubscriptionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-8 rounded-lg shadow-lg flex items-center justify-between">
      <div className="text-left">
        <h1 className="text-xl font-bold text-gray-800">
          Sign Up to AI Broker Tiers and enjoy all the perks
        </h1>
        <p className="mt-2 text-gray-600 max-w-xl text-sm">
          Unlock exclusive access to premium content, personalized insights, and
          unique perks by subscribing to AI Broker tiers now!
        </p>
      </div>
      <div>
        <a
          href="#"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
        >
          Sign Up Now <i className="fas fa-external-link-alt ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
