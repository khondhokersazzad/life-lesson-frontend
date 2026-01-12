import React from "react";
import { Link } from "react-router";
import FeaturedSection from "../components/FeaturedSection";
import ContactSection from "../components/ContactSection";
import WhyDonate from "../components/WhyDonate";

const Home = () => {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/RpsJy15Q/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg')",
          }}
        >
          {/* Enhanced Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-red-900/40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full animate-bounce"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-6 max-w-6xl">
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight">
              blood
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 animate-pulse">
                Link
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Connecting hearts, saving lives.
            <span className="text-red-300 font-medium">Your donation</span> can
            be someone's
            <span className="text-pink-300 font-medium"> second chance</span>.
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/auth/register"
              className="group relative px-12 py-5 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-2xl transition-all duration-500 hover:from-red-700 hover:to-pink-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] w-full sm:w-auto transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Join As Donor
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              to="/search-request"
              className="group px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-2xl transition-all duration-500 hover:bg-white hover:text-gray-900 w-full sm:w-auto transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                Find Donors
              </span>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                2.8K+
              </div>
              <div className="text-red-200 text-sm">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                15K+
              </div>
              <div className="text-red-200 text-sm">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                45+
              </div>
              <div className="text-red-200 text-sm">Partner Hospitals</div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <section>
        <FeaturedSection></FeaturedSection>
      </section>
      <section>
        <WhyDonate></WhyDonate>
      </section>
      <section>
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default Home;
