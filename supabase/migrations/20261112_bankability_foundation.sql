-- Funding Machine: bankability foundation (Phase A)
-- Additive only. No drops, no policy changes, no changes to existing rows.
--
-- 1. D-U-N-S on the shared business identity (public.businesses), so every 3B
--    product reads the same number. Nullable / defaulted: existing rows and
--    other products are unaffected. Existing businesses RLS + grants cover it.
-- 2. Three new readiness rules. All are NOT required, so no business loses
--    "package_ready" because of this change; scores shift slightly because the
--    denominator grows (3 + 5 + 4 = 12 weight points).

alter table public.businesses
  add column if not exists duns_number text,
  add column if not exists duns_status text not null default 'not_applied';

do $$ begin
  alter table public.businesses add constraint businesses_duns_number_format
    check (duns_number is null or duns_number ~ '^\d{9}$');
exception when duplicate_object then null; end $$;

do $$ begin
  alter table public.businesses add constraint businesses_duns_status_check
    check (duns_status in ('not_applied', 'requested', 'assigned'));
exception when duplicate_object then null; end $$;

insert into public.funding_readiness_rules (rule_key, category, label, why_it_matters, weight, required, active, sort_order)
select v.rule_key, v.category, v.label, v.why_it_matters, v.weight, false, true, v.sort_order
from (values
  ('business_email_on_domain', 'business_contact', 'Business email on your own domain',
   'An email on your business domain (not Gmail/Yahoo) signals an established business to lenders and vendors.', 3, 71),
  ('identity_aligned', 'identity_alignment', 'Business identity matches everywhere',
   'Lenders and bureaus compare your name, address, phone, email and website across records. Mismatches slow or stop reviews.', 5, 72),
  ('duns_on_file', 'business_credit', 'D-U-N-S number on file',
   'A free D-U-N-S number opens your business credit file with Dun & Bradstreet, which many lenders and vendors check.', 4, 115)
) as v(rule_key, category, label, why_it_matters, weight, sort_order)
where not exists (select 1 from public.funding_readiness_rules r where r.rule_key = v.rule_key);

notify pgrst, 'reload schema';
