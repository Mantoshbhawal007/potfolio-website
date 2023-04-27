import React from 'react';

function TestimonialCard({ name, image, text }) {
  return (
    <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 rounded-full"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">
            {name}
          </div>
          <p className="mt-2 text-gray-300">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
