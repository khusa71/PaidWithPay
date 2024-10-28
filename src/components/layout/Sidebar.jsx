import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Clock,
  PlusCircle,
  AlertTriangle,
  Settings,
  User,
  FileText,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="py-4 px-3 h-full">
      {menuItems.map((section, index) => (
        <div
          key={section.title}
          className={cn("mb-6", index !== 0 && "mt-8")}
        >
          <h3 className="px-3 mb-2 text-sm font-medium text-gray-500">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      isActive && "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-3 right-3">
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Need Help?
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Check our documentation
          </p>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => window.open('/docs', '_blank')}
          >
            <FileText className="mr-2 h-4 w-4" />
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}