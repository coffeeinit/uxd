import { useRef, useState, type PointerEvent } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Menu,
  MoveRight,
  PenTool,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital product\nengineering",
    body: "Websites, SaaS platforms, mobile apps, APIs and custom software built for momentum.",
    icon: Code2,
    tint: "coral",
  },
  {
    number: "02",
    title: "ERPNext\nbusiness systems",
    body: "Implementation, migration, customization and support mapped to your real workflows.",
    icon: Layers3,
    tint: "lime",
  },
  {
    number: "03",
    title: "AI & emerging\ntechnologies",
    body: "Machine learning, blockchain, IoT and cybersecurity solutions that move you forward.",
    icon: Cpu,
    tint: "lavender",
  },
  {
    number: "04",
    title: "Experience &\ngrowth",
    body: "UI/UX, brand identity, e-commerce, SEO and digital campaigns that earn attention.",
    icon: PenTool,
    tint: "cream",
  },
  {
    number: "05",
    title: "CRM & workflow\nsystems",
    body: "Zoho CRM, sales pipelines, integrations and automation that keep customer relationships moving.",
    icon: Bot,
    tint: "lavender",
  },
  {
    number: "06",
    title: "Commerce &\ndigital growth",
    body: "Shopify storefronts, e-commerce journeys and growth systems designed to turn attention into action.",
    icon: Globe2,
    tint: "lime",
  },
  {
    number: "07",
    title: "Product, UI/UX\n& brand",
    body: "Clear product experiences and memorable identities that help people understand, choose and come back.",
    icon: Sparkles,
    tint: "coral",
  },
];

const projects = [
  {
    name: "Hyper Local Connect",
    category: "MOBILE PRODUCT · COMMUNITY",
    copy: "A hyper-local news and discovery platform for the places people call home.",
    visual: "news",
    image: "https://uxdstudio.com/files/case-study-uxdstudio-dubai-newApp_gif.gif",
    color: "#d8ff5e",
  },
  {
    name: "GridEye",
    category: "AI · CYBERSECURITY",
    copy: "Smart-grid visibility with AI-powered cybersecurity analytics at the edge.",
    visual: "grid",
    image: "https://uxdstudio.com/files/case-study-uxdstudio-dubai-gridEye_gif.gif",
    color: "#b7a4ff",
  },
  {
    name: "La Orchid",
    category: "HOSPITALITY · DIGITAL EXPERIENCE",
    copy: "A luxury hotel booking experience designed to feel as distinct as the stay.",
    visual: "hotel",
    image: "https://uxdstudio.com/files/case-study-uxd-studio-dubai-laOrchid_gif.gif",
    color: "#ff6b54",
  },
  { name: "Divo", category: "MEDIA · MUSIC PLATFORM", copy: "A digital media experience for content producers across India and APAC.", visual: "divo", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-heroBanner-3.png", color: "#d8ff5e" },
  { name: "JewelOne", category: "E-COMMERCE · JEWELLERY", copy: "A refined digital storefront for a jewellery catalogue with serious scale.", visual: "jewel", image: "https://uxdstudio.com/files/6-uxdstudio-dubai-casestudy-heroBanner.png", color: "#b7a4ff" },
  { name: "Snabbmaten", category: "MOBILE PRODUCT · FOOD", copy: "Restaurant discovery and delivery made quick, clear and convenient.", visual: "food", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-snabbmatenApp.jpg", color: "#ff6b54" },
  { name: "Chennai Properties", category: "WEB PORTAL · REAL ESTATE", copy: "A property platform for searching, listing, buying, selling and renting.", visual: "property", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-visualDesign-chennai-properties.png", color: "#d8ff5e" },
  { name: "CacheMaster", category: "MOBILE APP · UTILITY", copy: "A focused Android cleaner and optimizer that keeps devices moving.", visual: "cache", image: "https://uxdstudio.com/files/uxdstudio-dubai-casestudy-cacheCleaner.jpg", color: "#b7a4ff" },
];

const stackCapabilities = [
  { number: "01", context: "WHEN THE BUSINESS IS OUTGROWING SPREADSHEETS", title: "Frappe / ERPNext systems", body: "One operating layer for finance, inventory, projects and people — so the whole team can see what moves the business forward.", outcome: "CLEARER OPERATIONS", icon: Layers3, tint: "lime" },
  { number: "02", context: "WHEN EVERY DECISION NEEDS MORE SIGNAL", title: "AI + automation", body: "Useful intelligence inside the workflow: fewer repetitive steps, better recommendations and a human hand-off where it matters.", outcome: "SMARTER DECISIONS", icon: Bot, tint: "lavender" },
  { number: "03", context: "WHEN THE CUSTOMER JOURNEY IS THE PRODUCT", title: "Shopify commerce", body: "Commerce experiences, integrations and growth loops that turn a catalogue into a relationship people want to continue.", outcome: "MORE MOMENTUM", icon: Globe2, tint: "cream" },
  { number: "04", context: "WHEN THE PHYSICAL WORLD JOINS THE DIGITAL", title: "Connected infrastructure", body: "Secure, visible systems for devices, data and teams — built for the edge, the cloud and everything between.", outcome: "CONNECTED SYSTEMS", icon: Cpu, tint: "red" },
  { number: "05", context: "WHEN THE EXPERIENCE HAS TO CARRY THE IDEA", title: "Product + brand", body: "A sharper identity and a clearer interface, working together so people understand the value before they have to think about it.", outcome: "MEMORABLE EXPERIENCES", icon: PenTool, tint: "lime" },
];

const leadership = [
  ["Mathiyazhagan Palanivel", "Founder & CEO", "https://uxdstudio.com/files/Mathiyazhagan.png"],
  ["Ilavarsan", "Co-Founder", "https://uxdstudio.com/files/Ilavarasan.png"],
  ["Ingersoll", "Director, Business Development", "https://uxdstudio.com/files/Ingersoll.png"],
  ["Madhanika", "Director, HR Head & Operation", "https://uxdstudio.com/files/Madhanika.png"],
];

const clientMarks = [
  ["Divo", "https://uxdstudio.com/files/divo.png"], ["Pando", "https://uxdstudio.com/files/pando.png"], ["News18", "https://uxdstudio.com/files/news18.png"],
  ["Elekta", "https://uxdstudio.com/files/elekta.png"], ["JewelOne", "https://uxdstudio.com/files/jewelOne.png"], ["Tanvi", "https://uxdstudio.com/files/tanvi.png"],
  ["Emerald", "https://uxdstudio.com/files/emerald.png"], ["Chennai Properties", "https://uxdstudio.com/files/chennaiProperties.png"], ["La Orchid", "https://uxdstudio.com/files/laOrchid.png"],
  ["UtilityX", "https://uxdstudio.com/files/utiltyx.png"], ["SPS", "https://uxdstudio.com/files/sps.png"], ["Ocean Spice", "https://uxdstudio.com/files/oceanSpice.png"],
  ["Docs Valley", "https://uxdstudio.com/files/docsValley.png"], ["Welbeck", "https://uxdstudio.com/files/welbeck.jpg"], ["YUG", "https://uxdstudio.com/files/yug.png"],
  ["VFF", "https://uxdstudio.com/files/vff.png"], ["Excel", "https://uxdstudio.com/files/excel-logo-png-test.png"], ["MocDoc", "https://uxdstudio.com/files/client-mocdoc-logo-new.png"],
  ["Invention Steel", "https://uxdstudio.com/files/client-invention-steel.png"], ["Marutham Organic Farms", "https://uxdstudio.com/files/Marutham%20Organic%20Farms.png"], ["Connector", "https://uxdstudio.com/files/client-connector-logo-new.png"],
  ["Sterling", "https://uxdstudio.com/files/client-sterling.png"], ["Belle Fashion", "https://uxdstudio.com/files/client-logo-bellefashion.jpg"]
];

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [projectRailProgress, setProjectRailProgress] = useState(0);
  const projectRailRef = useRef<HTMLDivElement>(null);
  const projectDragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const ActiveServiceIcon = services[activeService].icon;
  const ActiveCapabilityIcon = stackCapabilities[activeCapability].icon;

  function moveProjectRail(direction: number) {
    const rail = projectRailRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.min(rail.clientWidth * 0.72, 460), behavior: "smooth" });
  }

  function updateProjectRailProgress() {
    const rail = projectRailRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setProjectRailProgress(max > 0 ? rail.scrollLeft / max : 0);
  }

  function startProjectDrag(event: PointerEvent<HTMLDivElement>) {
    const rail = projectRailRef.current;
    if (!rail) return;
    projectDragRef.current = { active: true, startX: event.clientX, startScroll: rail.scrollLeft };
    rail.setPointerCapture(event.pointerId);
  }

  function dragProjectRail(event: PointerEvent<HTMLDivElement>) {
    const rail = projectRailRef.current;
    const drag = projectDragRef.current;
    if (!rail || !drag.active) return;
    rail.scrollLeft = drag.startScroll - (event.clientX - drag.startX);
    updateProjectRailProgress();
  }

  function stopProjectDrag() {
    projectDragRef.current.active = false;
  }

  return (
    <main className="site-shell" id="main-content">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="top-strip">
        <span>UXD STUDIO (F.Z.E)</span>
        <span className="top-strip-message"><Sparkles size={13} /> Digital products for ambitious businesses</span>
        <span>UAE · INDIA · 7+ COUNTRIES</span>
      </div>

      <header className="navbar">
        <a href="#top" className="brand" aria-label="UXD Studio home"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a>
          <Link href="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <Link className="nav-cta" href="/start-a-project">Start a project <ArrowUpRight size={16} /></Link>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> DIGITAL TRANSFORMATION PARTNER</p>
          <h1 id="hero-title">Build what’s<br /><em>next.</em></h1>
          <p className="hero-intro">We design and develop future-ready digital products, intelligent business systems and experiences that make complex things feel simple.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollToId("contact")}>Let’s talk <MoveRight size={18} /></button>
            <button className="text-button" onClick={() => scrollToId("work")}><span className="play-icon"><Play size={12} fill="currentColor" /></span> See our work</button>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract UXD Studio infinity mark">
          <div className="hero-grid" />
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="infinity-mark"><span /><span /></div>
          <div className="art-label label-top">IDEA → IMPACT</div>
          <div className="art-label label-bottom">UXD / 2026</div>
          <div className="hero-sticker">THINK<br />DIFFERENT<span>↗</span></div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><ChevronDown size={18} /><span>01 / 06</span></div>
      </section>

      <section className="proof-bar" id="about" aria-labelledby="about-title">
        <div className="proof-intro"><span className="section-kicker">THE SHORT VERSION</span><strong id="about-title">Big thinking.<br />Practical outcomes.</strong></div>
        <div className="proof-stat"><b>10<span>+</span></b><small>YEARS OF<br />EXCELLENCE</small></div>
        <div className="proof-stat"><b>100<span>+</span></b><small>CLIENTS<br />SUPPORTED</small></div>
        <div className="proof-stat"><b>07<span>+</span></b><small>COUNTRIES<br />REACHED</small></div>
        <div className="proof-stat"><b>06<span>+</span></b><small>PRODUCTS<br />SHIPPED</small></div>
        <div className="proof-note">From early-stage founders to international enterprises, we turn ambitious ideas into digital advantage.</div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading split-heading"><div><span className="section-kicker">WHAT WE DO</span><h2>One studio.<br /><span>Many ways forward.</span></h2></div><p>Strategy, design and technology in one sharp, accountable team. No hand-offs. No black boxes.</p></div>
        <div className="service-layout">
          <div className="service-list">{services.map((service, index) => { const Icon = service.icon; return <button key={service.number} className={`service-row ${activeService === index ? "active" : ""}`} onClick={() => setActiveService(index)}><span className="service-num">{service.number}</span><span className="service-title">{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</span><Icon className="service-icon" size={26} /><ArrowUpRight className="service-arrow" size={22} /></button>; })}</div>
          <div className={`service-feature tint-${services[activeService].tint}`}><div className="feature-top"><span>{services[activeService].number} / 07</span><span>{services[activeService].title.replace("\n", " ")}</span></div><div className="feature-icon"><ActiveServiceIcon size={54} strokeWidth={1.3} /></div><p>{services[activeService].body}</p><button className="feature-link" onClick={() => scrollToId("contact")}>Explore capability <ArrowUpRight size={18} /></button></div>
        </div>
      </section>

      <section className="erp-banner">
        <div className="erp-pattern" />
        <div className="erp-copy"><span className="section-kicker">ERPNext · BUILT AROUND YOU</span><h2>Your business,<br /><i>in sync.</i></h2><p>Make operations clearer, faster and ready for what’s next with ERPNext implementation tailored to the way your team actually works.</p><button className="button button-light" onClick={() => scrollToId("contact")}>Explore ERPNext <ArrowUpRight size={18} /></button></div>
        <div className="erp-card"><div className="erp-card-head"><span>UXD / ERPNext</span><span>LIVE SYSTEM</span></div><div className="erp-bars"><div><span>Revenue operations</span><b style={{ width: "86%" }} /></div><div><span>Inventory visibility</span><b style={{ width: "72%" }} /></div><div><span>Team efficiency</span><b style={{ width: "94%" }} /></div></div><div className="erp-card-foot"><span>ONE SOURCE OF TRUTH</span><strong>↗</strong></div></div>
      </section>

      <section className="studio-beliefs section-pad"><div className="belief-copy"><span className="section-kicker">WHY UXD STUDIO</span><h2>Built for useful<br /><span>transformation.</span></h2><p>We bridge technology and user experience to help startups and enterprises improve efficiency, customer engagement and sustainable growth.</p></div><div className="belief-grid"><article><span>01 / MISSION</span><h3>Make complex digital change feel clear, human and ready to scale.</h3></article><article><span>02 / VISION</span><h3>Lead with digital transformation, emerging technology and design innovation.</h3></article><article className="industry-card"><span>03 / INDUSTRIES WE SUPPORT</span><p>Manufacturing · Retail · Education · Healthcare · Distribution · Agriculture · Hospitality · Non-profits · E-commerce</p></article></div></section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading split-heading"><div><span className="section-kicker">SELECTED WORK</span><h2>Proof, not<br /><span>promises.</span></h2></div><div className="work-heading-actions"><Link className="outline-link" href="/case-studies">View all case studies <ArrowUpRight size={18} /></Link><div className="rail-controls"><button onClick={() => moveProjectRail(-1)} aria-label="Previous project"><ChevronLeft size={18} /></button><button onClick={() => moveProjectRail(1)} aria-label="Next project"><ChevronRight size={18} /></button></div></div></div>
        <div className="project-rail-wrap"><div className="project-rail" ref={projectRailRef} onScroll={updateProjectRailProgress} onPointerDown={startProjectDrag} onPointerMove={dragProjectRail} onPointerUp={stopProjectDrag} onPointerCancel={stopProjectDrag} onPointerLeave={stopProjectDrag}>{projects.map((project, i) => <article className={`project-card card-${i + 1}`} key={project.name}><div className={`project-image project-visual ${project.visual}`} style={{ backgroundColor: project.color }}><img src={project.image} alt={project.name} draggable="false" /><div className="visual-code"><span>UXD / {String(i + 1).padStart(2, "0")}</span><i>↗</i></div><span className="project-index">0{i + 1}</span></div><div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div><ArrowUpRight size={22} /></div><p>{project.copy}</p></article>)}</div><div className="rail-progress"><span style={{ transform: `translateX(${projectRailProgress * 100}%)` }} /></div></div>
      </section>

      <section className="marquee"><div>DESIGN · TECHNOLOGY · GROWTH · <span>DESIGN · TECHNOLOGY · GROWTH ·</span> DESIGN · TECHNOLOGY · GROWTH ·</div></section>

      <section className="clients-section section-pad"><div className="clients-head"><span className="section-kicker">TRUSTED BY TEAMS WITH AMBITION</span><h2>Good company.</h2><p>Partners across industries, connected by a desire to build better.</p></div><div className="client-grid">{clientMarks.map(([name, logo], index) => <div className={`client-mark partner-${index % 5}`} key={name}><img src={logo} alt={name} /><span>{name}</span></div>)}</div></section>

      <section className="leadership-section section-pad" id="leadership"><div className="section-heading split-heading"><div><span className="section-kicker">THE PEOPLE BEHIND THE WORK</span><h2>Small team.<br /><span>Serious energy.</span></h2></div><p>Passionate technologists, designers and strategists committed to making digital transformation feel human.</p></div><div className="leadership-grid">{leadership.map(([name, role, image], index) => <article className="leader-card" key={name}><div className="leader-image"><img src={image} alt={name} /><span>0{index + 1}</span></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div className="contact-copy"><span className="section-kicker">HAVE A GOOD ONE?</span><h2>Let’s make<br /><i>something matter.</i></h2><p>Tell us what you’re building, fixing or imagining. We’ll bring the right people to the table.</p><div className="contact-details"><a href="mailto:info@uxdstudio.com">info@uxdstudio.com <ArrowUpRight size={16} /></a><a href="tel:+971505565035">+971 50 556 5035 <ArrowUpRight size={16} /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); alert("Thanks — we’ll be in touch shortly."); }}><label>Your name<input required placeholder="Jane Smith" /></label><label>Work email<input required type="email" placeholder="jane@company.com" /></label><label>How can we help?<textarea required placeholder="A little about your project..." rows={3} /></label><button className="button button-light" type="submit">Send enquiry <ArrowUpRight size={18} /></button></form></div><div className="locations"><div><span>UAE</span><p>Ajman Free Zone C1 Building<br />Office C1 - 1F - SF3660</p></div><div><span>INDIA</span><p>No 6, Sai Nagar<br />Okkiyam Thoraipakkam, Chennai<br /><a href="tel:+919500057849">+91 95000 57849</a></p></div><div className="location-note"><Globe2 size={18} /> Working across 7+ countries</div></div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></div><span>© 2026 UXD STUDIO · DIGITAL TRANSFORMATION PARTNER</span><div className="footer-links"><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
