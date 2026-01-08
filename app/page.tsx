'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:via-purple-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-blob bg-primary-400 dark:bg-primary-600 w-96 h-96 -top-48 -left-48 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="decorative-blob bg-purple-400 dark:bg-purple-600 w-96 h-96 top-1/2 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="decorative-blob bg-pink-400 dark:bg-pink-600 w-96 h-96 -bottom-48 left-1/3 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Hero Section */}
          <div className={`mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 animate-float">
              <div className="inline-block mb-4">
                <span className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold animate-slideInLeft bg-white/60 dark:bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                  👋 Welcome to My Portfolio
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fadeInUp leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient animate-gradient inline-block">
                Rishabh Srivastava
              </span>
            </h1>
            <div className="mb-4 animate-fadeInUp animation-delay-200">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-full text-xl md:text-2xl font-bold shadow-lg glow-effect animate-pulseGlow">
                Full Stack Developer | MERN Stack Specialist
              </span>
            </div>
            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2 animate-fadeInUp animation-delay-300">
              🎓 3rd Year CSE Student at AKTU
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeInUp animation-delay-400 leading-relaxed">
              Passionate about building <span className="font-semibold text-primary-600 dark:text-primary-400">scalable web applications</span> and solving complex problems with clean code.
              Specialized in <span className="font-semibold text-purple-600 dark:text-purple-400">MERN stack development</span> and <span className="font-semibold text-pink-600 dark:text-pink-400">Data Structures & Algorithms</span> with C++.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-500">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 glow-effect relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-xl font-bold text-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-primary-600 dark:border-primary-400 transform hover:scale-110 hover:-translate-y-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-primary-200 dark:border-primary-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl font-extrabold text-gradient mb-3 animate-countUp relative z-10">
                3+
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg relative z-10">Years Learning</div>
            </div>
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-purple-200 dark:border-purple-800 relative overflow-hidden animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 animate-countUp relative z-10">
                MERN
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg relative z-10">Full Stack</div>
            </div>
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-pink-200 dark:border-pink-800 relative overflow-hidden animation-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-3 animate-countUp relative z-10">
                DSA
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg relative z-10">Problem Solver</div>
            </div>
          </div>

          {/* Featured Skills Preview */}
          <div className={`mt-24 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 animate-fadeInUp">
              Technologies I <span className="text-gradient">Work With</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'C++', 'DSA', 'Next.js', 'Tailwind CSS'].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="group px-6 py-3 bg-gradient-to-r from-primary-100 via-purple-100 to-pink-100 dark:from-primary-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-primary-700 dark:text-primary-300 rounded-full font-bold text-sm md:text-base hover:from-primary-200 hover:via-purple-200 hover:to-pink-200 dark:hover:from-primary-800/50 dark:hover:via-purple-800/50 dark:hover:to-pink-800/50 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-default animate-fadeInUp shadow-lg hover:shadow-xl border border-primary-200 dark:border-primary-800"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-primary-600 dark:text-primary-400 font-bold text-lg hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 transform hover:scale-110 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl"
            >
              View All Skills <span className="text-2xl animate-bounce-slow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

