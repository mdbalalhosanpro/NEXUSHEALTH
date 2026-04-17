import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartPulse, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
  ];

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 container mx-auto px-4 ${scrolled ? '' : ''}`}
    >
      <div className={`glass-panel px-6 py-4 flex items-center justify-between ${scrolled ? 'shadow-xl' : ''}`}>
        <div className="flex items-center justify-between w-full">
          
          <a href="#" className="flex items-center gap-2 group">
            <HeartPulse className="w-8 h-8 text-medical-green group-hover:scale-110 transition-transform duration-300" />
            <span className="text-[24px] font-display font-[800] tracking-[-1px] text-white">NEXUS<span className="text-medical-green">HEALTH</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white/80 hover:text-medical-green text-sm font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#booking"
              className="sleek-btn-primary"
            >
              Patient Portal
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-light border-b border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 sleek-btn-primary text-center"
              >
                Patient Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
