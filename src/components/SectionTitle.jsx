import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
        whileHover={{ scale: 1.02 }}
      >
        <span className="bg-gradient-to-r from-[#00CFFF] via-[#B2FFFF] to-[#00E5FF] bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Underline glow bar */}
      <motion.div 
        className="w-24 h-1 bg-gradient-to-r from-[#00E5FF] to-[#00CFFF] rounded-full mx-auto mt-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scaleX: 1.2 }}
      ></motion.div>
    </motion.div>
  );
};

export default SectionTitle;