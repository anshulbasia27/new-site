import { SEOHead } from '../components/SEOHead'
import { GuideLayout } from '../components/GuideLayout'

const toc = [
  { id: 'what-ada-means', label: 'What ADA Compliance Means for Websites' },
  { id: 'dominos-case', label: "The Case That Changed Everything" },
  { id: 'why-d2c-targeted', label: 'Why D2C Brands Are the #1 Target' },
  { id: 'demand-letter', label: 'What a Demand Letter Looks Like' },
  { id: 'protect-your-brand', label: 'How to Protect Your D2C Brand' },
]

export default function ADAComplianceGuide() {
  return (
    <>
      <SEOHead
        title="ADA Compliance for Ecommerce: What D2C Brands Need to Know in 2026"
        description="Learn why D2C ecommerce brands are the #1 target for ADA lawsuits, what a demand letter looks like, and how to protect your online store from accessibility litigation."
        path="/guides/ada-compliance-ecommerce"
      />
      <GuideLayout
        title="ADA Compliance for Ecommerce: What D2C Brands Need to Know in 2026"
        subtitle="D2C ecommerce is the #1 target for ADA digital lawsuits. Here's what's happening, why it matters, and how to protect your brand."
        readTime="8 min read"
        toc={toc}
      >
        {/* Section 1 */}
        <h2 id="what-ada-means">What ADA Compliance Means for Websites</h2>
        <p>
          The Americans with Disabilities Act (ADA), signed into law in 1990, prohibits discrimination against
          individuals with disabilities. Title III of the ADA covers "places of public accommodation" — and
          federal courts have increasingly ruled that <strong>websites qualify</strong>.
        </p>
        <p>
          For ecommerce websites, this means your online store must be accessible to people with disabilities —
          including those who are blind, deaf, have motor impairments, or have cognitive disabilities. In practice,
          courts reference <strong>WCAG 2.1 Level AA</strong> (Web Content Accessibility Guidelines) as the
          technical standard your site should meet.
        </p>
        <p>
          There is no formal ADA certification for websites. There is no government checklist you can complete
          and file. Instead, compliance is determined by whether your site meets WCAG standards — and the primary
          enforcement mechanism is <strong>private lawsuits</strong>.
        </p>

        {/* Section 2 */}
        <h2 id="dominos-case">The Case That Changed Everything: Domino's v. Robles</h2>
        <p>
          In 2016, Guillermo Robles — a blind man who uses a screen reader — sued Domino's Pizza because he
          couldn't order food through their website or mobile app. Domino's argued that the ADA only applied
          to physical locations, not websites.
        </p>
        <p>
          The case went all the way to the Ninth Circuit Court of Appeals, which ruled in 2019 that
          <strong> websites and apps are covered under the ADA</strong>. Domino's petitioned the Supreme Court,
          which declined to hear the case — effectively confirming the lower court's ruling.
        </p>
        <blockquote>
          "The ADA applies to the services of a place of public accommodation, not services in a place of
          public accommodation. The website and app connect customers to the goods and services of Domino's
          physical restaurants."
          <br />
          <span className="text-text-muted text-sm">— Ninth Circuit, Robles v. Domino's Pizza (2019)</span>
        </blockquote>
        <p>
          This ruling opened the floodgates. Since 2019, ADA digital lawsuits have increased every year, with
          <strong> 4,187 filed in 2024 alone</strong>. And the #1 targeted industry? Retail and ecommerce.
        </p>

        {/* Section 3 */}
        <h2 id="why-d2c-targeted">Why D2C Brands Are the #1 Target</h2>
        <p>
          Plaintiff law firms — sometimes called "serial filers" — have turned ADA website lawsuits into a
          volume business. They use automated scanning tools to crawl thousands of ecommerce sites daily,
          looking for common WCAG violations. When they find them (and <strong>94.8% of websites have
          detectable failures</strong>, per the WebAIM Million 2025 Report), they file suit.
        </p>
        <p>D2C brands are disproportionately targeted for three reasons:</p>
        <ul>
          <li>
            <strong>High violation density.</strong> Most ecommerce themes — whether Shopify, WooCommerce,
            or BigCommerce — ship with accessibility failures out of the box. Third-party apps (review widgets,
            chat tools, popup builders) add more. Every product page, collection page, and checkout step is a
            potential violation.
          </li>
          <li>
            <strong>Small legal teams.</strong> Unlike enterprise retailers with in-house counsel, D2C brands
            typically don't have lawyers on staff. A $5K–$25K demand letter is calibrated to be cheaper to
            settle than to fight.
          </li>
          <li>
            <strong>Public-facing storefronts.</strong> Your website is your business. It's publicly accessible,
            easily scanned, and the violations are provable. Plaintiff firms don't need to visit your office —
            they just need to run a tool against your URL.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 id="demand-letter">What a Demand Letter Looks Like</h2>
        <p>
          Most ADA website cases don't start with a formal lawsuit. They start with a demand letter — a letter
          from a plaintiff's attorney alleging that your website violates the ADA and offering to settle before
          going to court. Here's what a typical one looks like:
        </p>
        <div className="my-8 border border-surface-border rounded-xl bg-surface-raised/50 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface/60">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-danger/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-600/60" />
              <span className="w-2 h-2 rounded-full bg-text-muted/40" />
            </div>
            <span className="ml-2 text-xs font-mono text-text-muted">demand-letter.pdf</span>
          </div>
          <div className="p-6 font-mono text-sm text-text-secondary space-y-4 leading-relaxed">
            <p className="text-text-muted text-xs">VIA CERTIFIED MAIL AND EMAIL</p>
            <p>Dear Store Owner,</p>
            <p>
              Our firm represents [Plaintiff Name], a legally blind individual who relies on screen-reading
              software to access websites. On [Date], our client attempted to browse and make a purchase on
              your website, <span className="text-danger">[yourbrand.com]</span>, and was unable to do so
              due to numerous accessibility barriers.
            </p>
            <p>Specifically, our investigation identified the following violations of WCAG 2.1 AA:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-danger shrink-0">&bull;</span>
                <span>23 product images missing alternative text descriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-danger shrink-0">&bull;</span>
                <span>12 form inputs without associated labels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-danger shrink-0">&bull;</span>
                <span>Multiple color contrast failures below the 4.5:1 ratio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-danger shrink-0">&bull;</span>
                <span>Keyboard navigation traps in the checkout flow</span>
              </li>
            </ul>
            <p>
              These barriers violate Title III of the Americans with Disabilities Act, 42 U.S.C. &sect; 12181
              et seq. Our client is prepared to file a formal complaint in [Federal District Court].
            </p>
            <p>
              However, we are willing to resolve this matter without litigation if your company agrees to:
              (1) remediate all accessibility barriers within 90 days, and (2) compensate our client in the
              amount of <span className="text-danger font-semibold">$12,500</span> for damages and
              attorney's fees.
            </p>
            <p>Please respond within 14 days to avoid further legal action.</p>
            <p className="text-text-muted">
              Sincerely,<br />
              [Attorney Name], Esq.<br />
              [Law Firm Name]
            </p>
          </div>
        </div>
        <p>
          This is not hypothetical. Thousands of D2C brands receive letters like this every year. The
          settlement amount is deliberately calibrated — high enough to fund the plaintiff firm's operation,
          low enough that most businesses pay rather than spend $50K+ on legal defense.
        </p>
        <p>
          And here's the worst part: <strong>29% of defendants get sued again within 12 months</strong>.
          Settling doesn't make you immune. If you don't fix the underlying violations, another plaintiff
          firm will find them.
        </p>

        {/* Section 5 */}
        <h2 id="protect-your-brand">How to Protect Your D2C Brand</h2>
        <p>
          The good news is that ADA compliance is achievable — and it's far cheaper than a lawsuit. Here's
          what actually works:
        </p>
        <ul>
          <li>
            <strong>Get a real audit, not an overlay.</strong> Accessibility overlay widgets (like those
            JavaScript toolbars you see on some sites) don't fix the underlying code issues. In January 2026,
            137 companies using overlays were still sued. Courts have explicitly ordered defendants to remove
            overlays and hire actual accessibility professionals.
          </li>
          <li>
            <strong>Fix at the code level.</strong> Real compliance means fixing your HTML, ARIA attributes,
            color contrast, keyboard navigation, and form labels in the actual source code — not layering a
            widget on top of broken markup.
          </li>
          <li>
            <strong>Monitor continuously.</strong> Every new product page, theme update, or third-party app
            installation can introduce new violations. One-time audits aren't enough — you need ongoing
            scanning to catch issues before plaintiff firms do.
          </li>
          <li>
            <strong>Document your compliance.</strong> Having documented proof that you actively audit and
            remediate accessibility issues is your best defense if you do receive a demand letter. It shows
            good faith and ongoing effort.
          </li>
        </ul>
        <p>
          AltorLab does all of this — <a href="/#how">deep scanning</a>, code-level remediation, ongoing
          monitoring, and compliance documentation. We work with D2C brands on Shopify, WooCommerce,
          BigCommerce, and custom platforms. <a href="/#pricing">Plans start at $149/month</a> — less than
          1% of what a single lawsuit costs.
        </p>
      </GuideLayout>
    </>
  )
}
