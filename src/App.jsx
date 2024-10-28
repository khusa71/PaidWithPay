import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import NewPayment from './pages/NewPayment';
import Profile from './pages/Profile';
import Disputes from './pages/Disputes';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex h-[calc(100vh-64px)]">
          <div className="w-64 flex-shrink-0">
            <Sidebar />
          </div>
          <main className="flex-1 overflow-auto bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/new-payment" element={<NewPayment />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/disputes" element={<Disputes />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;