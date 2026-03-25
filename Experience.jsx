import React from 'react'
import { useInView } from '../hooks/useInView'
import { Briefcase, Calendar, MapPin, ChevronRight } from './Icons'

const experiences = [
  {
    title: 'Senior Software Engineer — Quality Assurance',
    company: 'IFS (IFS R&D International Pvt Ltd)',
    period: 'April 2022 – December 2025',
    location: 'Enterprise ERP & AI Scheduling Platform',
    color: 'brand',
    highlights: [
      'Owned end-to-end quality leadership for a non-deterministic ERP and AI-driven planning and scheduling optimization platform, covering strategy, execution, and release confidence.',
      'Drove QA strategy, release readiness assessments, and risk-based testing across 90+ sprints, ensuring systematic coverage of high-risk functional areas.',
      'Designed and executed testing for 510+ user stories spanning functional, regression, integration, smoke, and user acceptance testing.',
      'Led defect governance for 1,200+ defects with disciplined reproducibility, severity classification, ownership assignment, and resolution tracking.',
      'Facilitated 80+ defect triage and quality review meetings, aligning development, product, and architecture teams on priority, risk, and release impact.',
      'Performed systems-level validation for non-deterministic outputs — using constraint-driven thinking, feasibility analysis, invariant checks, and cost/impact evaluation to assess correctness beyond simple expected results.',
      'Executed API testing and backend data validation using Postman and SQL, verifying data integrity across enterprise workflow layers.',
      'Reviewed 67+ technical specifications and design changes to identify edge cases, testability gaps, and integration risks before development.',
      'Built and maintained Jira and Xray reporting dashboards (40+) for coverage, execution progress, defect trends, aging, and release visibility.',
      'Mentored a QA pod including senior QAs — improving test design quality, defect documentation discipline, and exploratory testing depth.',
      'Championed AI-assisted QA adoption concepts including test design acceleration, regression optimization, defect clustering, and root-cause analysis support.',
      'Collaborated closely with architecture, R&D, product management, and engineering teams to embed quality thinking into the development lifecycle.',
    ],
    tags: ['QA Strategy', 'Non-Deterministic Systems', 'API Testing', 'SQL', 'Jira', 'Xray', 'Postman', 'Risk-Based Testing', 'Defect Governance', 'Release Readiness'],
  },
  {
    title: 'Industrial Engineer',
    company: 'MAS Holdings (Thurulie)',
    period: 'October 2021 – April 2022',
    location: 'Operational Excellence & Process Engineering',
    color: 'emerald',
    highlights: [
      'Standardized data collection and reporting methodologies across production operations, reducing manual inconsistencies by 30%.',
      'Improved operational data integrity by 25% through structured validation and process controls.',
      'Defined and monitored 10+ operational metrics and acceptance criteria for production workflows, establishing clear quality baselines.',
      'Validated process outcomes before operational rollout, applying pre-release verification principles from an industrial engineering context.',
      'Maintained 100% compliance with integrated management system practices spanning health, safety, quality, and environmental standards.',
      'Strengthened process discipline, metrics-driven thinking, and operational problem-solving capabilities that directly enhance software quality engineering.',
    ],
    tags: ['Process Improvement', 'Data Quality', 'Operational Metrics', 'Compliance', 'Lean Thinking'],
  },
]

export default function Experience() {
  const [ref, isInView] = useInView()

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div className={`mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Professional Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">built quality</span>
          </h2>
          <p className="section-subtitle">
            A track record of driving quality outcomes across enterprise platforms and operational systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/30 via-dark-700/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience: exp, index, isInView }) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${300 + index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-dark-900 border-2 border-brand-500/40 items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-brand-400" />
      </div>

      <div className="lg:ml-20 glass-card-hover p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display font-bold text-white text-lg md:text-xl mb-1">
              {exp.title}
            </h3>
            <p className="font-display font-medium text-brand-400 text-base mb-2">
              {exp.company}
            </p>
            <p className="text-dark-400 text-xs font-mono uppercase tracking-wider">
              {exp.location}
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-dark-400 shrink-0">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {exp.period}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-3 mb-6">
          {exp.highlights.map((h, i) => (
            <div key={i} className="flex gap-3 group">
              <ChevronRight size={14} className="text-brand-500/50 mt-1 shrink-0 group-hover:text-brand-400 transition-colors" />
              <p className="text-dark-300 text-sm leading-relaxed">{h}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
