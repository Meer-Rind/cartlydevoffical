import { motion } from 'framer-motion';

const TeamCard = ({ name, role, image, social }) => {
  return (
    <motion.div 
      className="relative glass rounded-2xl overflow-hidden shadow-lg group border border-accent/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 229, 255, 0.1), 0 10px 10px -5px rgba(0, 229, 255, 0.04)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Image section */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>

      {/* Info section */}
      <div className="p-6 text-center relative">
        {/* Floating name */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-1"
          whileHover={{ 
            color: '#B2FFFF',
            y: -5
          }}
        >
          {name}
        </motion.h3>
        
        {/* Animated role */}
        <motion.p 
          className="text-accent text-sm uppercase tracking-wide mb-4"
          whileHover={{ 
            color: '#00CFFF',
            scale: 1.05
          }}
        >
          {role}
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {social.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-light w-10 h-10 flex items-center justify-center rounded-full text-accentLight hover:text-accent"
              aria-label={item.name}
              whileHover={{ 
                y: -3,
                scale: 1.2,
                color: '#00E5FF',
                backgroundColor: 'rgba(0, 229, 255, 0.1)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <i className={`fab fa-${item.icon}`}></i>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;