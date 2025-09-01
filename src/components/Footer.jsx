// Footer.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Your socials (GitHub removed). "X" maps to Font Awesome's x-twitter icon.
  const socialLinks = [
    { icon: 'twitter',            url: 'https://X.com/cartlydev',                    name: 'twitter' },
    { icon: 'linkedin-in',  url: 'https://www.linkedin.com/company/cartlydev', name: 'LinkedIn' },
    { icon: 'facebook-f',   url: 'https://facebook.com/cartlydev',             name: 'Facebook' },
    { icon: 'instagram',    url: 'https://instagram.com/cartlydev',            name: 'Instagram' },
    { icon: 'medium',       url: 'https://medium.com/cartlydev',               name: 'Medium' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  // Contact (emails clickable)
  const contactInfo = [
    {
      icon: 'map-marker-alt',
      text: '123 Tech Street, Silicon Valley, CA 94000',
      href: 'https://maps.google.com/?q=123+Tech+Street,+Silicon+Valley,+CA+94000',
    },
    { icon: 'phone-alt', text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: 'envelope', text: 'info@cartlydev.com', href: 'mailto:info@cartlydev.com' },
    { icon: 'envelope', text: 'support@cartlydev.com', href: 'mailto:support@cartlydev.com' },
  ];

  // Map friendly names to Font Awesome brand icon names
  // If you're on FA5, change 'x-twitter' to 'twitter'.
  const resolveFaBrand = (icon) => {
    switch (icon) {
      case 'X': return 'x-twitter';
      case 'medium': return 'medium'; // or 'medium-m' if you prefer the 'M' glyph
      default: return icon; // 'linkedin-in', 'facebook-f', 'instagram'
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-gradient-to-b from-primary via-secondary to-primary pt-20 pb-12 relative overflow-hidden">
      {/* Floating glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Brand / About */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <Link
              to="/"
              className="text-3xl font-bold inline-flex items-center mb-6 font-poppins tracking-tight"
              aria-label="CartlyDev — Home"
            >
              {/* No space: CartlyDev */}
              <span className="gradient-text">Cartly</span><span className="text-white">Dev</span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting premium digital experiences that drive results. We transform ideas into impactful technology solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-light w-10 h-10 flex items-center justify-center rounded-full text-gray-300 hover:text-accent transition-colors"
                  whileHover={{ y: -3, scale: 1.1, backgroundColor: 'rgba(0, 207, 255, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <i className={`fab fa-${resolveFaBrand(social.icon)} text-lg`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-accent/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.path} variants={fadeInUp}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accentLight transition-colors flex items-center group"
                  >
                    <motion.span className="mr-2 text-accent" whileHover={{ x: [0, 5, 0] }}>
                      →
                    </motion.span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-accent/30">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              {contactInfo.map((info, idx) => (
                <motion.li key={idx} className="flex items-start group" variants={fadeInUp}>
                  <div className="glass-light w-8 h-8 flex items-center justify-center rounded-full mr-3 group-hover:bg-accent/20 transition-colors shrink-0">
                    <i className={`fas fa-${info.icon} text-accent text-sm group-hover:text-accentLight`} />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="group-hover:text-accentLight transition-colors break-words"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="group-hover:text-accentLight transition-colors break-words">
                      {info.text}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} CartlyDev. All rights reserved.</p>
          <p className="mt-2">
            Made with <span className="text-accent">❤️</span> by CartlyDev Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
