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
