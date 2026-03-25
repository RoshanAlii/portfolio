import React, { useState, useEffect } from 'react'
import { ArrowUp } from './Icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-dark-800/90 backdrop-blur-xl border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white hover:border-brand-500/30 hover:bg-dark-800 transition-all duration-500 shadow-xl shadow-black/20 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  )
}
