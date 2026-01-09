import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Torus } from '@react-three/drei'
import { Mesh } from 'three'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageSquare
} from 'lucide-react'

// 3D Email Animation Component
function FloatingEmail({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Sphere ref={meshRef} args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.2} />
        </Sphere>
        <Torus position={[0, 0, 0]} args={[0.8, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Torus>
      </group>
    </Float>
  )
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sardheeshmuthusamy@gmail.com",
      href: "mailto:sardheeshmuthusamy@gmail.com",
      color: "#3b82f6"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9345501554",
      href: "tel:+91 9345501554",
      color: "#10b981"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sithampoondi,Paramathi velur,Tamil Nadu,India",
      href: "#",
      color: "#f59e0b"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sardheesh-muthusamy-a02272290",
      color: "#0077b5"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sardheesh-9230",
      color: "#333"
    },

  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 12] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

          <FloatingEmail position={[-6, 2, 0]} />
          <FloatingEmail position={[6, -1, -3]} />
          <FloatingEmail position={[0, 3, -6]} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Let's Work Together
            </span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Ready to bring your ideas to life? Let's discuss how we can create amazing mobile experiences and unlock insights from your data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 mb-8">Thank you for reaching out. I'll get back to you soon!</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-200">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110 duration-300"
                      style={{ backgroundColor: `${contact.color}20`, color: contact.color }}
                    >
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors break-all">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon
                      className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                      style={{}}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection