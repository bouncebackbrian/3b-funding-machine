"use client";

import { createContext, useActionState, useContext, useId, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import type { ActionState } from "@/app/app/actions";

type Action = (prev: ActionState, fd: FormData) => Promise<ActionState>;

const FormStateContext = createContext<ActionState>(null);

export function ActionForm({
  action,
  children,
  className,
  resetOnSuccess = false,
}: {
  action: Action;
  children: ReactNode;
  className?: string;
  resetOnSuccess?: boolean;
}) {
  const [state, formAction] = useActionState(action, null);
  return (
    <FormStateContext.Provider value={state}>
      <form
        action={formAction}
        className={className ?? "fm-form"}
        // Remount the form after a successful add so inputs clear.
        key={resetOnSuccess && state?.ok ? `ok-${state.message}` : "form"}
      >
        {state?.message && (
          <p role="status" className={state.ok ? "fm-alert fm-alert-ok" : "fm-alert fm-alert-error"}>
            {state.message}
          </p>
        )}
        {children}
      </form>
    </FormStateContext.Provider>
  );
}

function useFieldError(name: string) {
  return useContext(FormStateContext)?.fieldErrors?.[name];
}

interface FieldProps {
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
  defaultValue?: string | number | null;
  type?: string;
  placeholder?: string;
  inputMode?: "text" | "numeric" | "decimal" | "tel" | "email" | "url";
  autoComplete?: string;
  maxLength?: number;
}

export function Field({ name, label, hint, defaultValue, type = "text", ...rest }: FieldProps) {
  const id = useId();
  const error = useFieldError(name);
  return (
    <div className="fm-field">
      <label htmlFor={id}>
        {label}
        {rest.required && <span className="fm-req"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue ?? undefined}
        aria-invalid={!!error}
        aria-describedby={error || hint ? `${id}-help` : undefined}
        {...rest}
      />
      {(error || hint) && (
        <p id={`${id}-help`} className={error ? "fm-error" : "fm-hint"}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

export function TextArea({ name, label, hint, defaultValue, required }: Omit<FieldProps, "type">) {
  const id = useId();
  const error = useFieldError(name);
  return (
    <div className="fm-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="fm-req"> *</span>}
      </label>
      <textarea id={id} name={name} rows={3} defaultValue={defaultValue ?? undefined} required={required} aria-invalid={!!error} />
      {(error || hint) && <p className={error ? "fm-error" : "fm-hint"}>{error ?? hint}</p>}
    </div>
  );
}

export function Select({
  name,
  label,
  options,
  defaultValue,
  required,
  hint,
  placeholder = "Choose…",
}: {
  name: string;
  label: string;
  options: readonly { value: string; label: string }[];
  defaultValue?: string | null;
  required?: boolean;
  hint?: string;
  placeholder?: string;
}) {
  const id = useId();
  const error = useFieldError(name);
  return (
    <div className="fm-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="fm-req"> *</span>}
      </label>
      <select id={id} name={name} defaultValue={defaultValue ?? ""} required={required} aria-invalid={!!error}>
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {(error || hint) && <p className={error ? "fm-error" : "fm-hint"}>{error ?? hint}</p>}
    </div>
  );
}

export function Checkbox({ name, label, defaultChecked }: { name: string; label: ReactNode; defaultChecked?: boolean }) {
  const error = useFieldError(name);
  return (
    <div className="fm-field">
      <label className="fm-check">
        <input type="checkbox" name={name} defaultChecked={defaultChecked} aria-invalid={!!error} />
        <span>{label}</span>
      </label>
      {error && <p className="fm-error">{error}</p>}
    </div>
  );
}

export function SubmitButton({ children, pendingText = "Saving…" }: { children: ReactNode; pendingText?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="fm-btn fm-btn-primary" disabled={pending} aria-busy={pending}>
      {pending ? pendingText : children}
    </button>
  );
}
