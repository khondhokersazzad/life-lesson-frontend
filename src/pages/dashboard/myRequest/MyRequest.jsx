import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState([]);
  const [myRequest, setMyRequest] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/my-request?page=${currentPage - 1}&size=${itemsPerPage}`)
      .then((res) => {
        setMyRequest(res.data.request);
        setTotalRequest(res.data.totalRequest);
      });
  }, [axiosSecure, currentPage, itemsPerPage]);

  const numOfPage = Math.ceil(totalRequest / itemsPerPage);
  const pages = [...Array(numOfPage).keys()].map((e) => e + 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/user-request/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const filterData = myRequest.filter(
                (request) => request._id !== id
              );
              setMyRequest(filterData);
              Swal.fire(
                "Deleted!",
                "Your request has been deleted.",
                "success"
              );
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Could not delete the request.", "error");
          });
      }
    });
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        My Blood Requests
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>#</th>
              <th>Recipient</th>
              <th>Blood</th>
              <th>Location</th>
              <th>Hospital</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            {myRequest.map((req, index) => (
              <tr key={req._id} className="hover">
                {/* Dynamic Row Number */}
                <td>{(currentPage - 1) * itemsPerPage + (index + 1)}</td>

                {/* Recipient Name */}
                <td>{req.rec_name}</td>

                {/* Blood Type */}
                <td>
                  <span className="badge badge-error badge-outline font-bold">
                    {req.rec_blood}
                  </span>
                </td>

                {/* Location (District & Upazilla) */}
                <td className="text-xs">
                  {req.rec_district}, {req.rec_upazilla}
                </td>

                {/* Hospital & Specific Address */}
                <td>
                  <div className="text-sm">
                    <p className="font-semibold">{req.hospital}</p>
                    <p className="text-gray-500 text-xs">{req.address}</p>
                  </div>
                </td>

                {/* Date & Time */}
                <td>
                  <div className="text-sm">
                    <p>{req.req_date}</p>
                    <p className="text-gray-500 text-xs">{req.req_time}</p>
                  </div>
                </td>

                {/* Status  */}
                <td>
                    <span
                      className={`badge badge-sm text-white ${
                        req.donation_status === "inprogress"
                          ? "badge-info"
                          : req.donation_status === "completed"
                          ? "badge-success"
                          : req.donation_status === "canceled"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {req.donation_status || "pending"}
                    </span>
                  </td>

                {/* Actions */}
                <td className="flex gap-2 justify-center">
                  <Link
                    to={`/request-details/${req._id}`}
                    className="btn btn-xs btn-info btn-outline"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update-request-details/${req._id}`}
                    className="btn btn-xs btn-success btn-outline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(req._id)}
                    className="btn btn-xs btn-error btn-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <div className="flex justify-center mt-12 gap-4">
          <button onClick={handlePrev} className="btn">
            Prev
          </button>
          {pages.map((page) => (
            <button
              className={`btn ${
                page === currentPage ? "bg-[#435585] text-white" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} className="btn">
            Next
          </button>
        </div>
      </div>

      {/* Empty State (optional UI) */}
      <div className="hidden mt-10 text-center text-gray-500">
        You haven’t created any blood requests yet.
      </div>
    </div>
  );
};

export default MyRequest;
