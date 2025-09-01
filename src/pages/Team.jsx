// Team.jsx
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Team = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    document.title = 'Our Team | Cartly Dev';
  }, []);

  // Helpers
  const getInitials = (name) => {
    if (!name) return '—';
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] || '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] || '' : (parts[0]?.[1] || '');
    return (first + last).toUpperCase();
  };
  const themeGradients = [
    'from-[#00f2ff] to-[#00a6ff]', // accent → blue
    'from-[#00ffaa] to-[#00f2ff]', // lime → accent
    'from-[#1e293b] to-[#0f172a]', // secondary → primary
  ];

  // ✅ Updated team list per your instructions (all images removed -> initials fallback)
  const teamMembers = [
    {
      name: 'Ahmad Ali',
      role: 'Founder & CEO',
      bio: 'Leads company vision and strategy, ensuring quality and long-term growth.',
      image: null,
      skills: ['Leadership', 'Strategy', 'Growth'],
      social: [],
    },
    {
      name: 'Shahmeer Abbas Khan',
      role: 'Co-Founder & ASO Director',
      bio: 'Digital business pioneer specializing in app store optimization and strategic user acquisition.',
      image: null,
      skills: ['ASO Leadership', 'User Acquisition', 'Digital Strategy'],
      social: [],
    },
    {
      name: 'Muhammad Ahmad',
      role: 'COO & Senior App Developer',
      bio: 'Operational leader and full-stack mobile developer with expertise in React Native and Flutter architecture.',
      image: null,
      skills: ['Operations', 'React Native', 'Flutter'],
      social: [],
    },
    {
      name: 'Aoun Malik',
      role: 'Lead Game Developer',
      bio: 'Unreal Engine virtuoso creating groundbreaking gaming experiences across multiple platforms.',
      image: null,
      skills: ['Unreal Engine', 'C++', 'VR Development'],
      social: [],
    },
    {
      name: 'Sajeel Ahmad Khan',
      role: 'Finance & Media Director',
      bio: 'Financial strategist and media expert driving our digital presence and fiscal growth.',
      image: null,
      skills: ['Financial Strategy', 'Media', 'Analytics'],
      social: [],
    },
    {
      name: 'Muhammad Bilal',
      role: 'WordPress & Full-Stack Web Developer',
      bio: 'Builds fast, scalable WordPress and web apps with clean UX and modern stacks.',
      image: null,
      skills: ['WordPress', 'Next.js', 'Node.js'],
      social: [],
    },
    {
      name: 'Sarrop Vinod',
      role: 'Shopify Consultant Developer',
      bio: 'Shopify specialist with focus on e-commerce growth.',
      image: null,
      skills: ['Shopify', 'CRO', 'Theme Dev'],
      social: [],
    },
    {
      name: 'Muhammad Bin Tabassum',
      role: 'Project Manager',
      bio: 'Experienced project manager ensuring smooth delivery and client satisfaction.',
      image: null,
      skills: ['Delivery', 'Stakeholders', 'Planning'],
      social: [],
    },
    {
      name: 'Muhammad Bilal',
      role: 'Digital Marketing Head',
      bio: 'Passionate about creating intuitive and beautiful user experiences.',
      image: null,
      skills: ['SEO', 'Paid Media', 'Branding'],
      social: [],
    },
    {
      name: 'Ravi Krishan',
      role: 'Full-Stack Developer',
      bio: 'Full-stack developer with 6+ years of experience in building scalable web applications.',
      image: null,
      skills: ['React', 'Node', 'Databases'],
      social: [],
    },
    {
      name: 'Muhammad Ziad Sohail',
      role: 'QA Director',
      bio: 'Oversees quality assurance strategies to ensure flawless product delivery and exceptional user experience.',
      image: null,
      skills: ['Test Strategy', 'Automation', 'Quality'],
      social: [],
    },
    {
      name: 'Jamshed Barki',
      role: 'Head of Products',
      bio: 'Leads product vision and strategy to deliver innovative solutions that meet customer needs and drive business growth.',
      image: null,
      skills: ['Product Strategy', 'Roadmaps', 'Research'],
      social: [],
    },
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
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00f2ff] mix-blend-screen opacity-20 filter blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-[#00ffaa] mix-blend-screen opacity-20 filter blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#00a6ff] mix-blend-screen opacity-20 filter blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#00ffaa] to-[#00f2ff]"
            initial={{ letterSpacing: '0.2em', opacity: 0, y: -40 }}
            animate={{ letterSpacing: '0.05em', opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Executive Team
          </motion.h1>
          <motion.p
            className="text-base md:text-xl max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            The visionary leadership driving Cartly Dev&apos;s innovation and success
          </motion.p>
        </div>
      </section>

      {/* Team Cards — compact */}
      <section className="relative py-16 bg-gradient-to-b from-[#1e293b] to-[#0f172a] overflow-hidden">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
            {teamMembers.map((member, index) => {
              const grad = themeGradients[index % themeGradients.length];
              const initials = getInitials(member.name);

              return (
                <motion.article
                  key={`${member.name}-${member.role}-${index}`}
                  initial={{ opacity: 0, y: 28, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      '0 16px 20px -10px rgba(0,242,255,0.10), 0 8px 10px -10px rgba(0,242,255,0.05)',
                  }}
                  className="relative rounded-2xl border border-[#334155] bg-[#1e293b]/50 backdrop-blur-sm p-4 md:p-5 shadow-lg"
                >
                  {/* Avatar (smaller) */}
                  <div className="flex justify-center -mt-10 mb-4">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full ring-2 ring-[#00f2ff]/20 shadow-md overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${grad} flex items-center justify-center`}>
                        <span className="text-white/95 text-base md:text-lg font-semibold">
                          {initials}
                        </span>
                      </div>
                      {/* small badge */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] rounded-full w-6 h-6 flex items-center justify-center ring-2 ring-black/10 shadow">
                        <i className="fas fa-star text-[9px]" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Name / Role / Bio (tighter) */}
                  <div className="text-center">
                    <h3 className="text-[15px] md:text-base font-extrabold text-white leading-snug">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-[#00f2ff] font-semibold text-xs md:text-sm">
                      {member.role}
                    </p>
                    <p className="mt-2 text-gray-300 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills (compact) */}
                  {member.skills?.length > 0 && (
                    <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                      {member.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] rounded-full bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* handle indicator */}
                  <div className="mt-4 flex justify-center">
                    <span className="w-6 h-[3px] rounded-full bg-white/10" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA — color matched to whole site (dark gradient), subtle waves */}
      <section className="relative py-14 md:py-18 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 w-full overflow-hidden opacity-50">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".15"
              className="fill-[#1e293b]"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".2"
              className="fill-[#0f172a]"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-[#1e293b]"
              opacity=".25"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Join Our Growing Team
          </motion.h2>
          <motion.p
            className="text-sm md:text-lg text-white/90 mb-7 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: 'easeOut' }}
          >
            We&apos;re always looking for exceptional talent to join our mission of innovation.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: 'easeOut' }}
              className="px-5 md:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00a6ff] text-[#0f172a] font-bold shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 inline-flex items-center text-sm md:text-base"
            >
              <span>View Open Positions</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="ml-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.span>
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: 'easeOut' }}
              className="px-5 md:px-7 py-2.5 rounded-full border-2 border-[#00f2ff] text-white font-bold hover:bg-white/5 transition-all duration-300 inline-flex items-center text-sm md:text-base"
            >
              <span>Contact Our HR Team</span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="ml-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </motion.span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
