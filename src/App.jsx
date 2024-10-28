import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import NewPayment from './pages/NewPayment';
import Profile from './pages/Profile';
import Disputes from './pages/Disputes';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Navigate to="/app/dashboard" replace />} />
        
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="new-payment" element={<NewPayment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="disputes" element={<Disputes />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;