import React from 'react';
import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <footer className="bg-[#562d0b] text-white" role="contentinfo">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <Coffee className="h-8 w-8 text-[#d2b48c]" aria-hidden="true" />
                  <span className="text-2xl font-bold">HotelPro</span>
                </div>
                <p className="text-[] mb-6 max-w-md text-[#f5e8d7]">
                  The complete hotel management solution trusted by 500+ hotels worldwide. 
                  Streamline operations, boost revenue, and deliver exceptional guest experiences.
                </p>
                <address className="space-y-3 not-italic">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#d2b48c]" aria-hidden="true" />
                    <a href="mailto:hello@hotelpro.com" className="text-[#f5e8d7] hover:text-white transition-colors">
                      hello@hotelpro.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#d2b48c]" aria-hidden="true" />
                    <a href="tel:+15551234567" className="text-[#f5e8d7] hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#d2b48c]" aria-hidden="true" />
                    <span className="text-[#f5e8d7]">San Francisco, CA</span>
                  </div>
                </address>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <nav role="navigation" aria-label="Footer navigation">
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => scrollToSection('home')}
                        className="text-[#f5e8d7] hover:text-white transition-colors"
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('features')}
                        className="text-[#f5e8d7] hover:text-white transition-colors"
                      >
                        Features
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('pricing')}
                        className="text-[#f5e8d7] hover:text-white transition-colors"
                      >
                        Pricing
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('faq')}
                        className="text-[#f5e8d7] hover:text-white transition-colors"
                      >
                        FAQ
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="text-[#f5e8d7] hover:text-white transition-colors"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Resources</h3>
                <nav role="navigation" aria-label="Resources navigation">
                  <ul className="space-y-3">
                    <li><a href="#" className="text-[#f5e8d7] hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="text-[#f5e8d7] hover:text-white transition-colors">API Reference</a></li>
                    <li><a href="#" className="text-[#f5e8d7] hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-[#f5e8d7] hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-[#f5e8d7] hover:text-white transition-colors">Case Studies</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#864312] mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-[#d2b48c] text-sm">
                  © 2025 HotelPro. All rights reserved.
                </p>
                <nav className="flex space-x-6 mt-4 md:mt-0" role="navigation" aria-label="Legal navigation">
                  <a href="#" className="text-[#d2b48c] hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-[#d2b48c] hover:text-white text-sm transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-[#d2b48c] hover:text-white text-sm transition-colors">
                    Cookie Policy
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;