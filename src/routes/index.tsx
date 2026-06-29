import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  GitBranch,
  Headset,
  Bot,
  Layers,
  ShieldCheck,
  Gauge,
  Clock,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DesRIX — Cloud, AI & Scalable IT Solutions for Europe" },
      {
        name: "description",
        content:
          "DesRIX is a European IT services company delivering DevOps, cloud, agentic AI, call center, and white-label development. GDPR-ready, 24/7 support.",
      },
      { property: "og:title", content: "DesRIX — Enterprise IT Services" },
      {
        property: "og:description",
        content:
          "Empowering European businesses with cloud, AI, and scalable IT solutions.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: GitBranch, title: "DevOps", description: "CI/CD pipelines, infrastructure as code, and Kubernetes-driven delivery.", hash: "devops" },
  { icon: Cloud, title: "Cloud Computing", description: "AWS, Azure, and GCP migration, modernization, and cloud security.", hash: "cloud" },
  { icon: Headset, title: "Call Center & BPO", description: "Multilingual inbound and outbound support with CRM integration.", hash: "call-center" },
  { icon: Bot, title: "Agentic AI", description: "AI agents, workflow automation, and AI-powered customer support.", hash: "agentic-ai" },
  { icon: Layers, title: "White-label Development", description: "SaaS and product builds you can brand and resell as your own.", hash: "white-label" },
];

const benefits = [
  { icon: Gauge, title: "Scalable", text: "Architectures that grow with demand." },
  { icon: ShieldCheck, title: "GDPR-ready", text: "EU-compliant by design." },
  { icon: Sparkles, title: "Cost-efficient", text: "Right-sized infra, no waste." },
  { icon: Clock, title: "24/7 support", text: "Always-on response teams." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(1 0 0 / 0.15), transparent 40%), radial-gradient(circle at 80% 60%, oklch(1 0 0 / 0.1), transparent 45%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              European IT services · GDPR-ready
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Businesses with Cloud, AI & Scalable IT Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              DesRIX partners with European enterprises to design, build, and operate the
              cloud-native and AI-driven systems behind modern business.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Five practice areas, one delivery team"
          description="From cloud foundations to AI agents, our specialists ship production-grade systems across the stack."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-primary-foreground"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship offer */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-white sm:px-14 sm:py-20"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              Flagship offer
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Launch your IT infrastructure in 30 days
            </h2>
            <p className="mt-4 text-white/85">
              A fixed-scope sprint to stand up production-ready cloud, CI/CD, and observability —
              with an AI-automation roadmap built in. Free consultation, transparent pricing.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary hover:shadow-lg"
            >
              Request consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--gradient-accent)" }}
          />
        </div>
      </section>

      {/* Testimonials / clients */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Trusted across the EU"
            title="Built for enterprises that can't afford downtime"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "DesRIX rebuilt our delivery pipeline end-to-end. Deploys went from weekly to twenty a day, with zero regressions.",
                name: "Director of Engineering",
                org: "Fintech, Germany",
              },
              {
                quote:
                  "Their AI agents now handle 60% of our tier-1 customer support — measurably faster and cheaper.",
                name: "Head of CX",
                org: "Retail, Netherlands",
              },
              {
                quote:
                  "Cloud migration on a fixed timeline, no surprises. The team owns outcomes, not tickets.",
                name: "CTO",
                org: "Logistics, Latvia",
              },
            ].map((t) => (
              <figure
                key={t.name + t.org}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div>{t.org}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Plan your next IT initiative with us
            </h2>
            <p className="mt-2 text-muted-foreground">
              Free 30-minute consultation. We'll map the smallest path to measurable impact.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Talk to an expert
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
