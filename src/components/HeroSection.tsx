import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Torus } from '@react-three/drei'
import { Mesh } from 'three'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

// 3D Floating Objects Component
function FloatingObjects() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      <Float speed={2.0} rotationIntensity={2} floatIntensity={3}>
        <Box ref={meshRef} position={[-4, 2, 0]} args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.3} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={2.5}>
        <Sphere position={[4, 1, -2]} args={[1.2, 32, 32]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.2} wireframe />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={3} floatIntensity={3.5}>
        <Torus position={[-2, -2, -1]} args={[1.4, 0.4, 16, 32]}>
          <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.3} />
        </Torus>
      </Float>
    </group>
  )
}

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Background parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0f0f23]"
      id="home"
    >
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{ y: backgroundY }}
      >
        <Canvas
          camera={{ position: [0, 0, 8] }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={2.0} />
          <pointLight position={[-10, -10, -10]} intensity={1.0} color="#8b5cf6" />
          <FloatingObjects />
        </Canvas>
      </motion.div>

      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content - Clean Side-by-Side Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-20">

        {/* Left Column - Content */}
        <div className="flex-1 text-left space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-400 font-medium">
                Hello, I'm
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" style={{ backgroundSize: '200% 200%', animation: 'gradient-x 3s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Sardheesh M
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white leading-snug"
            >
              Flutter Developer &<br />AI Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Transforming ideas into interactive digital experiences.
                Passionate about Flutter mobile applications, AI-powered systems, and full-stack web development.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-wrap gap-4 items-center pt-2"
            >
              {/* Primary Button */}
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 text-base md:text-lg bg-white/5 border-2 border-white/30 rounded-full text-white font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-4 items-center pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/Sardheesh-9230", label: "GitHub", color: "hover:text-white" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sardheesh-muthusamy-a02272290/", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: Code2, href: "https://leetcode.com/u/7caQTDqGzC/", label: "LeetCode", color: "hover:text-amber-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 ${social.color} hover:bg-white/10 hover:-translate-y-1 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="mailto:sardheeshmuthusamy@gmail.com"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">

            <img
              src="images/profile2.png"
              alt="Sardheesh"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white text-6xl font-bold">
                          SM
                        </div>
                      `;
              }}
            />

            {/* Fading Edges - Top */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f0f23] via-[#0f0f23]/50 to-transparent pointer-events-none" />

            {/* Fading Edges - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f23] via-[#0f0f23]/50 to-transparent pointer-events-none" />

            {/* Fading Edges - Left */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0f0f23] via-[#0f0f23]/30 to-transparent pointer-events-none" />

            {/* Fading Edges - Right */}
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0f0f23] via-[#0f0f23]/30 to-transparent pointer-events-none" />

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
        }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection