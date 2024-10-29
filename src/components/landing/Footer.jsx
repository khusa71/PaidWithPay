import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Product: [
    { name: 'Features', path: '/features' },
    { name: 'Security', path: '/security' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' }
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ],
  Legal: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Security', path: '/security' }
  ],
  Support: [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Status', path: '/status' },
    { name: 'Contact Us', path: '/contact' }
  ]
};

const FooterLink = ({ link, path }) => (
  <li>
    <Link
      to={path}
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={link}
    >
      {link}
    </Link>
  </li>
);

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SecureEscrow</span>
            </div>
            <p className="text-gray-400 mb-4">
              Secure payments made simple with UPI and escrow protection.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1 md:col-span-1">
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map(({ name, path }) => (
                  <FooterLink key={name} link={name} path={path} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SecureEscrow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookie-policy' }
              ].map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={name}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
