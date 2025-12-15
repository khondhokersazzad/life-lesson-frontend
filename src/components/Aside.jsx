import React from "react";

import {
  Home,
  User,
  Droplet,
  PlusCircle,
  Users,
  DollarSign,
  LogOut,
} from "lucide-react";

const Aside = () => {
  return (
    <div>
      <aside className="w-64 min-h-screen bg-white border-r shadow-sm flex flex-col">
        {/* Logo */}
        <div className="p-5 border-b">
          <h1 className="text-2xl font-bold text-red-600">
            Blood<span className="text-gray-800">Link</span>
          </h1>
          <p className="text-sm text-gray-500">Linking Lives Through Blood</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-1 text-gray-700">
          {/* Common */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <Home size={18} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <User size={18} />
            <span>Profile</span>
          </div>

          {/* Donor */}
          <div className="mt-4 text-xs font-semibold text-gray-400 uppercase px-4">
            Donor
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <Droplet size={18} />
            <span>My Donation Requests</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <PlusCircle size={18} />
            <span>Create Donation Request</span>
          </div>

          {/* Volunteer */}
          <div className="mt-4 text-xs font-semibold text-gray-400 uppercase px-4">
            Volunteer
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <Droplet size={18} />
            <span>All Blood Donation Requests</span>
          </div>

          {/* Admin */}
          <div className="mt-4 text-xs font-semibold text-gray-400 uppercase px-4">
            Admin
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <Users size={18} />
            <span>All Users</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 cursor-pointer">
            <DollarSign size={18} />
            <span>Funding</span>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 cursor-pointer">
            <LogOut size={18} />
            <span>Logout</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
