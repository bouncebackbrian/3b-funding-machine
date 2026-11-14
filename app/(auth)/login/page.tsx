import Link from "next/link";
import type { Metadata } from "next";
import { ActionForm, Field, SubmitButton } from "@/components/form";
import { signIn } from "../actions";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const { next, error } = await searchParams;
  return (
    <>
      <h1 className="fm-h1">Sign in</h1>
      <p className="fm-muted">Pick up your funding setup where you left off.</p>
      {error === "link_expired" && (
        <p className="fm-alert fm-alert-error">That link expired or was already used. Sign in, or sign up again.</p>
      )}
      <ActionForm action={signIn}>
        <input type="hidden" name="next" value={next ?? "/app"} />
        <Field name="email" label="Email" type="email" autoComplete="email" required />
        <Field name="password" label="Password" type="password" autoComplete="current-password" required />
        <SubmitButton pendingText="Signing in…">Sign in</SubmitButton>
      </ActionForm>
      <p className="fm-muted fm-center">
        New here? <Link href="/signup">Create your account</Link>
      </p>
    </>
  );
}
