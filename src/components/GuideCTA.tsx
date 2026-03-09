import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from './FadeUp'

export function GuideCTA() {
  return (
    <section className="mt-16 border-t border-surface-border pt-16">
      <FadeUp>
        <div className="text-center">
          <p className="text-sm font-mono text-danger tracking-wider uppercase mb-4">
            Don't wait for the demand letter
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-text-primary mb-4 text-balance">
            Find out if your site is at risk — free.
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            We'll scan your entire site and deliver a prioritized risk report within
            24 hours. No credit card, no sales call.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </FadeUp>
    </section>
  )
}
