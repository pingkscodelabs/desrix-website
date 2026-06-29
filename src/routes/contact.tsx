import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contactSchema, submitContactForm, type ContactInput } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DesRIX" },
      {
        name: "description",
        content:
          "Talk to DesRIX about your cloud, DevOps, AI, or BPO project. Headquarters in Riga, Latvia. Reach us by form, email, or phone.",
      },
      { property: "og:title", content: "Contact DesRIX" },
      {
        property: "og:description",
        content: "Request a consultation. We respond within one business day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const submit = useServerFn(submitContactForm);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    try {
      await submit({ data: values });
      toast.success("Message sent — we'll get back to you shortly.");
      setSubmitted(true);
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    }
  };

  const inputCls =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-subtle)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Request a consultation
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Tell us about your project. We typically respond within one business day with a
              tailored next-step proposal.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input id="name" autoComplete="name" className={inputCls} {...register("name")} />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputCls}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="company"
                    autoComplete="organization"
                    className={inputCls}
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={inputCls}
                    placeholder="Tell us about your project, timeline, and goals."
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message
                    </>
                  )}
                </button>
                {submitted && (
                  <p className="text-sm text-muted-foreground">
                    Thanks — your message is in. We'll be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2">
            <div
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h2 className="text-lg font-semibold text-foreground">Headquarters</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">DesRIX</div>
                    Ganību dambis 24D
                    <br />
                    Ziemeļu rajons, Rīga, LV-1005
                    <br />
                    Latvia
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+37129693533" className="text-muted-foreground hover:text-foreground">
                    +371 29 693 533
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:hello@desrix.eu" className="text-muted-foreground hover:text-foreground">
                    hello@desrix.eu
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="mt-6 overflow-hidden rounded-2xl border border-border bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <iframe
                title="DesRIX office in Riga"
                src="https://www.google.com/maps?q=Gan%C4%ABbu+dambis+24D,+Rīga,+LV-1005&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-72 w-full border-0"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}