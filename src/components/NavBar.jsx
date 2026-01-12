import React, { useContext, useState, useEffect } from "react";
import BloodLink from "../assets/bloodlink.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Banner with Logo */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={BloodLink}
              alt="BloodLink"
              className="h-12 w-12 rounded-full border-2 border-white/30"
            />
            <div className="text-white">
              <h1 className="text-xl font-bold">BloodLink</h1>
              <p className="text-xs text-red-100">Saving Lives Together</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center space-x-2 text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm font-medium">Emergency: 999</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="navbar container mx-auto px-6">
          <div className="navbar-start">
            <NavLink
              className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors"
              to="/"
            >
              <svg
                className="w-8 h-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                BloodLink
              </span>
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`
                  }
                  to="/"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`
                  }
                  to="/blood-donation-request"
                >
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
                  Requests
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`
                  }
                  to="/search-request"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`
                  }
                  to="/funding"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                  Funding
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* Mobile dropdown */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-md rounded-2xl mt-3 w-64 p-4 shadow-2xl border border-gray-100"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "hover:bg-red-50 text-gray-700"
                      }`
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blood-donation-request"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "hover:bg-red-50 text-gray-700"
                      }`
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Blood Requests</span>
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/search-request"
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                            isActive
                              ? "bg-red-600 text-white"
                              : "hover:bg-red-50 text-gray-700"
                          }`
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Search</span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/funding"
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                            isActive
                              ? "bg-red-600 text-white"
                              : "hover:bg-red-50 text-gray-700"
                          }`
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                        </svg>
                        <span>Funding</span>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {user?.uid ? (
              <div className="relative ml-4">
                <button
                  className="flex items-center space-x-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setOpen(!open)}
                >
                  <img
                    src={user?.photoURL}
                    alt="avatar"
                    className="w-8 h-8 rounded-full border-2 border-white/30"
                  />
                  <span className="hidden md:block font-medium">
                    {user?.displayName?.split(" ")[0] || "User"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {open && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">
                        {user?.displayName}
                      </p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span>Dashboard</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                to="/auth/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
