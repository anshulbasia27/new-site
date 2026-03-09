import { Shield } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Footer() {
  const { pathname } = useLocation()
  const prefix = pathname === '/' ? '' : '/'

  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-danger" />
              <span className="font-bold text-text-primary text-sm tracking-tight">
                AltorLab
              </span>
            </Link>
            <p className="text-xs text-text-muted max-w-xs">
              ADA/WCAG compliance scanning and remediation for D2C brands. Real
              fixes, not overlays.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-xs text-text-muted">
            <a href={`${prefix}#how`} className="hover:text-text-secondary transition-colors">
              How It Works
            </a>
            <a href={`${prefix}#pricing`} className="hover:text-text-secondary transition-colors">
              Pricing
            </a>
            <a href={`${prefix}#faq`} className="hover:text-text-secondary transition-colors">
              FAQ
            </a>
            <a href={`${prefix}#contact`} className="hover:text-text-secondary transition-colors">
              Free Audit
            </a>
          </div>
        </div>

        {/* Guide links */}
        <div className="mt-6 pt-6 border-t border-surface-border">
          <p className="text-xs text-text-muted mb-3 font-mono uppercase tracking-wider">
            Guides
          </p>
          <div className="flex flex-col sm:flex-row gap-3 text-xs text-text-muted">
            <Link
              to="/guides/ada-compliance-ecommerce"
              className="hover:text-text-secondary transition-colors"
            >
              ADA Compliance for Ecommerce
            </Link>
            <span className="hidden sm:inline">&bull;</span>
            <Link
              to="/guides/wcag-21-aa-explained"
              className="hover:text-text-secondary transition-colors"
            >
              WCAG 2.1 AA Explained
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AltorLab. All rights reserved.
          </span>
          <span className="text-xs text-text-muted">
            WCAG 2.1 AA &middot; ADA Title III &middot; Section 508
          </span>
        </div>
      </div>
    </footer>
  )
}
