import React from "react";

const WhyDonate = () => {
  const reasons = [
    {
      title: "Save Up to 3 Lives",
      description:
        "A single donation can be separated into several components like red blood cells, plasma, and platelets, helping multiple patients.",
      icon: "❤️",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Health Benefits",
      description:
        "Regular donation helps maintain healthy iron levels, reduces cardiovascular disease risk, and provides free health screenings.",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Free Health Check",
      description:
        "Every donor receives a comprehensive mini-physical, checking pulse, blood pressure, temperature, and hemoglobin levels.",
      icon: "🩺",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Enhanced Visual Element */}
          <div className="lg:w-1/2 relative">
            {/* Floating Background Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>

            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://i.ibb.co.com/93hfz7zn/judy-beth-morris-0r-R2p-Sfms-Uo-unsplash.jpg"
                  alt="Blood donation process"
                  className="w-full h-[450px] object-cover rounded-2xl"
                />

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      2,847
                    </div>
                    <div className="text-sm text-gray-600">Lives Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enhanced Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-600 text-sm font-bold uppercase tracking-widest rounded-full mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                The Impact
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Why should
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                  {" "}
                  you donate?
                </span>
              </h3>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-red-50 transition-all duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-2xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Start Donating Today
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default WhyDonate;
