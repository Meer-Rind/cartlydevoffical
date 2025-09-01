import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const services = [
    {
      icon: 'mobile-alt',
      title: 'App Development',
      description: 'High-performance mobile apps for iOS & Android, built with the latest technologies.',
      link: '/services/app-development',
    },
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Responsive, fast, and secure websites tailored to your brand.',
      link: '/services/web-development',
    },
    {
      icon: 'gamepad',
      title: 'Game Development',
      description: 'Cross-platform games with immersive experiences using cutting-edge tools.',
      link: '/services/game-development',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce ecosystem with cart, checkout, and inventory management.',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Track workouts, nutrition, and fitness goals with real-time data sync.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter', 'Firebase', 'Dart'],
      link: '#',
    },
    {
      title: 'VR Educational Game',
      description: 'Engaging learning experiences through gamified virtual reality modules.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Unity', 'C#', 'VR'],
      link: '#',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Background Video */}
      <section className="relative h-[100svh] min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background video (no controls) */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="https://analytica-data.com/video/Analytica.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          // poster="/hero-poster.jpg" // optional
          // controls are intentionally omitted to hide play bar/UI
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
        />

        {/* Dark overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Optional soft glows (kept subtle) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00f2ff] rounded-full blur-[100px] opacity-10 animate-pulse" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#ff00aa] rounded-full blur-[100px] opacity-10 animate-pulse delay-1000" />
        </div>

        {/* Content (pad for fixed Navbar height) */}
        <div className="container mx-auto px-4 z-10 text-center pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]">
              Innovative <span className="text-white">Technology</span> Solutions
            </h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Turning ideas into reality through custom software solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/services"
                className="px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-[#00f2ff] rounded-full font-semibold text-white hover:bg-[#00f2ff]/10 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Who We Are"
            subtitle="Cartly Dev empowers innovation through strategic digital transformation."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6 text-gray-300">
                Since 2015, we've built solutions that scale, adapt, and deliver results. Our clients range from startups to enterprise-level businesses.
              </p>
              <p className="mb-8 text-gray-300">
                With agile teams and proven frameworks, we prioritize user experience, business logic, and modern infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="p-4 bg-[#1e293b]/50 rounded-lg border border-[#334155]"
                    whileHover={{ y: -5, backgroundColor: 'rgba(0, 242, 255, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-[#00f2ff] text-2xl mb-2">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4 className="text-white font-medium">Feature {item}</h4>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="relative rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Services"
            subtitle="Explore our core offerings that help businesses accelerate growth."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Projects"
            subtitle="Check out some of our recent work built with passion and precision."
          />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;