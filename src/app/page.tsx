'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavigationButton } from '@/components/NavigationButton';
import { 
  Shield, 
  Users, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Star,
  CheckCircle,
  Lock,
  Globe,
  Zap,
  Award,
  Target,
  Download,
  ExternalLink,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const solutionsRef = useRef(null);
  const trainingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-image', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power3.out'
    }, '-=1');

    // Quick actions animation
    gsap.from('.quick-action-card', {
      scrollTrigger: {
        trigger: '.quick-actions-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });

    // About section animation
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Solutions cards animation
    const solutionCards = document.querySelectorAll('.solution-card');
    if (solutionCards.length > 0) {
      gsap.set('.solution-card', { opacity: 1 }); // Ensure visible by default
      gsap.from('.solution-card', {
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    // Training cards animation
    const trainingCards = document.querySelectorAll('.training-card');
    if (trainingCards.length > 0) {
      gsap.set('.training-card', { opacity: 1 }); // Ensure visible by default
      gsap.from('.training-card', {
        scrollTrigger: {
          trigger: trainingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: 'back.out(1.7)'
      });
    }

    // Testimonials animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
      gsap.set('.testimonial-card', { opacity: 1 }); // Ensure visible by default
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    // Gold accent animations
    gsap.to('.gold-accent', {
      scrollTrigger: {
        trigger: '.gold-accent',
        start: 'top 80%',
        scrub: 1
      },
      width: '100%',
      duration: 1,
      ease: 'power2.out'
    });

  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-yellow-600/30 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-yellow-600/20 to-transparent blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 gold-accent"></div>
                <h1 className="hero-title text-5xl lg:text-7xl font-bold leading-tight text-white">
                  We Win Together.
                  <br />
                  <span className="bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">We Lose Together!</span>
                </h1>
                <p className="hero-subtitle text-xl text-gray-300 max-w-2xl">
                  Authorized IBM, RedHat, SUSE, Agile, and CompTIA training delivery partner. 
                  Channel-focused value-added cyber security distributor operating globally.
                </p>
                <p className="hero-subtitle text-lg text-yellow-400 font-semibold">
                  The Bug Stops Here
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavigationButton 
                  variant="primary" 
                  size="lg" 
                  rightIcon={ChevronRight}
                  href="#solutions"
                  className="shadow-lg shadow-yellow-600/50 hover:shadow-xl hover:shadow-yellow-600/60"
                >
                  Get Started
                </NavigationButton>
                <NavigationButton 
                  variant="outline" 
                  size="lg"
                  href="#contact"
                >
                  Request Demo
                </NavigationButton>
              </div>
            </div>
            <div className="relative hero-image">
              <div className="aspect-square bg-linear-to-br from-yellow-600/20 to-yellow-400/10 rounded-full blur-3xl"></div>
              <img
                src="/images/hero-cyber-security.png"
                alt="Cyber Security Solutions"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Panel */}
      <section className="quick-actions-section py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="https://retaliator.co.za/support/" className="quick-action-card group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 group-hover:bg-linear-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 rounded-lg transition-all duration-300">
                  <Phone className="text-gray-900 group-hover:text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Contact Support</h3>
                  <p className="text-sm text-gray-600">Get help now</p>
                </div>
              </div>
            </a>
            
            <a href="https://retaliator.co.za/meet-the-crs-sales-team-and-book-your-meeting/" className="quick-action-card group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 group-hover:bg-linear-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 rounded-lg transition-all duration-300">
                  <Users className="text-gray-900 group-hover:text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Book a Meeting</h3>
                  <p className="text-sm text-gray-600">Schedule consultation</p>
                </div>
              </div>
            </a>
            
            <a href="https://retaliator.co.za/crs-poc-pov-demo/" className="quick-action-card group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 group-hover:bg-linear-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 rounded-lg transition-all duration-300">
                  <Zap className="text-gray-900 group-hover:text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Request a Demo</h3>
                  <p className="text-sm text-gray-600">See solutions in action</p>
                </div>
              </div>
            </a>
            
            <a href="https://www.smbsecure.co.za/aspsignup/" className="quick-action-card group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 group-hover:bg-linear-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 rounded-lg transition-all duration-300">
                  <Award className="text-gray-900 group-hover:text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Partner Sign-Up</h3>
                  <p className="text-sm text-gray-600">Join our network</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About CRS */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="about-content space-y-6">
              <div className="space-y-4">
                <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600"></div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Welcome to The CRS World of Solutions
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cyber Retaliator Solutions is an <span className="text-yellow-600 font-semibold">Authorized IBM Training Delivery Partner</span>, 
                  RedHat, SUSE, Agile and CompTIA Training Delivery Partner and Channel Focused 
                  Value-Added Cyber Security Distributor, Operating throughout the Globe.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Head Office is based in <span className="font-semibold">Centurion, South Africa</span>, with Training Centers in 
                  Centurion, Midrand, Sandton and Cape Town. Cyber Retaliator Solutions is a 
                  Channel Focused Value-Added Distributor with <span className="text-yellow-600 font-bold">25+ Years' experience</span> in Cyber Security.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-yellow-400">
                  <CheckCircle className="text-yellow-600" size={20} />
                  <span className="text-gray-900 font-semibold">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-yellow-400">
                  <CheckCircle className="text-yellow-600" size={20} />
                  <span className="text-gray-900 font-semibold">Global Operations</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-yellow-400">
                  <CheckCircle className="text-yellow-600" size={20} />
                  <span className="text-gray-900 font-semibold">Authorized Training Partner</span>
                </div>
              </div>
            </div>
            <div className="relative about-image">
              <div className="absolute -inset-4 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-2xl"></div>
              <img
                src="/images/crs-about.png"
                alt="CRS Solutions Overview"
                className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-yellow-400/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section ref={solutionsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-white">Our Solutions at a Glance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions and world-class training programs 
              tailored for enterprises, resellers, and ICT professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Channel Focused Distribution */}
            <div className="solution-card bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-yellow-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="space-y-4">
                <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg w-fit group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300">
                  <Shield className="text-yellow-400 group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Channel Focused Value Added Distribution</h3>
                <p className="text-gray-300">
                  Future-focused business bringing solutions to the African region addressing 
                  gaps within reselling, managed services and system integration spaces.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-yellow-400" />
                    Vulnerability & Penetration Testing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-yellow-400" />
                    DarkWeb Monitoring
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-yellow-400" />
                    Threat Hunting & Mobile Device Management
                  </div>
                </div>
              </div>
            </div>

            {/* Technical ICT Training */}
            <div className="solution-card bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-yellow-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="space-y-4">
                <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg w-fit group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300">
                  <BookOpen className="text-yellow-400 group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Technical ICT Training</h3>
                <p className="text-gray-300">
                  Stay aligned with technology through IBM Technical Training, RedHat Learning, 
                  SUSE Product Training, CompTIA certification, and Agile SAFe Training.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-yellow-400" />
                    IBM Technical Training
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-yellow-400" />
                    RedHat & SUSE Certification
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-yellow-400" />
                    CompTIA & Agile SAFe Training
                  </div>
                </div>
              </div>
            </div>

            {/* Penetration Testing */}
            <div className="solution-card bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-yellow-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="space-y-4">
                <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg w-fit group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300">
                  <Target className="text-yellow-400 group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Penetration Testing Services</h3>
                <p className="text-gray-300">
                  Comprehensive vulnerability assessment, web app scanning, and penetration 
                  testing services to identify and address security weaknesses.
                </p>
                <a href="https://retaliator.co.za/vapt/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Dark Web Monitoring */}
            <div className="solution-card bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-yellow-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="space-y-4">
                <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg w-fit group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300">
                  <Globe className="text-yellow-400 group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Dark Web Monitoring</h3>
                <p className="text-gray-300">
                  Advanced threat exposure management and dark web monitoring to protect 
                  your organization from emerging cyber threats.
                </p>
                <a href="https://retaliator.co.za/flare/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Mobile Management */}
            <div className="solution-card bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-yellow-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="space-y-4">
                <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg w-fit group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300">
                  <Lock className="text-yellow-400 group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Mobile Device Management</h3>
                <p className="text-gray-300">
                  Comprehensive mobile device management solutions to secure and manage 
                  your organization's mobile infrastructure.
                </p>
                <a href="http://www.smbsecure.co.za/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Cyber Awareness Training */}
            <div className="solution-card bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-yellow-400 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="space-y-4">
                <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg w-fit group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300">
                  <Users className="text-yellow-400 group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Cyber Awareness Training</h3>
                <p className="text-gray-300">
                  Phishing simulations, self-paced and instructor-led training programs to 
                  enhance your team's cybersecurity awareness and response capabilities.
                </p>
                <a href="https://retaliator.co.za/cyber-risk-essentials-cre/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section ref={trainingRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-black">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class technical training from industry-leading partners to advance your skills and career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="training-card bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-700 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-16 bg-linear-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className="text-black font-bold text-lg">IBM</span>
                </div>
                <h3 className="font-bold text-white">IBM Technical Training</h3>
                <p className="text-sm text-gray-200">World-class IBM technical training delivered globally with certified instructors.</p>
                <div className="space-y-2">
                  <a href="https://retaliator.co.za/authorized-ibm-technical-training/" className="block text-yellow-400 hover:text-yellow-300 text-sm transition-colors">View Courses</a>
                  <a href="https://retaliator.co.za/wp-content/uploads/2025/07/CRS-Training-2025-V8.2.pdf" className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                    <Download size={14} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>

            <div className="training-card bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-700 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-16 bg-linear-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className="text-black font-bold text-lg">RedHat</span>
                </div>
                <h3 className="font-bold text-white">RedHat Training</h3>
                <p className="text-sm text-gray-200">Hands-on training to stay abreast of technology trends and achieve certification.</p>
                <div className="space-y-2">
                  <span className="block text-gray-300 text-sm">Linux & Cloud Technologies</span>
                  <a href="https://retaliator.co.za/wp-content/uploads/2025/07/CRS-Training-2025-V8.2.pdf" className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                    <Download size={14} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>

            <div className="training-card bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-700 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-16 bg-linear-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className="text-black font-bold text-lg">SUSE</span>
                </div>
                <h3 className="font-bold text-white">SUSE Training</h3>
                <p className="text-sm text-gray-200">SUSE Linux, Manager, Rancher, Harvester, NeuVector and SUSE Edge training.</p>
                <div className="space-y-2">
                  <span className="block text-gray-300 text-sm">Enterprise Linux Solutions</span>
                  <a href="https://retaliator.co.za/wp-content/uploads/2025/07/CRS-Training-2025-V8.2.pdf" className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                    <Download size={14} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>

            <div className="training-card bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-700 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="h-16 bg-linear-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className="text-black font-bold text-lg">CompTIA</span>
                </div>
                <h3 className="font-bold text-white">CompTIA Training</h3>
                <p className="text-sm text-gray-200">Advancing people & organizations by delivering tech talent to the global workforce.</p>
                <div className="space-y-2">
                  <span className="block text-gray-300 text-sm">IT Fundamentals & Security</span>
                  <a href="https://retaliator.co.za/wp-content/uploads/2025/07/CRS-Training-2025-V8.2.pdf" className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                    <Download size={14} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://retaliator.co.za/training-course-request/" className="bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Book a Course
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-white">Client Testimonials</h2>
            <p className="text-xl text-gray-400">What our clients say about our services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-card bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-gray-800 hover:border-yellow-400 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "From the outset, Cyber Retaliator Solutions (CRS) demonstrated a deep understanding 
                  of our organisation's needs and goals. They developed a training program that was 
                  tailored specifically to our needs."
                </p>
                <div className="text-sm text-yellow-400 font-medium">Enterprise Client</div>
              </div>
            </div>

            <div className="testimonial-card bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-gray-800 hover:border-yellow-400 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "The training program that Cyber Retaliator Solutions (CRS) delivered was outstanding 
                  in every respect. The trainers were knowledgeable, professional, and personable, 
                  fostering a positive learning environment."
                </p>
                <div className="text-sm text-yellow-400 font-medium">Corporate Training Client</div>
              </div>
            </div>

            <div className="testimonial-card bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-gray-800 hover:border-yellow-400 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "Thanks to the training that CRS provided, our team members have gained valuable 
                  skills. We have seen measurable improvements in productivity, customer satisfaction, 
                  and employee engagement."
                </p>
                <div className="text-sm text-yellow-400 font-medium">ICT Professional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Affiliates */}
      <section ref={partnersRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-black">Our Partners & Affiliates</h2>
            <p className="text-xl text-gray-600">Trusted partnerships with industry leaders</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <span className="font-bold text-2xl text-gray-800 group-hover:text-yellow-600 transition-colors">IBM</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <span className="font-bold text-2xl text-gray-800 group-hover:text-yellow-600 transition-colors">RedHat</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <span className="font-bold text-2xl text-gray-800 group-hover:text-yellow-600 transition-colors">SUSE</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <span className="font-bold text-2xl text-gray-800 group-hover:text-yellow-600 transition-colors">CompTIA</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <span className="font-bold text-2xl text-gray-800 group-hover:text-yellow-600 transition-colors">Agile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Location */}
      <section ref={contactRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-20 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mb-6"></div>
                <h2 className="text-4xl font-bold text-black">Contact & Location</h2>
                <p className="text-lg text-gray-600">
                  Get in touch with our team for consultations, support, or partnership opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Head Office</h3>
                    <p className="text-gray-600">
                      6D Longdale St, Midstream Estate<br />
                      Centurion, South Africa, 1692
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <a href="mailto:Info@CyberRetaliatorSolutions.com" className="text-yellow-600 hover:text-yellow-700 transition-colors">
                      Info@CyberRetaliatorSolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg">
                    <Globe className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Training Centers</h3>
                    <p className="text-gray-600">
                      Centurion • Midrand • Sandton • Cape Town
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/30581347/" className="p-3 bg-gray-100 hover:bg-yellow-400 rounded-lg transition-all group">
                  <Linkedin className="text-gray-700 group-hover:text-black transition-colors" size={24} />
                </a>
                <a href="https://www.facebook.com/CyberRetaliatorSolutions" className="p-3 bg-gray-100 hover:bg-yellow-400 rounded-lg transition-all group">
                  <Facebook className="text-gray-700 group-hover:text-black transition-colors" size={24} />
                </a>
                <a href="https://www.instagram.com/cyberretaliatorsolutions/" className="p-3 bg-gray-100 hover:bg-yellow-400 rounded-lg transition-all group">
                  <Instagram className="text-gray-700 group-hover:text-black transition-colors" size={24} />
                </a>
                <a href="https://twitter.com/CRS_Cyber" className="p-3 bg-gray-100 hover:bg-yellow-400 rounded-lg transition-all group">
                  <Twitter className="text-gray-700 group-hover:text-black transition-colors" size={24} />
                </a>
                <a href="https://www.youtube.com/channel/UCPVc9iE-E9kz86HmjpPYctA" className="p-3 bg-gray-100 hover:bg-yellow-400 rounded-lg transition-all group">
                  <Youtube className="text-gray-700 group-hover:text-black transition-colors" size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a href="https://retaliator.co.za/quote-request/" className="w-full bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Get a Cyber Security Quote
                  <ChevronRight size={20} />
                </a>
                <a href="https://retaliator.co.za/training-course-request/" className="w-full bg-gray-800 hover:bg-yellow-600 text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all border-2 border-gray-700 hover:border-yellow-600 flex items-center justify-center gap-2">
                  Book a Course
                  <BookOpen size={20} />
                </a>
                <a href="https://retaliator.co.za/tender-request/" className="w-full bg-gray-800 hover:bg-yellow-600 text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all border-2 border-gray-700 hover:border-yellow-600 flex items-center justify-center gap-2">
                  Tender Response Assistance
                  <Award size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
              <div className="space-y-2">
                <a href="https://retaliator.co.za/support/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Contact Support</a>
                <a href="https://retaliator.co.za/the-crs-university-registration/" className="block text-gray-300 hover:text-yellow-400 transition-colors">CRS University Registration</a>
                <a href="https://retaliator.co.za/training-course-request/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Book a Course</a>
                <a href="https://retaliator.co.za/quote-request/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Cyber Quote Request</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Services</h3>
              <div className="space-y-2">
                <a href="https://retaliator.co.za/meet-the-crs-sales-team-and-book-your-meeting/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Book a Meeting</a>
                <a href="https://retaliator.co.za/tender-request/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Tender Response Assistance</a>
                <a href="https://retaliator.co.za/crs-poc-pov-demo/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Request a Demo</a>
                <a href="https://retaliator.co.za/crs-poc-pov-demo/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Request a Proof of Concept</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Legal</h3>
              <div className="space-y-2">
                <a href="https://cyberretaliatorsolutions.com/terms-and-conditions/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Terms and Conditions</a>
                <a href="https://cyberretaliatorsolutions.com/privacy/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</a>
                <a href="https://cyberretaliatorsolutions.com/customer-consent-policy/" className="block text-gray-300 hover:text-yellow-400 transition-colors">Customer Consent Policy</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/30581347/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.facebook.com/CyberRetaliatorSolutions" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/cyberretaliatorsolutions/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com/CRS_Cyber" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://www.youtube.com/channel/UCPVc9iE-E9kz86HmjpPYctA" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Cyber Retaliator Solutions<br />
                6D Longdale St, Midstream Estate<br />
                Centurion, South Africa, 1692
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 <span className="text-yellow-400">Cyber Retaliator Solutions</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
