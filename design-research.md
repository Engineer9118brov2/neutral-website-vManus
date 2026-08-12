# Neutral design research synthesis

## UI UX Pro Max

Neutral is a **consumer-grade AI productivity workspace** spanning iPhone, Mac, iPad, and Apple Watch. The implementation must start from a coherent design system, preserve 4.5:1 contrast, give every interactive target a 44px-or-greater tap area, reserve layout space for media, use semantic tokens rather than scattered raw values, and keep responsive behavior intentional. Motion belongs to orientation and feedback, using 150–300 ms transform/opacity transitions with reduced-motion support; visual decoration must never be a substitute for task clarity.

## Anthropic frontend design

The homepage must open with a **thesis**, not generic SaaS proof blocks. Typography should become a memorable part of the composition, structure should communicate real product logic, and a single controlled visual risk should make the site recognizable. The surrounding interface should remain restrained, keyboard accessible, and responsive. Copy must describe what a person controls, use direct active language, and avoid unsupported claims.

## Open Design frontend and Apple system

Neutral should adopt a cinematic-to-operational rhythm: a deep dark product scene makes the assistant feel alive, then pale neutral content sections surface the real capabilities and platform presence. Product media is expressive; interface chrome stays precise. The system should use a constrained neutral foundation, a single electric-blue action accent, tight display typography, compact utility typography, purposeful rounded geometry, restrained shadows, and dynamic density across showcase versus information-dense modules. Generic gradients, indiscriminate glass cards, over-rounding, and unrelated ornamental effects are excluded.

## Design implications

The redesign will combine **native precision** with an original **Neural Constellation** signature: a living orchestration map in the hero that reveals how Scribe delegates from one intention to specialized tools. This gives the website a product-specific visual thesis rather than imitating any known platform. The homepage will prioritize one decisive beta action, accurately distinguish shipped functionality from roadmap positioning, and make the Apple-platform breadth immediately legible.

## Existing Grok redesign audit

The current baseline is technically sound: it uses a responsive header, mobile drawer, visible focus treatment, reduced-motion fallback, light/dark chapter contrast, honest roadmap copy, and progressive reveals. Its main opportunity is **distinctiveness and product storytelling**. The hero treats the only available product screenshot as a low-opacity texture rather than a product artifact, so the most important first viewport feels like a polished but generic dark SaaS banner. The proof cards, feature cards, and roadmap are consistently styled but visually interchangeable; their equal-weight grid rhythm does not communicate how Neutral’s orchestration and multi-device capability actually work. The next design should retain its content integrity and accessibility while replacing that generic card language with a high-fidelity system map, device-aware scenes, and a stronger cinematic-to-operational narrative cadence.

## Live implementation review

The first rendered pass has achieved the intended change in visual hierarchy: the signature hero is now a readable orchestration field rather than a generic dark banner, and the surrounding chapters distinguish continuity, control, current functionality, and roadmap. The central diagram remains legible while supporting a large asymmetrical thesis headline. Before release, the generated assets must use public project-storage URLs when referenced in the independent Next.js repository preview; project-relative `/manus-storage/` URLs are correct within the managed web project but are not served by the repository’s separate local server.

## User-supplied design-system correction

The attached design-system HTML supersedes the prior exploratory palette. Its enduring contract is a warm ivory and periwinkle system: `#F0F0EA` background, `#E6E6DF` surface, `#DBDBD2` borders, `#1E2233` ink, `#6B7299` secondary text, and `#4B548B` accent for light contexts; `#12141C` background, `#1B1E2C` surface, `#2A2D3D` borders, `#F0F0EA` text, `#9FA5C8` secondary text, and `#8890C4` accent for dark contexts. Bricolage Grotesque, DM Sans, and a mono utility role are retained. The generated logo will be replaced by a neutral visual placeholder so the GitHub-managed brand asset has a clear insertion point.

## Documentation-grounded product facts for the scrollytelling rebuild

The repository’s product documents establish **Neutral** as a native iOS, macOS, and watchOS AI chat application with an Electron/React desktop companion. It supports multiple model routes and Apple-platform tool execution, including long-term agent memory, local conversation storage, device-local credentials, Calendar, Reminders, Notes, Contacts, Files, web lookup, GitHub, Shell, Clipboard, Notifications, and other permission-aware tools. Tool results become visible conversation cards and the tool loop is capped at six follow-up levels. The platform supports StoreKit trial and entitlement code but billing is not live.

Marketing copy must not claim a zero-setup experience: Neutron still requires a user-supplied provider key or a locally running Ollama for every route. Nor may the website imply that Electron can currently execute tools, or that later-roadmap work such as MemCon 3.0, embedded gateway installation, distributed agent nodes, the iOS walkie-talkie mode, or full OS-level agency is shipped. The fresh story should position Neutral as a **native, multi-model dispatch client with transparent controls**, label device-side tool execution accurately, and clearly separate confirmed foundation from roadmap.

## Multi-page website facts and contact constraints

The expanded site will describe Neutral as open-source native AI chat for Apple platforms with an Electron desktop companion. Its confirmed surface area includes multi-model connection paths, Apple-side permission-aware tool execution, locally stored conversations, system-Keychain provider credentials, and current support through the project’s public GitHub Issues and Discussions channels. The About page will focus on the project’s mission of making model choice and local control visible rather than inventing a company-origin story or team biography.

The repository does not establish a verified office location, phone number, mailing address, or deliverable support email. The privacy draft explicitly flags `privacy@neutral.app` as unverified. The Contact page must therefore use a client-side routing form with an honest “opens the project support channel” action, plus confirmed links to GitHub Issues and Discussions; it must not fabricate telephone, address, or email details.

## Website audit — visual and responsive findings (August 2026)

The desktop and mobile review confirms that the core page layouts render without evident clipping or overlap after the compact-card fix. Mobile is readable, and the Contact form keeps its field hierarchy intact. The strongest visual flaw is not breakage but **system repetition**: About, Products, and Contact begin with nearly the same periwinkle hero formula, reducing the distinct narrative roles that the information architecture promised. The brand mark is also too small to carry a first-impression identity role.

The homepage’s route diagram is visually attractive but still more atmospheric than semantic; a first-time visitor cannot immediately decode the model/context/tool/local/result pathway. Products still contains decorative empty rectangle schematics, so its operating records do not yet look like real product evidence. Accent lavender is distributed broadly as atmosphere rather than functioning consistently as the cue for active state, path, or factual status. On the small-screen Home page, large text and evidence sequences are readable but make the scroll very long, and the navigation collapses to brand plus Contact only—limiting discovery of About and Products from mobile.

## Remediation validation — current state

The inherited `NODE_ENV=development` value, rather than an application source import, caused the misleading Next error-page failure; forcing `NODE_ENV=production` in the package build script now produces a successful 15-route production build. The revised desktop Product page was checked after replacing absolute-positioned evidence/card copy with a flexible content flow: each record, heading, body, and status note now has distinct space with no observed text overlap. The Home, About, Products, and Contact pages have page-specific visual devices, and mobile now has a discoverable menu plus a persistent reduced-motion option. Legacy CSS still produces three non-blocking autoprefixer compatibility warnings and remains a future cleanup target.
