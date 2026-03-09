import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import Landing from './pages/Landing'
import ADAComplianceGuide from './pages/ADAComplianceGuide'
import WCAGExplainedGuide from './pages/WCAGExplainedGuide'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface min-h-screen">
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/guides/ada-compliance-ecommerce" element={<ADAComplianceGuide />} />
          <Route path="/guides/wcag-21-aa-explained" element={<WCAGExplainedGuide />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
