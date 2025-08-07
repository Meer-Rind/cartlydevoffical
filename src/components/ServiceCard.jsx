import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <motion.div 
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-8 rounded-2xl border border-[#00CFFF]/20 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 207, 255, 0.1), 0 10px 10px -5px rgba(0, 207, 255, 0.04)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#00CFFF] rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: 0.3
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      {/* Icon */}
      <motion.div 
        className="relative w-16 h-16 bg-[#00CFFF]/10 border border-[#00CFFF]/30 text-[#00CFFF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00CFFF] group-hover:text-white transition-all duration-300"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <i className={`fas fa-${icon} text-2xl`}></i>
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="relative text-2xl font-bold mb-3 tracking-wide group-hover:text-[#B2FFFF] transition-colors"
        whileHover={{ x: 5 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <p className="relative text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <motion.div 
        className="relative"
        whileHover={{ x: 5 }}
      >
        <Link 
          to={link} 
          className="inline-flex items-center text-[#00CFFF] font-semibold tracking-wide hover:text-[#B2FFFF] transition-all duration-300"
        >
          Learn more
          <motion.i 
            className="fas fa-arrow-right ml-2"
            animate={{
              x: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          ></motion.i>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;