# Neutral Website Audit

**Scope.** This review covers the current Home, About, Products, and Contact routes at desktop and mobile widths, plus the real Next.js implementation in the Neutral repository. It is intentionally candid: the site has a compelling visual direction, but it is **not ready to be treated as a production marketing site** until the deployment blocker and the highest-priority consistency issues are resolved.

> **Bottom line:** the visual language is promising, but the website currently has a production-build failure, conflicting generations of navigation and styling, weak evidence in product surfaces, and an interior-page system that is more repetitive than intentional.

## Highest-priority flaws

| Priority | Flaw | Why it matters | Recommended correction |
|---|---|---|---|
| **P0** | **The production build fails.** `pnpm run build` reaches prerendering, then exits because `<Html>` is imported outside `pages/_document`; the failure occurs while generating `/500`. | The actual Next.js website cannot be deployed reliably, regardless of how polished the preview appears. | Trace the document import through the legacy error-page chain, remove it from App Router code, and make the build pass before any visual polish work continues. |
| **P1** | **Navigation is split between old and new site architecture.** The new top navigation exposes Home, About, Products, and Contact; the shared footer and prominent beta CTAs still point to legacy routes such as `/product`, `/onboarding`, `/support`, and `/download`. | Visitors are sent between two different information architectures. Conversion paths feel unfinished and pages will vary dramatically in visual language. | Decide the canonical public IA, update every header, footer, in-page CTA, sitemap, and redirect route around it, then either redesign legacy routes or remove them from public navigation. |
| **P1** | **The homepage’s “Signal Atlas” still reads as mood before meaning.** The route map contains labeled nodes, but the visual path is not easy to parse at first glance and its sequence is not reinforced through the rest of the page. | The hero is meant to create Neutral’s ownable mental model. If users cannot decode it, it becomes expensive ornament rather than explanation. | Convert the route to an unambiguous numbered sequence—Intent → Model → Context → Approval → Local boundary → Result—and reuse the exact grammar in the flow, product records, and Contact routing page. |
| **P1** | **The Products evidence cards still look partially like placeholder UI.** Empty outlined rectangles and generic schematics do not substantiate the factual claims beside them. | The page says “paper trail,” so abstract placeholders weaken credibility instead of demonstrating it. | Replace each decorative schematic with a recognizable record: model-selection receipt, permission approval log, Keychain/local-boundary note, platform matrix, or roadmap flag. Use real product screenshots as soon as they are available. |
| **P1** | **Interior pages use the same hero formula.** About, Products, and Contact all repeat a dark periwinkle hero with breadcrumb, large left headline, right paragraph, and metadata rail. | The system is cohesive but not differentiated; the pages feel generated from one template rather than designed around their jobs. | Give About an editorial thesis diagram, Products a denser inventory/board opening, and Contact a routing interface from the first viewport. Retain palette and type—not identical composition. |

## Important experience and conversion flaws

| Priority | Flaw | Why it matters | Recommended correction |
|---|---|---|---|
| **P1** | **The Contact form is a handoff, not a contact system.** It prepares a GitHub issue link after client-side input; it does not submit, save, validate beyond `required`, or acknowledge delivery. | This is honest for a static site, but the button label can still create an expectation of form submission. Support friction remains high. | Rename the button to **“Review GitHub issue”** until a backend exists. Later add a verified support inbox, anti-spam protection, server-side validation, and a reliable confirmation state. |
| **P1** | **There is no single conversion goal.** Home uses “Follow the beta,” Contact has a support form, and some legacy routes carry older product intent. The user is not given a clear primary outcome. | Marketing pages need one dominant action per audience; fragmented CTAs reduce learning and sign-ups. | Select one primary goal—for example, **Request beta access**—then use it consistently across Home, Products, About, header, and footer. Make GitHub/support a secondary route. |
| **P2** | **The brand mark is too quiet.** The small boxed “N” and wordmark are clean but could belong to nearly any AI product. | The most distinctive assets are the typography and color mood, not the brand itself. That reduces recall. | Use the final repository SVG more prominently in the first viewport and create a more tactile, recognizable lockup that can lead a page without headline support. |
| **P2** | **Lavender currently works as atmosphere more than a semantic signal.** It appears broadly in backgrounds and details. | A bright accent loses meaning when it is everywhere. | Restrict high-value lavender to active routes, primary actions, active nodes, node halos, and current-status tokens; leave Deep Periwinkle and Night Ink to carry atmosphere. |
| **P2** | **The mobile preview hides the core-page navigation.** At the audited mobile width, the preview header shows the brand and Contact control, but not a way to discover About or Products. | A substantial share of visitors will not encounter the new page system. | Provide a mobile menu or a compact route switcher with all top-level pages and a clearly visible primary CTA. |
| **P2** | **The page is long before it offers fresh proof.** The Home scroll is visually controlled but has several substantial text-led chapters before external proof, installation options, or examples. | Visitors who are not already persuaded may leave before reaching a concrete reason to act. | Bring one real interaction surface, app screenshot, or short concrete use-case higher in the scroll; preserve the manifesto but compress repeated framing language. |

