import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <motion.div 
      className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl overflow-hidden border border-[#00CFFF]/20 hover:shadow-cyan-500/30 transition-all duration-500 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00CFFF_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
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
          className="absolute inset-0 bg-[#00CFFF]/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium px-6 py-2 rounded-full border-2 border-white hover:bg-white hover:text-[#00CFFF] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project <i className="fas fa-external-link-alt ml-2"></i>
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <motion.h3 
          className="text-2xl font-bold mb-2 group-hover:text-[#B2FFFF] transition-colors"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-[#00CFFF]/10 text-[#B2FFFF] text-xs px-3 py-1 rounded-full border border-[#00E5FF]/20"
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