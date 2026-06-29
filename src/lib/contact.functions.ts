import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please provide more detail").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Temporary no-db mode while Supabase is disabled.
    console.info("[contact] submission accepted (no-db mode)", {
      name: data.name,
      email: data.email,
      company: data.company || null,
      messageLength: data.message.length,
    });

    return { ok: true as const };
  });