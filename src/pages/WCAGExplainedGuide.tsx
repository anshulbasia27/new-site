import { SEOHead } from '../components/SEOHead'
import { GuideLayout } from '../components/GuideLayout'

const toc = [
  { id: 'what-is-wcag', label: 'What Is WCAG?' },
  { id: 'four-principles', label: 'The 4 Principles: POUR' },
  { id: 'common-violations', label: 'Common WCAG Violations on Ecommerce Sites' },
  { id: 'how-to-test', label: 'How to Test Your Site' },
  { id: 'conformance-levels', label: 'A vs AA vs AAA' },
]

export default function WCAGExplainedGuide() {
  return (
    <>
      <SEOHead
        title="WCAG 2.1 AA Explained: The Ecommerce Owner's Plain-English Guide"
        description="A plain-English guide to WCAG 2.1 AA for ecommerce store owners. Learn the 4 principles, common violations on D2C sites, how to test, and what conformance level you need."
        path="/guides/wcag-21-aa-explained"
      />
      <GuideLayout
        title="WCAG 2.1 AA Explained: The Ecommerce Owner's Plain-English Guide"
        subtitle="WCAG is the technical standard courts use to evaluate website accessibility. Here's what it actually says — in language you can understand."
        readTime="10 min read"
        toc={toc}
      >
        {/* Section 1 */}
        <h2 id="what-is-wcag">What Is WCAG (And Why Should You Care)?</h2>
        <p>
          WCAG stands for <strong>Web Content Accessibility Guidelines</strong>. It's a set of technical
          standards published by the World Wide Web Consortium (W3C) that define how to make websites
          accessible to people with disabilities.
        </p>
        <p>
          WCAG isn't a law itself — it's a standard. But when courts evaluate whether a website violates
          the ADA (Americans with Disabilities Act), they almost universally reference WCAG as the
          benchmark. The Department of Justice has also cited WCAG 2.1 AA in its guidance on web
          accessibility.
        </p>

        <div className="callout-danger">
          <p className="text-sm text-text-secondary leading-relaxed !mb-0">
            <strong>WCAG 2.1 Level AA is effectively the legal standard</strong> your site will be measured
            against if you receive a demand letter or lawsuit. Understanding what it requires is the first
            step to protecting your business.
          </p>
        </div>

        <p>
          The current version is WCAG 2.1, published in 2018. (WCAG 2.2 was released in 2023 but 2.1 AA
          remains the most commonly referenced standard in litigation.) It contains 78 success criteria
          organized under 4 core principles.
        </p>

        {/* Section 2 */}
        <h2 id="four-principles">The 4 Principles: POUR</h2>
        <p>
          Every WCAG requirement falls under one of four principles, often remembered by the acronym
          <strong> POUR</strong>:
        </p>

        <h3>1. Perceivable</h3>
        <p>
          Users must be able to perceive the content. If someone can't see, they need text alternatives
          for images. If someone can't hear, they need captions for video. Key requirements:
        </p>
        <ul>
          <li><strong>Text alternatives (1.1.1):</strong> All non-text content (images, icons, buttons) must have text alternatives that describe their purpose. For ecommerce, this means every product image needs meaningful alt text — not just "image1.jpg".</li>
          <li><strong>Captions and audio descriptions (1.2):</strong> Pre-recorded video needs captions; audio content needs transcripts.</li>
          <li><strong>Color contrast (1.4.3):</strong> Text must have a contrast ratio of at least 4.5:1 against its background (3:1 for large text). Many ecommerce sites fail this on "Add to Cart" buttons, sale badges, and placeholder text.</li>
          <li><strong>Resize text (1.4.4):</strong> Users must be able to zoom to 200% without loss of content or functionality.</li>
        </ul>

        <h3>2. Operable</h3>
        <p>
          Users must be able to operate the interface. Not everyone uses a mouse — some people navigate
          entirely by keyboard, switch devices, or voice control. Key requirements:
        </p>
        <ul>
          <li><strong>Keyboard accessible (2.1.1):</strong> All functionality must be operable via keyboard alone. This includes navigation menus, product filters, quick-view modals, and the entire checkout flow.</li>
          <li><strong>No keyboard traps (2.1.2):</strong> Users must be able to navigate away from any component using the keyboard. Chat widgets and popup modals are common offenders.</li>
          <li><strong>Enough time (2.2):</strong> If content has time limits (like a checkout timer), users must be able to extend or disable them.</li>
          <li><strong>Navigable (2.4):</strong> Pages need clear titles, logical heading structure, visible focus indicators, and skip-navigation links.</li>
        </ul>

        <h3>3. Understandable</h3>
        <p>
          Content and interface behavior must be understandable. Users should be able to read the content
          and predict how the interface will behave. Key requirements:
        </p>
        <ul>
          <li><strong>Readable (3.1):</strong> The page must declare its language (e.g., <code>lang="en"</code>). If content switches languages, that must be marked too.</li>
          <li><strong>Predictable (3.2):</strong> Navigation should be consistent across pages. Components that look the same should behave the same. Changing a dropdown shouldn't automatically submit a form without warning.</li>
          <li><strong>Input assistance (3.3):</strong> Form errors must be identified clearly and described in text. Required fields must be labeled. Suggestions for fixing errors should be provided when possible.</li>
        </ul>

        <h3>4. Robust</h3>
        <p>
          Content must be robust enough to be interpreted by a wide variety of user agents, including
          assistive technologies like screen readers. Key requirements:
        </p>
        <ul>
          <li><strong>Parsing (4.1.1):</strong> HTML must be well-formed — no duplicate IDs, proper nesting, complete start/end tags.</li>
          <li><strong>Name, Role, Value (4.1.2):</strong> All UI components must have proper names and roles that assistive technologies can read. Custom buttons, dropdowns, and modals need appropriate ARIA attributes.</li>
          <li><strong>Status messages (4.1.3, WCAG 2.1):</strong> Status updates (like "Item added to cart") must be announced to screen readers without stealing focus.</li>
        </ul>

        {/* Section 3 */}
        <h2 id="common-violations">Common WCAG Violations on Ecommerce Sites</h2>
        <p>
          After scanning hundreds of D2C sites, these are the violations we find most frequently — ranked
          by how likely they are to trigger a lawsuit:
        </p>

        <div className="my-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Violation</th>
                <th>WCAG Criterion</th>
                <th>Risk Level</th>
                <th>Where We Find It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Images missing alt text</td>
                <td>1.1.1</td>
                <td><span className="text-danger font-semibold">Critical</span></td>
                <td>Product images, banners, icons</td>
              </tr>
              <tr>
                <td>Form inputs without labels</td>
                <td>1.3.1, 4.1.2</td>
                <td><span className="text-danger font-semibold">Critical</span></td>
                <td>Search bars, email signup, checkout forms</td>
              </tr>
              <tr>
                <td>Color contrast failures</td>
                <td>1.4.3</td>
                <td><span className="text-danger font-semibold">Critical</span></td>
                <td>Sale badges, CTA buttons, footer links</td>
              </tr>
              <tr>
                <td>Empty links and buttons</td>
                <td>2.4.4, 4.1.2</td>
                <td><span className="text-orange-400 font-semibold">High</span></td>
                <td>Social icons, icon-only buttons, product grid</td>
              </tr>
              <tr>
                <td>Keyboard navigation traps</td>
                <td>2.1.2</td>
                <td><span className="text-orange-400 font-semibold">High</span></td>
                <td>Chat widgets, modal popups, mega menus</td>
              </tr>
              <tr>
                <td>Missing page language</td>
                <td>3.1.1</td>
                <td><span className="text-yellow-500 font-semibold">Medium</span></td>
                <td>HTML element missing lang attribute</td>
              </tr>
              <tr>
                <td>Missing skip navigation</td>
                <td>2.4.1</td>
                <td><span className="text-yellow-500 font-semibold">Medium</span></td>
                <td>No way to skip past header/navigation</td>
              </tr>
              <tr>
                <td>Missing ARIA landmarks</td>
                <td>1.3.1</td>
                <td><span className="text-yellow-500 font-semibold">Medium</span></td>
                <td>No main, nav, or footer landmarks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout-info">
          <p className="text-sm text-text-secondary leading-relaxed !mb-0">
            The first three — missing alt text, unlabeled forms, and contrast failures — appear on virtually
            every ecommerce site we scan. They're also the violations most commonly cited in demand letters
            because they're easy to detect with automated tools and easy to prove in court.
          </p>
        </div>

        {/* Section 4 */}
        <h2 id="how-to-test">How to Test Your Site</h2>
        <p>
          You can do a quick preliminary check using free tools, though a comprehensive audit requires
          expert review. Here's where to start:
        </p>
        <ul>
          <li>
            <strong>Automated scan:</strong> Use browser extensions like axe DevTools, WAVE, or Lighthouse
            accessibility audit. These catch about 30–40% of WCAG issues — primarily the low-hanging fruit
            like missing alt text, contrast failures, and missing form labels.
          </li>
          <li>
            <strong>Keyboard test:</strong> Try navigating your entire site using only the Tab, Enter, and
            Arrow keys. Can you reach every link, button, and form field? Can you open and close modals?
            Can you complete checkout? If you get stuck anywhere, that's a keyboard trap — a WCAG 2.1.2
            violation.
          </li>
          <li>
            <strong>Screen reader test:</strong> Turn on VoiceOver (Mac) or NVDA (Windows) and try using
            your site. Do images have meaningful descriptions? Are buttons and links announced clearly? Does
            the checkout flow make sense without seeing the screen?
          </li>
          <li>
            <strong>Zoom test:</strong> Zoom your browser to 200%. Does content reflow properly? Is
            anything cut off, overlapping, or hidden? Can you still complete a purchase?
          </li>
        </ul>

        <div className="stat-highlight">
          <span className="stat-highlight-value">60–70%</span>
          <span className="stat-highlight-label">
            of real accessibility barriers are missed by automated tools. Issues like keyboard traps,
            logical reading order, and meaningful alt text require human judgment.
          </span>
        </div>

        {/* Section 5 */}
        <h2 id="conformance-levels">A vs AA vs AAA: What Conformance Level Do You Need?</h2>
        <p>
          WCAG defines three conformance levels, each more stringent than the last:
        </p>

        <div className="my-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>What It Means</th>
                <th>Do You Need It?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A</strong></td>
                <td>The bare minimum. Addresses the most severe barriers — like providing alt text for images and making content keyboard-accessible.</td>
                <td>Necessary but not sufficient. Level A alone won't protect you from lawsuits.</td>
              </tr>
              <tr>
                <td><strong>AA</strong></td>
                <td>The standard level. Adds requirements for color contrast, resize text, consistent navigation, and more. This is what courts and the DOJ reference.</td>
                <td><span className="text-danger font-semibold">Yes — this is the target.</span> WCAG 2.1 AA is the legal benchmark for ADA compliance.</td>
              </tr>
              <tr>
                <td><strong>AAA</strong></td>
                <td>The highest level. Includes requirements like sign language interpretation, extended audio descriptions, and stricter contrast ratios (7:1).</td>
                <td>Not required for legal compliance. Aspirational for most sites. Some criteria are impractical for ecommerce.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout-danger">
          <p className="text-sm text-text-secondary leading-relaxed !mb-0">
            <strong>WCAG 2.1 Level AA is the standard you should target.</strong> It includes all Level A
            criteria plus additional requirements that courts expect. It's achievable for any ecommerce site
            and provides meaningful legal protection.
          </p>
        </div>

        <p>
          Level AAA is admirable but not the legal benchmark — and some AAA criteria (like providing sign
          language for all video content) aren't practical for most online stores. Focus on AA first, and
          you'll be in a strong position.
        </p>
        <p>
          Need help getting there? <a href="/#contact">Get a free audit</a> and we'll show you exactly
          where your site stands — and what needs to be fixed.
        </p>
      </GuideLayout>
    </>
  )
}
