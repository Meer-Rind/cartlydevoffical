import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <motion.div 
      className="relative glass rounded-2xl shadow-xl overflow-hidden border border-accent/20 hover:shadow-cyan-500/30 transition-all duration-500 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 207, 255, 0.1), 0 10px 10px -5px rgba(0, 207, 255, 0.04)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00CFFF_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
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
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-accent/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-light text-white font-medium px-6 py-2 rounded-full border-2 border-white/50 hover:bg-white hover:text-accent transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project 
            <motion.span
              className="ml-2"
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <i className="fas fa-external-link-alt"></i>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <motion.h3 
          className="text-2xl font-bold mb-2 group-hover:text-accentLight transition-colors flex items-center"
          whileHover={{ x: 5 }}
        >
          <span className="mr-2">✨</span>
          {title}
        </motion.h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="glass-light text-accentLight text-xs px-3 py-1 rounded-full border border-accent/20"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(0, 207, 255, 0.2)',
                borderColor: 'rgba(0, 229, 255, 0.5)'
              }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;