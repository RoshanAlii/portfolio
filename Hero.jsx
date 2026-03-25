import React from 'react'
import { useInView, useCountUp } from '../hooks/useInView'
import { ArrowRight, Download, Mail, MapPin, Shield, CheckCircle } from './Icons'

const metrics = [
  { value: 5, suffix: '+', label: 'Years in QA' },
  { value: 90, suffix: '+', label: 'Sprints Supported' },
  { value: 510, suffix: '+', label: 'User Stories Tested' },
  { value: 1200, suffix: '+', label: 'Defects Triaged' },
  { value: 50, suffix: '+', label: 'Releases Delivered' },
  { value: 80, suffix: '+', label: 'Triage Meetings Led' },
]

const trustBadges = [
  'ISTQB CTAL-TM',
  'Enterprise Systems',
  'Risk-Based Testing',
  '5+ Years Experience',
]

function MetricCounter({ value, suffix, label, delay, isInView }) {
  const count = useCountUp(value, 2000, true, isInView)
  return (
    <div
      className="text-center opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="metric-number">
        {count}
        <span className="text-brand-400">{suffix}</span>
      </div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950 to-dark-950" />
        
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/8 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-brand-500/6 rounded-full blur-[100px] animate-pulse-slow animate-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-700/4 rounded-full blur-[150px]" />
        
        {/* Floating nodes */}
        <div className="absolute top-20 right-[15%] w-2 h-2 bg-brand-500/30 rounded-full animate-float" />
        <div className="absolute top-40 right-[25%] w-1.5 h-1.5 bg-accent-cyan/20 rounded-full animate-float animate-delay-300" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-brand-400/20 rounded-full animate-float animate-delay-700" />
        <div className="absolute top-60 left-[10%] w-1 h-1 bg-accent-emerald/30 rounded-full animate-float animate-delay-200" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-500/8 border border-brand-500/15 rounded-full text-brand-400 font-mono text-[10px] tracking-wider uppercase"
                >
                  <CheckCircle size={10} />
                  {badge}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              Roshan
              <span className="gradient-text block">Ali</span>
            </h1>

            {/* Title */}
            <p
              className="font-display text-lg sm:text-xl md:text-2xl text-dark-200 font-medium mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
            >
              Senior QA Engineer{' '}
              <span className="text-dark-400">&bull;</span>{' '}
              <span className="text-brand-400">Quality Leader</span>{' '}
              <span className="text-dark-400">&bull;</span>{' '}
              ISTQB Test Manager
            </p>

            {/* Description */}
            <p
              className="text-dark-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
            >
              ISTQB-certified Senior QA Engineer with 5+ years of experience leading quality
              for complex enterprise software, non-deterministic ERP platforms, and AI-influenced
              scheduling systems. Strong in QA strategy, release readiness, API and SQL validation,
              defect governance, risk-based testing, and mentoring teams to deliver reliable,
              high-impact products.
            </p>

            {/* Location */}
            <div
              className="flex items-center gap-2 text-dark-400 text-sm mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}
            >
              <MapPin size={14} />
              <span>United Arab Emirates</span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
            >
              <button onClick={() => scrollTo('experience')} className="btn-primary">
                <ArrowRight size={16} />
                <span>View Experience</span>
              </button>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="btn-outline">
                <Download size={16} />
                <span>Download CV</span>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="btn-ghost">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right side - Metrics panel */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div
              className="glass-card p-6 md:p-8 opacity-0 animate-fade-in-right"
              style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Shield size={16} className="text-brand-400" />
                <span className="font-mono text-xs text-brand-400 uppercase tracking-wider">
                  Quality Impact Metrics
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {metrics.map((m, i) => (
                  <MetricCounter
                    key={m.label}
                    value={m.value}
                    suffix={m.suffix}
                    label={m.label}
                    delay={800 + i * 100}
                    isInView={isInView}
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-dark-700/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-sm font-display font-semibold text-accent-emerald">67+</div>
                    <div className="text-[10px] text-dark-400 font-mono uppercase tracking-wider mt-0.5">Specs Reviewed</div>
                  </div>
                  <div>
                    <div className="text-sm font-display font-semibold text-accent-cyan">40+</div>
                    <div className="text-[10px] text-dark-400 font-mono uppercase tracking-wider mt-0.5">Dashboards Built</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
        <span className="text-dark-500 text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-dark-500 to-transparent" />
      </div>
    </section>
  )
}
