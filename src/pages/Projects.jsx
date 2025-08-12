import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    document.title = 'Our Projects | Cartly Dev';
  }, []);

  const projects = [
    {
      title: "E‑Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Web", "React", "Node.js", "MongoDB"],
      link: "#",
      category: "Web"
    },
    {
      title: "Fitness Tracking App",
      description: "Track workouts, nutrition, and health goals with real-time syncing and personalized insights.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile", "Flutter", "Firebase", "HealthKit"],
      link: "#",
      category: "Mobile"
    },
    {
      title: "VR Educational Game",
      description: "Immersive STEM learning via a virtual reality gaming experience.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Games", "Unity", "C#", "VR"],
      link: "#",
      category: "Games"
    },
    {
      title: "Enterprise CRM System",
      description: "Advanced analytics-driven CRM solution built for enterprise-scale operations.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Enterprise", "Angular", "Java", "AWS"],
      link: "#",
      category: "Enterprise"
    },
    {
      title: "Food Delivery App",
      description: "Real-time food delivery with tracking, restaurant dashboard, and responsive design.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile", "React Native", "Node.js", "Maps"],
      link: "#",
      category: "Mobile"
    },
    {
      title: "AI‑Powered Chatbot",
      description: "Natural language-based chatbot for customer support automation.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813cd178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Python", "TensorFlow", "NLP"],
      link: "#",
      category: "AI"
    }
  ];

  const categories = ["All", "Web", "Mobile", "AI", "Games", "Enterprise"];
  const [activeCategory, setActiveCategory] = useState("All");

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
        {/* Animated background elements */}
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
              Our Projects
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Explore how we've transformed ideas into impactful digital products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filterable Projects */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Work"
            subtitle="We build solutions that empower industries—from startups to enterprises."
          />

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] shadow-lg"
                    : "glass-light border border-[#334155] text-gray-300 hover:bg-[#00f2ff]/10 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((proj) => activeCategory === "All" ? true : proj.category === activeCategory)
              .map((proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="relative h-full group overflow-hidden rounded-3xl glass border border-accent/20 hover:shadow-xl transition-all">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity"></div>
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-60">
                      <motion.img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-70"></div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <motion.h3 
                        className="text-2xl font-bold mb-3 text-white group-hover:text-[#00f2ff] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {proj.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {proj.description}
                      </motion.p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tags.slice(0, 3).map((tag, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full glass-light border border-accent/20 text-[#00f2ff]"
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: 'rgba(0, 242, 255, 0.2)'
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.a 
                        href={proj.link} 
                        className="inline-flex items-center text-[#00f2ff] hover:text-[#00ffaa] transition-colors font-medium"
                        whileHover={{ x: 5 }}
                      >
                        View Project <i className="fas fa-arrow-right ml-2"></i>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl py-12 px-8 border border-accent/20 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10"></div>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                whileHover={{ scale: 1.02 }}
              >
                Have a project in mind?
              </motion.h3>
              <motion.p 
                className="text-xl text-gray-300 mb-8 mx-auto max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's partner and create something incredible together.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a 
                  href="/contact" 
                  className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] to-[#00f2ff] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
                <motion.a 
                  href="/services" 
                  className="relative overflow-hidden px-8 py-3 glass-light border border-[#334155] text-white font-bold hover:bg-[#00f2ff]/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Our Services</span>
                  <span className="absolute inset-0 bg-[#00f2ff]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;