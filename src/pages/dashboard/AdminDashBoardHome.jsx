import React, { useState, useEffect } from "react";
import { Users, Droplets, Clock, CheckCircle, AlertCircle } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminDashBoardHome = () => {
  const [recentRequests, setRecentRequests] = useState([]);
  const [allRequests, setAllRequests] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // 1. Fetch All Requests for counting
  useEffect(() => {
    axiosSecure.get(`/all-request-count`)
      .then((res) => {
        setAllRequests(res.data);
      })
      .catch((err) => console.error("Error fetching all requests:", err));
  }, [axiosSecure]);

  // 2. Fetch Last 3 Requests for the table
  useEffect(() => {
    axiosSecure.get(`/last-request`)
      .then((res) => {
        setRecentRequests(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching last requests:", err);
        setLoading(false);
      });
  }, [axiosSecure]);


  //3. Fetch for all users

   useEffect(() => {
    axiosSecure.get(`/all-users`)
      .then((res) => {
        setAllUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching last requests:", err);
        setLoading(false);
      });
  }, [axiosSecure]);

  // 4. Define Dynamic Stats
  const stats = [
    {
      id: 1,
      label: "Total Requests",
      value: allRequests?.length || 0,
      icon: <Droplets className="text-red-500" />,
      color: "bg-red-50",
    },
    {
      id: 2,
      label: "Pending",
      value: allRequests?.filter(req => req.donation_status === "pending").length || 0,
      icon: <Clock className="text-yellow-500" />,
      color: "bg-yellow-50",
    },
    {
      id: 3,
      label: "Fulfilled",
      value: allRequests?.filter(req => req.donation_status === "completed").length || 0,
      icon: <CheckCircle className="text-green-500" />,
      color: "bg-green-50",
    },
    {
      id: 4,
      label: "Total Users",
      value: allUsers?.length, // You'll need an /all-users endpoint for this
      icon: <Users className="text-blue-500" />,
      color: "bg-blue-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Admin Overview</h1>
        <p className="text-gray-500">Welcome back! Here is what's happening today.</p>
      </div>

      {/* --- Stats Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- Recent Activity Table --- */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Recent Blood Requests</h2>
          <button className="text-sm text-red-600 font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase text-center">
              <tr>
                <th className="px-6 py-4 font-medium">Recipient</th>
                <th className="px-6 py-4 font-medium">Blood Type</th>
                <th className="px-6 py-4 font-medium">Hospital</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentRequests.map((req) => (
                <tr key={req._id} className="hover:bg-gray-50 transition-colors text-center">
                  <td className="px-6 py-4 font-medium text-gray-700">{req.rec_name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                      {req.rec_blood}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{req.hospital}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{req.req_date}</td>
                  <td className="px-6 py-4 flex justify-center">
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${
                      req.donation_status === "Pending" ? "text-yellow-600" : "text-green-600"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        req.donation_status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                      }`} />
                      {req.donation_status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {recentRequests.length === 0 && !loading && (
            <div className="text-center py-10 text-gray-400">No recent requests found.</div>
          )}
        </div>
      </div>

      {/* --- Alerts & Tasks --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="text-red-600" size={20} />
            <h3 className="text-red-800 font-semibold">Critical Supply Alert</h3>
          </div>
          <p className="text-red-700 text-sm">O-Negative stocks are low. Consider notifying donors.</p>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition">
            Notify Donors
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-yellow-600" size={20} />
            <h3 className="text-yellow-800 font-semibold">System Tasks</h3>
          </div>
          <ul className="text-sm text-yellow-700 space-y-2">
            <li>• Review 5 pending volunteer applications</li>
            <li>• Monthly donation report is ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardHome;