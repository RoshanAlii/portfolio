import React from 'react'
import { useInView } from '../hooks/useInView'
import { Shield, Code, Briefcase } from './Icons'

const skillCategories = [
  {
    icon: Shield,
    title: 'QA & Testing',
    color: 'brand',
    skills: [
      'Test Strategy', 'Test Planning', 'Functional Testing', 'Regression Testing',
      'Integration Testing', 'Smoke Testing', 'UAT', 'Defect Management',
      'Root Cause Thinking', 'Release Readiness', 'Risk-Based Testing',
      'Test Case Design', 'Traceability', 'Exploratory Testing',
    ],
  },
  {
    icon: Code,
    title: 'Technical',
    color: 'cyan',
    skills: [
      'API Testing', 'Postman', 'SQL', 'Data Validation',
      'Jira', 'Confluence', 'Xray', 'Jenkins',
      'Selenium', 'CI/CD Awareness', 'Enterprise Workflow Validation',
      'Non-Deterministic Systems Testing',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business & Leadership',
    color: 'emerald',
    skills: [
      'Stakeholder Communication', 'Metrics & Reporting', 'Quality Dashboards',
      'Mentoring', 'Triage Leadership', 'Process Improvement',
      'Quality Governance', 'Cross-Functional Collaboration', 'Business Impact Awareness',
    ],
  },
]

const colorMap = {
  brand: {
    bg: 'bg-brand-500/8',
    border: 'border-brand-500/15',
    hoverBorder: 'hover:border-brand-500/30',
    hoverText: 'hover:text-brand-400',
    iconBg: 'bg-brand-500/10',
    iconBorder: 'border-brand-500/20',
    iconColor: 'text-brand-400',
    labelColor: 'text-brand-400',
  },
  cyan: {
    bg: 'bg-accent-cyan/5',
    border: 'border-accent-cyan/10',
    hoverBorder: 'hover:border-accent-cyan/30',
    hoverText: 'hover:text-accent-cyan',
    iconBg: 'bg-accent-cyan/10',
    iconBorder: 'border-accent-cyan/20',
    iconColor: 'text-accent-cyan',
    labelColor: 'text-accent-cyan',
  },
  emerald: {
    bg: 'bg-accent-emerald/5',
    border: 'border-accent-emerald/10',
    hoverBorder: 'hover:border-accent-emerald/30',
    hoverText: 'hover:text-accent-emerald',
    iconBg: 'bg-accent-emerald/10',
    iconBorder: 'border-accent-emerald/20',
    iconColor: 'text-accent-emerald',
    labelColor: 'text-accent-emerald',
  },
}

export default function Skills() {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Skills & Tools</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">toolkit</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive skill set spanning QA methodology, technical tools, and
            business leadership capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const IconComp = cat.icon
            const colors = colorMap[cat.color]
            return (
              <div
                key={cat.title}
                className={`glass-card p-6 md:p-8 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center`}>
                    <IconComp size={18} className={colors.iconColor} />
                  </div>
                  <h3 className={`font-display font-semibold text-sm ${colors.labelColor}`}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 ${colors.bg} border ${colors.border} rounded-lg text-xs font-mono text-dark-300 transition-all duration-300 ${colors.hoverBorder} ${colors.hoverText} cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
