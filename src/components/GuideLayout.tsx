import { useEffect, useState, type ReactNode } from 'react'
import { FadeUp } from './FadeUp'
import { GuideCTA } from './GuideCTA'

interface TOCItem {
  id: string
  label: string
}

interface GuideLayoutProps {
  title: string
  subtitle: string
  readTime: string
  toc: TOCItem[]
  children: ReactNode
}

export function GuideLayout({ title, subtitle, readTime, toc, children }: GuideLayoutProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    const headings = toc.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
    headings.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [toc])

  return (
    <article className="pt-14">
      {/* Title banner */}
      <div className="border-b border-surface-border bg-surface-raised/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <FadeUp>
            <p className="text-sm font-mono text-danger tracking-wider uppercase mb-4">
              Guide
            </p>
            <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-bold tracking-[-0.03em] text-text-primary mb-4 text-balance max-w-3xl">
              {title}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mb-4">
              {subtitle}
            </p>
            <p className="text-xs text-text-muted font-mono">
              {readTime} &middot; Updated March 2026
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex gap-12 lg:gap-16">
          {/* Sticky TOC (desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-20">
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                On this page
              </p>
              <nav className="space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? 'location' : undefined}
                    className={`block text-sm transition-colors ${
                      activeId === item.id
                        ? 'text-danger font-medium'
                        : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 flex-1 max-w-[720px]">
            {/* Inline TOC (mobile) */}
            <div className="lg:hidden mb-10 p-5 border border-surface-border rounded-xl bg-surface-raised/50">
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                On this page
              </p>
              <nav className="space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="prose-guide">
              {children}
            </div>

            <GuideCTA />
          </div>
        </div>
      </div>
    </article>
  )
}
