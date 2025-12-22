import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {/* Thematic Visual: A broken blood drop line */}
      <div className="relative flex justify-center items-center mb-10">
        {/* Large stylized 404 in the background */}
        <span className="text-[10rem] md:text-[14rem] font-black text-red-50 opacity-10 leading-none select-none">
          404
        </span>
        
        {/* Foreground Icon: A drop with a search glass */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative">
            <svg 
              className="w-24 h-24 text-red-600 drop-shadow-xl" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored Messaging */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Life Line Disconnected
      </h2>
      <p className="text-gray-500 max-w-lg mb-10 text-lg leading-relaxed">
        We couldn't find the page you're looking for. It might have been moved, 
        but don't worry—the mission to save lives continues. 
        Try searching for a donor instead.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link 
          to="/" 
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-200 transform hover:-translate-y-1 w-full sm:w-auto"
        >
          Back to Home
        </Link>
        
        <Link 
          to="/search-request" 
          className="px-8 py-3 bg-white border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all w-full sm:w-auto"
        >
          Search Donors
        </Link>
      </div>

      {/* Helpful Hint */}
      <p className="mt-12 text-sm text-gray-400">
        If you believe this is a technical error, please <Link to="/contact" className="underline hover:text-red-500">contact support</Link>.
      </p>
    </div>
  );
};

export default Error;