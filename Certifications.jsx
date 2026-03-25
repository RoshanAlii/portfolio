import React from 'react'
import { useInView } from '../hooks/useInView'
import { Award, GraduationCap, Calendar } from './Icons'

const certifications = [
  {
    title: 'ISTQB Certified Tester Advanced Level – Test Manager (CTAL-TM) v3.0',
    year: '2025',
    note: 'Advanced test management, risk-based testing, and QA strategy',
  },
  {
    title: 'Certificate of Software Automation',
    issuer: 'Imperial College of Information Technology and Business',
    year: '2023',
    note: 'Automation frameworks and test engineering foundations',
  },
  {
    title: 'Lean Six Sigma Green Belt',
    issuer: 'The Corporate Campus',
    year: '2019',
    note: 'Process improvement, waste reduction, and quality management',
  },
  {
    title: 'Advance Diploma in JAVA',
    issuer: 'University of Kelaniya',
    year: '2018 – 2019',
    note: 'Object-oriented programming and software development',
  },
  {
    title: 'National Vocational Qualification Level 3 – Domestic Electrician',
    year: '2015 – 2016',
    note: 'Technical systems understanding and safety compliance',
  },
]

const education = [
  {
    degree: 'Master of Business Administration in Entrepreneurship',
    university: 'Anglia Ruskin University',
    period: 'Expected Completion: 2026',
    status: 'In Progress',
    value: 'Quality-focused decision-making, KPI thinking, business impact analysis, and process improvement strategy.',
  },
  {
    degree: 'M.Sc. in Computer Science',
    university: 'University of Sri Jayewardenepura',
    period: 'Expected Completion: June 2026',
    status: 'In Progress',
    value: 'Systems analysis, databases, SQL proficiency, logic validation, and data analytics capabilities.',
  },
  {
    degree: 'B.Sc. in Electronics and Automation Technologies',
    university: 'University of Colombo',
    period: '2018 – 2023',
    status: 'Completed',
    value: 'Technical troubleshooting, analytical thinking, integration testing mindset, and systems engineering.',
  },
  {
    degree: 'Bachelor of Engineering Technology',
    university: 'University of Kelaniya',
    period: '2018 – 2022',
    status: 'Completed',
    value: 'Systems-level thinking, workflow understanding, constraints, repeatability, and reliability engineering.',
  },
]

export default function Certifications() {
  const [ref, isInView] = useInView()

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/5 to-transparent pointer-events-none" />

      <div className="container-main relative">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">Credentials</span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning across quality engineering, computer science, business management,
            and technical disciplines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className={`flex items-center gap-2 mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              <Award size={18} className="text-brand-400" />
              <h3 className="font-display font-bold text-white text-lg">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`glass-card-hover p-5 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        {cert.title}
                      </h4>
                      {cert.issuer && (
                        <p className="text-dark-400 text-xs mb-1">{cert.issuer}</p>
                      )}
                      <p className="text-dark-500 text-xs italic">{cert.note}</p>
                    </div>
                    <span className="text-[10px] font-mono text-brand-400 bg-brand-500/10 px-2 py-1 rounded-md whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className={`flex items-center gap-2 mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '250ms' }}>
              <GraduationCap size={18} className="text-accent-emerald" />
              <h3 className="font-display font-bold text-white text-lg">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`glass-card-hover p-5 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${350 + i * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-display font-semibold text-white text-sm flex-1">
                      {edu.degree}
                    </h4>
                    <span className={`text-[10px] font-mono px-2 py-1 rounded-md whitespace-nowrap ${
                      edu.status === 'In Progress'
                        ? 'text-accent-amber bg-accent-amber/10'
                        : 'text-accent-emerald bg-accent-emerald/10'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-dark-400 text-xs mb-1">{edu.university}</p>
                  <div className="flex items-center gap-1 text-dark-500 text-xs mb-2">
                    <Calendar size={10} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-dark-400 text-xs leading-relaxed">{edu.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
