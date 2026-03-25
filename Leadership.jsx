import React from 'react'
import { useInView } from '../hooks/useInView'
import { MessageSquare, Users, BarChart, Star, Award } from './Icons'

const leadershipItems = [
  {
    icon: MessageSquare,
    title: '80+ Triage & Quality Review Meetings',
    desc: 'Led structured defect triage and quality review sessions aligning development, product, and architecture teams on priority, risk, and resolution strategy.',
  },
  {
    icon: Users,
    title: 'QA Team Mentoring & Development',
    desc: 'Mentored QA team members including senior QAs on test design quality, defect documentation discipline, exploratory testing techniques, and professional growth within quality engineering.',
  },
  {
    icon: BarChart,
    title: 'Stakeholder Reporting & Dashboards',
    desc: 'Built and maintained 40+ Jira and Xray dashboards providing real-time visibility into coverage, execution progress, defect trends, and release readiness for stakeholder decision-making.',
  },
  {
    icon: Star,
    title: 'Cross-Functional Collaboration',
    desc: 'Worked effectively with product management, development, architecture, R&D, and engineering teams — embedding quality thinking throughout the development lifecycle.',
  },
]

const communityItems = [
  { label: 'Toastmasters', desc: 'Public speaking and communication leadership' },
  { label: 'Faculty Alumni President', desc: 'Community leadership and event organization' },
  { label: 'Director — Branding', desc: 'Strategic communication and brand positioning' },
  { label: "Students' Union Editor", desc: 'Editorial leadership and content management' },
]

const achievements = [
  { title: 'Active Citizen Award', org: 'British Council Sri Lanka', year: '2015' },
  { title: '#1 Industrial Engineer', org: 'MAS Holdings (November – March)', year: '2021–2022' },
]

export default function Leadership() {
  const [ref, isInView] = useInView()

  return (
    <section id="leadership" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div className={`mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Leadership & Communication</span>
          <h2 className="section-title">
            Leading with <span className="gradient-text">clarity</span>
          </h2>
          <p className="section-subtitle">
            Quality leadership is as much about communication, mentoring, and stakeholder alignment
            as it is about test execution and defect management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {leadershipItems.map((item, i) => {
            const IconComp = item.icon
            return (
              <div
                key={i}
                className={`glass-card-hover p-6 group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center shrink-0 group-hover:bg-brand-500/15 transition-colors">
                    <IconComp size={18} className="text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Community & Achievements row */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Community involvement */}
          <div
            className={`glass-card p-6 md:p-8 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 className="font-display font-bold text-white text-base mb-5 flex items-center gap-2">
              <Users size={16} className="text-brand-400" />
              Community & Leadership Roles
            </h3>
            <div className="space-y-3">
              {communityItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500/50 mt-2 shrink-0 group-hover:bg-brand-400 transition-colors" />
                  <div>
                    <span className="font-display font-semibold text-white text-sm">{item.label}</span>
                    <p className="text-dark-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div
            className={`glass-card p-6 md:p-8 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="font-display font-bold text-white text-base mb-5 flex items-center gap-2">
              <Award size={16} className="text-accent-amber" />
              Selected Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <div key={i} className="glass-card p-4 border-dark-700/30">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-dark-400 text-xs mt-1">{item.org}</p>
                    </div>
                    <span className="text-[10px] font-mono text-accent-amber bg-accent-amber/10 px-2 py-1 rounded-md">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 20+ mentoring sessions callout */}
            <div className="mt-5 pt-5 border-t border-dark-700/30">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-display font-bold text-white">20+</div>
                <div>
                  <div className="text-xs font-display font-medium text-dark-200">Knowledge-Sharing Sessions</div>
                  <div className="text-[10px] text-dark-400 font-mono">Mentoring & team enablement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
