create table public.funding_net30_invoices (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  created_by uuid not null default auth.uid(),
  vendor text not null check (char_length(btrim(vendor)) between 1 and 120),
  invoice_number text not null check (char_length(btrim(invoice_number)) between 1 and 100),
  issued_on date not null,
  due_on date not null check (due_on >= issued_on),
  amount_cents integer not null check (amount_cents > 0),
  paid_on date check (paid_on >= issued_on),
  unique (business_id, vendor, invoice_number)
);

alter table public.funding_net30_invoices enable row level security;
revoke all on public.funding_net30_invoices from public, anon, authenticated;
grant select, insert on public.funding_net30_invoices to authenticated;
grant update (paid_on) on public.funding_net30_invoices to authenticated;

create policy funding_net30_select on public.funding_net30_invoices
  for select to authenticated using (public.is_business_member(business_id));

create policy funding_net30_insert on public.funding_net30_invoices
  for insert to authenticated with check (
    public.is_business_member(business_id) and created_by = (select auth.uid())
  );

create policy funding_net30_update on public.funding_net30_invoices
  for update to authenticated using (public.is_business_member(business_id))
  with check (public.is_business_member(business_id));
