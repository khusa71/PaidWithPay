import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  Clock,
  PlusCircle,
  AlertTriangle,
  Settings,
  User,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Clock, label: 'Transactions', path: '/transactions' },
  { icon: PlusCircle, label: 'New Payment', path: '/new-payment' },
  { icon: AlertTriangle, label: 'Disputes', path: '/disputes' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-full bg-white border-r">
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center h-12 mb-8">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-lg font-semibold">SecureEscrow</span>
        </div>
        
        <nav className="space-y-1 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start mb-1',
                    isActive && 'bg-blue-50 text-blue-600 hover:bg-blue-50'
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;