import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  useEffect(() => {
    document.title = 'CartlyDev — Home';
  }, []);

  const services = [
    {
      icon: 'Cyber Security ',
      title: "Cybersecurity Solutions",
      description: 'End-to-end protection across web, mobile, and cloud with zero-trust architecture, automated scanning, penetration testing, and 24/7 incident response.'
      link: '/services/Cyber Security',
    },
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
  ];

  // ✅ Updated Featured Projects
  const projects = [
    {
      title: 'CustomerInsignt',
      description:
        ' Tired of guessing what to build next — or drowning in customer feedback that leads nowhere? nsightFlow’s AI Strategy Coach — your new secret weapon for making data-backed, revenue-driving product decisions.',
      image:
        'https://cdn.prod.website-files.com/67f2bf66b0db32ae875d135e/67f2c16a5e0b1d5ad07e09a5_67c97d79192a5fe336a138e5_4b39ef45-447e-48c3-b396-40403a2b03a5.png',
      tags: ['SAAS', 'React.js', 'MVS'],
      link: 'https://play.google.com/store/apps/details?id=com.cartlydev.alsharia.quranapp',
    },
    {
      title: 'AI Agentic / Workflows',
      description:
        'aunch AI agent bots for lead gen and support, automate LinkedIn posting at scale, and convert chats with a WhatsApp chatbot—fast, secure, and built for growth.',
      image:
        'https://images.prismic.io//intuzwebsite/ZrYQ5kaF0TcGI0pP_AIAgent%26AIAgenticWorkflowsAcrossIndustries-1.png?w=2400&q=80&auto=format,compress&fm=png8',
      tags: ['n8n', 'Automation Worlkflows', 'ML'],
      link: 'https://ai-agent-mkf5.vercel.app/',
    },
    {
      title: 'Cloknet VPN',
      description:
        'Secure VPN app with in-app browser, server selection, real-time network stats, and subscription management.',
      image:
        'https://media.wired.com/photos/6785d64c347617ad34890532/3:2/w_2240,c_limit/VPN-computer-laptop-security-GettyImages-1288453381-Vertigo3d-(cropped).jpg',
      tags: ['Kotlin', 'Jetpack Compose', 'VpnService', 'Google Play Billing'],
      link: '#', // link coming soon
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
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
        />
        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Subtle glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00f2ff] rounded-full blur-[100px] opacity-10 animate-pulse" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#00ffaa] rounded-full blur-[100px] opacity-10 animate-pulse delay-1000" />
        </div>

        {/* Content (padding for fixed navbar) */}
        <div className="container mx-auto px-4 z-10 text-center pt-28 md:pt-32">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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

      {/* About Section (revamped, same theme) */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative overflow-hidden">
        {/* soft background accents */}
        <div className="pointer-events-none absolute -top-24 right-[-10%] w-[36rem] h-[36rem] rounded-full bg-[#00f2ff]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-[-10%] w-[32rem] h-[32rem] rounded-full bg-[#00a6ff]/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="About Us"
            subtitle="Building future-ready digital products with passion, precision, and performance."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-6 md:p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] opacity-20 blur-lg -z-10" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  We turn complexity into <span className="text-[#00f2ff]">clarity</span>, and ideas into{' '}
                  <span className="text-[#00ffaa]">impact</span>.
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  At CartlyDev, we build products that solve real problems. Our team blends strategy, design,
                  and engineering to deliver mobile apps, web platforms, and games that are reliable, scalable,
                  and a joy to use.
                </p>

                {/* Feature bullets */}
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    'Client-centered & outcome-driven',
                    'Innovative & scalable architectures',
                    'Agile, transparent delivery',
                    'Trusted by startups & SMEs',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-[#334155] bg-[#0f172a]/40 p-3"
                    >
                      <div className="mt-0.5 w-8 h-8 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-xs" />
                      </div>
                      <p className="text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: '50+', v: 'Projects' },
                    { k: '96%', v: 'Retention' },
                    { k: '4.9★', v: 'Avg Rating' },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="text-center rounded-xl border border-[#334155] bg-[#0f172a]/40 py-4"
                    >
                      <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]">
                        {s.k}
                      </div>
                      <div className="text-gray-300 text-sm mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/about"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] font-semibold text-white shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    Discover More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-full border-2 border-[#00f2ff] text-white font-semibold hover:bg-[#00f2ff]/10 transition-all"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: media */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-lg" />
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80"
                alt="Building together"
                className="relative w-full rounded-xl shadow-2xl border border-[#334155]"
                loading="lazy"
              />
              {/* floating badge */}
              <div className="absolute -bottom-4 left-4 md:left-8 px-4 py-3 rounded-xl bg-[#0f172a]/80 backdrop-blur border border-[#334155] shadow-lg">
                <div className="text-sm text-gray-300">End-to-end delivery</div>
                <div className="font-semibold text-white">
                  Design → Dev → Launch <span className="text-[#00f2ff]">→ Scale</span>
                </div>
              </div>
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
