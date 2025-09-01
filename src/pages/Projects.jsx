import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Projects = () => {
  useEffect(() => {
    document.title = 'Our Projects | Cartly Dev';
  }, []);

  // 🔥 Your projects only (old ones removed)
  const projects = [
    {
      title: 'Al-Shariah App',
      description:
        'Islamic lifestyle app with Quran translation, recitation, and Qibla direction for daily guidance.',
      image:
        'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80',
      tags: ['Kotlin', 'Jetpack Compose'],
      link: 'https://play.google.com/store/apps/details?id=com.cartlydev.alsharia.quranapp',
      category: 'Mobile',
      badge: 'Featured',
      extLabel: 'Google Play',
      extIcon: 'fab fa-google-play',
    },
    {
      title: 'PopIt Game',
      description:
        'Fun balloon popping game with addictive mechanics and colorful animations.',
      image:
        'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1200&q=80',
      tags: ['Unity', 'C#'],
      link: '#',
      category: 'Games',
      badge: 'Gameplay',
      extLabel: null,
    },
    {
      title: 'Cloknet VPN',
      description:
        'Secure VPN app with in-app browser, server selection, real-time network stats, and subscription management.',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
      tags: ['Kotlin', 'Jetpack Compose', 'VpnService', 'Google Play Billing'],
      link: '#',
      category: 'Mobile',
      badge: 'Security',
      extLabel: null,
    },
    {
      title: 'AI Agentic Website',
      description:
        'Modern AI-powered landing page with chatbot integration, responsive design, and optimized for SEO.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      tags: ['React.js', 'Tailwind CSS', 'Vercel'],
      link: 'https://ai-agent-mkf5.vercel.app/',
      category: 'Web',
      badge: 'Live',
      extLabel: 'Open Site',
      extIcon: 'fas fa-up-right-from-square',
    },
  ];

  const categories = ['All', 'Mobile', 'Games', 'Web'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = projects.filter((p) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

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

      {/* Hero */}
      <section className="relative py-28 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00f2ff] mix-blend-screen opacity-20 animate-blob animation-delay-2000 filter blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-[#00ffaa] mix-blend-screen opacity-20 animate-blob filter blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#00a6ff] mix-blend-screen opacity-20 animate-blob animation-delay-4000 filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            Explore how we&apos;ve transformed ideas into impactful digital products.
          </motion.p>
        </div>
      </section>

      {/* Work */}
      <section className="relative py-20 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Work"
            subtitle="We build solutions that empower industries—from startups to enterprises."
          />

          {/* Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-10 md:mt-12 mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] shadow-lg'
                    : 'glass-light border border-[#334155] text-gray-300 hover:bg-[#00f2ff]/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center text-gray-400">No projects in this category (yet!).</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              {filtered.map((proj, idx) => (
                <motion.article
                  key={proj.title + idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative h-full overflow-hidden rounded-3xl glass border border-accent/20 hover:shadow-xl transition-all group"
                >
                  {/* subtle glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity"></div>

                  {/* Badge */}
                  {proj.badge && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold rounded-full bg-[#00f2ff]/15 text-[#00f2ff] border border-[#00f2ff]/30">
                      ✨ {proj.badge}
                    </span>
                  )}

                  {/* Image */}
                  <div className="relative h-56 md:h-60 overflow-hidden">
                    <motion.img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-70" />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#00f2ff] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{proj.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {proj.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-[11px] md:text-xs rounded-full glass-light border border-accent/20 text-[#00f2ff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    {proj.link && proj.link !== '#' ? (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#00f2ff] hover:text-[#00ffaa] transition-colors font-medium"
                      >
                        {proj.extIcon && <i className={`${proj.extIcon} mr-2`}></i>}
                        {proj.extLabel || 'View Project'}
                        <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-gray-400 cursor-default">
                        View Project <i className="fas fa-lock ml-2"></i>
                        <span className="ml-2 text-xs opacity-70">(coming soon)</span>
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* CTA */}
          <motion.div
            className="text-center mt-20 md:mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative glass rounded-3xl py-10 md:py-12 px-6 md:px-8 border border-accent/20 shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-3xl opacity-20 blur-xl -z-10"></div>

              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                Have a project in mind?
              </h3>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 mx-auto max-w-2xl">
                Let&apos;s partner and create something incredible together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="relative overflow-hidden px-7 md:px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] to-[#00f2ff] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <a
                  href="/services"
                  className="relative overflow-hidden px-7 md:px-8 py-3 glass-light border border-[#334155] text-white font-bold hover:bg-[#00f2ff]/10 transition-all duration-300"
                >
                  <span className="relative z-10">Our Services</span>
                  <span className="absolute inset-0 bg-[#00f2ff]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
