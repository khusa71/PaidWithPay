import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: Redirect to login if not authenticated
  // React.useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;