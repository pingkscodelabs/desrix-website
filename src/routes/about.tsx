import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Target, Compass, Users } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DesRIX" },
      {
        name: "description",
        content:
          "DesRIX is a Riga-based IT services company building cloud, AI, and operations capabilities for European enterprises.",
      },
      { property: "og:title", content: "About DesRIX" },
      {
        property: "og:description",
        content:
          "European IT specialists in cloud, AI, and scalable infrastructure. Headquartered in Riga.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Engineering leadership", role: "Cloud & DevOps", expertise: "AWS · Kubernetes · Terraform" },
  { name: "AI practice", role: "Agentic AI & ML", expertise: "LLMs · RAG · Automation" },
  { name: "Customer operations", role: "Call Center & BPO", expertise: "Multilingual EU support" },
  { name: "Product delivery", role: "White-label & SaaS", expertise: "React · Node · Postgres" },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              About DesRIX
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Engineering partners for European businesses
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Headquartered in Riga, DesRIX brings together cloud, AI, and operations specialists to
              help enterprises modernize the systems behind their business — under European standards
              of privacy, security, and governance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Our mission",
              text: "Make enterprise-grade cloud, AI, and operations capabilities accessible to every European business — without the complexity tax.",
            },
            {
              icon: Compass,
              title: "Our vision",
              text: "A European technology landscape where companies of any size compete on product, not infrastructure.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-card p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                <card.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">{card.title}</h2>
              <p className="mt-3 text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance band */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="flex items-start gap-4">
            <div
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Built for European compliance</h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                GDPR-aligned data handling, EU-region cloud deployments by default, and documented
                processes that fit your audit and procurement requirements.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Request our compliance brief
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The team"
          title="Specialists, not generalists"
          description="Each practice is led by senior engineers who have shipped at scale."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-full text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{m.name}</h3>
              <p className="text-sm text-primary">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.expertise}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}