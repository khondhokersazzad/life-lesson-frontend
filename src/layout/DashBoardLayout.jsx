import React from 'react';
import { Outlet } from 'react-router';
import Aside2 from '../components/Aside2';

const DashBoardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Aside2 />

      {/* Main Content Area */}
      
      <main className="flex-1 w-full lg:ml-64 min-h-screen">
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;