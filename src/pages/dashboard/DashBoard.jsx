import React, { useContext } from "react";

import AdminDashBoardHome from "./AdminDashBoardHome";
import VolunteerDashBoardHome from "./VolunteerDashBoardHome";
import DonorDashBoardHome from "./DonorDashBoardHome";
import { AuthContext } from "../../provider/AuthProvider";

const DashBoard = () => {
  const { role, loading, roleLoading } = useContext(AuthContext);
  console.log(role);
  if (loading || roleLoading ) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }
  console.log(role,loading, roleLoading);

  // 2. Conditional Rendering Logic
  return (
    <div>
      
      {role === "admin" && <AdminDashBoardHome />}

      {role === "volunteer" && <VolunteerDashBoardHome />}

      {role === "donor" && <DonorDashBoardHome />}

      {/* 3. Fallback for unexpected roles */}
      {!["admin", "volunteer", "donor"].includes(role) && (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-gray-600">
            Role not recognized.
          </h2>
          <p className="text-gray-500">
            Please contact support if you believe this is an error.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
