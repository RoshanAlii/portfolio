import React from 'react'
import { useInView } from '../hooks/useInView'
import {
  Shield, Target, CheckCircle, Code, Database, Layers,
  BarChart, Users, Cpu, Zap, AlertTriangle, Lightbulb
} from './Icons'

const strengths = [
  {
    icon: Shield,
    title: 'QA Strategy & Test Planning',
    desc: 'Designing comprehensive test strategies aligned with product risk, business priorities, and release cadence for enterprise-grade systems.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk-Based Testing',
    desc: 'Prioritizing test effort by business impact and failure probability, ensuring critical paths and high-risk areas receive focused coverage.',
  },
  {
    icon: CheckCircle,
    title: 'Functional, Integration, Regression & UAT',
    desc: 'Full-spectrum test execution from unit-level validation to end-to-end business workflow verification and user acceptance.',
  },
  {
    icon: Code,
    title: 'API Testing & Data Validation',
    desc: 'Verifying API contracts, response integrity, and data flow correctness using Postman and structured validation frameworks.',
  },
  {
    icon: Database,
    title: 'SQL-Based Back-End Verification',
    desc: 'Validating data persistence, transformations, and business logic at the database layer through targeted SQL queries and assertions.',
  },
  {
    icon: Cpu,
    title: 'Non-Deterministic System Validation',
    desc: 'Testing systems where outputs vary by design — using constraints, feasibility checks, invariants, and cost-impact analysis to validate correctness.',
  },
  {
    icon: Target,
    title: 'Release Readiness & Go/No-Go',
    desc: 'Assessing quality gates, coverage completeness, defect exposure, and risk posture to provide confident release recommendations.',
  },
  {
    icon: Layers,
    title: 'Defect Governance & Triage',
    desc: 'Leading structured triage processes with reproducibility discipline, severity alignment, and ownership-driven resolution tracking.',
  },
  {
    icon: BarChart,
    title: 'Quality Metrics & Reporting',
    desc: 'Building dashboards and views in Jira and Xray for coverage, execution, defect trends, aging, and stakeholder visibility.',
  },
  {
    icon: Users,
    title: 'Mentoring & Team Enablement',
    desc: 'Coaching QA team members on test design, defect discipline, exploratory techniques, and professional growth within quality engineering.',
  },
  {
    icon: Zap,
    title: 'AI-Assisted QA Transformation',
    desc: 'Championing modern QA practices including AI-accelerated test design, defect clustering, regression optimization, and root-cause analysis.',
  },
  {
    icon: Lightbulb,
    title: 'Business-Aware Quality Decisions',
    desc: 'Connecting quality outcomes to business risk, customer impact, and delivery confidence — not just test execution counts.',
  },
]

export default function CoreStrengths() {
  const [ref, isInView] = useInView()

  return (
    <section id="strengths" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/5 to-transparent pointer-events-none" />

      <div className="container-main relative">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Core Strengths</span>
          <h2 className="section-title">
            What I <span className="gradient-text">deliver</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive quality engineering skill set built across enterprise ERP platforms,
            non-deterministic systems, and AI-influenced scheduling applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {strengths.map((item, i) => {
            const IconComp = item.icon
            return (
              <div
                key={item.title}
                className={`glass-card-hover p-5 group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 60}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/15 flex items-center justify-center mb-3 group-hover:bg-brand-500/15 group-hover:border-brand-500/30 transition-all duration-300">
                  <IconComp size={16} className="text-brand-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-dark-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
