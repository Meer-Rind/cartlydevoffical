import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const textAlign = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '80px',
      transition: { 
        delay: 0.4, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div 
      className={`mb-16 ${textAlign[align]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 relative inline-block font-poppins"
        whileHover={{ scale: 1.02 }}
      >
        <span className="relative z-10">
          <span className="gradient-text">
            {title}
          </span>
        </span>
        <motion.span 
          className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-accent to-accentDark rounded-full"
          variants={underlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-gray-400 max-w-2xl mx-auto leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Animated decorative elements */}
      {align === 'center' && (
        <motion.div 
          className="flex justify-center items-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="w-2 h-2 bg-accent rounded-full mx-2"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
              boxShadow: ['0 0 0 0 rgba(0,207,255,0.7)', '0 0 0 10px rgba(0,207,255,0)', '0 0 0 0 rgba(0,207,255,0)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionTitle;