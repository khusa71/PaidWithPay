import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, Bell, Search, Menu, User, LogOut, Home, Plus } from 'lucide-react';
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
  SheetClose
} from '@/components/ui/sheet';

export function Navbar({ variant = 'landing' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (variant === 'landing') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        
        // Update active section
        const sections = ['features', 'how-it-works', 'security', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(currentSection);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant]);

  const navLinks = variant === 'landing'
    ? [
        { name: 'Features', href: '#features', id: 'features' },
        { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
        { name: 'Security', href: '#security', id: 'security' },
        { name: 'Contact', href: '#contact', id: 'contact' },
      ]
    : [
        { name: 'Dashboard', href: '/app/dashboard' },
        { name: 'Transactions', href: '/app/transactions' },
        { name: 'Disputes', href: '/app/disputes' },
      ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        variant === 'landing' && isScrolled
          ? 'bg-white/80 backdrop-blur-sm shadow-sm'
          : 'bg-white border-b'
      }`}
    >
      <div className="max-w-7xl mx-auto relative px-4">
        <nav className="h-16 flex items-center justify-between">
          {/* Logo Section */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:bg-transparent rounded-none h-16 pl-0"
          >
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">SecureEscrow</span>
          </Button>

          {/* Navigation Section */}
          <div className="flex items-center gap-4">
            {variant === 'landing' ? (
              <>
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className={`text-sm font-medium transition-colors hover:text-blue-600
                        ${activeSection === link.id ? 'text-blue-600' : 'text-gray-600'}`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-4">
                      {navLinks.map((link) => (
                        <SheetClose key={link.name} asChild>
                          <button
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 text-left"
                          >
                            {link.name}
                          </button>
                        </SheetClose>
                      ))}
                      <hr className="my-2" />
                      <Button 
                        variant="outline" 
                        onClick={() => navigate('/app/dashboard')}
                        className="w-full"
                      >
                        Dashboard
                      </Button>
                      <Button 
                        onClick={() => navigate('/app/new-payment')}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Start Payment
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center gap-3">
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/app/dashboard')}
                  >
                    Dashboard
                  </Button>
                  <Button
                    onClick={() => navigate('/app/new-payment')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Start Payment
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Dashboard Navigation */}
                <div className="flex items-center gap-4">
                  {/* Search Bar */}
                  <div className="relative hidden md:block w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search transactions..."
                      className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  {/* New Payment Button */}
                  <Button
                    onClick={() => navigate('/app/new-payment')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    New Payment
                  </Button>

                  {/* Notifications */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <div className="flex flex-col p-2">
                        <h3 className="font-semibold mb-2">Notifications</h3>
                        <div className="text-sm text-gray-500">No new notifications</div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* User Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem onClick={() => navigate('/app/profile')}>
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/app/settings')}>
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate('/')} className="text-red-600">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;