import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const ServiceDetails = () => {
  const { serviceId } = useParams();

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
              {service.title}
            </h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {service.description.split('.')[0]}.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              title={`About Our ${service.title}`} 
              align="left"
            />
            <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] font-semibold rounded-md shadow-lg hover:shadow-xl hover:from-[#00a6ff] hover:to-[#00f2ff] transition-all"
            >
              Get a Free Consultation
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="relative p-8 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-md -z-10"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className={`fas fa-${service.icon} text-3xl`}></i>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Key Features</h3>
            <ul className="space-y-4">
              {service.features?.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] rounded-full flex items-center justify-center text-[#0f172a] mr-3 mt-0.5 flex-shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={`Our ${service.title} Process`} 
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {service.process?.map((step, index) => (
              <motion.div 
                key={index}
                className="relative p-6 rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-20 blur-md -z-10"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full flex items-center justify-center mb-4 font-semibold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]">
        <div className="container mx-auto px-4 text-center rounded-2xl py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your {service.title.toLowerCase()} needs and get a free quote.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-[#0f172a] font-bold rounded-md shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 border-2 border-white text-white font-bold hover:bg-white/10 transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;