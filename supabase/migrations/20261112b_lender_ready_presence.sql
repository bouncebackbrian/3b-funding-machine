-- Funding Machine: lender-ready presence + stricter contact rules
-- Apply AFTER 20261112_bankability_foundation.sql. Additive only:
-- no drops, no policy changes, no changes to customer rows.
--
-- 1. funding_profiles.bankability_attestations: self-attested answers
--    ({ key: { value, at } }) for checks we can't verify from outside:
--    phone line type, 411 listing, Google Business Profile, bank account in
--    the legal name, state good standing, licenses. Existing funding_profiles
--    RLS (is_business_member) and grants cover the new column.
-- 2. A business email on the company's own domain becomes REQUIRED for
--    "package ready". So do a dedicated business phone (not a personal cell),
--    a bank account in the legal name, and state good standing.
--    Existing businesses that don't meet these will move from
--    "package_ready" to "building" on their next review — intended.

alter table public.funding_profiles
  add column if not exists bankability_attestations jsonb not null default '{}'::jsonb;

do $$ begin
  alter table public.funding_profiles add constraint funding_profiles_attestations_is_object
    check (jsonb_typeof(bankability_attestations) = 'object');
exception when duplicate_object then null; end $$;

update public.funding_readiness_rules
set required = true, updated_at = now()
where rule_key = 'business_email_on_domain' and required = false;

insert into public.funding_readiness_rules (rule_key, category, label, why_it_matters, weight, required, active, sort_order)
select v.rule_key, v.category, v.label, v.why_it_matters, v.weight, v.required, true, v.sort_order
from (values
  ('business_phone_dedicated', 'business_contact', 'Dedicated business phone (not a personal cell)',
   'Lenders call and look up the business line. A personal cell reads as a side job, not an established business.', 5, true, 61),
  ('listed_411', 'digital_presence', 'Business phone listed in 411',
   'Underwriters often confirm a business through directory assistance under its legal name.', 3, false, 81),
  ('google_business_profile', 'digital_presence', 'Google Business Profile claimed and matching',
   'Your public listing should show the same name, address and phone as your filing.', 3, false, 82),
  ('bank_account_legal_name', 'banking', 'Business bank account in the exact legal name',
   'Lenders underwrite from these statements; the account must match the entity and EIN.', 6, true, 51),
  ('state_good_standing', 'identity_entity', 'Entity in good standing with the state',
   'Banks pull a good-standing certificate. A lapsed entity stops a loan.', 6, true, 21),
  ('licenses_current', 'compliance', 'Required business licenses and permits current',
   'Lenders ask for them, and SBA lenders confirm the business operates legally.', 4, false, 141)
) as v(rule_key, category, label, why_it_matters, weight, required, sort_order)
where not exists (select 1 from public.funding_readiness_rules r where r.rule_key = v.rule_key);

notify pgrst, 'reload schema';
