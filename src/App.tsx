import { Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import HeroSection from './components/HeroSection.tsx'
import SkillsSection from './components/SkillsSection.tsx'
import ProjectsSection from './components/ProjectsSection.tsx'
import EducationSection from './components/EducationSection.tsx'
import ContactSection from './components/ContactSection.tsx'
import Navigation from './components/Navigation.tsx'
import ThemeProvider from './components/ThemeProvider.tsx'
import './App.css'

function App() {
  // Global scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background 3D Scene with Parallax */}
        <motion.div
          className="fixed inset-0 will-change-transform"
          style={{
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            y: backgroundY
          }}
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ width: '100%', height: '100%' }}
            gl={{ antialias: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <Stars
                radius={300}
                depth={50}
                count={1000}
                factor={4}
                saturation={0}
                fade
                speed={1}
              />
              <ambientLight intensity={0.1} />
              <pointLight position={[10, 10, 10]} intensity={0.5} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                autoRotate
                autoRotateSpeed={0.2}
              />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 overflow-x-hidden scroll-smooth">
          <Navigation />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div id="home">
              <HeroSection />
            </div>

            {/* Smooth Section Divider */}
            <motion.div
              className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />

            <div id="skills">
              <SkillsSection />
            </div>

            {/* Smooth Section Divider */}
            <motion.div
              className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />

            <div id="projects">
              <ProjectsSection />
            </div>

            {/* Smooth Section Divider */}
            <motion.div
              className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />

            <div id="education">
              <EducationSection />
            </div>

            {/* Smooth Section Divider */}
            <motion.div
              className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />

            <div id="contact">
              <ContactSection />
            </div>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
