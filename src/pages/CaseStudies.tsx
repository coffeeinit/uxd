import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "@/lib/caseStudyData";

export default function CaseStudies() {
  return (
    <main className="case-studies-shell">
      <header className="case-studies-nav">
        <Link className="brand" href="/"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></Link>
        <Link className="back-link" href="/"><ArrowLeft size={16} /> Back home</Link>
      </header>
      <section className="case-studies-hero">
        <div><span className="section-kicker">SELECTED WORK · UXD STUDIO</span><h1>Beyond solutions.<br /><i>Real impact.</i></h1></div>
        <p>Digital products, business systems, and experiences built to make ambitious ideas useful in the real world.</p>
      </section>
      <section className="case-studies-grid" aria-labelledby="case-studies-title">
        <div className="case-studies-heading"><span id="case-studies-title">PROVEN SOLUTIONS, LASTING IMPACT</span><span>{caseStudies.length} PROJECTS</span></div>
        <div className="case-study-list">
          {caseStudies.map((study) => {
            const content = <><div className="case-study-art" style={{ backgroundColor: study.accent }}>{study.image ? <img src={study.image} alt={`${study.title} project preview`} loading="lazy" /> : <span className="case-study-monogram">∞</span>}<b>{study.kind}</b></div><div className="case-study-meta"><span>{study.category}</span><ArrowUpRight size={20} /></div><h2>{study.title}</h2><p>{study.description}</p></>;
            return study.external ? <a className="case-study-card" href={study.external} target="_blank" rel="noreferrer" key={study.slug}>{content}</a> : <article className="case-study-card" key={study.slug}>{content}</article>;
          })}
        </div>
      </section>
      <section className="case-studies-cta"><span className="section-kicker">HAVE A GOOD ONE?</span><h2>Let’s build the<br /><i>next chapter.</i></h2><Link className="button button-light" href="/start-a-project">Start a project <ArrowUpRight size={18} /></Link></section>
      <footer className="footer"><div className="footer-brand"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></div><span>© 2026 UXD STUDIO · DIGITAL TRANSFORMATION PARTNER</span><Link href="/">Back to home ↑</Link></footer>
    </main>
  );
}

