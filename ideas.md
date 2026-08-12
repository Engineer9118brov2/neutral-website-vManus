# Neutral website design exploration

## Three explored directions

### Theme Name: Neural Constellation

**Very Brief Intro:** A cinematic, precision-native product story where a person’s intent travels through a living constellation of specialists. The interface is quiet and tactile while the orchestration system becomes the hero’s singular expressive moment.

**Probability:** 0.06

### Theme Name: Field Notes for Intelligence

**Very Brief Intro:** A bright, editorial field journal that frames Neutral as a trustworthy personal instrument rather than an AI spectacle. Annotation-like labels and careful typography translate continuity into a calm reading experience.

**Probability:** 0.03

### Theme Name: System Garden

**Very Brief Intro:** A warm, organic interface that visualizes work as a growing ecosystem of plans, memories, and tools. Soft cellular forms make a technical product feel unusually personal and patient.

**Probability:** 0.08

## Chosen direction: Neural Constellation

### Design Movement

**Cinematic Native Product Design** meets **editorial systems mapping**. It uses the restraint and material clarity of premium Apple-platform product storytelling, but replaces hardware worship with an original visual of intelligent coordination: one human intention becoming a controlled network of tools, models, and context.

### Core Principles

1. **Intent before interface.** Every major section starts from a concrete person-controlled outcome—capture, continue, delegate, choose—not generic AI capability claims.
2. **One expressive system moment.** The hero’s constellation is the signature; everything around it is highly restrained and precise.
3. **Cinematic-to-operational rhythm.** Dark showcase scenes establish emotion and product atmosphere, then warm neutral operating surfaces make real capabilities easy to scan.
4. **Honest product boundaries.** Shipped capabilities and forward-looking companion work use visibly different labels and treatments, never invented product proof.

### Color Philosophy

Neutral will live mostly in **Orbit Black** (`#0D0F14`), **Cloud Paper** (`#F5F5F2`), **Graphite Text** (`#1D2028`), **Mist Gray** (`#AAB0BD`), and **Signal Teal** (`#64E4C4`). The neutrals make Neutral feel composed, native, and long-lived. Signal Teal is intentionally scarce: it traces a person’s intent through the constellation, marks active states, and creates a recognizable action language without falling into generic blue or purple AI branding.

### Layout Paradigm

The homepage is a sequence of **chapters on a signal path**, not a centered landing-page stack. The hero places its narrative copy on an asymmetric left rail and a living orchestration surface on the right. Feature chapters alternate between an editorial caption rail and a wide product scene. The operating model is diagrammatic: a single person’s request moves across spatially connected nodes rather than through rows of equal cards.

### Signature Elements

1. **The Constellation Field:** A responsive field of drifting model, memory, voice, and tool nodes connected by purposeful signal paths; it illustrates orchestration, not decoration.
2. **Intent Tokens:** Small monospaced, outlined labels that classify messages as `SHIPPED`, `YOUR CHOICE`, or `IN DEVELOPMENT`, creating factual clarity in every chapter.
3. **Signal Line:** A thin teal path that carries through key sections and becomes a subtle navigation/progress motif.

### Interaction Philosophy

Interactions should feel like a well-built native control: quick, quiet, and physically credible. Hovering a constellation node reveals what it contributes; the corresponding line becomes brighter. Buttons tighten slightly on press and never overshoot. The mobile experience turns the wide constellation into a linear handoff sequence without losing meaning.

### Animation

The constellation uses a slow 12–16 second ambient drift with opacity and transform only. Nodes respond to hover/focus in 180ms; their connected line brightens in 220ms. Editorial chapters reveal in 420ms with a 50ms stagger, using a deliberate custom ease-out. The design always honors `prefers-reduced-motion`, where all semantic content is immediately visible and the constellation becomes still.

### Typography System

**Bricolage Grotesque** remains the distinctive display voice, set in tight, high-contrast weights for chapter headlines. **DM Sans** carries interface and narrative copy at comfortable reading sizes. **DM Mono** is reserved for intent tokens, status labels, and model/tool metadata. Display type uses compressed line-height and close tracking; body text stays at least 16px with generous 1.55–1.65 line height; utilities are uppercase only when communicating a durable category.

### Brand Essence

**Neutral is the native personal AI workspace that turns one intention into controlled, continuous action across your Apple devices.** Its personality is **composed, capable, and human**.

### Brand Voice

Headlines are concise, grounded, and action-oriented. CTAs say precisely what happens; supporting copy specifies user benefit without inflated claims. Examples: “Bring the whole thread with you.” and “Choose the runtime for this work.” Generic greeting copy and vague calls such as “Get started today” are prohibited.

### Wordmark & Logo

The existing Neutral mark remains the anchor. In the refreshed system it is treated like a tactile app object: a square field with a softly inset, signal-teal edge at large showcase scale. The wordmark is letter-spaced Bricolage Grotesque with a subtly customized `N` terminal rather than a default text treatment.

### Signature Brand Color

**Signal Teal — `#64E4C4`**. This is Neutral’s unmistakable current of user intent and should appear only for genuine action, active connectivity, or data moving through the constellation.

## Style Decisions

- Existing content remains factual: current screenshots are reused only as product evidence, and planned browser/goal capabilities receive explicit roadmap labels.
- The generated design-system’s generic purple/pink palette and Inter pairing are deliberately rejected because they dilute Neutral’s native, controlled character.
- Cards must earn their framing: the visual system uses full scenes, editorial rails, and operational records before defaulting to a card grid.

## Attached design-system override

The attached `design-system.html` is now the **authoritative visual contract**. Its palette replaces the previous Signal Teal direction: light surfaces use **Warm Ivory** (`#F0F0EA`), **Soft Surface** (`#E6E6DF`), **Soft Border** (`#DBDBD2`), **Ink** (`#1E2233`), **Muted Periwinkle** (`#6B7299`), and **Neutral Accent** (`#4B548B`). Dark scenes use **Night Ink** (`#12141C`), **Dark Surface** (`#1B1E2C`), **Dark Border** (`#2A2D3D`), **Warm Ivory** (`#F0F0EA`), **Lavender** (`#9FA5C8`), and **Light Accent** (`#8890C4`). Typography remains Bricolage Grotesque for display, DM Sans for UI and reading, and a monospace utility face. Generated logo art is retired: the interface now exposes a neutral logo placeholder slot designed to be replaced by the repository’s own file.

### Purple-forward distribution

The dark architecture now visibly leads with the supplied Periwinkle family rather than merely using it as a tiny interaction accent. **Deep Periwinkle** (`#4B548B`) becomes the hero’s atmospheric field and the large chapter-surface tone; **Lavender** (`#9FA5C8`) drives active routes, node halos, and primary actions; **Light Accent** (`#8890C4`) carries signal lines and controls; and **Muted Periwinkle** (`#6B7299`) remains reserved for secondary labels. Warm Ivory keeps the light chapters grounded, so the increased purple feels intentional rather than generic neon.
