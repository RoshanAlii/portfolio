import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ChevronDown, Cpu, Code, Layers, Zap, TrendingUp, Settings } from './Icons'

const projects = [
  {
    icon: Cpu,
    category: 'Enterprise QA',
    title: 'Quality Leadership for a Non-Deterministic ERP & AI Scheduling Platform',
    challenge: 'Validating a complex scheduling and optimization platform where outputs are non-deterministic — meaning there is no single "correct" answer. The system generates plans influenced by constraints, costs, resource availability, and AI-driven optimization, producing outputs that vary based on input conditions and algorithmic decisions.',
    approach: 'Developed validation strategies using constraint-based thinking, feasibility checks, invariant assertions, cost and business impact evaluation, and integration behavior analysis. Rather than asserting exact expected outputs, testing focused on whether results satisfied business rules, respected constraints, and produced outcomes within acceptable impact thresholds.',
    role: 'Owned release readiness assessments, led cross-team triage sessions to align on acceptable variation boundaries, built regression confidence through scenario-driven coverage, and communicated quality posture to product and engineering leadership.',
    impact: 'Delivered better quality decisions by shifting from binary pass/fail to risk-aware quality evaluation. Reduced release risk through structured go/no-go criteria. Built higher organizational trust in the behavior of complex, AI-influenced system outputs.',
    tags: ['Non-Deterministic Testing', 'Constraint Validation', 'Risk Assessment', 'Release Readiness'],
    accent: 'from-brand-500/20 to-accent-cyan/10',
  },
  {
    icon: Code,
    category: 'Technical Validation',
    title: 'API + SQL Validation Across Enterprise Workflows',
    challenge: 'Enterprise workflows spanned multiple service layers, APIs, and database operations. UI-only testing was insufficient to verify that data flowed correctly, transformations were applied accurately, and business logic was enforced at the backend.',
    approach: 'Implemented structured API testing using Postman to validate request/response contracts, status codes, data payloads, and error handling. Complemented API testing with SQL-based backend verification to confirm data persistence, transformations, and cross-table integrity across enterprise workflows.',
    role: 'Designed and executed end-to-end validation workflows combining UI, API, and database layers. Integrated findings into Jira and Xray for traceability. Leveraged Jenkins CI/CD pipelines for regression awareness.',
    impact: 'Achieved end-to-end workflow confidence that UI-level testing alone could not provide. Caught data integrity issues, API contract violations, and backend logic failures before they reached production environments.',
    tags: ['API Testing', 'Postman', 'SQL', 'Data Validation', 'Jenkins', 'End-to-End'],
    accent: 'from-accent-emerald/20 to-brand-500/10',
  },
  {
    icon: Layers,
    category: 'Process Excellence',
    title: 'QA Process Improvement & Defect Governance',
    challenge: 'Defect triage lacked consistency, severity classifications were often misaligned, reproducibility discipline was uneven, and stakeholders had limited visibility into quality trends and resolution velocity.',
    approach: 'Established structured triage workflows with mandatory reproducibility documentation, clear severity alignment criteria, ownership-driven resolution tracking, and impact-based regression prioritization. Built Jira and Xray dashboards providing real-time visibility into defect aging, trends, coverage gaps, and release readiness indicators.',
    role: 'Led 80+ triage and quality review meetings. Championed prevention-focused QA thinking by shifting emphasis from defect detection to defect pattern analysis, early risk identification, and process-level quality improvements.',
    impact: 'Improved stakeholder confidence through transparent quality reporting. Reduced defect recurrence through pattern-driven process improvements. Drove 35+ QA process enhancements that elevated team discipline and delivery predictability.',
    tags: ['Defect Governance', 'Process Improvement', 'Quality Dashboards', 'Triage Leadership'],
    accent: 'from-brand-400/20 to-brand-600/10',
  },
  {
    icon: Zap,
    category: 'QA Transformation',
    title: 'AI-Assisted QA Adoption',
    challenge: 'Traditional QA approaches — manual test design, linear regression planning, and reactive defect analysis — struggle to keep pace with growing system complexity and accelerating release cycles. The team needed forward-looking strategies to scale quality without proportionally scaling effort.',
    approach: 'Researched and proposed AI-assisted QA practices including using AI to accelerate test case design, optimize regression suites based on risk and change analysis, cluster defects to identify systemic failure patterns, and support faster root-cause analysis through intelligent log and data pattern recognition.',
    role: 'Championed adoption conversations within the QA pod and broader engineering team. Positioned AI as an augmentation tool for experienced QA professionals, not a replacement — focusing on areas where AI accelerates human judgment.',
    impact: 'Established a forward-looking QA transformation roadmap. Demonstrated to leadership how AI-assisted practices can improve coverage efficiency, reduce analysis time, and enable smarter regression selection — bridging classic QA discipline with modern, scalable quality practices.',
    tags: ['AI-Assisted QA', 'Test Optimization', 'Defect Clustering', 'QA Transformation'],
    accent: 'from-accent-cyan/20 to-brand-500/10',
  },
]

