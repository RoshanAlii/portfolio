import React from 'react'
import { useInView } from '../hooks/useInView'
import { Target, BookOpen, TrendingUp, Users } from './Icons'

const highlights = [
  {
    icon: Target,
    title: 'Technical Depth',
    text: 'Hands-on expertise across functional, integration, regression, smoke, UAT, API, SQL, and system-level verification for complex enterprise platforms.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic QA Leadership',
    text: 'Proven in QA strategy, release readiness, risk-based testing, defect lifecycle governance, and cross-functional stakeholder alignment.',
  },
  {
    icon: BookOpen,
    title: 'Academic Grounding',
    text: 'MBA in Entrepreneurship and M.Sc. in Computer Science reinforce quality-focused decision-making, analytics, and business impact thinking.',
  },
  {
    icon: Users,
    title: 'Process & Collaboration',
    text: 'Driven process improvement, operational thinking, and cross-team collaboration across architecture, R&D, product, and engineering.',
  },
]

export default function About() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="section-label">About Me</span>
              <h2 className="section-title">
                Quality is a
                <span className="gradient-text block">discipline, not a phase.</span>
              </h2>
            </div>
          </div>

          {/* Right column - Bio */}
          <div className="lg:col-span-7">
            <div className={`space-y-5 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-dark-200 text-base md:text-lg leading-relaxed">
                I am a Senior QA Engineer and quality leader who combines deep hands-on testing
                expertise with the strategic thinking needed to drive quality at the enterprise
                level. My experience spans complex ERP platforms, planning and scheduling
                optimization systems, and non-deterministic AI-influenced applications where
                validating correctness goes far beyond simple pass/fail checks.
              </p>
              <p className="text-dark-300 text-base leading-relaxed">
                Over 5+ years, I have owned end-to-end quality for products that demand
                constraint-driven validation, feasibility analysis, cost-impact assessment,
                and risk-based thinking. I am equally comfortable designing test strategies,
                leading defect triage sessions, mentoring QA teams, and communicating release
                readiness to product and engineering leadership.
              </p>
              <p className="text-dark-300 text-base leading-relaxed">
                My academic background in MBA Entrepreneurship and M.Sc. Computer Science
                complements my engineering foundation, giving me an edge in quality-focused
                decision-making, KPI-driven reporting, and business-aware test strategy. I
                approach quality as a discipline that reduces risk, builds confidence, and
                accelerates delivery — not as a bottleneck or afterthought.
              </p>
              <p className="text-dark-300 text-base leading-relaxed">
                I am actively seeking Senior QA, Lead QA, Quality Engineering, or Test
                Management opportunities where I can bring my blend of technical depth,
                leadership capability, and modern quality thinking to enterprise product teams.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {highlights.map((item, i) => {
            const IconComp = item.icon
            return (
              <div
                key={item.title}
                className={`glass-card-hover p-6 group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4 group-hover:bg-brand-500/15 transition-colors duration-300">
                  <IconComp size={18} className="text-brand-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
