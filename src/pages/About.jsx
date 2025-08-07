import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      icon: "lightbulb"
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions and business practices.",
      icon: "handshake"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do, delivering quality that exceeds expectations.",
      icon: "award"
    },
    {
      title: "Collaboration",
      description: "We believe in teamwork and building strong partnerships with our clients.",
      icon: "users"
    },
    {
      title: "Accountability",
      description: "We take ownership of our commitments and deliver on our promises.",
      icon: "check-circle"
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of growth and development to stay ahead in a rapidly changing industry.",
      icon: "book-open"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
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
              About Cartly Dev
            </h1>
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
              className="mt-10"
            >
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mr-4">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-[#00f2ff] text-white font-semibold hover:bg-[#00f2ff]/10 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
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
            <p className="mb-6 leading-relaxed text-lg text-gray-300">
              Founded in 2015, Cartly Dev started as a small team of passionate developers with a vision to create impactful technology solutions. What began as a modest startup has now grown into a leading technology company serving clients worldwide.
            </p>
            <p className="mb-6 leading-relaxed text-lg text-gray-300">
              Our journey has been marked by continuous learning, innovation, and a commitment to excellence. We've had the privilege of working with startups, SMEs, and Fortune 500 companies.
            </p>
            <p className="leading-relaxed text-lg text-gray-300">
              Today, we're proud to have a diverse team of experts who bring unique perspectives and skills to every project we undertake.
            </p>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-70 blur-xl -z-10 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div 
            className="relative p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-2xl opacity-20 blur-md -z-10"></div>
            <div className="w-14 h-14 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center mb-6 text-white">
              <i className="fas fa-bullseye text-2xl"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]">Our Mission</h3>
            <p className="text-gray-300 text-lg">
              To empower businesses through innovative, reliable, and scalable technology solutions that drive growth and competitive advantage.
            </p>
          </motion.div>
          <motion.div 
            className="relative p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffaa] to-[#00f2ff] rounded-2xl opacity-20 blur-md -z-10"></div>
            <div className="w-14 h-14 bg-gradient-to-r from-[#00ffaa] to-[#00f2ff] rounded-full flex items-center justify-center mb-6 text-white">
              <i className="fas fa-eye text-2xl"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffaa] to-[#00f2ff]">Our Vision</h3>
            <p className="text-gray-300 text-lg">
              To be the most trusted technology partner for businesses worldwide, recognized for our technical excellence and customer-first mindset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="relative p-8 rounded-xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-xl opacity-20 blur-md -z-10"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-full flex items-center justify-center mb-6 text-white">
                  <i className={`fas fa-${value.icon} text-xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Let's build something amazing together. Contact us today to discuss your project.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-white text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get a Free Consultation
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;