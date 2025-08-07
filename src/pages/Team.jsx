import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';

const Team = () => {
  useEffect(() => {
    document.title = 'Our Team | Cartly Dev';
  }, []);

  // Team data with your specified members
  const teamMembers = [
    {
      name: "Muhammad Sufiyan",
      role: "CEO & Founder",
      bio: "Business strategist and marketing expert with 8+ years of experience in scaling tech startups.",
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
      role: "ASO Expert",
      bio: "Digital business strategist specializing in app store optimization and user acquisition.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["ASO", "User Acquisition", "Digital Strategy", "Growth Hacking"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Twitter", icon: "twitter", link: "#" },
        { name: "Medium", icon: "medium", link: "#" }
      ]
    },
    {
      name: "Muhammad Ahmad",
      role: "Senior App Developer",
      bio: "Full-stack mobile developer with expertise in React Native and Flutter.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["React Native", "Flutter", "Firebase", "API Integration"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "GitHub", icon: "github", link: "#" },
        { name: "Stack Overflow", icon: "stack-overflow", link: "#" }
      ]
    },
    {
      name: "Awn Malik",
      role: "Senior Game Developer",
      bio: "Unreal Engine specialist creating immersive gaming experiences across platforms.",
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
      role: "SEO & SMM Expert",
      bio: "Digital marketer specializing in organic growth strategies and social media engagement.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["SEO", "Social Media", "Content Strategy", "Analytics"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Twitter", icon: "twitter", link: "#" },
        { name: "Instagram", icon: "instagram", link: "#" }
      ]
    },
    {
      name: "Rana Muhammad",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered interfaces and engaging experiences.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
      skills: ["Figma", "UX Research", "Prototyping", "Design Systems"],
      social: [
        { name: "LinkedIn", icon: "linkedin-in", link: "#" },
        { name: "Dribbble", icon: "dribbble", link: "#" },
        { name: "Behance", icon: "behance", link: "#" }
      ]
    }
  ];

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
              Meet Our Team
            </h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The brilliant minds behind Cartly Dev's success
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Experts" 
            subtitle="We have assembled a team of highly skilled professionals dedicated to delivering exceptional results." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-full group overflow-hidden rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm hover:shadow-xl transition-all">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#00ffaa] rounded-2xl opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-500"></div>
                  
                  {/* Team Member Image */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-70"></div>
                  </div>
                  
                  {/* Team Member Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                    <span className="inline-block bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {member.role}
                    </span>
                    <p className="text-gray-300 mb-4">{member.bio}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs rounded-full bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.social.map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#00f2ff] hover:bg-[#00f2ff] hover:text-[#0f172a] transition-all"
                          aria-label={social.name}
                        >
                          <i className={`fab fa-${social.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Want to Join Our Team?</h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team. Check out our current openings.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/careers" 
                className="px-8 py-3 rounded-full bg-white text-[#0f172a] font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;