const strategyProjects = [
  {
    icon: TrendingUp,
    category: 'Business Strategy',
    title: 'Ali Rice Mill — Business Recovery & Strategy Proposal',
    description: 'Developed a comprehensive business proposal for Ali Rice Mill, a family-run SME in Sri Lanka facing operational and financial challenges. Built detailed cash flow analysis, restructuring logic, profitability forecast models, and operational improvement recommendations. Combined financial reality assessment with process understanding and strategic communication to present a viable recovery path.',
    value: 'Demonstrates strong analytical, operational, and business problem-solving capabilities that extend beyond software QA — including financial modeling, process redesign, and strategic stakeholder communication.',
    tags: ['Business Strategy', 'Financial Analysis', 'Process Redesign', 'SME Consulting'],
  },
  {
    icon: Settings,
    category: 'Operations Excellence',
    title: 'JNKD Racing — Operations & KPI Improvement Proposal',
    description: 'Designed operations excellence proposals centered on KPI visibility, repeated fault reduction, trackside workflow control, data-informed decision making, and structured quality gates. Applied metrics discipline and systematic process thinking to a non-software operational environment.',
    value: 'Showcases operational thinking, metrics discipline, and leadership mindset applicable to any quality-driven organization — reinforcing the ability to think systemically about process improvement.',
    tags: ['KPI Design', 'Operations Excellence', 'Process Control', 'Quality Gates'],
  },
]

function ProjectCard({ project, index, isInView }) {
  const [expanded, setExpanded] = useState(false)
  const IconComp = project.icon

  return (
    <div
      className={`glass-card-hover overflow-hidden transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${300 + index * 120}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${project.accent}`} />
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center shrink-0">
            <IconComp size={18} className="text-brand-400" />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider">{project.category}</span>
            <h3 className="font-display font-bold text-white text-base md:text-lg mt-1">{project.title}</h3>
          </div>
        </div>

        {/* Expandable content */}
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4 pt-4 border-t border-dark-700/30">
            <div>
              <h4 className="font-display font-semibold text-dark-200 text-xs uppercase tracking-wider mb-2">The Challenge</h4>
              <p className="text-dark-300 text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-dark-200 text-xs uppercase tracking-wider mb-2">Approach</h4>
              <p className="text-dark-300 text-sm leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-dark-200 text-xs uppercase tracking-wider mb-2">My Role</h4>
              <p className="text-dark-300 text-sm leading-relaxed">{project.role}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-accent-emerald text-xs uppercase tracking-wider mb-2">Business Impact</h4>
              <p className="text-dark-200 text-sm leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>

        {/* Tags & Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-dark-700/20">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag !text-[10px] !px-2 !py-1">{tag}</span>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-brand-400 hover:text-brand-300 text-xs font-mono transition-colors"
          >
            {expanded ? 'Collapse' : 'Read More'}
            <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, isInView] = useInView()

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/5 to-transparent pointer-events-none" />

      <div className="container-main relative">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Key Projects</span>
          <h2 className="section-title">
            Quality in <span className="gradient-text">action</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Selected case studies demonstrating how I approach complex quality challenges
            and deliver measurable outcomes.
          </p>
        </div>

        {/* Main project cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Strategy section */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-white text-xl md:text-2xl">
              Strategic Thinking <span className="text-dark-400">Beyond Software</span>
            </h3>
            <p className="text-dark-400 text-sm mt-2 max-w-xl mx-auto">
              Business acumen and operational thinking applied to real-world challenges outside software QA.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {strategyProjects.map((proj, i) => {
              const IconComp = proj.icon
              return (
                <div key={i} className="glass-card-hover p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent-emerald/10 border border-accent-emerald/15 flex items-center justify-center shrink-0">
                      <IconComp size={16} className="text-accent-emerald" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-accent-emerald uppercase tracking-wider">{proj.category}</span>
                      <h4 className="font-display font-bold text-white text-sm mt-1">{proj.title}</h4>
                    </div>
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed mb-3">{proj.description}</p>
                  <p className="text-dark-400 text-xs leading-relaxed italic">{proj.value}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-dark-700/20">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="tag !text-[10px] !px-2 !py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
