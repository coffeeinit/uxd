export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  intro: string;
  accent: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-frappe-erpnext-is-the-operating-system-for-growing-businesses",
    category: "FRAPPE / ERPNEXT",
    date: "12 SEP 2026",
    read: "6 MIN READ",
    title: "Why Frappe ERPNext is becoming the operating system for growing businesses",
    excerpt: "A practical look at connected finance, inventory, projects, and people — without stitching together a dozen disconnected tools.",
    intro: "Growth creates a specific kind of complexity: more people, more approvals, more data, and more places for important context to disappear. Frappe ERPNext gives teams one adaptable operating layer instead of another collection of disconnected apps.",
    accent: "#d8ff5e",
    sections: [
      { heading: "One source of truth", body: "ERPNext connects finance, sales, inventory, projects, manufacturing, and human resources in one system. That means a decision-maker can follow an order from first conversation to fulfilment without asking five teams to reconcile five dashboards." },
      { heading: "Adaptable before it is complicated", body: "The best implementation is not the one with the most custom code. It is the one that maps the core workflows clearly, keeps the interface understandable, and adds custom logic only where it creates measurable leverage." },
      { heading: "Where UXD Studio helps", body: "UXD Studio combines Frappe and ERPNext consulting with process design, data migration, integrations, reporting, training, and ongoing support. The goal is a system people want to use, not just a system that is technically live." },
    ],
  },
  {
    slug: "zoho-crm-or-custom-crm-what-should-your-team-choose",
    category: "CRM / GROWTH",
    date: "05 SEP 2026",
    read: "5 MIN READ",
    title: "Zoho CRM or custom CRM: what should your team choose?",
    excerpt: "The right CRM decision is less about features and more about how your sales process actually works today.",
    intro: "A CRM should make the next action obvious. Whether the right answer is Zoho CRM, an integrated ERP workflow, or a custom product depends on your sales motion, reporting needs, and appetite for change.",
    accent: "#b7a4ff",
    sections: [
      { heading: "Start with the sales motion", body: "A founder-led pipeline, a long enterprise cycle, and a high-volume inbound funnel have different needs. Map stages, handoffs, ownership, and the information that must be visible before comparing software." },
      { heading: "Use Zoho when speed matters", body: "Zoho CRM can be a strong choice when a team needs a structured pipeline, automation, dashboards, and integrations without building a platform from zero. The implementation still needs clear fields, roles, and adoption rituals." },
      { heading: "Build custom when the workflow is the advantage", body: "Custom software makes sense when your quoting, servicing, marketplace, or partner workflow is the product itself. In that case, the CRM should be designed around the business model rather than forcing the business model into a template." },
    ],
  },
  {
    slug: "uxd-studio-expands-digital-transformation-work-across-uae-and-india",
    category: "UXD STUDIO NEWS",
    date: "28 AUG 2026",
    read: "3 MIN READ",
    title: "UXD Studio expands digital transformation work across the UAE and India",
    excerpt: "From Ajman Free Zone to Chennai, UXD Studio continues helping teams turn ambitious ideas into useful digital systems.",
    intro: "UXD Studio is building a connected delivery practice across its UAE and India locations, bringing product strategy, software engineering, ERPNext, AI, and experience design closer to the teams it serves.",
    accent: "#ee4b36",
    sections: [
      { heading: "Closer to the work", body: "The UAE office in Ajman Free Zone gives UXD Studio a base for regional partnerships and enterprise work. The Chennai team adds product, design, engineering, and delivery depth for clients across India and international markets." },
      { heading: "One team across disciplines", body: "The studio model brings developers, designers, strategists, AI specialists, and ERP experts into the same conversation. That makes it easier to make decisions early, test ideas quickly, and keep the result connected to business outcomes." },
      { heading: "The next chapter", body: "UXD Studio is continuing to build products and systems that feel clear, human, and ready to scale — from mobile experiences and e-commerce to intelligent operations and enterprise transformation." },
    ],
  },
  {
    slug: "designing-ai-features-people-can-actually-trust",
    category: "AI / PRODUCT DESIGN",
    date: "19 AUG 2026",
    read: "7 MIN READ",
    title: "Designing AI features people can actually trust",
    excerpt: "Useful AI is not just a model behind a button. It is a clear interaction, a visible reason, and a safe path to correction.",
    intro: "The strongest AI products do not ask people to admire the technology. They help people make a better decision with less effort — while showing enough context to build confidence.",
    accent: "#fff5df",
    sections: [
      { heading: "Make the benefit specific", body: "Avoid vague promises about intelligence. Explain what the feature notices, recommends, drafts, predicts, or automates, and let the user decide when to accept it." },
      { heading: "Design the hand-off", body: "Every AI workflow needs a clear moment where a person can review, edit, reject, or ask for another option. That hand-off is part of the product, not an exception state." },
      { heading: "Measure trust as an outcome", body: "Track whether users understand the recommendation, whether they return to the feature, and where they correct it. Adoption and correction patterns reveal more than model benchmarks alone." },
    ],
  },
];
