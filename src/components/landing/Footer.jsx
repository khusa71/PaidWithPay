import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  Product: ['Features', 'Security', 'Pricing', 'FAQ'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Security'],
  Support: ['Help Center', 'Documentation', 'API Status', 'Contact Us']
};

// Link component for reusability and accessibility
const FooterLink = ({ link }) => (
  <li>
    <a
      href="#"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={link}
    >
      {link}
    </a>
  </li>
);

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SecureEscrow</span>
            </div>
            <p className="text-gray-400 mb-4">
              Secure payments made simple with UPI and escrow protection.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1 md:col-span-1">
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <FooterLink key={link} link={link} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SecureEscrow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(policy => (
                <a
                  key={policy}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={policy}
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
