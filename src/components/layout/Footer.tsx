import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-accent-blue" />
              <span className="text-xl font-bold tracking-tight text-white">MEDIAF5 <span className="text-accent-blue">PRO</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Creative tech-driven digital marketing agency committed to accelerating your growth and maximizing ROI.
            </p>
            <div className="flex items-center space-x-4">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">SERVICES</h4>
            <ul className="space-y-4">
              {['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Web Development', 'Email Marketing'].map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-gray-400 hover:text-accent-lightBlue transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">COMPANY</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Our Work', 'Blog', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-accent-lightBlue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">CONTACT</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Digital Avenue, Tech District<br/>New York, NY 10001</li>
              <li>info@mediaf5pro.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediaF5 Pro. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
