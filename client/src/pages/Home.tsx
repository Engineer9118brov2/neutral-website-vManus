/**
 * Neural Constellation: a cinematic native-product story in which one human intent
 * travels through controlled context, model, and tool handoffs. Keep the UI precise,
 * quiet, factual, and teal-accented; avoid generic SaaS card grids.
 */
import { ArrowUpRight, Command, Mic, Orbit, ShieldCheck, Workflow } from "lucide-react";

const steps = [
  { number: "01", title: "Name the thread", body: "Start with the thing you actually want to move forward—not a blank prompt.", icon: Command },
  { number: "02", title: "Choose the path", body: "Route a task through local or hosted models with the boundaries made visible.", icon: ShieldCheck },
  { number: "03", title: "Keep it moving", body: "Voice, context, and tools stay close to the work as it develops across devices.", icon: Workflow },
];

const roadmap = [
  { stage: "Now", label: "Native foundation", detail: "Apple-native chat, model routing, voice input, and readback." },
  { stage: "Next", label: "More surface", detail: "A browser companion for research, code, files, and web-heavy work." },
  { stage: "Then", label: "Deeper continuity", detail: "Goal-aware sessions that carry the right context forward." },
];

function SignalMark({ large = false }: { large?: boolean }) {
  return (
    <img
      className={large ? "signal-mark signal-mark-large" : "signal-mark"}
      src="/manus-storage/neutral-signal-mark_3b31cc5f.png"
      alt="Neutral signal mark"
    />
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Neutral home">
          <SignalMark />
          <span>neutral</span>
        </a>
        <nav className="desktop-links" aria-label="Primary navigation">
          <a href="#system">System</a>
          <a href="#continuity">Continuity</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
        <a className="nav-cta" href="#beta">
          Request beta <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.1} />
        </a>
      </header>

      <main id="top">
        <section className="constellation-hero" aria-labelledby="hero-title">
          <div className="hero-grid-noise" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-identity" aria-label="Neutral personal instrument">
                <SignalMark large />
                <span>neutral</span><i>personal instrument</i>
              </div>
              <p className="eyebrow"><span className="live-dot" />Personal AI workspace</p>
              <h1 id="hero-title">Bring the whole thread with you.</h1>
              <p className="hero-lede">
                Neutral turns a passing thought into work that can keep moving—across your goals, your models, and your Apple devices.
              </p>
              <div className="hero-actions">
                <a className="button button-signal" href="#beta">Request beta access <ArrowUpRight aria-hidden="true" size={17} /></a>
                <a className="button button-quiet" href="#system">See how it moves</a>
              </div>
              <div className="hero-facts" aria-label="Neutral product principles">
                <span><i />Goal continuity</span>
                <span><i />Runtime control</span>
                <span><i />Voice-ready</span>
              </div>
            </div>

            <div className="constellation-stage" aria-label="An illustration of Neutral orchestration">
              <div className="stage-topline"><span>INTENT / ACTIVE</span><span>06 NODES</span></div>
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="signal-line signal-line-a" aria-hidden="true" />
              <div className="signal-line signal-line-b" aria-hidden="true" />
              <div className="signal-line signal-line-c" aria-hidden="true" />
              <div className="signal-line signal-line-d" aria-hidden="true" />
              <div className="constellation-node node-intent"><span className="node-core" /><b>Intent</b><small>You</small></div>
              <div className="constellation-node node-context"><span className="node-core" /><b>Context</b><small>Memory</small></div>
              <div className="constellation-node node-scribe"><span className="node-core" /><b>Scribe</b><small>Conductor</small></div>
              <div className="constellation-node node-runtime"><span className="node-core" /><b>Runtime</b><small>Your choice</small></div>
              <div className="constellation-node node-tools"><span className="node-core" /><b>Tools</b><small>Act</small></div>
              <div className="constellation-node node-result"><span className="node-core" /><b>Response</b><small>Continue</small></div>
              <div className="stage-caption"><span className="caption-bar" />One intention, a controlled handoff.</div>
            </div>
          </div>
          <div className="hero-bottom-rule"><span>NEUTRAL / 2026</span><span>BUILT FOR APPLE PLATFORMS</span></div>
        </section>

        <section className="chapter chapter-paper" id="continuity" aria-labelledby="continuity-title">
          <div className="chapter-rail"><span className="chapter-index">01</span><span className="rail-line" /></div>
          <div className="continuity-layout">
            <div className="continuity-copy">
              <p className="eyebrow eyebrow-dark">Continuity, not another tab</p>
              <h2 id="continuity-title">Your work should not reset because the day did.</h2>
              <p className="chapter-lede">Neutral starts on the device already in your hand, keeps the context attached to your goal, then gives demanding work more room when the job outgrows the phone.</p>
              <a className="text-link" href="#system">Explore the operating model <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
            <div className="device-scene" role="img" aria-label="Neutral running across an iPhone and a MacBook">
              <div className="device-scene-overlay" />
              <div className="device-scene-label"><span className="live-dot" />ONE CONTEXT · MANY SURFACES</div>
            </div>
          </div>
        </section>

        <section className="chapter chapter-ink" id="system" aria-labelledby="system-title">
          <div className="protocol-art" aria-hidden="true" />
          <div className="chapter-rail rail-light"><span className="chapter-index">02</span><span className="rail-line" /></div>
          <div className="system-intro">
            <div className="system-titles">
              <p className="eyebrow"><span className="live-dot" />A system that stays yours</p>
              <h2 id="system-title">Decide the path for this work.</h2>
            </div>
            <p className="chapter-lede">Scribe can coordinate the work; you decide how it runs. Neutral keeps model choice and tool use in the foreground—where trust belongs.</p>
          </div>
          <div className="protocol-grid">
            {steps.map(({ number, title, body, icon: Icon }) => (
              <article className="protocol-step" key={number}>
                <div className="step-number">{number}</div>
                <Icon className="step-icon" size={21} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="step-line" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="system-note"><span>SHIPPED</span> Voice input and message readback are part of the native app today.</div>
        </section>

        <section className="chapter chapter-paper chapter-operating" aria-labelledby="operating-title">
          <div className="chapter-rail"><span className="chapter-index">03</span><span className="rail-line" /></div>
          <div className="operating-head">
            <div>
              <p className="eyebrow eyebrow-dark">The Neutral operating model</p>
              <h2 id="operating-title">Personal enough to start anywhere. Precise enough to delegate.</h2>
            </div>
            <p>Each layer has one job: protect the thread, make the next action clearer, and give you the right amount of control without turning your work into configuration.</p>
          </div>
          <div className="operating-record" aria-label="Neutral handoff record"><span><i />INTENT</span><b>→</b><span>CONTEXT</span><b>→</b><span>RUNTIME</span><b>→</b><span className="record-signal">NEXT ACTION</span></div>
          <div className="operating-table">
            <div className="table-row table-head"><span>Layer</span><span>What stays visible</span><span>Why it matters</span></div>
            <div className="table-row"><span className="row-key"><Orbit size={17} aria-hidden="true" />Goals</span><span>Intent and context</span><span>Pick up without rehearsing the past.</span></div>
            <div className="table-row"><span className="row-key"><Command size={17} aria-hidden="true" />Runtime</span><span>Local or hosted path</span><span>Match the environment to the job.</span></div>
            <div className="table-row"><span className="row-key"><Mic size={17} aria-hidden="true" />Voice</span><span>Speak when typing slows you down</span><span>Keep the thread moving, hands free.</span></div>
          </div>
        </section>

        <section className="chapter roadmap-chapter" id="roadmap" aria-labelledby="roadmap-title">
          <div className="chapter-rail rail-light"><span className="chapter-index">04</span><span className="rail-line" /></div>
          <div className="roadmap-intro">
            <p className="eyebrow"><span className="live-dot" />Signals, not promises</p>
            <h2 id="roadmap-title">Clear about what exists and what follows.</h2>
          </div>
          <div className="roadmap-path">
            {roadmap.map((item, index) => (
              <article className="roadmap-stop" key={item.stage}>
                <div className="roadmap-dot"><span>{index + 1}</span></div>
                <p className="roadmap-stage">{item.stage}</p>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="beta-chapter" id="beta" aria-labelledby="beta-title">
          <div className="beta-surface">
            <div className="beta-copy">
              <p className="eyebrow eyebrow-dark">Early access</p>
              <h2 id="beta-title">Build your next thread with Neutral.</h2>
              <p>Neutral is in active development. Follow the Apple-native foundation as the companion workflows take shape.</p>
            </div>
            <a className="button button-dark" href="https://github.com/Engineer9118brov2/Neutral" target="_blank" rel="noreferrer">Follow the project <ArrowUpRight aria-hidden="true" size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top"><SignalMark /><span>neutral</span></a>
        <p>Native AI workspace for Apple platforms.</p>
        <div><a href="https://github.com/Engineer9118brov2/Neutral" target="_blank" rel="noreferrer">GitHub</a><span>© 2026</span></div>
      </footer>
    </div>
  );
}
