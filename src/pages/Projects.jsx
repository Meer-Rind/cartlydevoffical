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
      link: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Track workouts, nutrition, and health goals with real-time syncing and personalized insights.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile", "Flutter", "Firebase", "HealthKit"],
      link: "#"
    },
    {
      title: "VR Educational Game",
      description: "Immersive STEM learning via a virtual reality gaming experience.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Games", "Unity", "C#", "VR"],
      link: "#"
    },
    {
      title: "Enterprise CRM System",
      description: "Advanced analytics-driven CRM solution built for enterprise-scale operations.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Enterprise", "Angular", "Java", "AWS"],
      link: "#"
    },
    {
      title: "Food Delivery App",
      description: "Real-time food delivery with tracking, restaurant dashboard, and responsive design.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile", "React Native", "Node.js", "Maps"],
      link: "#"
    },
    {
      title: "AI‑Powered Chatbot",
      description: "Natural language-based chatbot for customer support automation.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813cd178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Python", "TensorFlow", "NLP"],
      link: "#"
    }
  ];

  const categories = ["All", "Web", "Mobile", "AI", "Games", "Enterprise"];

  const [activeCategory, setActiveCategory] = useState("All");

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
              Our Projects
            </h1>
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
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
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
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] shadow-lg"
                    : "border border-[#334155] bg-[#1e293b]/50 text-gray-300 hover:bg-[#00f2ff]/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((proj) =>
                activeCategory === "All" ? true : proj.tags.includes(activeCategory)
              )
              .map((proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="relative h-full group overflow-hidden rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-500"></div>
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden h-60">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80"></div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white">{proj.title}</h3>
                      <p className="text-gray-300 mb-4">{proj.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tags.slice(0, 3).map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-xs rounded-full bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={proj.link} 
                        className="inline-flex items-center text-[#00f2ff] hover:text-[#00ffaa] transition-colors font-medium"
                      >
                        View Project <i className="fas fa-arrow-right ml-2"></i>
                      </a>
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
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Have a project in mind?</h3>
            <p className="text-xl text-gray-300 mb-8 mx-auto max-w-2xl">
              Let's partner and create something incredible together.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 rounded-full border-2 border-[#00f2ff] text-white font-bold hover:bg-[#00f2ff]/10 transition-all duration-300 hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;