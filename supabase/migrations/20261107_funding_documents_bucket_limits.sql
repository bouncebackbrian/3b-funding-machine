-- Enforce upload limits at the storage layer (already applied to Core_Eco).
-- Mirrors MAX_UPLOAD_BYTES / ALLOWED_UPLOAD_TYPES in lib/funding/documents.ts,
-- so oversized or wrong-type files are rejected before they ever land.
update storage.buckets
set file_size_limit = 10485760,
    allowed_mime_types = array['application/pdf','image/jpeg','image/png','image/heic','image/heif','image/webp']
where id = 'funding-documents';
