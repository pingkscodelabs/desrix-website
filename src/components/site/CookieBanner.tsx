import { useEffect, useState } from "react";

const KEY = "desrix-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  const accept = (value: "all" | "essential") => {
    window.localStorage.setItem(KEY, value);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-background p-4 shadow-lg sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use essential cookies to make this site work and optional analytics cookies to improve it.
          See our privacy policy for details. (GDPR)
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => accept("essential")}
            className="rounded-md border border-input bg-background px-3 py-2 text-xs font-medium text-foreground hover:bg-secondary"
          >
            Essential only
          </button>
          <button
            onClick={() => accept("all")}
            className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:brightness-110"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}