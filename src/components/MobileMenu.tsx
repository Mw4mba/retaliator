/**
 * MobileMenu Component
 * 
 * A responsive hamburger menu that:
 * - Floats in the top-right corner
 * - Transforms from hamburger (☰) to close (✕) icon
 * - Reveals a slide-out navigation menu from the left
 * - Includes page links and quick action buttons
 * - Matches CRS design system (black/gold/gray/white)
 */

'use client';

import { useState, useEffect } from 'react';
import { NavigationButton } from './NavigationButton';
import { 
  Home,
  Shield,
  Users,
  BookOpen,
  Phone,
  Mail,
  Award,
  FileText,
  ChevronRight,
  X
} from 'lucide-react';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Page navigation links
  const pageLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '#solutions', label: 'Solutions', icon: Shield },
    { href: '#training', label: 'Training', icon: BookOpen },
    { href: '#about', label: 'About CRS', icon: Users },
    { href: '#testimonials', label: 'Testimonials', icon: Award },
    { href: '#partners', label: 'Partners', icon: FileText },
    { href: '#contact', label: 'Contact', icon: Phone },
  ];

  // Quick action buttons (from retaliator.co.za)
  const quickActions = [
    {
      icon: Shield,
      label: 'Security Solutions',
      description: 'Comprehensive cybersecurity services',
      href: '#solutions',
    },
    {
      icon: Users,
      label: 'Team Training',
      description: 'Professional development programs',
      href: '#training',
    },
    {
      icon: BookOpen,
      label: 'Resources',
      description: 'Whitepapers & industry insights',
      href: '#resources',
    },
    {
      icon: Phone,
      label: 'Contact Us',
      description: 'Get in touch with our team',
      href: '#contact',
    },
  ];

  return (
    <>
      {/* Hamburger/Close Button - Fixed in top-right */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-black border-2 border-(--crs-gold) rounded-lg shadow-lg hover:bg-(--crs-gold) hover:border-(--crs-gold-dark) transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--crs-gold) group"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Hamburger Icon */}
          <div
            className={`absolute transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-(--crs-gold) group-hover:bg-black transition-colors duration-300"></span>
              <span className="block w-6 h-0.5 bg-(--crs-gold) group-hover:bg-black transition-colors duration-300"></span>
              <span className="block w-6 h-0.5 bg-(--crs-gold) group-hover:bg-black transition-colors duration-300"></span>
            </div>
          </div>

          {/* Close Icon (X) */}
          <div
            className={`absolute transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
            }`}
          >
            <X className="text-(--crs-gold) group-hover:text-black transition-colors duration-300" size={28} />
          </div>
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-out Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-96 bg-black border-r-2 border-(--crs-gold) z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="p-6 pb-24">
          {/* Menu Header */}
          <div className="mb-8 pt-8">
            <div className="w-16 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mb-4"></div>
            <h2 className="text-2xl font-bold text-white mb-2">Navigation</h2>
            <p className="text-gray-400 text-sm">Cyber Retaliator Solutions</p>
          </div>

          {/* Page Links */}
          <nav className="mb-8">
            <h3 className="text-xs font-semibold text-(--crs-gold) uppercase tracking-wider mb-4">
              Menu
            </h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-(--crs-gold) hover:text-black transition-all duration-300 group"
                    >
                      <Icon 
                        size={20} 
                        className="text-(--crs-gold) group-hover:text-black transition-colors duration-300" 
                      />
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight 
                        size={16} 
                        className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick Actions */}
          <div>
            <h3 className="text-xs font-semibold text-(--crs-gold) uppercase tracking-wider mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    onClick={closeMenu}
                    className="block p-4 rounded-lg border-2 border-gray-800 hover:border-(--crs-gold) hover:bg-gray-900 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0">
                        <Icon 
                          size={24} 
                          className="text-(--crs-gold) group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-(--crs-gold) transition-colors duration-300">
                          {action.label}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="space-y-3">
              <NavigationButton
                variant="primary"
                fullWidth={true}
                leftIcon={Phone}
                href="tel:+27123456789"
                onClick={closeMenu}
              >
                Call Now
              </NavigationButton>
              <NavigationButton
                variant="outline"
                fullWidth={true}
                leftIcon={Mail}
                href="mailto:info@retaliator.co.za"
                onClick={closeMenu}
              >
                Send Email
              </NavigationButton>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              © 2025 Cyber Retaliator Solutions
            </p>
            <p className="text-(--crs-gold) text-xs mt-2 font-semibold">
              The Bug Stops Here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
