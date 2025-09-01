// Navbar.jsx
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

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* 3-column: left brand, center nav, right CTA/hamburger */}
          <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3">
            {/* Brand (no logo) */}
            <Link
              to="/"
              className="flex items-center select-none font-poppins focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-xl"
              aria-label="CartlyDev — Home"
            >
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tight whitespace-nowrap inline-flex"
              >
                <span className="gradient-text">Cartly</span><span className="text-white">Dev</span>
              </motion.span>
            </Link>

            {/* Center: Desktop Navigation (even spacing like your screenshot) */}
            <nav className="hidden md:flex justify-center items-center" aria-label="Primary">
              <ul className="flex items-center gap-8 lg:gap-14 xl:gap-20">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative px-1 py-2 text-base font-semibold transition-colors duration-300 ${
                          isActive ? 'text-accent' : 'text-white hover:text-accentLight'
                        } shine focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-md`
                      }
                      end
                    >
                      {({ isActive }) => (
                        <>
                          {item.name}
                          {isActive && (
                            <motion.span
                              className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-accent to-accentDark rounded-full"
                              layoutId="navIndicator"
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                              aria-hidden="true"
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: AI Agent (desktop) + Hamburger (mobile) */}
            <div className="flex items-center gap-3 justify-end">
              {/* Desktop AI Agent button */}
              <a
                href="https://ai-agent-mkf5.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accentDark text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                aria-label="Open AI Agent (new tab)"
              >
                AI Agent
              </a>

              {/* Mobile hamburger */}
              <motion.button
                className="md:hidden z-50 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                onClick={() => setIsMenuOpen((v) => !v)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-7 flex flex-col space-y-1.5">
                  <motion.span
                    className="h-0.5 w-full bg-white rounded-full"
                    animate={
                      isMenuOpen
                        ? { rotate: 45, y: 6, backgroundColor: '#00CFFF' }
                        : { rotate: 0, y: 0, backgroundColor: '#fff' }
                    }
                  />
                  <motion.span
                    className="h-0.5 w-full bg-white rounded-full"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="h-0.5 w-full bg-white rounded-full"
                    animate={
                      isMenuOpen
                        ? { rotate: -45, y: -6, backgroundColor: '#00CFFF' }
                        : { rotate: 0, y: 0, backgroundColor: '#fff' }
                    }
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile / Drawer Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden fixed inset-0 glass-light z-40 backdrop-blur-md"
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-xl font-medium px-4 py-3 ${
                          isActive ? 'gradient-text' : 'text-white hover:text-accentLight'
                        } focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg`
                      }
                      onClick={() => setIsMenuOpen(false)}
                      end
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                {/* AI Agent (mobile) */}
                <motion.a
                  href="https://ai-agent-mkf5.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.07 }}
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accentDark text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Agent
                </motion.a>

                {/* Keep your existing CTA in the drawer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.07 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accentDark text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
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
