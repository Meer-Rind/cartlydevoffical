import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const CALENDLY_URL = 'https://calendly.com/cartlydev-info/30min'; // <-- REPLACE with your Calendly link

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Cartly Dev';
  }, []);

  // Load Calendly popup widget (JS + CSS) once for this page
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      try { document.head.removeChild(link); } catch {}
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  const openCalendly = (e) => {
    e?.preventDefault?.();
    const url = `${CALENDLY_URL}?hide_gdpr_banner=1`;
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Services (added: AI Agents & Bot Development)
  const services = [
    {
      icon: 'mobile-alt',
      title: 'App Development',
      description:
        'We build high-performance mobile applications for iOS and Android platforms using modern frameworks and best practices.',
      link: '/services/app-development',
    },
    {
      icon: 'code',
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications tailored to your business needs with cutting-edge technologies.',
      link: '/services/web-development',
    },
    {
      icon: 'gamepad',
      title: 'Game Development',
      description:
        'Immersive gaming experiences across multiple platforms with cutting-edge technology and creative design.',
      link: '/services/game-development',
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description:
        'Scalable and secure cloud infrastructure and services to optimize your business operations and reduce costs.',
      link: '#',
    },
    {
      icon: 'robot',
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions powered by artificial intelligence to automate processes and gain valuable insights.',
      link: '#',
    },
    // ✅ New service
    {
      icon: 'comments',
      title: 'AI Agents & Bot Development',
      description:
        'Custom AI agents and chatbots (web/WhatsApp/Telegram) with RAG, tools, and API integrations to automate support and workflows.',
      link: '/services/ai-agents',
    },
    {
      icon: 'database',
      title: 'Data Analytics',
      description:
        'Turn your data into actionable insights with our advanced analytics and business intelligence solutions.',
      link: '#',
    },
  ];

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
              Our Services
            </h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive technology solutions tailored to your business needs
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10"
            >
              {/* Get Started -> Calendly popup (design preserved) */}
              <button
                onClick={openCalendly}
                aria-label="Schedule with Calendly"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mr-4"
              >
                Get Started
              </button>

              <Link
                to="/portfolio"
                className="px-8 py-3 rounded-full border-2 border-[#00f2ff] text-white font-semibold hover:bg-[#00f2ff]/10 transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What We Offer"
            subtitle="We provide end-to-end technology services to help businesses innovate, scale, and succeed in the digital age."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-full p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-md -z-10 group-hover:opacity-30 transition-opacity"></div>
                  <div className="w-14 h-14 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center mb-6 text-white">
                    <i className={`fas fa-${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-[#00f2ff] hover:text-[#00ffaa] transition-colors"
                  >
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Process" subtitle="A structured approach to delivering exceptional results" />

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: 'Discovery',
                description:
                  'We start by understanding your business goals, challenges, and requirements.',
                icon: 'search',
              },
              {
                title: 'Planning',
                description:
                  'We create a detailed project plan with milestones, timelines, and deliverables.',
                icon: 'project-diagram',
              },
              {
                title: 'Development',
                description:
                  'Our team builds your solution using agile methodologies for maximum flexibility.',
                icon: 'code',
              },
              {
                title: 'Delivery',
                description:
                  'We deploy the solution and provide ongoing support and maintenance.',
                icon: 'rocket',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-full opacity-20 blur-md -z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center mx-auto text-white">
                    <i className={`fas fa-${step.icon} text-2xl`}></i>
                  </div>
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00ffaa] rounded-full flex items-center justify-center text-xs font-bold text-[#0f172a]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can help you achieve your technology goals.
            </p>
            <div className="flex justify-center gap-4">
              {/* Get a Free Consultation -> Calendly popup (design preserved) */}
              <button
                onClick={openCalendly}
                aria-label="Book a free consultation on Calendly"
                className="px-8 py-3 rounded-full bg-white text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get a Free Consultation
              </button>

              <Link
                to="/portfolio"
                className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
