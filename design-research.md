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
