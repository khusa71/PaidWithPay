import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, Bell, Search, Menu, User, LogOut, Home, Plus, X } from 'lucide-react';
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
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function Navbar({ variant = 'landing' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);  // You can populate this with real notifications

  useEffect(() => {
    if (variant === 'landing') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        
        const sections = ['features', 'HowItWorks', 'security', 'contact'];
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
        { name: 'Features', href: '#features', id: 'features', icon: Home },
        { name: 'How It Works', href: '#HowItWorks', id: 'HowItWorks', icon: Shield },
        { name: 'Security', href: '#security', id: 'security', icon: Shield },
        { name: 'Contact', href: '#contact', id: 'contact', icon: Bell },
      ]
    : [
        { name: 'Dashboard', href: '/app/dashboard', icon: Home },
        { name: 'Transactions', href: '/app/transactions', icon: Shield },
        { name: 'Disputes', href: '/app/disputes', icon: Bell },
      ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const MobileSearch = () => (
    <div className={`
      fixed inset-0 z-50 bg-white transform transition-transform duration-300
      ${isMobileSearchOpen ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search transactions..."
            className="flex-1"
            autoFocus
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileSearchOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );

  const NotificationPanel = () => (
    <div className="flex flex-col gap-2 p-2 max-h-[70vh] overflow-y-auto">
      {notifications.length > 0 ? (
        notifications.map((notif, index) => (
          <div
            key={index}
            className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <div className="font-medium">{notif.title}</div>
            <div className="text-sm text-gray-500">{notif.description}</div>
          </div>
        ))
      ) : (
        <div className="p-3 text-center text-gray-500">
          No new notifications
        </div>
      )}
    </div>
  );

  return (
    <>
      <MobileSearch />
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
              <span className="text-lg font-bold">PaidWithPay</span>
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
                    <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                      <SheetHeader className="p-6 border-b">
                        <SheetTitle>Menu</SheetTitle>
                      </SheetHeader>
                      <div className="flex flex-col px-6">
                        {navLinks.map((link) => (
                          <SheetClose key={link.name} asChild>
                            <button
                              onClick={() => scrollToSection(link.id)}
                              className="flex items-center gap-3 py-4 text-sm font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100"
                            >
                              <link.icon className="h-5 w-5" />
                              {link.name}
                            </button>
                          </SheetClose>
                        ))}
                      </div>
                      <SheetFooter className="p-6 mt-auto border-t">
                        <div className="flex flex-col gap-3 w-full">
                          <Button 
                            variant="outline" 
                            onClick={() => navigate('/app/dashboard')}
                            className="w-full justify-start"
                          >
                            <User className="h-5 w-5 mr-2" />
                            Dashboard
                          </Button>
                          <Button 
                            onClick={() => navigate('/app/new-payment')}
                            className="w-full bg-blue-600 hover:bg-blue-700 justify-start"
                          >
                            <Plus className="h-5 w-5 mr-2" />
                            Start Payment
                          </Button>
                        </div>
                      </SheetFooter>
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
                    {/* Desktop Search Bar */}
                    <div className="relative hidden md:block w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    {/* Mobile Search Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden"
                      onClick={() => setIsMobileSearchOpen(true)}
                    >
                      <Search className="h-5 w-5" />
                    </Button>

                    {/* New Payment Button - Different styles for mobile/desktop */}
                    <Button
                      onClick={() => navigate('/app/new-payment')}
                      className="bg-blue-600 hover:bg-blue-700 hidden md:flex"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Payment
                    </Button>
                    <Button
                      onClick={() => navigate('/app/new-payment')}
                      size="icon"
                      className="bg-blue-600 hover:bg-blue-700 md:hidden"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>

                    {/* Notifications */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                          <Bell className="h-5 w-5" />
                          {notifications.length > 0 && (
                            <Badge 
                              variant="destructive" 
                              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
                            >
                              {notifications.length}
                            </Badge>
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-80">
                        <NotificationPanel />
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User Menu */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden h-9 w-9 rounded-full">
                          <User className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-full p-0">
                        <SheetHeader className="p-6 border-b">
                          <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col px-6">
                          {navLinks.map((link) => (
                            <SheetClose key={link.name} asChild>
                              <Button
                                variant="ghost"
                                onClick={() => navigate(link.href)}
                                className="justify-start py-4 text-left"
                              >
                                <link.icon className="h-5 w-5 mr-2" />
                                {link.name}
                              </Button>
                            </SheetClose>
                          ))}
                          <hr className="my-4" />
                          <Button
                            variant="ghost"
                            onClick={() => navigate('/app/profile')}
                            className="justify-start"
                          >
                            <User className="h-5 w-5 mr-2" />
                            Profile
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => navigate('/')}
                            className="justify-start text-red-600 hover:text-red-700"
                          >
                            <LogOut className="h-5 w-5 mr-2" />
                            Logout
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>

                    {/* Desktop User Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9 rounded-full">
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
    </>
  );
}

export default Navbar;