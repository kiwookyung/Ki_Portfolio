import { personalInfo } from '../../data/personal';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section - Name & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {personalInfo.title}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href={personalInfo.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.profile.email}`}
                className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">빠른 링크</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">연락하기</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400" />
                <span className="text-gray-300">{personalInfo.profile.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400" />
                <span className="text-gray-300">{personalInfo.profile.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gray-400" />
                <span className="text-gray-300">{personalInfo.profile.location}</span>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              새로운 기회와 협업에 언제나 열려있습니다!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              Made with ❤️ and React
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 기우경. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
