import React, { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useInView'
import { Menu, X, Download } from './Icons'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = ['hero', 'about', 'strengths', 'experience', 'projects', 'skills', 'certifications', 'leadership', 'approach', 'looking-for', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/85 backdrop-blur-2xl border-b border-dark-800/50 shadow-xl shadow-black/10'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-18">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 group"
              aria-label="Go to top"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-display font-bold text-white text-sm group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
                R
              </div>
              <span className="font-display font-semibold text-white text-sm hidden sm:block">
                Roshan Ali
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link px-3 py-2 ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="ml-3 pl-3 border-l border-dark-700/50">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                  className="btn-primary !py-2 !px-4 !text-xs"
                >
                  <Download size={14} />
                  <span>Get CV</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-dark-300 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-dark-950/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-display font-bold text-white text-sm">
                R
              </div>
              <span className="font-display font-semibold text-white text-sm">Roshan Ali</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-dark-300 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
        </div>
        <div className="container-main mt-8">
          <div className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-2xl font-display font-medium py-3 px-2 border-b border-dark-800/50 transition-all duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-dark-400 hover:text-white'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary w-full justify-center"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
