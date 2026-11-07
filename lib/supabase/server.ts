import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./database.types";
import { supabaseEnv } from "./env";

/**
 * Per-request Supabase client bound to the signed-in user's session cookie.
 * Every query runs as `authenticated` and is scoped by Core_Eco RLS
 * (business membership). There is deliberately no service-role client in
 * this app: customers can only ever touch their own business's rows.
 */
export async function createClient() {
  const cookieStore = await cookies();
  const { url, key } = supabaseEnv();

  return createServerClient<Database>(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a Server Component render — cookies are read-only there.
          // Session refresh is handled by proxy.ts, so this is safe to ignore.
        }
      },
    },
  });
}
