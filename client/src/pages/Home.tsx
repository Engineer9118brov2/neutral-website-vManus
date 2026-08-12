/* Neural Dispatch homepage: factual Apple-native scrollytelling with controlled bento and ScrollTrigger choreography. */
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionField } from "@/components/MotionField";

const bento = [
  { number: "01", title: "Model routes, not lock-in", body: "Choose Claude, GLM, MiniMax, a local Ollama model, or an OpenAI-compatible endpoint from one native client.", className: "nx2-bento-large" },
  { number: "02", title: "Tool results stay visible", body: "Apple-side agents can execute permission-aware tools and return the result as a card in the conversation.", className: "nx2-bento-wide" },
  { number: "03", title: "Memory with a boundary", body: "Agent memory is deduplicated, capped, and kept distinct from the product’s longer-term memory-graph vision.", className: "" },
  { number: "04", title: "Keys on the device", body: "Provider credentials live in the system Keychain; iCloud sync is disabled for the current iOS release.", className: "" },
  { number: "05", title: "Native where it counts", body: "iPhone, iPad, macOS, and Apple Watch share one codebase. An Electron companion extends the desktop surface.", className: "nx2-bento-tall" },
];

const status = [
  { status: "Working now", title: "Native multi-model chat", body: "Apple-platform chat, model connection paths, provider settings, trial and entitlement code, vault, and MCP connectors are present." },
  { status: "Working now", title: "Apple-side tool execution", body: "Calendar, Reminders, Notes, Contacts, Files, web, shell, GitHub, and other tools run through a permission-aware loop." },
  { status: "Explicitly next", title: "Tool parity & zero-setup", body: "Electron tool execution, a truly zero-key Neutron route, live billing, and the advanced memory graph are not being presented as shipped." },
];

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".nx2-reveal").forEach((element) => gsap.fromTo(element, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out", immediateRender: false, scrollTrigger: { trigger: element, start: "top 86%" } }));
      gsap.to(".nx2-progress > span", { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".nx2-home", start: "top top", end: "bottom bottom", scrub: 0.25 } });
      gsap.utils.toArray<HTMLElement>(".nx2-flow-step").forEach((step, index) => {
        gsap.fromTo(step, { autoAlpha: 0.3, x: 24 }, { autoAlpha: 1, x: 0, duration: 0.45, ease: "power2.out", immediateRender: false, scrollTrigger: { trigger: step, start: "top 72%" } });
        gsap.to(`.nx2-flow-rail span:nth-child(${index + 1})`, { scaleY: 1, transformOrigin: "top", scrollTrigger: { trigger: step, start: "top 68%", end: "bottom 62%", scrub: 0.4 } });
      });
      ScrollTrigger.matchMedia({ "(min-width: 900px)": () => gsap.to(".nx2-flow-sticky", { y: -18, ease: "none", scrollTrigger: { trigger: "#nx2-motion-story", start: "top bottom", end: "bottom top", scrub: 0.7 } }) });
    }, root);
    return () => context.revert();
  }, []);

  return <div className="nx2-home" ref={root}>
    <div className="nx2-progress" aria-hidden="true"><span /></div>
    <section className="nx2-hero" id="top" aria-labelledby="nx2-hero-title"><MotionField /><div className="nx2-shell nx2-hero-layout"><div className="nx2-hero-copy"><p className="nx2-kicker nx2-reveal"><i />Native agent harness</p><h1 id="nx2-hero-title" className="nx2-reveal">One harness.<br />All your models.<br /><em>No vendor lock-in.</em></h1><p className="nx2-intro nx2-reveal">Neutral is native AI chat for Apple platforms, plus an Electron desktop companion—built around the providers, local models, and permission boundaries you choose.</p><div className="nx2-actions nx2-reveal"><a href="#status" className="nx2-primary">Follow the beta <span>↗</span></a><a href="#nx2-motion-story" className="nx2-secondary">Watch the dispatch</a></div><div className="nx2-platforms nx2-reveal"><span>iPhone</span><span>iPad</span><span>Mac</span><span>Apple Watch</span><span>Electron companion</span></div></div><div className="nx2-hero-spec nx2-reveal" aria-label="Neutral system facts"><span>00 / NEUTRAL</span><span>LOCAL-FIRST PATHS</span><span>2026 BUILD</span></div></div><div className="nx2-scroll-cue"><span>SCROLL TO TRACE A REQUEST</span><i /></div></section>
    <section className="nx2-flow" id="nx2-motion-story" aria-labelledby="nx2-flow-title"><div className="nx2-shell nx2-flow-layout"><div className="nx2-flow-sticky nx2-reveal"><p className="nx2-kicker nx2-kicker-dark"><i />The dispatch, in view</p><h2 id="nx2-flow-title">A request should not lose its guardrails.</h2><p>Neutral exposes the useful decisions: which model is involved, where a tool is acting, and which context returns to the conversation.</p><div className="nx2-flow-rail" aria-hidden="true"><span /><span /><span /></div></div><div className="nx2-flow-list"><article className="nx2-flow-step"><span>01</span><div><p>Connect your route</p><h3>Bring a provider—or run local.</h3><small>Claude, GLM, MiniMax, Ollama, and compatible endpoints are available choices. Neutron is not zero-setup yet.</small></div></article><article className="nx2-flow-step"><span>02</span><div><p>Keep the action legible</p><h3>Tools return as visible work.</h3><small>Apple-side tools execute through a bounded loop, then come back to chat as a concrete result—not a hidden side effect.</small></div></article><article className="nx2-flow-step"><span>03</span><div><p>Continue with the evidence</p><h3>Memory has a defined limit.</h3><small>Long-term agent memory is deduplicated and capped; the richer memory graph remains a stated future direction.</small></div></article></div></div></section>
    <section className="nx2-bento-section" id="capabilities" aria-labelledby="nx2-bento-title"><div className="nx2-shell"><div className="nx2-section-head nx2-reveal"><p className="nx2-kicker"><i />Confirmed capabilities</p><h2 id="nx2-bento-title">More control, without a control room.</h2><p>One continuous workspace for the models and Apple-platform tools you actually use—without pretending every future system already exists.</p></div><div className="nx2-bento-grid">{bento.map((card) => <article className={`nx2-bento-card nx2-reveal ${card.className}`} key={card.number}><span>{card.number}</span><div><p>{card.title}</p><h3>{card.body}</h3></div></article>)}</div></div></section>
    <section className="nx2-status-section" id="status" aria-labelledby="nx2-status-title"><div className="nx2-shell"><div className="nx2-status-heading nx2-reveal"><p className="nx2-kicker nx2-kicker-dark"><i />Honest status</p><h2 id="nx2-status-title">Build trust by drawing the line.</h2><p>The product is strongest when current capability and roadmap are both clear.</p></div><div className="nx2-status-list">{status.map((item) => <article className="nx2-status-row nx2-reveal" key={item.title}><span className={item.status === "Working now" ? "nx2-live" : "nx2-next"}>{item.status}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
    <section className="nx2-close"><div className="nx2-shell nx2-close-inner nx2-reveal"><div><p className="nx2-kicker nx2-kicker-dark"><i />Open source / MIT</p><h2>Make your AI stack answer to you.</h2><p>Follow the project, inspect the code, and help shape the native multi-model client.</p></div><a href="#top" className="nx2-primary nx2-primary-dark">Follow the beta <span>↗</span></a></div></section>
  </div>;
}
