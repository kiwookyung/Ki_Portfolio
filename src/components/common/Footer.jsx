import { personalInfo } from '../../data/personal';
import { Mail, MapPin, Phone, Github, FileText, Heart, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { getCurrentThemeColors } = useTheme();
  const themeColors = getCurrentThemeColors();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Extras', href: '/extras' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white border-t-4" style={{ borderTopColor: themeColors.accent }}>
      {/* Decorative Top Border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(to right, ${themeColors.accent}, ${themeColors.primary})` }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: themeColors.accent }}>
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-black text-white">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md font-body">
              {personalInfo.shortDescription}
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href={personalInfo.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-700"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={personalInfo.profile.resume}
                download
                className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-700"
                aria-label="Resume"
              >
                <FileText size={18} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 font-display">
              빠른 링크
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group font-body"
                  >
                    <span
                      className="w-0 group-hover:w-2 h-0.5 transition-all duration-300 mr-0 group-hover:mr-2"
                      style={{ backgroundColor: themeColors.accent }}
                    ></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 font-display">
              연락처
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.profile.email}`}
                  className="text-gray-300 hover:text-white transition-colors break-all font-body"
                >
                  {personalInfo.profile.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 font-body">{personalInfo.profile.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 font-body">{personalInfo.profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm flex items-center font-body">
              Made with <Heart size={14} className="mx-1 animate-pulse" style={{ color: themeColors.accent }} /> and{' '}
              <span className="ml-1 font-semibold" style={{ color: themeColors.accent }}>React</span>
            </p>
            <p className="text-gray-300 text-sm font-body">
              © {currentYear} {personalInfo.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
