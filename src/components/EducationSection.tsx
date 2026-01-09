import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import { Mesh } from 'three'
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  School,
  Badge
} from 'lucide-react'

// Simplified 3D Educational Objects Component for better performance
function EducationObjects() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Reduced animation intensity
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <group>
      <Float speed={1.0} rotationIntensity={0.5} floatIntensity={1}>
        <RoundedBox ref={meshRef} position={[-3, 1, 0]} args={[1.2, 1.2, 1.2]} radius={0.1}>
          <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.1} />
        </RoundedBox>
      </Float>

      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
        <RoundedBox position={[3, 0.5, -1]} args={[1, 1.5, 0.2]} radius={0.05}>
          <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.1} />
        </RoundedBox>
      </Float>
    </group>
  )
}

const EducationSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "M.Kumarasamy College of Engineering",
      location: "Karur, Tamil Nadu",
      duration: "2023 - 2027",
      grade: "CGPA: 7.5",
      icon: GraduationCap,
      color: "#3b82f6"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science Stream",
      institution: "SKV Matric Higher Secondary School",
      location: "",
      duration: "2022 - 2023",
      grade: "82%",
      icon: School,
      color: "#10b981"
    }
  ]

  const certifications = [
    {
      title: "Getting started with Flutter Development",
      issuer: "Google Cloud Training (Coursera)",
      date: "Nov 19, 2025",
      icon: Badge,
      color: "#4285f4",
      skills: ["Flutter", "Mobile Development", "Google Cloud", "Cross-platform"]
    },
    {
      title: "Predictive Modelling Fundamentals",
      issuer: "IBM Cognitive Class",
      date: "2025",
      icon: Award,
      color: "#3b82f6",
      skills: ["IBM SPSS", "Tool", "Modelling", "Analytics"]
    },
    {
      title: "SQL and Relational Databases",
      issuer: "IBM Cognitive Class",
      date: "2025",
      icon: Trophy,
      color: "#10b981",
      skills: ["SQL", "Database Management", "Relational Databases"]
    },
    {
      title: "Data Visualization",
      issuer: "IBM Cognitive Class",
      date: "2024",
      icon: BookOpen,
      color: "#f59e0b",
      skills: ["Data Visualization", "Analytics", "Charts"]
    },
    {
      title: "Python for Data Science",
      issuer: "IBM Skills Network",
      date: "2024",
      icon: Badge,
      color: "#8b5cf6",
      skills: ["Data Science", "Python", "Machine Learning"]
    },
    {
      title: "Design Thinking",
      issuer: "NPTEL",
      date: "2024",
      icon: Award,
      color: "#06b6d4",
      skills: ["Design Thinking", "Problem Solving", "Innovation"]
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cybersecurity Institute",
      date: "2025",
      icon: Trophy,
      color: "#ef4444",
      skills: ["Cybersecurity", "Threat Analysis", "Security"]
    },
    {
      title: "Industry 4.0 & IoT",
      issuer: "NPTEL",
      date: "2025",
      icon: Badge,
      color: "#f59e0b",
      skills: ["Industry 4.0", "IoT", "Smart Manufacturing"]
    },
    {
      title: "Scala Programming",
      issuer: "IBM Cognitive Class",
      date: "2025",
      icon: BookOpen,
      color: "#dc2626",
      skills: ["Scala", "Functional Programming", "JVM"]
    }
  ]

  return (
    <section id="education" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Simplified Background 3D Scene */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 8] }}
          performance={{ min: 0.5 }}
          frameloop="demand"
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[5, 5, 5]} intensity={0.3} />
          <EducationObjects />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-gradient-x">
              Education
            </span>
          </motion.h2>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <School className="w-6 h-6 text-blue-400" />
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="group relative perspective-1000"
              >
                <div
                  className="relative h-full bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl"
                  style={{
                    boxShadow: `0 0 0 1px ${edu.color}20, 0 10px 40px -10px ${edu.color}20`,
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-6 mb-6">
                      {edu.degree.includes("Bachelor") && (
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src="/images/mkce.jpg"
                            alt="College Logo"
                            className="w-full h-full object-cover rounded-full bg-gradient-to-br from-white to-gray-100 p-1 border-2 border-blue-200 group-hover:border-blue-400 shadow-lg transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      {edu.degree.includes("Higher Secondary") && (
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src="/images/skv.jpeg"
                            alt="School Logo"
                            className="w-full h-full object-cover rounded-full bg-gradient-to-br from-white to-gray-100 p-1 border-2 border-green-200 group-hover:border-green-400 shadow-lg transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{edu.degree}</h4>
                        <p className="text-lg text-blue-400 font-medium">{edu.field}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-gray-300 font-medium text-lg">{edu.institution}</p>
                      {edu.location && <p className="text-gray-500 text-sm">{edu.location}</p>}
                    </div>

                    <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {edu.duration}
                      </span>
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          id="certifications"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Badge className="w-6 h-6 text-green-400" />
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                  ease: "easeOut"
                }}
                className="group relative h-full"
              >
                <div
                  className="h-full bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                  style={{
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                    borderColor: 'rgba(255,255,255,0.05)'
                  }}
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${cert.color}, transparent 70%)` }}
                  />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div
                      className="p-2 rounded-lg bg-opacity-10"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <cert.icon
                        className="w-5 h-5"
                        style={{ color: cert.color }}
                      />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md bg-opacity-10 border border-opacity-20"
                      style={{ color: cert.color, backgroundColor: `${cert.color}10`, borderColor: cert.color }}
                    >
                      Certified
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors line-clamp-2 min-h-[3.5rem]">{cert.title}</h4>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs mb-4">{cert.date}</p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Degree in Progress", value: "B.Tech AI&DS" },
            { label: "Certifications", value: "4+" },
            { label: "Learning Hours", value: "1000+" },
            { label: "Academic Projects", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection