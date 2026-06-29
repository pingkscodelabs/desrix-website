import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GitBranch,
  Cloud,
  Headset,
  Bot,
  Layers,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DesRIX" },
      {
        name: "description",
        content:
          "DevOps, cloud computing, call center & BPO, agentic AI, and white-label development services tailored for European enterprises.",
      },
      { property: "og:title", content: "Services — DesRIX" },
      {
        property: "og:description",
        content:
          "End-to-end IT services: DevOps, Cloud, Call Center, Agentic AI, and white-label development.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  lead: string;
  bullets: string[];
};

const services: Service[] = [
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps",
    lead: "Ship faster, safer. We build the platforms behind continuous delivery.",
    bullets: [
      "CI/CD pipelines with automated testing and gated releases",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes & containerization, GitOps with Argo CD",
      "Observability: metrics, logs, traces, and SLOs",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Computing",
    lead: "AWS, Azure, and GCP — designed for scale, cost, and EU compliance.",
    bullets: [
      "Cloud strategy, migration, and modernization",
      "Multi-cloud and hybrid architectures",
      "Cloud security, IAM, and compliance baselines",
      "FinOps and cost optimization",
    ],
  },
  {
    id: "call-center",
    icon: Headset,
    title: "Call Center & BPO",
    lead: "Multilingual customer operations, integrated with the systems you already use.",
    bullets: [
      "Inbound and outbound voice support",
      "Multilingual EU coverage",
      "CRM and helpdesk integration (Salesforce, HubSpot, Zendesk)",
      "Quality assurance and reporting",
    ],
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI Solutions",
    lead: "AI agents that take action across your stack — not just chat about it.",
    bullets: [
      "Autonomous AI agents for back-office automation",
      "Chatbots and workflow automation",
      "AI-powered customer support with human handoff",
      "RAG pipelines on your private data, securely",
    ],
  },
  {
    id: "white-label",
    icon: Layers,
    title: "White-label Development",
    lead: "Productized software you can brand and resell as your own.",
    bullets: [
      "SaaS product development from concept to launch",
      "Customization and theming for partners",
      "Branding-ready solutions with reseller tooling",
      "Long-term maintenance and roadmap support",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Services
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              End-to-end IT services for European enterprises
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Five practice areas, one accountable delivery team — from cloud platforms to AI agents and
              multilingual customer operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.lead}</p>
                  <ul className="mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-foreground">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-primary-foreground"
                          style={{ background: "var(--gradient-hero)" }}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Discuss your {s.title.toLowerCase()} project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border"
                    style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <s.icon className="h-24 w-24 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}