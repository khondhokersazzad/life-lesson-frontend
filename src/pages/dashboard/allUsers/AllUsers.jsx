import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([])


  const axiosSecure = useAxiosSecure();

  const fetchUsers = () => {
    axiosSecure.get("/users").then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, [axiosSecure]);

  const handleStatusChange = (email, status) => {
    axiosSecure
      .patch(`/update/user/status?email=${email}&status=${status}`)
      .then(() => {
        fetchUsers();
      });
  };

  const handleRoleChange = async (email, role) => {
      try {
        const res = await axiosSecure
    .patch(`update/user/role?email=${email}&role=${role}`
        );
  
        if (res.data.modifiedCount > 0) {
          // Update the local state so the UI reflects the change immediately
          setUsers((prev) =>
            prev.map((req) =>
              req.email === email ? { ...req, role: role } : req
            )
          );
          Swal.fire("Success", `Role changed to ${role}`, "success");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Failed to update status", "error");
      }
    };

    

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Role</th>
              <th>Active Status</th>
              <th>Activate / Block</th>
              <th>Assign Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((u) => {
              return (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={u?.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{u?.displayName}</div>
                        <div className="text-sm opacity-50">{u?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{u?.role}</td>
                  <td className="text-center">{u?.status}</td>
                  <th>
                    {u.status !== "active" ? (
                      <button
                        onClick={() => handleStatusChange(u?.email, "active")}
                        className="btn text-white m-1 btn-success btn-sm w-24 justify-center"
                      >
                        Activate
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatusChange(u?.email, "block")}
                        className="btn text-white m-1 btn-error btn-sm w-24 justify-center"
                      >
                        Block
                      </button>
                    )}
                  </th>

                  <th>
                    <th className="space-x-2">
                      {u?.role === "admin" && (
                        <>
                          <button onClick={()=>handleRoleChange(u?.email,"admin")} className="btn btn-sm btn-outline btn-info w-28">
                            Make Donor
                          </button>
                          <button onClick={()=>handleRoleChange(u?.email,"volunteer")} className="btn btn-sm btn-outline btn-success w-32">
                            Make Volunteer
                          </button>
                        </>
                      )}

                      {u?.role === "volunteer" && (
                        <>
                          <button onClick={()=>handleRoleChange(u?.email,"admin")} className="btn btn-sm btn-outline btn-warning w-28">
                            Make Admin
                          </button>
                          <button onClick={()=>handleRoleChange(u?.email,"donor")} className="btn btn-sm btn-outline btn-info w-28">
                            Make Donor
                          </button>
                        </>
                      )}

                      {u?.role === "donor" && (
                        <>
                          <button onClick={()=>handleRoleChange(u?.email,"admin")} className="btn btn-sm btn-outline btn-warning w-28">
                            Make Admin
                          </button>
                          <button onClick={()=>handleRoleChange(u?.email,"volunteer")} className="btn btn-sm btn-outline btn-success w-32">
                            Make Volunteer
                          </button>
                        </>
                      )}
                    </th>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
