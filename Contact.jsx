import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Mail, Phone, Linkedin, MapPin, Copy, ExternalLink, Download } from './Icons'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'AhamedRoshanAli@gmail.com',
    href: 'mailto:AhamedRoshanAli@gmail.com',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 588223256',
    href: 'tel:+971588223256',
    copyable: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahamedroshanali',
    href: 'https://linkedin.com/in/ahamedroshanali',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'United Arab Emirates',
    href: null,
  },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-dark-700/50 text-dark-400 hover:text-brand-400 transition-all"
      title={copied ? 'Copied!' : 'Copy'}
    >
      {copied ? (
        <span className="text-accent-emerald text-[10px] font-mono">Copied</span>
      ) : (
        <Copy size={13} />
      )}
    </button>
  )
}

export default function Contact() {
  const [ref, isInView] = useInView()

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/5 to-transparent pointer-events-none" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - CTA */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title mb-6">
              Let's build
              <span className="gradient-text block">quality together.</span>
            </h2>
            <p className="text-dark-300 text-base leading-relaxed mb-6 max-w-lg">
              If you're hiring for Senior QA, Quality Engineering, Test Leadership, or
              enterprise software quality roles, I'd welcome the opportunity to connect.
              Let's discuss how my experience can contribute to your team's quality goals.
            </p>

            {/* Download CV button */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="mailto:AhamedRoshanAli@gmail.com?subject=CV%20Request%20-%20Roshan%20Ali&body=Hi%20Roshan%2C%0A%0AI%20would%20like%20to%20request%20your%20latest%20CV.%0A%0AThank%20you."
                className="btn-primary"
              >
                <Download size={16} />
                <span>Request CV</span>
              </a>
              <a
                href="https://linkedin.com/in/ahamedroshanali"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 p-5 glass-card">
              <div className="text-center">
                <div className="text-lg font-display font-bold text-white">5+</div>
                <div className="text-[10px] font-mono text-dark-400 uppercase tracking-wider">Years QA</div>
              </div>
              <div className="text-center border-x border-dark-700/30">
                <div className="text-lg font-display font-bold text-white">1,200+</div>
                <div className="text-[10px] font-mono text-dark-400 uppercase tracking-wider">Defects Managed</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-display font-bold text-white">50+</div>
                <div className="text-[10px] font-mono text-dark-400 uppercase tracking-wider">Releases</div>
              </div>
            </div>
          </div>

          {/* Right - Contact cards */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-3">
              {contactLinks.map((link, i) => {
                const IconComp = link.icon
                return (
                  <div
                    key={i}
                    className="glass-card-hover p-5 flex items-center gap-4 group"
                    style={{ transitionDelay: `${400 + i * 80}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center shrink-0 group-hover:bg-brand-500/15 transition-colors">
                      <IconComp size={18} className="text-brand-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-dark-500 uppercase tracking-wider">
                        {link.label}
                      </span>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="block text-white text-sm font-display font-medium hover:text-brand-400 transition-colors truncate"
                        >
                          {link.value}
                          {link.external && (
                            <ExternalLink size={11} className="inline ml-1.5 opacity-50" />
                          )}
                        </a>
                      ) : (
                        <span className="block text-white text-sm font-display font-medium">{link.value}</span>
                      )}
                    </div>
                    {link.copyable && <CopyButton text={link.value} />}
                  </div>
                )
              })}
            </div>

            {/* Availability note */}
            <div className="mt-6 p-4 glass-card border-accent-emerald/15">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                <span className="text-accent-emerald text-xs font-mono uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-dark-400 text-xs leading-relaxed">
                Currently available for Senior QA, Lead QA, Quality Engineering, and Test
                Management positions in the UAE or remote/hybrid arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
