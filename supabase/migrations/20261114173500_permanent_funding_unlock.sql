create schema if not exists funding_private;

create unique index if not exists entitlements_permanent_funding_unlock_uq
  on public.entitlements (user_id)
  where business_id is null and plan_sku = 'FUNDING_MACHINE_UNLOCK';

-- MFSN_VIP is written by staff/service only after checking the member in
-- Credit Builders and confirming the provider's plan and paid-through date.
create or replace function funding_private.grant_funding_unlock()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.user_id is null then
    return new;
  end if;

  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended('funding-unlock:' || new.user_id::text, 0)
  );

  insert into public.entitlements (user_id, plan_sku, status, correlation_id)
  select new.user_id, 'FUNDING_MACHINE_UNLOCK', 'active', 'funding-eligibility'
  where exists (
    select 1 from public.entitlements
    where user_id = new.user_id and business_id is null
      and plan_sku = 'MFSN_VIP' and status = 'active' and expires_at > now()
  ) and exists (
    select 1 from public.funding_credit_profiles
    where user_id = new.user_id
      and fico_score >= 700 and score_date <= current_date
      and bureau in ('experian', 'equifax', 'transunion')
    group by business_id
    having count(distinct bureau) = 3
  )
  on conflict (user_id) where business_id is null and plan_sku = 'FUNDING_MACHINE_UNLOCK'
  do nothing;

  return new;
end;
$$;

revoke all on function funding_private.grant_funding_unlock() from public, anon, authenticated;
revoke all on schema funding_private from public, anon, authenticated;

create trigger grant_funding_unlock_after_vip
  after insert or update on public.entitlements
  for each row
  when (new.plan_sku = 'MFSN_VIP' and new.business_id is null)
  execute function funding_private.grant_funding_unlock();

create trigger grant_funding_unlock_after_fico
  after insert or update on public.funding_credit_profiles
  for each row
  execute function funding_private.grant_funding_unlock();

-- Preserve access for anyone meeting the new rule when this migration runs.
insert into public.entitlements (user_id, plan_sku, status, correlation_id)
select distinct vip.user_id, 'FUNDING_MACHINE_UNLOCK', 'active', 'funding-eligibility'
from public.entitlements vip
where vip.plan_sku = 'MFSN_VIP' and vip.business_id is null
  and vip.status = 'active' and vip.expires_at > now()
  and exists (
    select 1 from public.funding_credit_profiles
    where user_id = vip.user_id
      and fico_score >= 700 and score_date <= current_date
      and bureau in ('experian', 'equifax', 'transunion')
    group by business_id
    having count(distinct bureau) = 3
  )
on conflict (user_id) where business_id is null and plan_sku = 'FUNDING_MACHINE_UNLOCK'
do nothing;

