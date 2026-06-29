import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DesRIX",
  url: "/",
  description:
    "European IT services company specializing in DevOps, Cloud Computing, Call Center & BPO, Agentic AI, and white-label development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ganību dambis 24D",
    addressLocality: "Rīga",
    addressRegion: "Ziemeļu rajons",
    postalCode: "LV-1005",
    addressCountry: "LV",
  },
  telephone: "+371 29 693 533",
  areaServed: "EU",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DesRIX — Cloud, AI & Scalable IT Solutions for Europe" },
      {
        name: "description",
        content:
          "DesRIX delivers DevOps, cloud, agentic AI, call center, and white-label development services for European enterprises. GDPR-ready and built to scale.",
      },
      { name: "author", content: "DesRIX" },
      { property: "og:title", content: "DesRIX — Cloud, AI & Scalable IT Solutions for Europe" },
      {
        property: "og:description",
        content:
          "Cloud, AI, and scalable IT solutions for European businesses. GDPR-ready, 24/7 support.",
      },
      { property: "og:site_name", content: "DesRIX" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "DesRIX — Cloud, AI & Scalable IT Solutions for Europe" },
      { name: "description", content: "EuroTech Solutions Hub is a prompt for designing and developing a modern, responsive IT services website for the EU market." },
      { property: "og:description", content: "EuroTech Solutions Hub is a prompt for designing and developing a modern, responsive IT services website for the EU market." },
      { name: "twitter:description", content: "EuroTech Solutions Hub is a prompt for designing and developing a modern, responsive IT services website for the EU market." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f7c63be0-faa9-48ac-8e73-a97321059a64/id-preview-b7750adc--92b2e04d-ca16-417d-bcf9-c88cd83c289b.lovable.app-1782746074454.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f7c63be0-faa9-48ac-8e73-a97321059a64/id-preview-b7750adc--92b2e04d-ca16-417d-bcf9-c88cd83c289b.lovable.app-1782746074454.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <CookieBanner />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
