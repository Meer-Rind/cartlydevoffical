import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: 'facebook-f', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'linkedin-in', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'github', url: '#' },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const contactInfo = [
    { icon: 'map-marker-alt', text: '123 Tech Street, Silicon Valley, CA 94000' },
    { icon: 'phone-alt', text: '+1 (555) 123-4567' },
    { icon: 'envelope', text: 'info@cartlydev.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0a101f] via-[#0f172a] to-[#0a101f] text-[#B2FFFF] pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="text-3xl font-extrabold tracking-wide flex items-center mb-6">
              <span className="text-[#00f2ff]">Cartly</span>
              <span className="text-white ml-1">Dev</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              We craft cutting-edge digital experiences, transforming ideas into impactful technology solutions for modern businesses.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-[#00f2ff] transition duration-300 text-xl"
                  whileHover={{ y: -3 }}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-[#00f2ff] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={link.path} className="hover:text-[#00f2ff] transition flex items-center">
                    <span className="mr-2 text-[#00f2ff]">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-[#00f2ff] inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <i className={`fas fa-${info.icon} text-[#00f2ff] mr-3 mt-1`}></i>
                  <span>{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Cartly Dev. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-[#00f2ff] transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#00f2ff] transition">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;