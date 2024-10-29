import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/shared/Navbar';
import { Sidebar } from './Sidebar';
import { Button } from '@/components/ui/button';
import { Menu, AlertTriangle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar 
        variant="dashboard" 
        className="fixed top-0 left-0 right-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60" 
      />

      <div className="flex min-h-screen pt-16">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 bg-white overflow-y-auto border-r">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <Sheet 
            open={isSidebarOpen} 
            onOpenChange={setIsSidebarOpen}
            modal={true}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="fixed top-3 left-4 z-50 hover:bg-gray-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="p-0 w-72 border-r"
              onInteractOutside={() => setIsSidebarOpen(false)}
              onEscapeKeyDown={() => setIsSidebarOpen(false)}
            >
              <div className="pt-16">
                <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full lg:ml-64 transition-all duration-300">
          <div className="p-4 md:p-6 max-w-7xl mx-auto min-h-[calc(100vh-4rem)]">
            <div className="h-full">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Progress Indicator Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      <div className="mt-4 text-sm text-gray-600 animate-pulse">Loading...</div>
    </div>
  </div>
);

// Error Boundary Component
const ErrorFallback = ({ error }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
    <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
    <h2 className="text-lg font-semibold text-gray-900 mb-2">
      Something went wrong
    </h2>
    <p className="text-gray-600 text-center mb-6 max-w-md">
      {error?.message || "An unexpected error occurred. Please try again."}
    </p>
    <div className="space-x-4">
      <Button
        variant="outline"
        onClick={() => window.location.reload()}
        className="hover:bg-gray-100"
      >
        Retry
      </Button>
      <Button
        variant="default"
        onClick={() => window.history.back()}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Go Back
      </Button>
    </div>
  </div>
);

// Authentication Guard Component
const AuthGuard = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Replace with your actual auth check
        const authStatus = true; // await checkAuthStatus();
        setIsAuthenticated(authStatus);
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, []);

  if (isChecking) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { LoadingSpinner, ErrorFallback, AuthGuard };