import React from 'react'
import { Mail, Linkedin } from './Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-800/50 bg-dark-950">
      <div className="container-main py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-display font-bold text-white text-sm">
              R
            </div>
            <div>
              <span className="font-display font-semibold text-white text-sm block">Roshan Ali</span>
              <span className="text-dark-500 text-xs">Senior QA Engineer &bull; Quality Leader</span>
            </div>
          </div>

          {/* Center - links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:AhamedRoshanAli@gmail.com"
              className="p-2 rounded-lg text-dark-400 hover:text-brand-400 hover:bg-dark-800/50 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ahamedroshanali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-400 hover:text-brand-400 hover:bg-dark-800/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Right - copyright */}
          <p className="text-dark-500 text-xs text-center md:text-right">
            &copy; {currentYear} Roshan Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
