/**
 * NavigationButton Demo Page
 * 
 * This page demonstrates all variants, sizes, and states of the NavigationButton component.
 * Use this as a reference for implementing buttons throughout your application.
 */

'use client';

import { NavigationButton } from '@/components/NavigationButton';
import {
  ChevronRight,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Shield,
  Users,
  BookOpen,
  ArrowRight,
  Home,
  Info,
  CheckCircle,
} from 'lucide-react';

export default function ButtonDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NavigationButton Component
          </h1>
          <p className="text-gray-300 text-lg">
            A comprehensive button system for Cyber Retaliator Solutions
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Primary Variant Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-2">Primary Buttons</h2>
          <p className="text-gray-600 mb-6">
            Use for main call-to-actions (CTAs). Features a gold gradient background with hover lift effect.
          </p>
          <div className="space-y-8">
            {/* Sizes */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <NavigationButton variant="primary" size="sm">
                  Small Button
                </NavigationButton>
                <NavigationButton variant="primary" size="md">
                  Medium Button
                </NavigationButton>
                <NavigationButton variant="primary" size="lg">
                  Large Button
                </NavigationButton>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <NavigationButton variant="primary" leftIcon={Home}>
                  Home
                </NavigationButton>
                <NavigationButton variant="primary" rightIcon={ChevronRight}>
                  Get Started
                </NavigationButton>
                <NavigationButton variant="primary" leftIcon={Shield} rightIcon={ArrowRight}>
                  Our Solutions
                </NavigationButton>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">States</h3>
              <div className="flex flex-wrap gap-4">
                <NavigationButton variant="primary">
                  Normal
                </NavigationButton>
                <NavigationButton variant="primary" loading={true}>
                  Loading
                </NavigationButton>
                <NavigationButton variant="primary" disabled={true}>
                  Disabled
                </NavigationButton>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Variant Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-2">Secondary Buttons</h2>
          <p className="text-gray-600 mb-6">
            Use for secondary actions. Features a black background with gold border that inverts on hover.
          </p>
          <div className="space-y-8">
            {/* Sizes */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <NavigationButton variant="secondary" size="sm">
                  Small Button
                </NavigationButton>
                <NavigationButton variant="secondary" size="md">
                  Medium Button
                </NavigationButton>
                <NavigationButton variant="secondary" size="lg">
                  Large Button
                </NavigationButton>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <NavigationButton variant="secondary" leftIcon={Phone}>
                  Contact Us
                </NavigationButton>
                <NavigationButton variant="secondary" leftIcon={Download} rightIcon={ArrowRight}>
                  Download Brochure
                </NavigationButton>
                <NavigationButton variant="secondary" rightIcon={ExternalLink}>
                  Learn More
                </NavigationButton>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Variant Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-2">Ghost Buttons</h2>
          <p className="text-gray-600 mb-6">
            Use for tertiary actions or navigation links. Transparent with subtle hover background.
          </p>
          <div className="space-y-8">
            {/* Sizes */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <NavigationButton variant="ghost" size="sm">
                  Small Button
                </NavigationButton>
                <NavigationButton variant="ghost" size="md">
                  Medium Button
                </NavigationButton>
                <NavigationButton variant="ghost" size="lg">
                  Large Button
                </NavigationButton>
              </div>
            </div>

            {/* Navigation Examples */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Navigation Menu</h3>
              <div className="flex flex-wrap gap-2">
                <NavigationButton variant="ghost" size="sm">
                  Home
                </NavigationButton>
                <NavigationButton variant="ghost" size="sm">
                  Services
                </NavigationButton>
                <NavigationButton variant="ghost" size="sm">
                  About
                </NavigationButton>
                <NavigationButton variant="ghost" size="sm">
                  Contact
                </NavigationButton>
              </div>
            </div>
          </div>
        </section>

        {/* Outline Variant Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-2">Outline Buttons</h2>
          <p className="text-gray-600 mb-6">
            Use on dark backgrounds or for subtle emphasis. Features a gold border with fill on hover.
          </p>
          <div className="bg-black p-8 rounded-xl space-y-8">
            {/* Sizes */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <NavigationButton variant="outline" size="sm">
                  Small Button
                </NavigationButton>
                <NavigationButton variant="outline" size="md">
                  Medium Button
                </NavigationButton>
                <NavigationButton variant="outline" size="lg">
                  Large Button
                </NavigationButton>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <NavigationButton variant="outline" leftIcon={Users}>
                  Our Team
                </NavigationButton>
                <NavigationButton variant="outline" leftIcon={BookOpen} rightIcon={ArrowRight}>
                  Training
                </NavigationButton>
                <NavigationButton variant="outline" rightIcon={CheckCircle}>
                  Verify
                </NavigationButton>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-2">Full Width Buttons</h2>
          <p className="text-gray-600 mb-6">
            Perfect for mobile layouts and form submissions.
          </p>
          <div className="space-y-4 max-w-md">
            <NavigationButton variant="primary" fullWidth={true} size="lg">
              Full Width Primary
            </NavigationButton>
            <NavigationButton variant="secondary" fullWidth={true} size="lg">
              Full Width Secondary
            </NavigationButton>
            <NavigationButton variant="outline" fullWidth={true} size="lg">
              Full Width Outline
            </NavigationButton>
          </div>
        </section>

        {/* Practical Examples Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-2">Practical Examples</h2>
          <p className="text-gray-600 mb-6">
            Real-world button combinations for common use cases.
          </p>
          
          {/* Hero CTA */}
          <div className="bg-black p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Hero Section CTAs</h3>
            <div className="flex flex-wrap gap-4">
              <NavigationButton variant="primary" size="lg" rightIcon={ChevronRight}>
                Get Started Now
              </NavigationButton>
              <NavigationButton variant="outline" size="lg" leftIcon={Info}>
                Learn More
              </NavigationButton>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">Contact Actions</h3>
            <div className="flex flex-wrap gap-4">
              <NavigationButton variant="primary" leftIcon={Phone} href="tel:+27123456789">
                Call Us Now
              </NavigationButton>
              <NavigationButton variant="secondary" leftIcon={Mail} href="mailto:info@retaliator.co.za">
                Send Email
              </NavigationButton>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
              <Shield className="text-(--crs-gold) mb-4" size={40} />
              <h4 className="text-xl font-bold text-black mb-2">Security Solutions</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive cybersecurity services to protect your business.
              </p>
              <NavigationButton variant="ghost" rightIcon={ArrowRight} fullWidth={true}>
                Explore Services
              </NavigationButton>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
              <Users className="text-(--crs-gold) mb-4" size={40} />
              <h4 className="text-xl font-bold text-black mb-2">Team Training</h4>
              <p className="text-gray-600 mb-4">
                Professional development programs for your security team.
              </p>
              <NavigationButton variant="ghost" rightIcon={ArrowRight} fullWidth={true}>
                View Programs
              </NavigationButton>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
              <BookOpen className="text-(--crs-gold) mb-4" size={40} />
              <h4 className="text-xl font-bold text-black mb-2">Resources</h4>
              <p className="text-gray-600 mb-4">
                Access whitepapers, guides, and industry insights.
              </p>
              <NavigationButton variant="ghost" rightIcon={ArrowRight} fullWidth={true}>
                Browse Library
              </NavigationButton>
            </div>
          </div>
        </section>

        {/* Design Guidelines Section */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-6">Design Guidelines</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">When to Use Each Variant</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong className="text-(--crs-gold)">Primary:</strong> Main actions, CTAs, form submissions (limit 1-2 per section)</li>
                <li><strong className="text-(--crs-gold)">Secondary:</strong> Important but not primary actions, alternative CTAs</li>
                <li><strong className="text-(--crs-gold)">Ghost:</strong> Navigation links, tertiary actions, repeated actions in lists</li>
                <li><strong className="text-(--crs-gold)">Outline:</strong> Actions on dark backgrounds, subtle emphasis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Accessibility Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ WCAG 2.1 Level AA/AAA contrast ratios (7.0:1 minimum)</li>
                <li>✓ 2px gold focus outline with 2px offset for keyboard navigation</li>
                <li>✓ Minimum 44px touch target height for mobile</li>
                <li>✓ aria-label support for screen readers</li>
                <li>✓ Disabled state prevents interaction and reduces opacity</li>
                <li>✓ Icons marked as aria-hidden to avoid duplicate announcements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Animation Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 300ms transition duration with cubic-bezier easing (matches CRS design system)</li>
                <li>• Hover: -2px vertical lift + enhanced shadow</li>
                <li>• Active: Returns to baseline position</li>
                <li>• Primary buttons feature a shimmer effect on hover (700ms duration)</li>
                <li>• All transitions use hardware acceleration for smooth performance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Icon Usage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use leftIcon for contextual icons (Phone, Mail, Download)</li>
                <li>• Use rightIcon for directional cues (ChevronRight, ArrowRight, ExternalLink)</li>
                <li>• Icon sizes automatically scale with button size (16px/20px/24px)</li>
                <li>• Icons maintain proper spacing with gap utility (1.5/2/2.5 based on size)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Palette Reference */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-6">CRS Color Palette</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="bg-(--crs-gold) h-24 rounded-lg"></div>
              <p className="text-sm font-mono text-gray-600">--crs-gold</p>
              <p className="text-xs text-gray-500">#d4af37</p>
            </div>
            <div className="space-y-2">
              <div className="bg-(--crs-gold-light) h-24 rounded-lg"></div>
              <p className="text-sm font-mono text-gray-600">--crs-gold-light</p>
              <p className="text-xs text-gray-500">#f4d03f</p>
            </div>
            <div className="space-y-2">
              <div className="bg-(--crs-gold-dark) h-24 rounded-lg"></div>
              <p className="text-sm font-mono text-gray-600">--crs-gold-dark</p>
              <p className="text-xs text-gray-500">#b8941f</p>
            </div>
            <div className="space-y-2">
              <div className="bg-(--crs-black) h-24 rounded-lg border-2 border-gray-200"></div>
              <p className="text-sm font-mono text-gray-600">--crs-black</p>
              <p className="text-xs text-gray-500">#000000</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            NavigationButton Component v1.0 | Cyber Retaliator Solutions Design System
          </p>
        </div>
      </footer>
    </div>
  );
}
