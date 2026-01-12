import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold uppercase tracking-widest rounded-full mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              {" "}
              Save Lives?
            </span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Have questions about blood donation or need urgent assistance? Our
            team is here to help 24/7.
          </p>

          {/* Emergency Contact Banner */}
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-2xl shadow-lg">
            <svg
              className="w-5 h-5 mr-3 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-bold">Emergency Hotline: </span>
            <span className="ml-2 text-red-200">+880-1234-BLOOD</span>
          </div>
        </div>

        {/* Enhanced Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success(
                "Message sent successfully! We'll get back to you soon."
              );
              navigate("/");
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-white font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 group-hover:border-white/50"
                />
              </div>
              <div className="group">
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 group-hover:border-white/50"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-white font-semibold mb-2">
                Subject
              </label>
              <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 group-hover:border-white/50">
                <option value="" className="text-gray-900">
                  Select a topic
                </option>
                <option value="donation" className="text-gray-900">
                  Blood Donation Inquiry
                </option>
                <option value="emergency" className="text-gray-900">
                  Emergency Request
                </option>
                <option value="partnership" className="text-gray-900">
                  Hospital Partnership
                </option>
                <option value="technical" className="text-gray-900">
                  Technical Support
                </option>
                <option value="other" className="text-gray-900">
                  Other
                </option>
              </select>
            </div>

            <div className="group">
              <label className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 group-hover:border-white/50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-5 rounded-2xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
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
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+880-1234-BLOOD</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">help@bloodlink.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
