import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Team = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    document.title = 'Our Team | Cartly Dev';
  }, []);

  // Updated team data with refined titles and roles
  const teamMembers = [
    {
      name: "Muhammad Sufiyan",
      role: "CEO & Founder",
      bio: "Visionary leader and business strategist with 8+ years of experience in scaling tech startups and driving innovation.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["Business Strategy", "Digital Marketing", "Startup Scaling", "Investor Relations"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Twitter", icon: "twitter", link: "#" },
        { name: "Instagram", icon: "instagram", link: "#" }
      ]
    },
    {
      name: "Shahmeer Abbas Khan",
      role: "Co-Founder & ASO Director",
      bio: "Digital business pioneer specializing in app store optimization and strategic user acquisition.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["ASO Leadership", "User Acquisition", "Digital Strategy", "Growth Hacking"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Twitter", icon: "twitter", link: "#" },
        { name: "Medium", icon: "medium", link: "#" }
      ]
    },
    {
      name: "Muhammad Ahmad",
      role: "COO & Senior App Developer",
      bio: "Operational leader and full-stack mobile developer with expertise in React Native and Flutter architecture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["Operations", "React Native", "Flutter", "Technical Leadership"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "GitHub", icon: "github", link: "#" },
        { name: "Stack Overflow", icon: "stack-overflow", link: "#" }
      ]
    },
    {
      name: "Aoun Malik",
      role: "Lead Game Developer",
      bio: "Unreal Engine virtuoso creating groundbreaking gaming experiences across multiple platforms.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["Unreal Engine", "C++", "3D Modeling", "VR Development"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "ArtStation", icon: "artstation", link: "#" },
        { name: "Twitch", icon: "twitch", link: "#" }
      ]
    },
    {
      name: "Sajeel Ahmad Khan",
      role: "Finance & Media Director",
      bio: "Financial strategist and media expert driving our digital presence and fiscal growth.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["Financial Strategy", "Media Relations", "Content Strategy", "Analytics"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Twitter", icon: "twitter", link: "#" },
        { name: "Instagram", icon: "instagram", link: "#" }
      ]
    },
    {
      name: "Rana Muhammad",
      role: "Lead UI/UX Designer",
      bio: "Creative director focused on crafting exceptional user experiences and brand identity.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["Design Leadership", "UX Research", "Prototyping", "Brand Identity"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Dribbble", icon: "dribbble", link: "#" },
        { name: "Behance", icon: "behance", link: "#" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-100 min-h-screen overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
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
          <motion.div 
            className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00f2ff] mix-blend-screen opacity-20 animate-blob animation-delay-2000 filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div 
            className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-[#00ffaa] mix-blend-screen opacity-20 animate-blob filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#00a6ff] mix-blend-screen opacity-20 animate-blob animation-delay-4000 filter blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]"
              initial={{ letterSpacing: '0.2em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              Executive Team
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              The visionary leadership driving Cartly Dev's innovation and success
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Leadership Team" 
            subtitle="Our diverse team of experts brings together decades of combined experience in technology and business." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 242, 255, 0.1), 0 10px 10px -5px rgba(0, 242, 255, 0.04)"
                }}
              >
                <div className="relative h-full group overflow-hidden rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-500"></div>
                  
                  {/* Team Member Image */}
                  <div className="relative overflow-hidden h-80">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.h3 
                        className="text-2xl font-bold text-white"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, ease: "easeOut" }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.span 
                        className="inline-block bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] text-sm font-semibold px-3 py-1 rounded-full mt-1"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, ease: "easeOut" }}
                      >
                        {member.role}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Team Member Content */}
                  <div className="p-6">
                    <motion.p 
                      className="text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, ease: "easeOut" }}
                    >
                      {member.bio}
                    </motion.p>
                    
                    {/* Skills */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6, ease: "easeOut" }}
                    >
                      {member.skills.map((skill, i) => (
                        <motion.span 
                          key={i} 
                          className="px-3 py-1 text-xs rounded-full bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/30"
                          whileHover={{ scale: 1.05 }}
                          transition={{ ease: "easeOut" }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7, ease: "easeOut" }}
                    >
                      {member.social.map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.link}
                          className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#00f2ff] hover:bg-[#00f2ff] hover:text-[#0f172a] transition-all"
                          aria-label={social.name}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ ease: "easeOut" }}
                        >
                          <i className={`fab fa-${social.icon}`}></i>
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
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
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              whileInView={{ 
                scale: [1, 1.02, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Join Our Growing Team
            </motion.h2>
            <motion.p 
              className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
            >
              We're always looking for exceptional talent to join our mission of innovation.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ ease: "easeOut" }}
              >
                <a 
                  href="/careers" 
                  className="px-8 py-3 rounded-full bg-white text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
                >
                  <span>View Open Positions</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.span>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ ease: "easeOut" }}
              >
                <a 
                  href="/contact" 
                  className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 inline-flex items-center"
                >
                  <span>Contact Our HR Team</span>
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
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;