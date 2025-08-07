import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkStyles = "text-white hover:text-[#00f2ff] transition duration-300 font-medium tracking-wide relative group";
  const mobileNavLinkStyles = "text-[#0f172a] text-lg hover:text-[#00CFFF] transition duration-300 font-semibold";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center space-x-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#00f2ff]"
            >
              Cartly
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              Dev
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink 
                key={index}
                to={item.path} 
                className={navLinkStyles}
                onClick={closeMenu}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2ff] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <motion.div 
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0f172a] bg-opacity-95 backdrop-blur-lg z-40`}
          initial={{ y: '-100%' }}
          animate={{ y: isMenuOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="px-6 pt-24 flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  to={item.path} 
                  className={mobileNavLinkStyles} 
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;