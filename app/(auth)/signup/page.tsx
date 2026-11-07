import Link from "next/link";
import type { Metadata } from "next";
import { ActionForm, Field, SubmitButton } from "@/components/form";
import { signUp } from "../actions";

export const metadata: Metadata = { title: "Start your funding setup", robots: { index: false } };

export default function SignupPage() {
  return (
    <>
      <h1 className="fm-h1">Start your funding setup</h1>
      <p className="fm-muted">About 10 minutes. Your progress saves after every step.</p>
      <ActionForm action={signUp}>
        <Field name="full_name" label="Your name" autoComplete="name" required />
        <Field name="email" label="Email" type="email" autoComplete="email" required />
        <Field name="password" label="Password" type="password" autoComplete="new-password" hint="At least 8 characters." required />
        <SubmitButton pendingText="Creating account…">Create account</SubmitButton>
      </ActionForm>
      <p className="fm-muted fm-center">
        Already have a 3B account? <Link href="/login">Sign in</Link>
      </p>
    </>
  );
}
