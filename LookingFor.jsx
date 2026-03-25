import React from 'react'
import { useInView } from '../hooks/useInView'
import { Compass, MapPin, ChevronRight } from './Icons'

const roles = [
  'Senior QA Engineer',
  'Lead QA',
  'Associate Lead QA',
  'Quality Engineer',
  'Test Manager',
  'QA Lead',
  'Senior Test Analyst',
  'Enterprise Product Quality Roles',
]

export default function LookingFor() {
  const [ref, isInView] = useInView()

  return (
    <section id="looking-for" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div
          className={`glass-card p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 via-transparent to-accent-cyan/5 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass size={18} className="text-brand-400" />
                <span className="font-mono text-xs text-brand-400 uppercase tracking-wider">
                  What I'm Looking For
                </span>
              </div>
              <h2 className="font-display font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
                Open to strong opportunities in
                <span className="gradient-text"> QA leadership</span> and
                <span className="gradient-text"> quality engineering</span>
              </h2>
              <p className="text-dark-300 text-sm leading-relaxed mb-4">
                I am seeking roles where I can bring my combination of hands-on testing depth,
                strategic quality thinking, and leadership capability to enterprise product teams.
                Based in the UAE and open to on-site, hybrid, or remote opportunities.
              </p>
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <MapPin size={14} />
                <span>United Arab Emirates — On-site, Hybrid, or Remote</span>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-dark-200 text-xs uppercase tracking-wider mb-4">
                Target Roles
              </h3>
              <div className="space-y-2">
                {roles.map((role, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 group"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <ChevronRight size={14} className="text-brand-500/40 group-hover:text-brand-400 transition-colors shrink-0" />
                    <span className="text-dark-200 text-sm font-display group-hover:text-white transition-colors">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
