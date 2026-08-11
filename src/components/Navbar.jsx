import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check initial preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Active Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Optional: Update URL hash without jumping
            window.history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -79% 0px' } 
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Update hash immediately on click
      window.history.pushState(null, null, `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md shadow-sm shadow-border-color'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1152px] mx-auto px-8 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="font-bold text-xl md:text-2xl text-accent tracking-tight"
          >
            {profile.name}
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-none items-center justify-center gap-8 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`transition-colors ${
                activeSection === link.id
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? (
              // Sun icon for dark mode (to switch to light)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              // Moon icon for light mode (to switch to dark)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
