import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../../data/personal';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentTheme, getCurrentThemeColors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Extras', href: '/extras' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  const themeColors = getCurrentThemeColors();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
        }`}
      style={{
        backgroundColor: isScrolled ? `${themeColors.background}E6` : 'transparent'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-display font-black transition-colors duration-300 text-theme-primary hover-theme-primary"
              onClick={() => window.scrollTo(0, 0)}
            >
              {personalInfo.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-body ${isActive(item.href)
                      ? 'text-white bg-theme-primary'
                      : 'text-theme-secondary hover-theme-primary'
                    }`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 text-theme-secondary hover-theme-primary hover:bg-theme-card-subtle"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg"
          style={{ backgroundColor: themeColors.card }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 font-body ${isActive(item.href)
                  ? 'text-white bg-theme-primary'
                  : 'text-theme-secondary hover-theme-primary hover:bg-theme-card-subtle'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
