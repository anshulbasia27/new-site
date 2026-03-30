import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { ScrollToTop } from './components/ScrollToTop'
import ADAComplianceGuide from './pages/ADAComplianceGuide'
import Landing from './pages/Landing'
import WCAGExplainedGuide from './pages/WCAGExplainedGuide'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface min-h-screen">
        <div className="fixed inset-x-0 top-0 z-[60] border-b border-surface-border/60 bg-surface/90 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-10 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-text-secondary">
              🇺🇸 Is Your US Store ADA Compliant? Free Scan
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-danger hover:text-red-400 transition-colors"
            >
              <span>Check Now</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/guides/ada-compliance-ecommerce" element={<ADAComplianceGuide />} />
          <Route path="/guides/wcag-21-aa-explained" element={<WCAGExplainedGuide />} />
        </Routes>
        <Footer />
        <a
          href="/#contact"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/95 px-4 py-3 text-sm font-semibold text-text-primary shadow-2xl shadow-black/20 backdrop-blur-xl transition-all hover:-translate-y-px hover:border-danger/40 hover:text-white sm:bottom-6 sm:right-6"
        >
          <span aria-hidden="true">🔍</span>
          <span>Free ADA Scan</span>
        </a>
      </div>
    </BrowserRouter>
  )
}
