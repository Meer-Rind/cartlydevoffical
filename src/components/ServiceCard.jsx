import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <motion.div 
      className="relative glass rounded-2xl p-8 border border-accent/20 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 group overflow-hidden"
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
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
        className="relative w-16 h-16 glass-light border border-accent/30 text-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:text-accentLight transition-all duration-300"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <motion.i 
          className={`fas fa-${icon} text-2xl`}
          animate={{
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror'
          }}
        ></motion.i>
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="relative text-2xl font-bold mb-3 tracking-wide group-hover:text-accentLight transition-colors font-poppins"
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
          className="inline-flex items-center gradient-text font-semibold tracking-wide hover:text-accentLight transition-all duration-300"
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