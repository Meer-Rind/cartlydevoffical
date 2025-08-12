import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center font-poppins">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="gradient-text"
            >
              Cartly
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              Dev
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-white hover:text-accentLight'
                  } shine`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-accent to-accentDark rounded-full"
                        layoutId="navIndicator"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-accent to-accentDark text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accentDark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <motion.span 
                className="h-0.5 w-full bg-white rounded-full"
                animate={isMenuOpen ? 
                  { rotate: 45, y: 6, backgroundColor: '#00CFFF' } : 
                  { rotate: 0, y: 0, backgroundColor: '#fff' }
                }
              />
              <motion.span 
                className="h-0.5 w-full bg-white rounded-full"
                animate={isMenuOpen ? 
                  { opacity: 0 } : 
                  { opacity: 1 }
                }
              />
              <motion.span 
                className="h-0.5 w-full bg-white rounded-full"
                animate={isMenuOpen ? 
                  { rotate: -45, y: -6, backgroundColor: '#00CFFF' } : 
                  { rotate: 0, y: 0, backgroundColor: '#fff' }
                }
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 glass-light z-40"
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        `text-xl font-medium px-4 py-3 ${
                          isActive ? 'gradient-text' : 'text-white hover:text-accentLight'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accentDark text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 mt-6"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;