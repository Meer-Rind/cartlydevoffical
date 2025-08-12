import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    document.title = `${serviceId} | Cartly Dev`;
  }, [serviceId]);

  const services = {
    'app-development': {
      title: 'App Development',
      description: 'We specialize in creating high-performance mobile applications for both iOS and Android platforms. Our team of expert developers uses modern frameworks and best practices to deliver apps that are not only functional but also provide an exceptional user experience.',
      icon: 'mobile-alt',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions with Flutter and React Native',
        'UI/UX design tailored to your brand',
        'API integration and backend development',
        'Quality assurance and testing',
        'App store deployment and optimization',
      ],
      process: [
        {
          title: 'Requirement Analysis',
          description: 'We start by thoroughly understanding your business needs and target audience.'
        },
        {
          title: 'UI/UX Design',
          description: 'Our designers create intuitive and engaging interfaces for your app.'
        },
        {
          title: 'Development',
          description: 'Our developers build the app using the most suitable technology stack.'
        },
        {
          title: 'Testing',
          description: 'We rigorously test the app to ensure quality and performance.'
        },
        {
          title: 'Deployment',
          description: 'We help you launch your app on the App Store and Google Play.'
        },
        {
          title: 'Maintenance',
          description: 'We provide ongoing support and updates for your app.'
        },
      ],
    },
    'web-development': {
      title: 'Web Development',
      description: 'Our web development services help businesses establish a strong online presence with modern, responsive websites and web applications. We use cutting-edge technologies to build solutions that are scalable, secure, and optimized for performance.',
      icon: 'code',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Content Management Systems',
        'Progressive Web Apps',
        'API development and integration',
        'Performance optimization'
      ],
      process: [
        {
          title: 'Planning',
          description: 'We define the project scope, features, and technology stack.'
        },
        {
          title: 'Design',
          description: 'We create wireframes and designs that align with your brand.'
        },
        {
          title: 'Development',
          description: 'Our developers build the website using modern frameworks.'
        },
        {
          title: 'Content Integration',
          description: 'We help populate your site with content and media.'
        },
        {
          title: 'Testing',
          description: 'We test across devices and browsers for compatibility.'
        },
        {
          title: 'Launch',
          description: 'We deploy your website and ensure everything runs smoothly.'
        }
      ]
    },
    'game-development': {
      title: 'Game Development',
      description: 'We create immersive gaming experiences across multiple platforms, from mobile to PC and consoles. Our team combines creative design with cutting-edge technology to develop games that engage and entertain players.',
      icon: 'gamepad',
      features: [
        '2D and 3D game development',
        'Mobile, PC, and console games',
        'VR and AR game development',
        'Game design and concept art',
        'Multiplayer and online functionality',
        'Game monetization strategies'
      ],
      process: [
        {
          title: 'Concept Development',
          description: 'We work with you to develop the game concept and mechanics.'
        },
        {
          title: 'Prototyping',
          description: 'We create a prototype to test the core gameplay.'
        },
        {
          title: 'Production',
          description: 'Our team builds the full game with all features.'
        },
        {
          title: 'Quality Assurance',
          description: 'We thoroughly test the game for bugs and gameplay issues.'
        },
        {
          title: 'Launch',
          description: 'We help publish your game on relevant platforms.'
        },
        {
          title: 'Post-Launch Support',
          description: 'We provide updates and additional content as needed.'
        }
      ]
    }
  };

  const service = services[serviceId] || {
    title: 'Service Not Found',
    description: 'The requested service does not exist.',
    features: [],
    process: [],
    icon: 'exclamation-triangle'
  };

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00f2ff] opacity-10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

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
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]"
              initial={{ letterSpacing: '0.2em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {service.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {service.description.split('.')[0]}.
            </motion.p>
            
            {/* Animated scroll indicator */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00f2ff]">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About + Features */}
      <section className="relative py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a] overflow-hidden">
        {/* Floating gradient circles */}
        <motion.div 
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] opacity-10 blur-3xl"
          style={{ y }}
        />
        <motion.div 
          className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#00ffaa] to-[#00f2ff] opacity-10 blur-3xl"
          style={{ y }}
        />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start relative z-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <SectionTitle 
              title={`About Our ${service.title}`} 
              align="left"
            />
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] font-semibold rounded-md shadow-lg hover:shadow-xl hover:from-[#00a6ff] hover:to-[#00f2ff] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Get a Free Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] to-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="relative p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, x: 100, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 242, 255, 0.1), 0 10px 10px -5px rgba(0, 242, 255, 0.04)"
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-md -z-10"></div>
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <i className={`fas fa-${service.icon} text-3xl`}></i>
            </motion.div>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Key Features</h3>
            <ul className="space-y-4">
              {service.features?.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center text-[#0f172a] mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title={`Our ${service.title} Process`} 
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {service.process?.map((step, index) => (
              <motion.div 
                key={index}
                className="relative p-6 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  borderColor: '#00f2ff'
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-300"></div>
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center mb-4 font-semibold"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00f2ff] opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] overflow-hidden">
        {/* Animated waves */}
        <div className="absolute bottom-0 left-0 right-0 h-20 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-white"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              className="fill-white"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center rounded-2xl py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              whileInView={{ 
                scale: [1, 1.02, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contact us today to discuss your {service.title.toLowerCase()} needs and get a free quote.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-white text-[#0f172a] font-bold rounded-md shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all inline-flex items-center"
                >
                  <span>Contact Us</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                    className="ml-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/services" 
                  className="px-8 py-3 border-2 border-white text-white font-bold hover:bg-white/10 transition-all inline-flex items-center"
                >
                  <span>View All Services</span>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="ml-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4l3 3"/>
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;