import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Cartly Dev';
  }, []);

  const contactMethods = [
    {
      icon: 'map-marker-alt',
      title: 'Visit Us',
      description: '123 Tech Street, Silicon Valley, CA 94000',
      color: 'from-[#00f2ff] to-[#00a6ff]',
    },
    {
      icon: 'phone-alt',
      title: 'Call Us',
      description: '+1 (555) 123-4567\nMon-Fri, 9am - 5pm PST',
      color: 'from-[#00ffaa] to-[#00f2ff]',
    },
    {
      icon: 'envelope',
      title: 'Email Us',
      // ✅ updated emails
      description: 'info@cartlydev.com\nsupport@cartlydev.com',
      color: 'from-[#00a6ff] to-[#00f2ff]',
    },
  ];

  const socialLinks = [
    { icon: 'facebook-f', name: 'Facebook', color: '#3b5998' },
    { icon: 'twitter',     name: 'Twitter',  color: '#1DA1F2' },
    { icon: 'linkedin-in', name: 'LinkedIn', color: '#0077B5' },
    { icon: 'instagram',   name: 'Instagram',color: '#E1306C' },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]">
              Let&apos;s Connect
            </h1>
            <motion.p
              className="text-base sm:text-lg md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Have questions or a project in mind? Reach out and our team will respond promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              className="relative glass p-6 sm:p-8 rounded-3xl shadow-2xl border border-accent/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10"></div>

              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill in the form below and our team will get back to you shortly."
                align="left"
              />

              <form className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full px-4 py-3 glass-light border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 glass-light border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 glass-light border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="Project details or question"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 glass-light border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    className="relative overflow-hidden w-full px-6 py-4 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] to-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <motion.span
                      className="absolute top-0 left-0 w-full h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10 sm:space-y-12"
            >
              <SectionTitle
                title="Get in Touch"
                subtitle="We'd love to hear from you through any of these channels."
                align="left"
              />

              {/* Contact Methods */}
              <div className="space-y-5 sm:space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="glass p-5 sm:p-6 rounded-xl border border-accent/20 hover:border-[#00f2ff]/50 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0`}
                      >
                        <i className={`fas fa-${method.icon}`}></i>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                          {method.title}
                        </h3>

                        {/* Make phone & emails clickable while keeping style */}
                        {method.title === 'Email Us' ? (
                          <div className="flex flex-col">
                            {method.description.split('\n').map((mail) => (
                              <a
                                key={mail}
                                href={`mailto:${mail.trim()}`}
                                className="text-[#00f2ff] hover:text-[#00a6ff] transition-colors break-all"
                              >
                                {mail}
                              </a>
                            ))}
                          </div>
                        ) : method.title === 'Call Us' ? (
                          <div className="flex flex-col text-gray-300">
                            <a
                              href={`tel:${method.description.split('\n')[0].replace(/[^\d+]/g, '')}`}
                              className="text-[#00f2ff] hover:text-[#00a6ff] transition-colors"
                            >
                              {method.description.split('\n')[0]}
                            </a>
                            <span className="opacity-80">{method.description.split('\n')[1]}</span>
                          </div>
                        ) : (
                          <p className="text-gray-300 whitespace-pre-line">
                            {method.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-light border border-[#334155] flex items-center justify-center text-white hover:text-[#00f2ff] transition-all"
                      style={{ backgroundColor: `${social.color}20` }}
                      aria-label={social.name}
                      whileHover={{ y: -5, scale: 1.08, boxShadow: `0 5px 15px ${social.color}40` }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <i className={`fab fa-${social.icon} text-base sm:text-lg`}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass rounded-3xl overflow-hidden border border-accent/20 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-72 sm:h-80 md:h-96 w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Silicon+Valley&zoom=12&size=800x400&maptype=roadmap&key=YOUR_API_KEY')] bg-cover bg-center opacity-20"></div>

              <motion.div
                className="relative z-10 text-center p-6 sm:p-8"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-block p-5 sm:p-6 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full mb-5 sm:mb-6">
                  <i className="fas fa-map-marker-alt text-2xl sm:text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Our Location</h3>
                <p className="text-gray-300 mb-5 sm:mb-6">123 Tech Street, Silicon Valley, CA 94000</p>
                <a
                  href="#"
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 glass-light border border-[#334155] rounded-lg text-white hover:text-[#00f2ff] transition-colors"
                >
                  Get Directions <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="relative glass rounded-3xl py-12 sm:py-16 px-6 sm:px-8 border border-accent/20 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10"></div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let&apos;s discuss how we can help you achieve your goals with our expertise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              <a
                href="#"
                className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Schedule a Call
              </a>
              <a
                href="#"
                className="px-7 sm:px-8 py-3.5 glass-light border border-[#334155] text-white font-bold rounded-lg hover:bg-[#00f2ff]/10 transition-all hover:scale-105"
              >
                View Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
