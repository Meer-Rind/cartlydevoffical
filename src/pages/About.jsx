import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const CALENDLY_URL = 'https://calendly.com/cartlydev-info/30min'; // <-- REPLACE with your real Calendly link

const About = () => {
  // Load Calendly popup widget assets (JS + CSS) once
  useEffect(() => {
    // Add CSS (nice default styling for the popup)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';

    // Add JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      // Clean up when this page unmounts
      try { document.head.removeChild(link); } catch {}
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  const openCalendly = (e) => {
    e?.preventDefault?.();
    // Optional: you can append params like ?hide_gdpr_banner=1
    const url = `${CALENDLY_URL}?hide_gdpr_banner=1`;
    // Open Calendly popup (function provided by loaded widget.js)
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in a new tab if widget isn't loaded yet
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      icon: "lightbulb",
      color: "from-[#00f2ff] to-[#00a6ff]"
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions and business practices.",
      icon: "handshake",
      color: "from-[#00ffaa] to-[#00f2ff]"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do, delivering quality that exceeds expectations.",
      icon: "award",
      color: "from-[#00a6ff] to-[#00f2ff]"
    },
    {
      title: "Collaboration",
      description: "We believe in teamwork and building strong partnerships with our clients.",
      icon: "users",
      color: "from-[#00f2ff] to-[#00ffaa]"
    },
    {
      title: "Accountability",
      description: "We take ownership of our commitments and deliver on our promises.",
      icon: "check-circle",
      color: "from-[#00ffaa] to-[#00a6ff]"
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of growth and development to stay ahead in a rapidly changing industry.",
      icon: "book-open",
      color: "from-[#00a6ff] to-[#00ffaa]"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen overflow-x-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00f2ff] mix-blend-screen opacity-20 animate-blob animation-delay-2000 filter blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-[#00ffaa] mix-blend-screen opacity-20 animate-blob filter blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#00a6ff] mix-blend-screen opacity-20 animate-blob animation-delay-4000 filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]"
              whileHover={{ scale: 1.02 }}
            >
              About Cartly Dev
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Driving digital transformation through innovative technology solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* Get Started -> Calendly popup */}
              <motion.button 
                onClick={openCalendly}
                aria-label="Schedule with Calendly"
                className="relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] to-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>

              {/* Keep Learn More same (no Calendly) */}
              <motion.button 
                className="relative overflow-hidden px-8 py-3 rounded-full border-2 border-[#00f2ff] text-white font-semibold hover:bg-[#00f2ff]/10 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-[#00f2ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              title="Our Story" 
              subtitle="How it all began"
              align="left"
            />
            <motion.p 
              className="mb-6 leading-relaxed text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Founded in 2015, Cartly Dev started as a small team of passionate developers with a vision to create impactful technology solutions. What began as a modest startup has now grown into a leading technology company serving clients worldwide.
            </motion.p>
            <motion.p 
              className="mb-6 leading-relaxed text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our journey has been marked by continuous learning, innovation, and a commitment to excellence. We've had the privilege of working with startups, SMEs, and Fortune 500 companies.
            </motion.p>
            <motion.p 
              className="leading-relaxed text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Today, we're proud to have a diverse team of experts who bring unique perspectives and skills to every project we undertake.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10 animate-pulse"></div>
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#334155] glass hover:shadow-cyan-500/20 transition-all"
              whileHover={{ y: -10 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                className="w-full h-auto object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div 
            className="relative p-8 rounded-3xl glass border border-accent/20 hover:shadow-2xl transition-all group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-3xl opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity"></div>
            <motion.div 
              className="w-14 h-14 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center mb-6 text-white"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <i className="fas fa-bullseye text-2xl"></i>
            </motion.div>
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]"
              whileHover={{ x: 5 }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              To empower businesses through innovative, reliable, and scalable technology solutions that drive growth and competitive advantage.
            </motion.p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className="relative p-8 rounded-3xl glass border border-accent/20 hover:shadow-2xl transition-all group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffaa] to-[#00f2ff] rounded-3xl opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity"></div>
            <motion.div 
              className="w-14 h-14 bg-gradient-to-r from-[#00ffaa] to-[#00f2ff] rounded-full flex items-center justify-center mb-6 text-white"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <i className="fas fa-eye text-2xl"></i>
            </motion.div>
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffaa] to-[#00f2ff]"
              whileHover={{ x: 5 }}
            >
              Our Vision
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              To be the most trusted technology partner for businesses worldwide, recognized for our technical excellence and customer-first mindset.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="relative p-8 rounded-2xl glass border border-accent/20 hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity`}></div>
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-6 text-white`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <i className={`fas fa-${value.icon} text-xl`}></i>
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold mb-3 text-white"
                  whileHover={{ x: 5 }}
                >
                  {value.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl py-16 px-8 border border-white/20 shadow-2xl"
          >
            <div className="absolute -inset-1 bg-white/20 rounded-3xl opacity-20 blur-xl -z-10"></div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.02 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's build something amazing together. Contact us today to discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* Get a Free Consultation -> Calendly popup */}
              <motion.button 
                onClick={openCalendly}
                aria-label="Book a free consultation on Calendly"
                className="relative overflow-hidden px-8 py-3 rounded-full bg-white text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get a Free Consultation</span>
                <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>

              {/* Keep this as a normal link (you can point to your portfolio route if you want) */}
              <motion.a 
                href="#"
                className="relative overflow-hidden px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Our Work</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
