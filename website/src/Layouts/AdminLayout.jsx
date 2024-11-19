import React from 'react';
import { Outlet } from 'react-router-dom';
import CollapsableSidebar from '../Components/CollapsableSidebar';

const AdminLayout = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 antialiased min-h-full">
      {/* <Navbar /> */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <CollapsableSidebar className="h-full" />

        {/* Main Content */}
        <main className="bg-gray-200 dark:bg-gray-900 h-full w-full flex flex-col">
          <div className="flex-grow  overflow-hidden">
            {/* Dynamic content based on the active route */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
