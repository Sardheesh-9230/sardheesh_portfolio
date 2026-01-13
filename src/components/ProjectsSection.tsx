import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import { Mesh } from 'three'
import {
  ExternalLink,
  Github,
  Smartphone,
  BarChart3,
  ShoppingCart,
  Heart,
  Users
} from 'lucide-react'

// Simplified 3D Phone Mockup Component with better performance
function PhoneMockup({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Reduced animation intensity for smoother performance
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <RoundedBox ref={meshRef} args={[1, 2, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#1f2937" />
        </RoundedBox>
        <RoundedBox position={[0, 0, 0.06]} args={[0.8, 1.6, 0.02]} radius={0.05}>
          <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.1} />
        </RoundedBox>
      </group>
    </Float>
  )
}

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = ['All', 'Healthcare & Mobile', 'AI & Chatbots', 'Educational Tech', 'Health & Analytics', 'Business Solutions']

  const projects = [
    {
      id: 1,
      title: "Digital Health Record Management System (DHRMS)",
      category: "Healthcare & Mobile",
      description: "🏆 SIH 2025 Project - Comprehensive healthcare management system for migrant workers with role-based dashboards, proximity alerts, geolocation services, and telemedicine features. Built with Flutter for cross-platform deployment.",
      image: "images/projects/dhrms-project.png",
      technologies: ["Flutter", "Dart", "Firebase", "Geolocation APIs", "Provider State Management", "Healthcare APIs", "Material Design"],
      github: "https://github.com/Sardheesh-9230/dhrms_sih2025",
      demo: "https://github.com/Sardheesh-9230/dhrms_sih2025",
      icon: Heart,
      color: "#ef4444"
    },
    {
      id: 2,
      title: "DocuBot - RAG Chatbot with Groq",
      category: "AI & Chatbots",
      description: "Modern RAG chatbot with ChatGPT-like smooth typewriter interface. Upload documents, ask questions, get intelligent AI responses with beautiful animations. Features FAISS vector search, LangChain, and Groq LLM integration.",
      image: "images/projects/docubot-project.png",
      technologies: ["Python", "Flask", "FAISS", "LangChain", "Groq API", "Sentence Transformers", "Bootstrap", "JavaScript"],
      github: "https://github.com/Sardheesh-9230/Rag-based_chatbot_using_groq",
      demo: "https://github.com/Sardheesh-9230/Rag-based_chatbot_using_groq",
      icon: Users,
      color: "#10b981"
    },
    {
      id: 3,
      title: "LearnAid - Educational Management Platform",
      category: "Educational Tech",
      description: "AI-powered educational platform with admin-centric architecture for college institutions. Features department management, AI MCQ generation, performance analytics, and comprehensive course management with modern React architecture.",
      image: "images/projects/learnaid-project.png",
      technologies: ["TypeScript", "Next.js 14", "React 18", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AI Integration"],
      github: "https://github.com/Sardheesh-9230/LEARNAID-123",
      demo: "https://github.com/Sardheesh-9230/LEARNAID-123",
      icon: BarChart3,
      color: "#3b82f6"
    },
    {
      id: 4,
      title: "Healing Metrics Dashboard",
      category: "Health & Analytics",
      description: "Health metrics dashboard for tracking and analyzing wellness data. Features responsive design and intuitive data visualization for healthcare monitoring with real-time charts and health insights.",
      image: "images/projects/healing-metrics-project.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Bootstrap", "Health APIs", "Responsive Design"],
      github: "https://github.com/Sardheesh-9230/Healing_metrics",
      demo: "https://github.com/Sardheesh-9230/Healing_metrics",
      icon: Heart,
      color: "#ef4444"
    },
    {
      id: 5,
      title: "FLAMES Relationship Predictor",
      category: "Fun Projects",
      description: "Popular relationship prediction game implemented in Python. A fun algorithmic approach to the classic FLAMES game with clean code structure and interactive user interface for entertainment.",
      image: "images/projects/flames-project.png",
      technologies: ["Python", "Tkinter", "Algorithm Design", "GUI Development", "Object-Oriented Programming"],
      github: "https://github.com/Sardheesh-9230/flames-project-using-python",
      demo: "https://github.com/Sardheesh-9230/flames-project-using-python",
      icon: Smartphone,
      color: "#f59e0b"
    },
    {
      id: 6,
      title: "College Event Management System",
      category: "Educational Tech",
      description: "Comprehensive DBMS project for managing college events, registrations, and administrative tasks. Features complete database design, web interface, and event lifecycle management.",
      image: "images/projects/event-management-project.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "DBMS Design"],
      github: "https://github.com/Sardheesh-9230/COLLEGE-EVENT-MANAGEMENT-SYSTEM",
      demo: "https://github.com/Sardheesh-9230/COLLEGE-EVENT-MANAGEMENT-SYSTEM",
      icon: Users,
      color: "#8b5cf6"
    },
    {
      id: 7,
      title: "Smart Retail Management",
      category: "Business Solutions",
      description: "Retail management system with inventory tracking, sales analytics, and customer management features. Designed for modern retail operations with comprehensive business insights.",
      image: "images/projects/retail-management-project.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js", "Local Storage", "Responsive Design"],
      github: "https://github.com/Sardheesh-9230/smart_retail",
      demo: "https://github.com/Sardheesh-9230/smart_retail",
      icon: ShoppingCart,
      color: "#06b6d4"
    }
  ]

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden" id="projects">
      {/* Simplified Background 3D Scene */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 8] }}
          performance={{ min: 0.5 }}
          frameloop="demand"
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[5, 5, 5]} intensity={0.3} />
          <PhoneMockup position={[-2, 1, 0]} rotation={[0, 0.2, 0]} />
          <PhoneMockup position={[2, -0.5, -1]} rotation={[0, -0.2, 0]} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-gradient-x">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of AI-powered applications, educational platforms, and innovative solutions showcasing my contributions to open-source projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 max-w-fit mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative h-full"
              >
                <div
                  className="flex flex-col h-full bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl"
                  style={{
                    boxShadow: hoveredProject === project.id
                      ? `0 20px 60px -20px ${project.color}40`
                      : `0 10px 30px -10px rgba(0,0,0,0.5)`,
                    borderColor: hoveredProject === project.id ? `${project.color}30` : 'rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Project Image Area */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Placeholder/Actual Image */}
                    <div className="w-full h-full relative z-10">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.style.background = `linear-gradient(135deg, ${project.color}20, #111827)`;
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center opacity-30 text-6xl">✨</div>`;
                        }}
                      />
                    </div>

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 z-20 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, #111827, transparent)`,
                      }}
                    />

                    {/* Top Badge */}
                    <div className="absolute top-4 right-4 z-30">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white">
                        {project.technologies[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">{project.category}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div
                        className="p-2 rounded-lg bg-white/5 border border-white/10"
                        style={{ color: project.color }}
                      >
                        <project.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(1, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-500 border border-white/5">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors ml-auto"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
