import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Cartly Dev';
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00f2ff] mix-blend-screen opacity-20 animate-blob animation-delay-2000 filter blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-[#00ffaa] mix-blend-screen opacity-20 animate-blob filter blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#00a6ff] mix-blend-screen opacity-20 animate-blob animation-delay-4000 filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]">
              Let's Connect
            </h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
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
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div 
              className="relative p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-md -z-10"></div>
              
              <SectionTitle 
                title="Send Us a Message" 
                subtitle="Fill in the form below and our team will get back to you shortly." 
                align="left" 
              />

              <form className="space-y-6 mt-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 border border-[#334155] bg-[#1e293b]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="John Doe" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 border border-[#334155] bg-[#1e293b]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="john@example.com" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-3 border border-[#334155] bg-[#1e293b]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="Project details or question" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-[#334155] bg-[#1e293b]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f2ff] text-white placeholder-gray-400"
                    placeholder="Type your message here..." 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] hover:from-[#00a6ff] hover:to-[#00f2ff] text-[#0f172a] py-3 px-6 rounded-md w-full font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SectionTitle 
                title="Get in Touch" 
                subtitle="We'd love to hear from you" 
                align="left" 
              />

              <div className="mt-8 relative p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm shadow-lg space-y-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffaa] to-[#00f2ff] rounded-2xl opacity-20 blur-md -z-10"></div>
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Our Office</h4>
                    <p className="text-gray-300">123 Tech Street<br />Silicon Valley, CA 94000</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center text-xl">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567<br />Mon-Fri, 9am - 5pm PST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center text-xl">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Email</h4>
                    <p className="text-gray-300">info@cartlydev.com<br />support@cartlydev.com</p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: 'facebook-f', color: '#3b5998' },
                      { icon: 'twitter', color: '#1DA1F2' },
                      { icon: 'linkedin-in', color: '#0077B5' },
                      { icon: 'instagram', color: '#E1306C' },
                      { icon: 'github', color: '#333' }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        style={{ backgroundColor: social.color }}
                        aria-label={social.icon}
                      >
                        <i className={`fab fa-${social.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff]/10 to-[#00ffaa]/10"></div>
        <div className="container mx-auto h-full flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center mx-auto mb-6 text-[#0f172a]">
              <i className="fas fa-map-marked-alt text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Our Location</h3>
            <p className="text-gray-300 max-w-md mx-auto">Interactive map would appear here with our office location</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;