## Accessibility, resilience, and maintenance risks

| Priority | Flaw | Evidence and impact | Recommended correction |
|---|---|---|---|
| **P1** | **The WebGL field has no failure fallback.** `new THREE.WebGLRenderer()` runs in an effect without a capability check or `try/catch`. | A WebGL/context-creation failure can surface as a client runtime error rather than gracefully falling back to the CSS/SVG route map. | Detect WebGL availability, catch renderer construction failures, and keep a complete CSS/SVG fallback visible. Add context-lost handling. |
| **P2** | **The motion component carries a class-generation mismatch.** `MotionField` returns `nx2-motion-field` while the active home system is `nx3-*`. | The current cascade happens to render, but cross-generation names make regressions and invisible layout bugs more likely. | Rename the canvas class and its CSS consistently to `nx3-motion-field`; then delete unused `nx` and `nx2` systems. |
| **P2** | **The global stylesheet contains multiple obsolete design generations.** `globals.css` has stacked legacy `.nx-*`, `.nx2-*`, `.nx3-*`, and `.sp-*` systems, route-specific `:has()` overrides, and CSS compatibility warnings during build. | This increases cascade fragility, makes future fixes slower, and is a likely contributor to earlier cross-section artifacts. | Consolidate active tokens and components into a single system, delete legacy blocks after route migration, and replace `justify-content: end` with `flex-end` where the build warns. |
| **P2** | **Metadata is out of date and not page-specific.** The shared description still describes an “iOS-first personal AI workspace,” “goal continuity,” shipped voice workflows, and a planned browser companion. New pages do not export their own metadata. | Search previews and social sharing will repeat old positioning and flatten the new information architecture. | Rewrite the base metadata to match current documentation, create route-level titles/descriptions, and produce a truthful Signal Atlas social image. |
| **P2** | **The hero’s visual map is not exposed as a robust semantic structure.** The atlas uses an `aria-label` on a generic `div`; much of its route is represented by decorative SVG and visual node placement. | The narrative can be ambiguous for screen-reader users and users who disable visual effects. | Provide a visually hidden ordered list of route steps with their meanings, and connect it to the route-map heading. |
| **P3** | **Motion is reduced only through the operating-system preference.** The implementation correctly honors `prefers-reduced-motion`, but offers no in-site control. | Users who want a calmer experience without changing OS-wide settings have no choice. | Add a site-level motion preference that persists in local storage and disables enhanced GSAP/WebGL effects. |
| **P3** | **The Three.js import is heavy for the visual payoff.** The field is small and mostly static, yet it imports the full library on the Home route. | Initial JavaScript cost may be disproportionate on low-end mobile devices. | Dynamically import the field after initial paint or replace it with SVG/CSS if performance testing shows it is not carrying a unique job. |

## Accuracy and trust gaps

The current page copy is substantially more careful than earlier iterations, but there are still trust gaps. “Memory boundary” cites a **120-fact cap** without surrounding context, which can read like a product guarantee rather than an implementation detail subject to change. The top-level metadata remains older than the new documentation-grounded story. The Contact page is correct to avoid invented phone numbers, office locations, and unverified email, but that honesty now exposes a genuine business-readiness gap: the project needs a verified support and privacy contact before a public marketing launch.

## Recommended fix order

| Sprint | Work | Outcome |
|---|---|---|
| **1 — Release safety** | Fix the `<Html>` build failure; reconcile header/footer/CTA routes; add truthful metadata; add a WebGL fallback. | A deployable, navigable, technically safer site. |
| **2 — Credibility** | Replace product placeholders with real operational evidence and screenshots; establish a consistent beta conversion path; clarify form handoff. | The product story becomes believable rather than decorative. |
| **3 — Brand system** | Make the signal route persistent and semantic; differentiate interior-page openings; consolidate CSS and the brand lockup. | A more ownable, maintainable, recognizably Neutral experience. |
| **4 — Refinement** | Add motion control, tune mobile navigation, tighten type scale, and test performance on real mobile hardware. | A calmer and more robust experience for real visitors. |

## Audit evidence

The report is based on full-page desktop and mobile inspection of all four current routes, source review of the shared layout, footer, scrollytelling, motion, navigation, and global styling, and a production-build attempt. The build fails after type checking while prerendering the error route because Next detects an invalid `next/document` usage. The direct source grep did not expose the import, so the next engineering step is to trace the legacy error-page dependency chain rather than guessing at the file to edit.

## References

[1]: https://nextjs.org/docs/messages/no-document-import-in-page "Next.js: no-document-import-in-page"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API "MDN: WebGL API"
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion "MDN: prefers-reduced-motion"
