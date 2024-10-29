import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Clock,
  PlusCircle,
  AlertTriangle,
  Settings,
  User,
  FileText,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const menuItems = [
  {
    title: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/app/dashboard' },
      { icon: Clock, label: 'Transactions', path: '/app/transactions' },
      { icon: PlusCircle, label: 'New Payment', path: '/app/new-payment' },
      { icon: AlertTriangle, label: 'Disputes', path: '/app/disputes' },
    ]
  },
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Profile', path: '/app/profile' },
      { icon: Settings, label: 'Settings', path: '/app/settings' },
    ]
  },
  {
    title: 'Support',
    items: [
      { icon: FileText, label: 'Documentation', path: '/app/docs' },
      { icon: HelpCircle, label: 'Help & Support', path: '/app/support' },
    ]
  }
];

const NavigationContent = ({ onItemClick, isMobile }) => {
  const location = useLocation();

  return (
    <div className={cn(
      "flex flex-col h-full",
      isMobile ? "pt-4" : "pt-0"  // Add padding top only for mobile
    )}>
      <div className="flex-1 py-4">
        {menuItems.map((section, index) => (
          <div
            key={section.title}
            className={cn("mb-6", index !== 0 && "mt-8")}
          >
            <h3 className="px-4 mb-2 text-sm font-medium text-gray-500">
              {section.title}
            </h3>
            <div className="space-y-1 px-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={onItemClick}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start",
                        isActive && "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600",
                        "group transition-all duration-200"
                      )}
                    >
                      <Icon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="p-4">
        <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Need Help?
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Check our documentation
          </p>
          <Button 
            variant="outline" 
            className="w-full justify-start group"
            onClick={() => window.open('/docs', '_blank')}
          >
            <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  );
};

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    if (isMounted) {
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMounted]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileOpen(false);
      }
    };

    setIsMounted(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-md hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="w-72 p-0 z-[100] fixed top-0 h-full"
            onInteractOutside={() => setIsMobileOpen(false)}
            onEscapeKeyDown={() => setIsMobileOpen(false)}
          >
            <SheetHeader className="px-4 py-4 border-b">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="h-full overflow-y-auto bg-white">
              <NavigationContent 
                onItemClick={() => setIsMobileOpen(false)} 
                isMobile={true}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full border-r bg-white">
        <NavigationContent onItemClick={() => {}} isMobile={false} />
      </div>
    </>
  );
}