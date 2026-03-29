import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#050505] pt-20 pb-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="/image.png" alt="Growthrasta" className="h-10 w-auto" />
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">GROWTH<span className="text-accent-blue">RASTA</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Creative tech-driven digital marketing agency committed to accelerating your growth and maximizing ROI.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/1C6WAwodrz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-accent-blue hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/growthrasta?igsh=OGd6Y2dobDg5am96" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-accent-blue hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wider">SERVICES</h4>
            <ul className="space-y-4">
              {['SEO Optimization', 'Google Ads', 'Social Media Marketing', 'Content Strategy', 'Web Development', 'Email Marketing'].map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-lightBlue transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wider">COMPANY</h4>
            <ul className="space-y-4">
              {['About', 'Portfolio', 'Blog', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-lightBlue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wider">CONTACT</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li>Ahmedabad, Gujarat<br />India</li>
              <li>info@growthrasta.com</li>
              <li>96017 99398</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-6 md:gap-0">
          <div className="md:w-1/3 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Growthrasta. All rights reserved.</p>
          </div>

          <div className="md:w-1/3 flex justify-center items-center">
            <p className="flex items-center justify-center text-gray-500">
              Made with <span className="text-red-500 mx-1.5 animate-pulse">❤️</span> by
              <a
                href="https://www.linkedin.com/in/bhagya-shah-978514220/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 dark:text-white ml-1.5 hover:text-accent-blue dark:hover:text-accent-lightBlue transition-colors"
              >
                Bhagya
              </a>
            </p>
          </div>

          <div className="md:w-1/3 flex items-center justify-center md:justify-end space-x-6">
            <Link to="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
