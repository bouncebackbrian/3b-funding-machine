import { redirect } from "next/navigation";
import { CREDIT_BUILDERS_START_URL } from "@/lib/funding/credit-unlock";

export default function SignupPage() {
  redirect(CREDIT_BUILDERS_START_URL);
}
