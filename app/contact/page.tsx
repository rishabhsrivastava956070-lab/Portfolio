'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Server error occurred' }))
        throw new Error(errorData.error || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your message! I\'ll get back to you soon.' 
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || 'Failed to send message. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Network error. Please check your connection and try again.'
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:via-purple-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-blob bg-primary-300 dark:bg-primary-700 w-80 h-80 top-20 left-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="decorative-blob bg-purple-300 dark:bg-purple-700 w-80 h-80 bottom-20 right-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <section className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind, want to collaborate, or just say hi? Feel free to reach out
              using the form. I&apos;ll get back to you as soon as I can.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary-200 dark:border-primary-800">
                <div className="text-3xl animate-bounce-slow">📧</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">Email</p>
                  <a
                    href="mailto:rishabhsrivastava796@gmail.com"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 break-all font-semibold transition-colors duration-300"
                  >
                    rishabhsrivastava796@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-200 dark:border-purple-800">
                <div className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.2s' }}>📱</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">Contact Number</p>
                  <a
                    href="tel:+919560705690"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors duration-300"
                  >
                    +91 95607 05690
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-200 dark:border-pink-800">
                <div className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.4s' }}>🎓</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">Education</p>
                  <p className="text-pink-600 dark:text-pink-400 font-semibold">4th Year CSE, AKTU</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary-200 dark:border-primary-800">
                <div className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.6s' }}>💻</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">GitHub</p>
                  <Link 
                    href="https://github.com/rishabhsrivastava956070-lab?tab=repositories" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-300"
                  >
                    rishabhsrivastava956070-lab
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl animate-fadeInUp animation-delay-300">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 What I&apos;m Looking For</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Collaboration opportunities on interesting projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Internship opportunities in full-stack development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Open source contributions and learning experiences</span>
                </li>
              </ul>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 animate-fadeInUp animation-delay-200 border border-primary-200/50 dark:border-primary-800/50"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me a bit about your project or how I can help..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 resize-none"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white font-bold text-lg hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none glow-effect"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message <span className="text-xl">🚀</span>
                </span>
              )}
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Your message will be saved and I'll get back to you as soon as possible.
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}


