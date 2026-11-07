-- Funding Machine: restore customer access + capture funding goal
-- Additive only. No drops, no policy changes, no data changes.
--
-- Problem (verified 2026-11-07 by simulating an authenticated session):
--   * Every funding_* table was created with RLS policies but no table-level
--     GRANT to authenticated (or service_role). Postgres checks table privileges
--     before RLS, so every customer read/write failed with "permission denied".
--   * The RLS helper predicates is_business_member(), is_business_owner() and
--     current_user_id() had EXECUTE only for postgres, so any policy calling
--     them (all funding_* policies, businesses SELECT/UPDATE/DELETE, and the
--     funding-documents storage policies) failed for real users.
-- Same bug class as 20260905131842_grant_missing_service_and_authenticated_privileges.
-- Every helper below only evaluates auth.uid() for the caller, and every table
-- below already has RLS scoping rows to business membership, so these grants do
-- not widen access beyond what the existing policies intend. anon gets nothing.

grant execute on function public.current_user_id()          to authenticated, service_role;
grant execute on function public.is_business_member(uuid)   to authenticated, service_role;
grant execute on function public.is_business_owner(uuid)    to authenticated, service_role;

-- Customer-owned working data (RLS: is_business_member(business_id))
grant select, insert, update, delete on
  public.funding_profiles,
  public.funding_owners,
  public.funding_financial_snapshots,
  public.funding_documents,
  public.funding_equipment_requests,
  public.funding_bankability_checks,
  public.funding_red_flags
to authenticated;

-- Append-only records (consents are evidence; snapshots are history)
grant select, insert on public.funding_consents, public.funding_readiness_snapshots to authenticated;

-- Versioned strategy + step progress
grant select, insert, update on public.funding_strategies, public.funding_strategy_steps to authenticated;
-- funding_readiness_scores intentionally NOT granted: its policies depend on is_admin(),
-- which is outside this change. The sequence writes funding_readiness_snapshots instead.

-- Reference data (RLS: any signed-in user may read; admin-only writes)
grant select on public.funding_readiness_rules to authenticated;

-- service_role: full access on every funding_* table, matching project convention.
do $$
declare t text;
begin
  for t in select tablename from pg_tables where schemaname = 'public' and tablename like 'funding\_%'
  loop
    execute format('grant select, insert, update, delete, references, trigger on public.%I to service_role', t);
  end loop;
end $$;

-- Funding goal captured during onboarding (one profile per business).
alter table public.funding_profiles
  add column if not exists funding_goal_type text,
  add column if not exists target_amount numeric,
  add column if not exists funding_purpose text,
  add column if not exists desired_timeline text,
  add column if not exists onboarding_completed_at timestamptz;

do $$ begin
  alter table public.funding_profiles add constraint funding_profiles_goal_type_check
    check (funding_goal_type is null or funding_goal_type in
      ('equipment','working_capital','business_credit','line_of_credit','real_estate','startup','other'));
exception when duplicate_object then null; end $$;

do $$ begin
  alter table public.funding_profiles add constraint funding_profiles_target_amount_check
    check (target_amount is null or target_amount >= 0);
exception when duplicate_object then null; end $$;

notify pgrst, 'reload schema';
