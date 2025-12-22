import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { LogOut, Menu, X } from "lucide-react";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Aside2 = () => {
  const { role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // Controls mobile visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate("/auth/login");
  };

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-3 flex items-center gap-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Trigger Header - Only visible on small screens */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center z-50">
        <span className="font-bold text-red-500">BloodLink</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 bg-gray-800 rounded">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-gray-200 flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="px-6 py-8 border-b border-gray-800">
          <Link to="/" className="text-2xl font-bold text-red-500 block">
            BloodLink
          </Link>
          <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Logged in as</p>
            <p className="text-yellow-500 font-medium capitalize">{role}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <NavLink to="/dashboard" end className={navLinkStyles} onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/dashboard/profile" className={navLinkStyles} onClick={() => setIsOpen(false)}>
            Profile
          </NavLink>

          {role === "donor" && (
            <>
              <NavLink to="/dashboard/add-request" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Add Request
              </NavLink>
              <NavLink to="/dashboard/my-request" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                My Requests
              </NavLink>
            </>
          )}

          {(role === "admin" || role === "volunteer") && (
            <NavLink to="/dashboard/all-request" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              All Requests
            </NavLink>
          )}

          {role === "admin" && (
            <NavLink to="/dashboard/users" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              Manage Users
            </NavLink>
          )}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay - Closes sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Aside2;