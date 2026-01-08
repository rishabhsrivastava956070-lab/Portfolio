'use client'

import { useEffect, useState } from 'react'

const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'API Development', 'Server-side Logic'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'Database Design', 'Data Modeling', 'Query Optimization'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Programming & DSA',
    icon: '💻',
    items: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    items: ['Git & GitHub', 'VS Code', 'Postman', 'NPM/Yarn', 'Version Control'],
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:via-purple-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-blob bg-primary-300 dark:bg-primary-700 w-96 h-96 top-10 right-10 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="decorative-blob bg-purple-300 dark:bg-purple-700 w-96 h-96 bottom-10 left-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <section className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
              Skills & <span className="text-gradient">Technologies</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Specialized in MERN stack development and Data Structures & Algorithms. 
              Here&apos;s a comprehensive overview of my technical expertise.
            </p>
          </div>

          <div className="mb-10 p-8 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl animate-slideInLeft transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-white mb-3 flex items-center justify-center gap-3">
              <span className="text-4xl animate-bounce-slow">🎯</span> Core Expertise
            </h2>
            <p className="text-white text-lg font-semibold">
              Full Stack Development with <span className="bg-white/20 px-2 py-1 rounded">MERN Stack</span> 
              {' '}and <span className="bg-white/20 px-2 py-1 rounded">Data Structures & Algorithms</span> with C++
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, index) => (
              <div
                key={group.category}
                className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 animate-fadeInUp border border-primary-200/50 dark:border-primary-800/50 group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${group.color} mb-4 text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {group.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {group.category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 hover:from-primary-200 hover:to-purple-200 dark:hover:from-primary-800/50 dark:hover:to-purple-800/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-default shadow-md hover:shadow-lg border border-primary-200 dark:border-primary-800"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-500 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 animate-fadeInUp animation-delay-600 border-2 border-white/20 glow-effect">
              <div className="text-5xl mb-4 animate-bounce-slow">🚀</div>
              <h3 className="text-2xl font-extrabold mb-3">MERN Stack</h3>
              <p className="text-white/90 text-lg">Complete full-stack development expertise</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 animate-fadeInUp animation-delay-700 border-2 border-white/20">
              <div className="text-5xl mb-4 animate-bounce-slow" style={{ animationDelay: '0.2s' }}>🧠</div>
              <h3 className="text-2xl font-extrabold mb-3">DSA & C++</h3>
              <p className="text-white/90 text-lg">Strong problem-solving and algorithmic thinking</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 animate-fadeInUp animation-delay-800 border-2 border-white/20">
              <div className="text-5xl mb-4 animate-bounce-slow" style={{ animationDelay: '0.4s' }}>💡</div>
              <h3 className="text-2xl font-extrabold mb-3">Continuous Learning</h3>
              <p className="text-white/90 text-lg">Always exploring new technologies and best practices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


