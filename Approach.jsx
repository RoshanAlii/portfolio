import React from 'react'
import { useInView } from '../hooks/useInView'
import { Search, Eye, Shield, Settings } from './Icons'

const principles = [
  {
    icon: Search,
    number: '01',
    title: 'Understand the Business Risk',
    desc: 'Every testing decision starts with understanding what matters most to the business. I prioritize testing effort based on impact, not just coverage metrics — ensuring the highest-risk areas receive the deepest validation.',
    color: 'brand',
  },
  {
    icon: Eye,
    number: '02',
    title: 'Validate the System End-to-End',
    desc: 'Quality cannot be verified in isolation. I validate workflows across UI, API, and database layers to ensure data integrity, business logic correctness, and integration reliability throughout the entire system.',
    color: 'cyan',
  },
  {
    icon: Shield,
    number: '03',
    title: 'Build Confidence, Not Just Coverage',
    desc: 'Test coverage numbers are a starting point, not an endpoint. I focus on building genuine confidence in system behavior through risk-based testing, exploratory depth, and constraint-driven validation.',
    color: 'emerald',
  },
  {
    icon: Settings,
    number: '04',
    title: 'Improve the Process, Not Only the Product',
    desc: 'Sustainable quality comes from better processes, not just more testing. I drive improvements in triage discipline, defect prevention, reporting clarity, and team capability — elevating the entire quality practice.',
    color: 'amber',
  },
]

const colorStyles = {
  brand: {
    numColor: 'text-brand-500/30',
    iconBg: 'bg-brand-500/10',
    iconBorder: 'border-brand-500/20',
    iconColor: 'text-brand-400',
    lineColor: 'from-brand-500/30',
  },
  cyan: {
    numColor: 'text-accent-cyan/20',
    iconBg: 'bg-accent-cyan/10',
    iconBorder: 'border-accent-cyan/20',
    iconColor: 'text-accent-cyan',
    lineColor: 'from-accent-cyan/30',
  },
  emerald: {
    numColor: 'text-accent-emerald/20',
    iconBg: 'bg-accent-emerald/10',
    iconBorder: 'border-accent-emerald/20',
    iconColor: 'text-accent-emerald',
    lineColor: 'from-accent-emerald/30',
  },
  amber: {
    numColor: 'text-accent-amber/20',
    iconBg: 'bg-accent-amber/10',
    iconBorder: 'border-accent-amber/20',
    iconColor: 'text-accent-amber',
    lineColor: 'from-accent-amber/30',
  },
}

export default function Approach() {
  const [ref, isInView] = useInView()

  return (
    <section id="approach" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/5 to-transparent pointer-events-none" />

      <div className="container-main relative">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Philosophy</span>
          <h2 className="section-title">
            My approach to <span className="gradient-text">quality</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Four principles that guide every quality decision I make — from test strategy
            design to release readiness assessment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => {
            const IconComp = p.icon
            const styles = colorStyles[p.color]
            return (
              <div
                key={i}
                className={`glass-card-hover p-6 relative overflow-hidden group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                {/* Large number background */}
                <div className={`absolute -top-4 -right-2 text-7xl font-display font-black ${styles.numColor} select-none pointer-events-none group-hover:opacity-70 transition-opacity`}>
                  {p.number}
                </div>

                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl ${styles.iconBg} border ${styles.iconBorder} flex items-center justify-center mb-5`}>
                    <IconComp size={18} className={styles.iconColor} />
                  </div>
                  <h3 className="font-display font-bold text-white text-sm mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-dark-400 text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
