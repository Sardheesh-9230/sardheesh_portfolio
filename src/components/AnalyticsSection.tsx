import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box } from '@react-three/drei'
import { Mesh } from 'three'

import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  LineChart,
  Database,
  Brain,
  Target,
  Zap
} from 'lucide-react'

// 3D Data Visualization Components
function DataCube({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime) * 0.1)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} wireframe />
      </Box>
    </Float>
  )
}

function DataSphere({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} position={position} args={[0.8, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </Sphere>
    </Float>
  )
}

const AnalyticsSection: React.FC = () => {


  const analyticsProjects = [
    {
      id: 1,
      title: "Health Metrics Dashboard",
      description: "Health metrics dashboard for tracking and analyzing wellness data. Features responsive design and intuitive data visualization for healthcare monitoring.",
      metrics: [
        { label: "Data Accuracy", value: "98%", icon: Target },
        { label: "User Engagement", value: "4.8/5", icon: TrendingUp },
        { label: "Response Time", value: "<100ms", icon: Zap }
      ],
      tools: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      color: "#10b981"
    },
    {
      id: 2,
      title: "Real-time Sales Dashboard",
      description: "Interactive dashboard providing real-time insights into sales performance, inventory levels, and market trends across multiple channels.",
      metrics: [
        { label: "Data Points", value: "1M+", icon: Database },
        { label: "Update Frequency", value: "Real-time", icon: Zap },
        { label: "User Adoption", value: "95%", icon: TrendingUp }
      ],
      tools: ["Tableau", "SQL", "Python", "AWS"],
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "Predictive Analytics Engine",
      description: "Advanced machine learning model for demand forecasting, helping businesses optimize inventory and reduce operational costs.",
      metrics: [
        { label: "Prediction Accuracy", value: "91%", icon: Brain },
        { label: "Cost Reduction", value: "18%", icon: Target },
        { label: "Forecast Range", value: "6 months", icon: TrendingUp }
      ],
      tools: ["TensorFlow", "R", "Docker", "GCP"],
      color: "#06b6d4"
    }
  ]

  const keyMetrics = [
    { 
      icon: BarChart3, 
      label: "Data Models Built", 
      value: "25+",
      description: "Machine learning models deployed in production",
      color: "#3b82f6"
    },
    { 
      icon: PieChart, 
      label: "Accuracy Rate", 
      value: "95%",
      description: "Average model prediction accuracy",
      color: "#f59e0b"
    }
  ]

  return (
    <section id="analytics" className="analytics-section">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-15">
        <Canvas camera={{ position: [0, 0, 12] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
          
          <DataCube position={[-6, 3, 0]} color="#3b82f6" scale={1.2} />
          <DataSphere position={[6, 2, -2]} color="#8b5cf6" />
          <DataCube position={[0, -3, -4]} color="#06b6d4" scale={0.8} />
          <DataSphere position={[-4, -2, -3]} color="#10b981" />
        </Canvas>
      </div>

      <div className="analytics-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="analytics-header"
        >
          <h2>
            <span className="gradient-animate bg-clip-text text-transparent">
              Data Analytics & Insights
            </span>
          </h2>
          <p>
            Transforming raw data into actionable business intelligence through advanced analytics and machine learning
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="metrics-grid"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 20
              }}
              className="card-3d group cursor-pointer"
            >
              <div 
                className="metric-card"
                style={{
                  boxShadow: `0 10px 40px ${metric.color}20`,
                }}
              >
                <div 
                  className="metric-icon-wrapper"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <metric.icon 
                    className="w-8 h-8" 
                    style={{ color: metric.color }}
                  />
                </div>
                <div 
                  className="metric-value"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-description">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Analytics Projects */}
        <div className="analytics-projects">
          {analyticsProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`analytics-project ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              {/* Project Info */}
              <div className="project-info">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tools Used */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="project-tools"
                >
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="tool-tag"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>

                {/* Project Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="project-metrics-grid"
                >
                  {project.metrics.map((metric, _) => (
                    <div
                      key={metric.label}
                      className="project-metric-item"
                    >
                      <div className="project-metric-icon">
                        <metric.icon 
                          className="w-6 h-6" 
                          style={{ color: project.color }}
                        />
                      </div>
                      <div 
                        className="project-metric-value"
                        style={{ color: project.color }}
                      >
                        {metric.value}
                      </div>
                      <div className="project-metric-label">{metric.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Interactive Chart Visualization */}
              <div className="project-visualization">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: project.id === 1 ? 5 : 0
                  }}
                  className="card-3d group"
                >
                  <div 
                    className="visualization-card"
                    style={{
                      boxShadow: `0 20px 60px ${project.color}30, 0 0 80px ${project.color}10`,
                    }}
                  >
                    {/* Enhanced Background Glow for Health Dashboard */}
                    {project.id === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    )}
                    
                    {/* Mock Chart */}
                    <div className="chart-container">
                      {/* Chart Lines */}
                      <svg className="chart-svg">
                        <defs>
                          <linearGradient id={`gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={project.color} stopOpacity="0.8"/>
                            <stop offset="100%" stopColor={project.color} stopOpacity="0.2"/>
                          </linearGradient>
                          <filter id={`glow-${project.id}`}>
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <path 
                          d="M20,180 Q120,100 220,120 T420,80" 
                          stroke={project.color} 
                          strokeWidth="3" 
                          fill="none"
                          filter={`url(#glow-${project.id})`}
                          className="animate-pulse"
                        />
                        <path 
                          d="M20,200 Q120,120 220,140 T420,100 L420,288 L20,288 Z" 
                          stroke="none"
                          fill={`url(#gradient-${project.id})`}
                          opacity="0.3"
                        />
                      </svg>
                      
                      {/* Chart Icon with Pulse Effect */}
                      <div className="chart-icon-wrapper">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <LineChart 
                            className="w-20 h-20 text-white opacity-60 drop-shadow-2xl" 
                            style={{
                              filter: `drop-shadow(0 0 20px ${project.color})`
                            }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Animated Data Points */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="chart-data-point"
                          style={{ 
                            backgroundColor: project.color,
                            boxShadow: `0 0 10px ${project.color}, 0 0 20px ${project.color}50`,
                            left: `${15 + i * 12}%`,
                            top: `${35 + Math.sin(i * 0.8) * 25}%`
                          }}
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.6, 1, 0.6],
                            y: [0, -5, 0]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                      
                      {/* Grid Lines */}
                      <div className="chart-grid">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={`h-${i}`} 
                            className="chart-grid-line"
                            style={{ top: `${(i + 1) * 20}%` }}
                          />
                        ))}
                      </div>
                      
                      {/* Vertical Grid Lines */}
                      <div className="chart-grid">
                        {[...Array(6)].map((_, i) => (
                          <div 
                            key={`v-${i}`} 
                            className="chart-grid-vertical"
                            style={{ left: `${(i + 1) * 16.66}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Additional Info Badge for Health Dashboard */}
                    {project.id === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="live-badge"
                        style={{ color: project.color }}
                      >
                        <div className="live-indicator" style={{ backgroundColor: project.color }} />
                        <span className="font-medium">Live Healthcare Monitoring</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="analytics-cta"
        >
          <div className="cta-card">
            <h3 className="cta-title">
              Ready to Transform Your Data?
            </h3>
            <p className="cta-description">
              Let's collaborate to unlock insights from your data and drive business growth through intelligent analytics.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnalyticsSection