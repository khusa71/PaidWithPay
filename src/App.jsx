import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import LandingPage from '@/pages/LandingPage';
import Dashboard from '@/pages/Dashboard';
import Transactions from '@/pages/Transactions';
import NewPayment from '@/pages/NewPayment';
import Profile from '@/pages/Profile';
import Disputes from '@/pages/Disputes';
import Settings from '@/pages/Settings';
import Documentation from '@/pages/Documentation';
import Support from '@/pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="new-payment" element={<NewPayment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="disputes" element={<Disputes />} />
          <Route path="settings" element={<Settings />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;