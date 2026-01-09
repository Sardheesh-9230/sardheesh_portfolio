import {
  Smartphone,
  Database,
  Brain,
  Code,
  Palette,
  Server,
} from 'lucide-react'

const SkillsSection: React.FC = () => {

  const skills = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Cross-Platform Apps", "Healthcare Apps"],
      color: "#06b6d4",
      bg: "bg-cyan-500",
      text: "text-cyan-500"
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: ["LangChain", "FAISS", "Groq API", "Disease Prediction"],
      color: "#10b981",
      bg: "bg-emerald-500",
      text: "text-emerald-500"
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: ["Python", "Flask", "REST APIs", "Healthcare APIs"],
      color: "#3b82f6",
      bg: "bg-blue-500",
      text: "text-blue-500"
    },
    {
      category: "Frontend Development",
      icon: Code,
      skills: ["TypeScript", "JavaScript", "React.js", "Next.js"],
      color: "#f59e0b",
      bg: "bg-amber-500",
      text: "text-amber-500"
    },
    {
      category: "Web Technologies",
      icon: Palette,
      skills: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
      color: "#ef4444",
      bg: "bg-red-500",
      text: "text-red-500"
    },
    {
      category: "Database & Storage",
      icon: Database,
      skills: ["MySQL", "MongoDB", "FAISS Vector DB", "DBMS"],
      color: "#8b5cf6",
      bg: "bg-violet-500",
      text: "text-violet-500"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-gradient-x">
              Technical Skills
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="group relative perspective-1000"
            >
              <div
                className="relative h-full transition-all duration-300 transform preserve-3d group-hover:-translate-y-2 group-hover:rotate-x-2
                           bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden"
                style={{
                  boxShadow: `0 0 0 1px ${skillGroup.color}20, 0 10px 40px -10px ${skillGroup.color}20`
                }}
              >
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${skillGroup.color}, transparent 70%)` }}
                />

                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className="p-3 rounded-xl bg-opacity-20 transition-colors duration-300"
                    style={{ backgroundColor: `${skillGroup.color}20` }}
                  >
                    <skillGroup.icon
                      className="w-8 h-8"
                      style={{ color: skillGroup.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 relative z-10">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i < 4
                                ? 'bg-current opacity-100'
                                : 'bg-gray-700 opacity-30'
                              }`}
                            style={{ color: i < 4 ? skillGroup.color : undefined }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: "SIH 2025 Participant", value: "🏆" },
            { label: "GitHub Repositories", value: "12+" },
            { label: "Flutter Projects", value: "Healthcare" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
