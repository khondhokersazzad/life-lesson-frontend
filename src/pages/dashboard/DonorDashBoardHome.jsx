import React, { useState, useEffect, useContext } from 'react';
import { Droplets, Clock, CheckCircle, PlusCircle } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DonorDashBoardHome = () => {
  const { user } = useContext(AuthContext); // To get the donor's name
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Note: If /my-request-count only returns a number, change this to your 
    // endpoint that returns the actual array of requests for the current user.
    axiosSecure.get('/my-request-count')
      .then(res => {
        // Safety: Ensure we are setting an array
        // const data = Array.isArray(res.data) ? res.data : [];
        setRequests(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching donor requests:", err);
        setRequests([]);
        setLoading(false);
      });
  }, [axiosSecure]);

  // Logic for Last 3 Donations
  const lastThreeRequests = requests.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* --- Welcome Message --- */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Welcome back, {user?.displayName || 'Hero'}!</h1>
          <p className="mt-2 text-red-100 max-w-md">
            Your contributions help save lives. Thank you for being a part of the BloodLink community.
          </p>
          <Link 
            to="/dashboard/add-request" 
            className="mt-6 inline-flex items-center gap-2 bg-white text-red-600 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition"
          >
            <PlusCircle size={18} />
            Create New Request
          </Link>
        </div>
        {/* Background Decorative Icon */}
        <Droplets className="absolute right-[-20px] bottom-[-20px] text-white/10 w-64 h-64 -rotate-12" />
      </div>

      {/* --- Summary Stats --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-50 text-blue-600"><Droplets /></div>
          <div>
            <p className="text-sm text-gray-500">My Total Requests</p>
            <p className="text-2xl font-bold">{requests.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-lg bg-green-50 text-green-600"><CheckCircle /></div>
          <div>
            <p className="text-sm text-gray-500">Fulfilled</p>
            <p className="text-2xl font-bold">{requests.filter(r => r.donation_status === 'completed').length}</p>
          </div>
        </div>
      </div>

      {/* --- Recent Requests Table --- */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">My Recent Requests</h2>
          <Link to="/dashboard/my-request" className="text-sm text-red-600 font-semibold hover:underline">
            See All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Recipient</th>
                <th className="px-6 py-4 font-medium">Blood Type</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-center md:text-left">
              {lastThreeRequests.length > 0 ? (
                lastThreeRequests.map((req) => (
                  <tr key={req._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-800">{req.rec_name}</p>
                      <p className="text-xs text-gray-500">{req.hospital}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                        {req.rec_blood}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{req.req_date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        req.donation_status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {req.donation_status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-10 text-center text-gray-400 italic">
                    You haven't made any requests yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorDashBoardHome;