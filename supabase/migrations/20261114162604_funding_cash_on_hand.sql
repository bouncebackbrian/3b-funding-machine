alter table public.funding_financial_snapshots
  add column if not exists cash_on_hand numeric(14, 2) check (cash_on_hand >= 0);

comment on column public.funding_financial_snapshots.cash_on_hand is
  'Client-reported unrestricted business cash outside the reported checking balance. Null means not provided.';

notify pgrst, 'reload schema';
