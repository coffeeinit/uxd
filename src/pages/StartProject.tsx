import { ArrowLeft, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Link } from "wouter";

const services = ["Custom software / SaaS", "ERPNext / Frappe", "AI & automation", "Mobile product", "UI/UX & brand", "E-commerce / growth"];

export default function StartProject() {
  return (
    <main className="intake-page">
      <header className="intake-nav"><Link href="/" className="brand"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></Link><Link href="/" className="back-link"><ArrowLeft size={16} /> Back to home</Link></header>
      <section className="intake-hero"><span className="section-kicker">START A PROJECT · UXD STUDIO</span><h1>Let’s make<br /><i>good work.</i></h1><p>Tell us enough to start a useful conversation. No polished brief required — just the shape of what you want to build.</p></section>
      <form className="intake-form" onSubmit={(event) => { event.preventDefault(); alert("Thanks — your project brief is ready for the UXD Studio team."); }}>
        <div className="form-section"><span className="form-number">01</span><div><h2>Who are we building with?</h2><p>Choose the option that best describes you.</p><div className="choice-grid"><label className="choice"><input type="radio" name="type" required value="business" /><span><b>Business / organization</b><small>We’re improving or launching something for a team.</small></span><Check size={17} /></label><label className="choice"><input type="radio" name="type" value="individual" /><span><b>Individual / founder</b><small>I’m exploring an idea or building something new.</small></span><Check size={17} /></label></div></div></div>
        <div className="form-section"><span className="form-number">02</span><div><h2>What do you need?</h2><p>Select the areas where you want UXD Studio involved.</p><div className="service-choices">{services.map((service) => <label className="service-choice" key={service}><input type="checkbox" value={service} /><span>{service}</span><Check size={16} /></label>)}</div></div></div>
        <div className="form-section"><span className="form-number">03</span><div className="field-grid"><label>YOUR NAME<input required placeholder="Jane Smith" /></label><label>WORK EMAIL<input required type="email" placeholder="jane@company.com" /></label><label>COMPANY / PROJECT NAME<input placeholder="Your company or idea" /></label><label>YOUR ROLE<input placeholder="Founder, product lead..." /></label><label>ESTIMATED BUDGET<select defaultValue=""><option value="" disabled>Select a range</option><option>Under $10k</option><option>$10k – $25k</option><option>$25k – $75k</option><option>$75k+</option><option>Not sure yet</option></select><ChevronDown size={16} /></label><label>WHEN DO YOU WANT TO START?<select defaultValue=""><option value="" disabled>Select a timeline</option><option>Immediately</option><option>Within 1 month</option><option>1–3 months</option><option>Just exploring</option></select><ChevronDown size={16} /></label><label className="wide">TELL US ABOUT THE PROJECT<textarea required rows={5} placeholder="What are you trying to change, launch, or solve?" /></label></div></div>
        <div className="form-submit"><p>We’ll review your note and come back with the right next step.</p><button className="button button-dark" type="submit">Send project brief <ArrowUpRight size={18} /></button></div>
      </form>
      <footer className="footer intake-footer"><div className="footer-brand"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></div><span>© 2026 UXD STUDIO · UAE · INDIA</span><Link href="/">Back to home ↑</Link></footer>
    </main>
  );
}
