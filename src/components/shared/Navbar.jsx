import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, Bell, Search, Menu, User, LogOut, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar({ variant = 'landing' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (variant === 'landing') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant]);

  const navLinks = variant === 'landing'
    ? [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Security', href: '#security' },
        { name: 'Contact', href: '#contact' },
      ]
    : [
        { name: 'Dashboard', href: '/app/dashboard' },
        { name: 'Transactions', href: '/app/transactions' },
        { name: 'Disputes', href: '/app/disputes' },
      ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        variant === 'landing' && isScrolled
          ? 'bg-white/80 backdrop-blur-sm shadow-sm'
          : 'bg-white border-b'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left-aligned Logo */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')} // Navigate to landing page
            className="flex items-center gap-2"
          >
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">SecureEscrow</span>
          </Button>
        </div>

        {/* Right-aligned Navigation */}
        <div className="flex items-center gap-4">
          {variant === 'landing' ? (
            <>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-600 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate('/app/dashboard')} // Home button to Dashboard
              >
                Dashboard
              </Button>
              <Button
                onClick={() => navigate('/app/new-payment')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start Payment
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/app/dashboard')} // Home button
              >
                <Home className="h-5 w-5 text-gray-600 hover:text-blue-600" />
              </Button>

              <div className="max-w-lg w-full relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2">
                  <DropdownMenuItem onClick={() => navigate('/app/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/app/settings')}>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => navigate('/')}
                    className="text-red-600 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
