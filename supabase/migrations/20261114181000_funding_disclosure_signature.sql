alter table public.funding_consents add column if not exists signer_name text;

alter table public.funding_consents add constraint funding_consents_v2_signature
  check (
    disclosure_version <> 'v2'
    or disclosure_type not in (
      'funding_disclaimer', 'business_purpose_certification',
      'application_accuracy_certification', 'electronic_communications'
    )
    or (signer_name is not null and char_length(btrim(signer_name)) between 1 and 120)
  );
