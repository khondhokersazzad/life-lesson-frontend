import React from "react";
import { Link } from "react-router";
import BloodLink from "../assets/bloodlink.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Find Donors", path: "/search-request" },
    { name: "Blood Requests", path: "/blood-donation-request" },
    { name: "Funding", path: "/funding" },
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323c-.875.875-2.026 1.167-3.323 1.167zm7.718 0c-1.297 0-2.448-.292-3.323-1.167-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.374c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323c-.875.875-2.026 1.167-3.323 1.167z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/10 to-pink-600/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={BloodLink}
                  alt="BloodLink"
                  className="h-12 w-12 rounded-full border-2 border-red-500/30"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    blood
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                      Link
                    </span>
                  </h3>
                  <p className="text-red-200 text-sm">Saving Lives Together</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Connecting hearts and saving lives through our innovative blood
                donation platform. Join thousands of donors making a difference
                every day.
              </p>

              {/* Emergency Contact */}
              <div className="bg-red-600/20 backdrop-blur-md border border-red-500/30 rounded-2xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Emergency Hotline
                    </p>
                    <p className="text-red-200 font-bold">+880-1234-BLOOD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group"
                    >
                      <svg
                        className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.106-1.106A6.003 6.003 0 004 10c0 .639.1 1.255.283 1.836l1.875-1.875zM10 4a6 6 0 00-4.447 2.032l1.588 1.588a4.007 4.007 0 012.859-1.62V4z"
                    clipRule="evenodd"
                  />
                </svg>
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group"
                    >
                      <svg
                        className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Stay Connected
              </h4>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-4">
                  Get updates on blood drives and donation opportunities
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-r-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-300 text-sm mb-4">
                  Follow us on social media
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BloodLink. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-400">
                <span>Made with</span>
                <svg
                  className="w-4 h-4 text-red-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>for humanity</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-white font-bold">2.8K+</div>
                <div className="text-gray-400">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold">15K+</div>
                <div className="text-gray-400">Donors</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold">45+</div>
                <div className="text-gray-400">Hospitals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
