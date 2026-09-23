import { ArrowUpRight, ArrowLeft, Clock3 } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  return (
    <main className="blog-shell">
      <header className="blog-nav">
        <Link className="brand" href="/"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></Link>
        <div className="blog-nav-right"><span>INSIGHTS / 2026</span><Link className="back-link" href="/"><ArrowLeft size={16} /> Back home</Link></div>
      </header>
      <section className="blog-index">
        <div className="blog-index-head"><span>01 — LATEST STORIES</span><span>{blogPosts.length} EDITORIAL NOTES</span></div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <Link className={`blog-card blog-card-${index + 1}`} href={`/blog/${post.slug}`} key={post.slug}>
              <div className="blog-card-art" style={{ background: post.accent }}><span>UXD / {String(index + 1).padStart(2, "0")}</span><b>↗</b><i>{post.category.split(" / ")[0]}</i></div>
              <div className="blog-card-meta"><span>{post.category}</span><span>{post.date}</span></div>
              <h2>{post.title}</h2><p>{post.excerpt}</p>
              <div className="blog-card-foot"><span><Clock3 size={14} /> {post.read}</span><ArrowUpRight size={19} /></div>
            </Link>
          ))}
        </div>
      </section>
      <footer className="blog-footer"><Link className="brand" href="/"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></Link><span>GOOD QUESTIONS. BETTER SYSTEMS.</span><Link href="/start-a-project">Start a project <ArrowUpRight size={15} /></Link></footer>
    </main>
  );
}

export function BlogPost({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  return (
    <main className="post-shell">
      <header className="blog-nav"><Link className="brand" href="/"><span className="brand-symbol">∞</span><span className="brand-word">uxd<span>studio</span></span></Link><Link className="back-link" href="/blog"><ArrowLeft size={16} /> All stories</Link></header>
      <article className="post-article">
        <div className="post-topline"><span>{post.category}</span><span>{post.date} · {post.read}</span></div>
        <h1>{post.title}</h1><p className="post-excerpt">{post.excerpt}</p>
        <div className="post-art" style={{ background: post.accent }}><span>UXD STUDIO / FIELD NOTES</span><strong>∞</strong><small>IDEA → IMPACT</small></div>
        <div className="post-body"><p className="post-intro">{post.intro}</p>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</div>
      </article>
      <footer className="blog-footer"><Link href="/blog"><ArrowLeft size={15} /> More from the journal</Link><Link href="/start-a-project">Have a good one? <ArrowUpRight size={15} /></Link></footer>
    </main>
  );
}

export function BlogPostRoute({ params }: { params: { slug: string } }) { return <BlogPost slug={params.slug} />; }
