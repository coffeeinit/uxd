import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StartProject from "@/pages/StartProject";
import CaseStudies from "@/pages/CaseStudies";
import Blog, { BlogPostRoute } from "@/pages/Blog";
import { blogPosts } from "@/lib/blogData";
import { useLocation } from "wouter";
import { initializeAnalytics } from "./analytics";

function Seo() {
  const [location] = useLocation();
  useEffect(() => {
    const origin = "https://uxdstudio.com";
    const post = location.startsWith("/blog/") ? blogPosts.find((item) => item.slug === location.slice(6)) : undefined;
    const title = post ? `${post.title} — UXD Studio` : location === "/blog" ? "Insights — UXD Studio" : location === "/case-studies" ? "Case Studies — UXD Studio" : location === "/start-a-project" ? "Start a project — UXD Studio" : "UXD Studio — Build what’s next.";
    const description = post?.excerpt ?? (location === "/blog" ? "Practical notes on digital products, ERPNext, AI, CRM, design and sustainable growth from UXD Studio." : location === "/case-studies" ? "Selected UXD Studio case studies across digital products, AI, cybersecurity, commerce, real estate, hospitality, and mobile apps." : location === "/start-a-project" ? "Share the shape of your next product, business system or growth challenge with UXD Studio." : "UXD Studio designs and builds digital products, intelligent business systems and experiences for ambitious businesses.");
    document.title = title;
    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", `${origin}${location}`);
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = `${origin}${location}`;
  }, [location]);
  return null;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/start-a-project" component={StartProject} />
    <Route path="/case-studies" component={CaseStudies} />
    <Route path="/blog" component={Blog} />
    <Route path="/blog/" component={Blog} />
    <Route path="/blog/:slug" component={BlogPostRoute} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  useEffect(() => { initializeAnalytics(); }, []);
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Seo /><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
