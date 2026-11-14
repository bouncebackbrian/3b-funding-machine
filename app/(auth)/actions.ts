"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/app/app/actions";

/** Only allow in-app relative redirects (blocks open-redirects like //evil.com). */
function safeNext(v: FormDataEntryValue | null): string {
  return typeof v === "string" && v.startsWith("/app") && !v.startsWith("//") ? v : "/app";
}

export async function signIn(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const email = String(fd.get("email") ?? "").trim();
  const password = String(fd.get("password") ?? "");
  if (!email || !password) return { ok: false, message: "Enter your email and password." };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, message: "That email and password didn't match. Try again." };
  redirect(safeNext(fd.get("next")));
}

export async function signUp(_prev: ActionState, fd: FormData): Promise<ActionState> {
  const email = String(fd.get("email") ?? "").trim();
  const password = String(fd.get("password") ?? "");
  const fullName = String(fd.get("full_name") ?? "").trim();
  const fieldErrors: Record<string, string> = {};
  if (!fullName) fieldErrors.full_name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email.";
  if (password.length < 8) fieldErrors.password = "Use at least 8 characters.";
  if (Object.keys(fieldErrors).length) return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };

  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${site}/auth/confirm?next=/app`,
    },
  });
  if (error) return { ok: false, message: error.message };

  // Email confirmation off → session exists → go straight into setup.
  if (data.session) redirect("/app");
  return { ok: true, message: `Check ${email} for a confirmation link, then come back to continue.` };
}
