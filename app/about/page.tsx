'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:via-purple-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-blob bg-primary-300 dark:bg-primary-700 w-80 h-80 top-20 -left-40 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="decorative-blob bg-purple-300 dark:bg-purple-700 w-80 h-80 bottom-20 -right-40 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <section className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-primary-200/50 dark:border-primary-800/50 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 animate-fadeInUp">
            About <span className="text-gradient">Me</span>
          </h1>
          
          <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 via-purple-50 to-pink-50 dark:from-primary-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-xl border-l-4 border-primary-600 shadow-lg animate-slideInLeft hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🎓 Student at AKTU
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently pursuing Bachelor of Technology in Computer Science and Engineering (4th Year)
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed animate-fadeInUp animation-delay-200">
            I&apos;m <strong className="text-primary-600 dark:text-primary-400">Rishabh Srivastava</strong>, a passionate full-stack developer specializing in the MERN stack. 
            I love building scalable web applications and solving complex problems through clean, efficient code. 
            My journey in computer science has been driven by curiosity and a desire to create impactful solutions.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-fadeInUp animation-delay-300">
            Beyond web development, I&apos;m deeply interested in Data Structures and Algorithms, 
            solving problems in C++ to sharpen my problem-solving skills. I believe in continuous learning 
            and staying updated with the latest technologies and best practices in software development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-fadeInUp animation-delay-400 bg-gradient-to-br from-white/50 to-primary-50/50 dark:from-gray-800/50 dark:to-primary-900/20 p-6 rounded-2xl border border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-3xl animate-bounce-slow">💻</span>
                What I&apos;m Focused On
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-4 group">
                  <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 animate-pulseGlow" />
                  <span className="font-medium">Full-stack development with <span className="text-primary-600 dark:text-primary-400">MERN</span> (MongoDB, Express, React, Node.js)</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 animate-pulseGlow" style={{ animationDelay: '0.2s' }} />
                  <span className="font-medium">Building <span className="text-purple-600 dark:text-purple-400">responsive and modern</span> web applications</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 animate-pulseGlow" style={{ animationDelay: '0.4s' }} />
                  <span className="font-medium">Data Structures & Algorithms problem solving with <span className="text-pink-600 dark:text-pink-400">C++</span></span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 animate-pulseGlow" style={{ animationDelay: '0.6s' }} />
                  <span className="font-medium">Creating <span className="text-primary-600 dark:text-primary-400">scalable and maintainable</span> code architectures</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 animate-fadeInUp animation-delay-500 bg-gradient-to-br from-white/50 to-purple-50/50 dark:from-gray-800/50 dark:to-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-3xl animate-bounce-slow">🚀</span>
                My Journey
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="p-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-primary-200 dark:border-primary-800">
                  <p className="font-bold text-lg text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-primary-600 dark:text-primary-400">🎓</span> Academic Excellence
                  </p>
                  <p>4th Year CSE student at AKTU, continuously learning and applying new technologies</p>
                </div>
                <div className="p-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-purple-200 dark:border-purple-800">
                  <p className="font-bold text-lg text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-purple-600 dark:text-purple-400">⚡</span> Technical Skills
                  </p>
                  <p>Proficient in MERN stack development and competitive programming with C++</p>
                </div>
                <div className="p-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-pink-200 dark:border-pink-800">
                  <p className="font-bold text-lg text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-pink-600 dark:text-pink-400">📈</span> Continuous Growth
                  </p>
                  <p>Always exploring new frameworks, contributing to projects, and solving challenging problems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-8 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl animate-fadeInUp animation-delay-600 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <p className="text-center text-white font-bold text-lg">
              <span className="text-2xl mr-2">🤝</span> Interested in collaborating?{' '}
              <Link 
                href="https://github.com/rishabhsrivastava956070-lab?tab=repositories" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-200 transition-colors duration-300"
              >
                Check out my GitHub repositories
              </Link>{' '}
              or{' '}
              <Link 
                href="/contact" 
                className="underline hover:text-yellow-200 transition-colors duration-300"
              >
                get in touch
              </Link>
              !
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}


