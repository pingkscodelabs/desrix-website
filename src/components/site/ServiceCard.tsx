import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  hash,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  hash: string;
}) {
  return (
    <Link
      to="/services"
      hash={hash}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div
        className="grid h-11 w-11 place-items-center rounded-xl text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}