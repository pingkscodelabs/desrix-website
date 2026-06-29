import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please provide more detail").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      throw new Error("Backend not configured");
    }
    const supabase = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("contact_submissions" as never).insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    } as never);

    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Could not submit your message. Please try again.");
    }
    return { ok: true as const };
  });