import React from 'react';
import { Outlet } from 'react-router';
import Aside2 from '../components/Aside2';

const DashBoardLayout = () => {
  return (
    <div className="flex">
  {/* Fixed Sidebar */}
  <aside className="fixed left-0 top-0 h-screen w-64">
    <Aside2 />
  </aside>

  {/* Scrollable Content */}
  <main className="ml-0 md:ml-64 flex-1 h-screen overflow-y-auto">
    <Outlet />
  </main>
</div>

  );
};

export default DashBoardLayout;