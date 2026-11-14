Warning: truncated output (original token count: 113873)
Total output lines: 14639

// Generated from Core_Eco (rkwdryneutgyqrnbuwaz) via Supabase generate_typescript_types.
// Do not hand-edit table shapes — regenerate instead.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      account_resolution_requests: {
        Row: {
          account_number_last4: string | null
          consumer_notes: string | null
          created_at: string
          creditor_name: string
          current_balance_cents: number | null
          debt_confirmed: boolean
          delivery_method: string | null
          id: string
          letter_approved_at: string | null
          letter_approved_content: string | null
          letter_content: string | null
          letter_reviewed_at: string | null
          letterstream_job_id: string | null
          letterstream_tracking: string | null
          mailed_at: string | null
          old_debt_warning_acknowledged: boolean
          proposed_months: number | null
          proposed_payment_cents: number | null
          proposed_settlement_cents: number | null
          proposed_start_date: string | null
          recipient_address: string | null
          recipient_city: string | null
          recipient_state: string | null
          recipient_zip: string | null
          request_type: string
          requested_reporting_treatment: string | null
          settlement_structure: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_number_last4?: string | null
          consumer_notes?: string | null
          created_at?: string
          creditor_name: string
          current_balance_cents?: number | null
          debt_confirmed?: boolean
          delivery_method?: string | null
          id?: string
          letter_approved_at?: string | null
          letter_approved_content?: string | null
          letter_content?: string | null
          letter_reviewed_at?: string | null
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mailed_at?: string | null
          old_debt_warning_acknowledged?: boolean
          proposed_months?: number | null
          proposed_payment_cents?: number | null
          proposed_settlement_cents?: number | null
          proposed_start_date?: string | null
          recipient_address?: string | null
          recipient_city?: string | null
          recipient_state?: string | null
          recipient_zip?: string | null
          request_type: string
          requested_reporting_treatment?: string | null
          settlement_structure?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_number_last4?: string | null
          consumer_notes?: string | null
          created_at?: string
          creditor_name?: string
          current_balance_cents?: number | null
          debt_confirmed?: boolean
          delivery_method?: string | null
          id?: string
          letter_approved_at?: string | null
          letter_approved_content?: string | null
          letter_content?: string | null
          letter_reviewed_at?: string | null
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mailed_at?: string | null
          old_debt_warning_acknowledged?: boolean
          proposed_months?: number | null
          proposed_payment_cents?: number | null
          proposed_settlement_cents?: number | null
          proposed_start_date?: string | null
          recipient_address?: string | null
          recipient_city?: string | null
          recipient_state?: string | null
          recipient_zip?: string | null
          request_type?: string
          requested_reporting_treatment?: string | null
          settlement_structure?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      action_library: {
        Row: {
          active: boolean
          category: string
          description: string
          difficulty: string
          estimated_time: string
          id: string
          impact: string
          sort_order: number
          title: string
          why_it_matters: string | null
        }
        Insert: {
          active?: boolean
          category?: string
          description: string
          difficulty: string
          estimated_time: string
          id?: string
          impact: string
          sort_order?: number
          title: string
          why_it_matters?: string | null
        }
        Update: {
          active?: boolean
          category?: string
          description?: string
          difficulty?: string
          estimated_time?: string
          id?: string
          impact?: string
          sort_order?: number
          title?: string
          why_it_matters?: string | null
        }
        Relationships: []
      }
      admin_settings: {
        Row: {
          key: string
          updated_at: string
          updated_by: string | null
          value: string | null
        }
        Insert: {
          key: string
          updated_at?: string
          updated_by?: string | null
          value?: string | null
        }
        Update: {
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: string | null
        }
        Relationships: []
      }
      admin_system_access: {
        Row: {
          access_level: string
          allowed_products: string[]
          created_at: string
          expires_at: string | null
          granted_at: string
          granted_by: string | null
          id: string
          is_active: boolean
          notes: string | null
          profile_id: string
          role: string
          updated_at: string
        }
        Insert: {
          access_level: string
          allowed_products?: string[]
          created_at?: string
          expires_at?: string | null
          granted_at?: string
          granted_by?: string | null
          id?: string
          is_active?: boolean
          notes?: string | null
          profile_id: string
          role: string
          updated_at?: string
        }
        Update: {
          access_level?: string
          allowed_products?: string[]
          created_at?: string
          expires_at?: string | null
          granted_at?: string
          granted_by?: string | null
          id?: string
          is_active?: boolean
          notes?: string | null
          profile_id?: string
          role?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_system_access_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_system_access_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_income_records: {
        Row: {
          amount_cents: number
          created_at: string
          id: string
          partner_id: string
          payout_date: string | null
          period_end: string
          period_start: string
          referral_count: number
          source_id: string
          source_reference: string | null
          status: string
        }
        Insert: {
          amount_cents: number
          created_at?: string
          id?: string
          partner_id: string
          payout_date?: string | null
          period_end: string
          period_start: string
          referral_count?: number
          source_id: string
          source_reference?: string | null
          status: string
        }
        Update: {
          amount_cents?: number
          created_at?: string
          id?: string
          partner_id?: string
          payout_date?: string | null
          period_end?: string
          period_start?: string
          referral_count?: number
          source_id?: string
          source_reference?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_income_records_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_income_records_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "affiliate_income_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_income_sources: {
        Row: {
          byte_size: number
          created_at: string
          id: string
          mime_type: string
          original_filename: string
          partner_id: string
          record_count: number
          sha256: string
          storage_path: string
          uploaded_by: string
        }
        Insert: {
          byte_size: number
          created_at?: string
          id?: string
          mime_type: string
          original_filename: string
          partner_id: string
          record_count?: number
          sha256: string
          storage_path: string
          uploaded_by: string
        }
        Update: {
          byte_size?: number
          created_at?: string
          id?: string
          mime_type?: string
          original_filename?: string
          partner_id?: string
          record_count?: number
          sha256?: string
          storage_path?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_income_sources_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_program_events: {
        Row: {
          actor: string
          created_at: string
          details: string | null
          event_type: string
          id: string
          program_id: string
          summary: string
        }
        Insert: {
          actor?: string
          created_at?: string
          details?: string | null
          event_type: string
          id?: string
          program_id: string
          summary: string
        }
        Update: {
          actor?: string
          created_at?: string
          details?: string | null
          event_type?: string
          id?: string
          program_id?: string
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_program_events_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "affiliate_programs"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_programs: {
        Row: {
          affiliate_account_id: string | null
          application_submitted_at: string | null
          apply_url: string | null
          approval_notes: string | null
          approved_at: string | null
          archived_at: string | null
          archived_reason: string | null
          commission_model: string
          created_at: string
          currency: string
          dashboard_label: string | null
          dashboard_url: string | null
          id: string
          lane: string
          lifetime_revenue_cents: number
          name: string
          network: string
          next_step: string
          notes: string
          operator_owner: string
          payout_cadence: string | null
          payout_notes: string | null
          pending_revenue_cents: number
          status: string
          tags: string[]
          updated_at: string
          verification: string
          why_it_fits: string
        }
        Insert: {
          affiliate_account_id?: string | null
          application_submitted_at?: string | null
          apply_url?: string | null
          approval_notes?: string | null
          approved_at?: string | null
          archived_at?: string | null
          archived_reason?: string | null
          commission_model: string
          created_at?: string
          currency?: string
          dashboard_label?: string | null
          dashboard_url?: string | null
          id: string
          lane: string
          lifetime_revenue_cents?: number
          name: string
          network: string
          next_step: string
          notes: string
          operator_owner: string
          payout_cadence?: string | null
          payout_notes?: string | null
          pending_revenue_cents?: number
          status: string
          tags?: string[]
          updated_at?: string
          verification: string
          why_it_fits: string
        }
        Update: {
          affiliate_account_id?: string | null
          application_submitted_at?: string | null
          apply_url?: string | null
          approval_notes?: string | null
          approved_at?: string | null
          archived_at?: string | null
          archived_reason?: string | null
          commission_model?: string
          created_at?: string
          currency?: string
          dashboard_label?: string | null
          dashboard_url?: string | null
          id?: string
          lane?: string
          lifetime_revenue_cents?: number
          name?: string
          network?: string
          next_step?: string
          notes?: string
          operator_owner?: string
          payout_cadence?: string | null
          payout_notes?: string | null
          pending_revenue_cents?: number
          status?: string
          tags?: string[]
          updated_at?: string
          verification?: string
          why_it_fits?: string
        }
        Relationships: []
      }
      agreement_copy_orders: {
        Row: {
          address_snapshot: Json
          agreement_document_hash: string
          agreement_id: string
          amount_cents: number | null
          approval_note: string | null
          approval_requested_at: string | null
          approved_at: string | null
          approved_by: string | null
          escalated_at: string | null
          failed_at: string | null
          failure_reason: string | null
          founder_review_required: boolean
          id: string
          paid_at: string | null
          provider: string | null
          provider_job_id: string | null
          provider_status: string | null
          recipient_name: string
          requested_at: string
          status: string
          stripe_checkout_session_id: string | null
          stripe_payment_intent_id: string | null
          submitted_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address_snapshot: Json
          agreement_document_hash: string
          agreement_id: string
          amount_cents?: number | null
          approval_note?: string | null
          approval_requested_at?: string | null
          approved_at?: string | null
          approved_by?: string | null
          escalated_at?: string | null
          failed_at?: string | null
          failure_reason?: string | null
          founder_review_required?: boolean
          id?: string
          paid_at?: string | null
          provider?: string | null
          provider_job_id?: string | null
          provider_status?: string | null
          recipient_name: string
          requested_at?: string
          status?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          submitted_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address_snapshot?: Json
          agreement_document_hash?: string
          agreement_id?: string
          amount_cents?: number | null
          approval_note?: string | null
          approval_requested_at?: string | null
          approved_at?: string | null
          approved_by?: string | null
          escalated_at?: string | null
          failed_at?: string | null
          failure_reason?: string | null
          founder_review_required?: boolean
          id?: string
          paid_at?: string | null
          provider?: string | null
          provider_job_id?: string | null
          provider_status?: string | null
          recipient_name?: string
          requested_at?: string
          status?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agreement_copy_orders_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: true
            referencedRelation: "compliance_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_audit_answers: {
        Row: {
          answer_value: string | null
          audit_id: string
          confidence: string
          created_at: string
          id: string
          question_key: string
          updated_at: string
        }
        Insert: {
          answer_value?: string | null
          audit_id: string
          confidence: string
          created_at?: string
          id?: string
          question_key: string
          updated_at?: string
        }
        Update: {
          answer_value?: string | null
          audit_id?: string
          confidence?: string
          created_at?: string
          id?: string
          question_key?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_audit_answers_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "ai_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_audits: {
        Row: {
          business_id: string
          completed_at: string | null
          created_at: string
          created_by: string
          id: string
          status: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          business_id: string
          completed_at?: string | null
          created_at?: string
          created_by: string
          id?: string
          status?: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          business_id?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string
          id?: string
          status?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_audits_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_audits_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_audits_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "ai_workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_workspaces: {
        Row: {
          business_id: string
          created_at: string
          created_by: string
          id: string
          status: string
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by: string
          id?: string
          status?: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string
          id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_workspaces_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_workspaces_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      analyzer_items: {
        Row: {
          analyzer_session_id: string
          created_at: string
          id: string
          kind: string
          member_id: string
          payload: Json
          rule_code: string
          severity: string
          vault_entry_id: string | null
          violation_type: string | null
        }
        Insert: {
          analyzer_session_id: string
          created_at?: string
          id?: string
          kind?: string
          member_id: string
          payload?: Json
          rule_code?: string
          severity?: string
          vault_entry_id?: string | null
          violation_type?: string | null
        }
        Update: {
          analyzer_session_id?: string
          created_at?: string
          id?: string
          kind?: string
          member_id?: string
          payload?: Json
          rule_code?: string
          severity?: string
          vault_entry_id?: string | null
          violation_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analyzer_items_analyzer_session_id_fkey"
            columns: ["analyzer_session_id"]
            isOneToOne: false
            referencedRelation: "analyzer_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      analyzer_sessions: {
        Row: {
          analyzer_version: string
          completed_at: string | null
          created_at: string
          failure_reason: string | null
          id: string
          member_id: string
          month_key: string | null
          report_id: string | null
          results_json: Json | null
          ruleset_version: string
          run_type: string
          started_at: string
          status: string
          triggered_by: string
          triggered_by_id: string | null
          updated_at: string
          user_id: string
          vault_report_id: string
        }
        Insert: {
          analyzer_version?: string
          completed_at?: string | null
          created_at?: string
          failure_reason?: string | null
          id?: string
          member_id: string
          month_key?: string | null
          report_id?: string | null
          results_json?: Json | null
          ruleset_version?: string
          run_type?: string
          started_at?: string
          status?: string
          triggered_by?: string
          triggered_by_id?: string | null
          updated_at?: string
          user_id: string
          vault_report_id: string
        }
        Update: {
          analyzer_version?: string
          completed_at?: string | null
          created_at?: string
          failure_reason?: string | null
          id?: string
          member_id?: string
          month_key?: string | null
          report_id?: string | null
          results_json?: Json | null
          ruleset_version?: string
          run_type?: string
          started_at?: string
          status?: string
          triggered_by?: string
          triggered_by_id?: string | null
          updated_at?: string
          user_id?: string
          vault_report_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analyzer_sessions_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "vault_reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_analyzer_sessions_vault_report"
            columns: ["vault_report_id"]
            isOneToOne: false
            referencedRelation: "vault_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      architecture_decisions: {
        Row: {
          adr_number: string
          consequences: string | null
          context: string
          created_at: string
          decided_at: string
          decided_by: string
          decision: string
          id: string
          status: string
          superseded_by: string | null
          title: string
          updated_at: string
        }
        Insert: {
          adr_number: string
          consequences?: string | null
          context: string
          created_at?: string
          decided_at?: string
          decided_by?: string
          decision: string
          id?: string
          status?: string
          superseded_by?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          adr_number?: string
          consequences?: string | null
          context?: string
          created_at?: string
          decided_at?: string
          decided_by?: string
          decision?: string
          id?: string
          status?: string
          superseded_by?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "architecture_decisions_superseded_by_fkey"
            columns: ["superseded_by"]
            isOneToOne: false
            referencedRelation: "architecture_decisions"
            referencedColumns: ["adr_number"]
          },
        ]
      }
      audit_events: {
        Row: {
          case_id: string | null
          created_at: string
          details: Json | null
          event_type: string
          id: string
          user_id: string
        }
        Insert: {
          case_id?: string | null
          created_at?: string
          details?: Json | null
          event_type: string
          id?: string
          user_id: string
        }
        Update: {
          case_id?: string | null
          created_at?: string
          details?: Json | null
          event_type?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_events_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      bear_album_photos: {
        Row: {
          approved: boolean
          caption: string | null
          created_at: string
          credit: string | null
          id: string
          jpeg: string
          source: string
        }
        Insert: {
          approved?: boolean
          caption?: string | null
          created_at?: string
          credit?: string | null
          id?: string
          jpeg: string
          source: string
        }
        Update: {
          approved?: boolean
          caption?: string | null
          created_at?: string
          credit?: string | null
          id?: string
          jpeg?: string
          source?: string
        }
        Relationships: []
      }
      billing_subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          id: string
          plan_name: string | null
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan_name?: string | null
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan_name?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      boost_events: {
        Row: {
          business_id: string | null
          correlationid: string | null
          created_at: string
          event_name: string
          id: string
          reason: string | null
          result: string
          source: string
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          correlationid?: string | null
          created_at?: string
          event_name: string
          id?: string
          reason?: string | null
          result: string
          source: string
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          correlationid?: string | null
          created_at?: string
          event_name?: string
          id?: string
          reason?: string | null
          result?: string
          source?: string
          user_id?: string | null
        }
        Relationships: []
      }
      brianos_finance_snapshots: {
        Row: {
          auto_loans: number | null
          cash: number | null
          checking: number | null
          created_at: string | null
          credit_cards: number | null
          crypto: number | null
          id: string
          investments: number | null
          mortgage: number | null
          net_worth: number | null
          notes: string | null
          other_assets: number | null
          other_debt: number | null
          profile_id: string
          real_estate: number | null
          savings: number | null
          snapshot_date: string
          student_loans: number | null
          total_assets: number | null
          total_liabilities: number | null
          vehicles: number | null
        }
        Insert: {
          auto_loans?: number | null
          cash?: number | null
          checking?: number | null
          created_at?: string | null
          credit_cards?: number | null
          crypto?: number | null
          id?: string
          investments?: number | null
          mortgage?: number | null
          net_worth?: number | null
          notes?: string | null
          other_assets?: number | null
          other_debt?: number | null
          profile_id: string
          real_estate?: number | null
          savings?: number | null
          snapshot_date?: string
          student_loans?: number | null
          total_assets?: number | null
          total_liabilities?: number | null
          vehicles?: number | null
        }
        Update: {
          auto_loans?: number | null
          cash?: number | null
          checking?: number | null
          created_at?: string | null
          credit_cards?: number | null
          crypto?: number | null
          id?: string
          investments?: number | null
          mortgage?: number | null
          net_worth?: number | null
          notes?: string | null
          other_assets?: number | null
          other_debt?: number | null
          profile_id?: string
          real_estate?: number | null
          savings?: number | null
          snapshot_date?: string
          student_loans?: number | null
          total_assets?: number | null
          total_liabilities?: number | null
          vehicles?: number | null
        }
        Relationships: []
      }
      bureau_mailing_orders: {
        Row: {
          amount_cents: number | null
          bureau: string
          created_at: string
          delivered_at: string | null
          id: string
          investigation_due_at: string | null
          mailed_at: string | null
          mailing_method: string
          packet_generated_at: string
          packet_id: string | null
          paid_at: string | null
          provider: string | null
          provider_order_id: string | null
          source_id: string
          source_type: string
          status: string
          stripe_session_id: string | null
          tracking_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount_cents?: number | null
          bureau: string
          created_at?: string
          delivered_at?: string | null
          id?: string
          investigation_due_at?: string | null
          mailed_at?: string | null
          mailing_method: string
          packet_generated_at?: string
          packet_id?: string | null
          paid_at?: string | null
          provider?: string | null
          provider_order_id?: string | null
          source_id: string
          source_type: string
          status?: string
          stripe_session_id?: string | null
          tracking_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount_cents?: number | null
          bureau?: string
          created_at?: string
          delivered_at?: string | null
          id?: string
          investigation_due_at?: string | null
          mailed_at?: string | null
          mailing_method?: string
          packet_generated_at?: string
          packet_id?: string | null
          paid_at?: string | null
          provider?: string | null
          provider_order_id?: string | null
          source_id?: string
          source_type?: string
          status?: string
          stripe_session_id?: string | null
          tracking_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bureau_mailing_orders_packet_id_fkey"
            columns: ["packet_id"]
            isOneToOne: false
            referencedRelation: "bureau_packets"
            referencedColumns: ["id"]
          },
        ]
      }
      bureau_packets: {
        Row: {
          approval_snapshot: Json
          approved_at: string | null
          approved_letter_body: string | null
          approved_letter_body_hash: string | null
          bureau: string
          case_ids: Json | null
          consumer_approved_at: string | null
          consumer_approved_body_hash: string | null
          created_at: string
          credit_report_id: string | null
          id: string
          item_count: number | null
          letter_body: string | null
          letterstream_job_id: string | null
          letterstream_tracking: string | null
          reviewed_at: string | null
          round_number: number
          sent_at: string | null
          stall_risk_score: number | null
          status: string
          subject: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          approval_snapshot?: Json
          approved_at?: string | null
          approved_letter_body?: string | null
          approved_letter_body_hash?: string | null
          bureau: string
          case_ids?: Json | null
          consumer_approved_at?: string | null
          consumer_approved_body_hash?: string | null
          created_at?: string
          credit_report_id?: string | null
          id?: string
          item_count?: number | null
          letter_body?: string | null
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          reviewed_at?: string | null
          round_number?: number
          sent_at?: string | null
          stall_risk_score?: number | null
          status?: string
          subject?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          approval_snapshot?: Json
          approved_at?: string | null
          approved_letter_body?: string | null
          approved_letter_body_hash?: string | null
          bureau?: string
          case_ids?: Json | null
          consumer_approved_at?: string | null
          consumer_approved_body_hash?: string | null
          created_at?: string
          credit_report_id?: string | null
          id?: string
          item_count?: number | null
          letter_body?: string | null
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          reviewed_at?: string | null
          round_number?: number
          sent_at?: string | null
          stall_risk_score?: number | null
          status?: string
          subject?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bureau_responses: {
        Row: {
          bureau: string
          created_at: string
          id: string
          notes: string | null
          packet_id: string
          response_date: string | null
          response_type: string
          updated_at: string
          user_id: string
          vault_document_id: string | null
        }
        Insert: {
          bureau: string
          created_at?: string
          id?: string
          notes?: string | null
          packet_id: string
          response_date?: string | null
          response_type: string
          updated_at?: string
          user_id: string
          vault_document_id?: string | null
        }
        Update: {
          bureau?: string
          created_at?: string
          id?: string
          notes?: string | null
          packet_id?: string
          response_date?: string | null
          response_type?: string
          updated_at?: string
          user_id?: string
          vault_document_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bureau_responses_packet_id_fkey"
            columns: ["packet_id"]
            isOneToOne: false
            referencedRelation: "bureau_packets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bureau_responses_vault_document_id_fkey"
            columns: ["vault_document_id"]
            isOneToOne: false
            referencedRelation: "vault_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      business_members: {
        Row: {
          business_id: string
          created_at: string | null
          id: string
          role: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          business_id: string
          created_at?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          bank_account_status: string
          business_code: string | null
          business_email: string | null
          business_phone: string | null
          business_type: string
          city: string | null
          country: string | null
          created_at: string | null
          credit_builder_status: string
          dba_name: string | null
          domain: string | null
          domain_status: string
          dot_number: string | null
          duns_number: string | null
          duns_status: string
          ein: string | null
          ein_status: string
          entity_type: string | null
          formation_date: string | null
          formation_state: string | null
          funding_status: string
          id: string
          legal_name: string
          mc_number: string | null
          media_status: string
          naics_code: string | null
          name: string | null
          quick_text_phone: string | null
          state: string | null
          updated_at: string | null
          website_status: string
          website_url: string | null
          zip_code: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          bank_account_status?: string
          business_code?: string | null
          business_email?: string | null
          business_phone?: string | null
          business_type?: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          credit_builder_status?: string
          dba_name?: string | null
          domain?: string | null
          domain_status?: string
          dot_number?: string | null
          duns_number?: string | null
          duns_status?: string
          ein?: string | null
          ein_status?: string
          entity_type?: string | null
          formation_date?: string | null
          formation_state?: string | null
          funding_status?: string
          id?: string
          legal_name: string
          mc_number?: string | null
          media_status?: string
          naics_code?: string | null
          name?: string | null
          quick_text_phone?: string | null
          state?: string | null
          updated_at?: string | null
          website_status?: string
          website_url?: string | null
          zip_code?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          bank_account_status?: string
          business_code?: string | null
          business_email?: string | null
          business_phone?: string | null
          business_type?: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          credit_builder_status?: string
          dba_name?: string | null
          domain?: string | null
          domain_status?: string
          dot_number?: string | null
          duns_number?: string | null
          duns_status?: string
          ein?: string | null
          ein_status?: string
          entity_type?: string | null
          formation_date?: string | null
          formation_state?: string | null
          funding_status?: string
          id?: string
          legal_name?: string
          mc_number?: string | null
          media_status?: string
          naics_code?: string | null
          name?: string | null
          quick_text_phone?: string | null
          state?: string | null
          updated_at?: string | null
          website_status?: string
          website_url?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      cancellation_feedback: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          reason: string
          save_offer_accepted: boolean
          save_offer_shown: boolean
          save_offer_type: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tier_at_cancel: string | null
          user_id: string
          within_three_business_days: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          reason: string
          save_offer_accepted?: boolean
          save_offer_shown?: boolean
          save_offer_type?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_at_cancel?: string | null
          user_id: string
          within_three_business_days?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          reason?: string
          save_offer_accepted?: boolean
          save_offer_shown?: boolean
          save_offer_type?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_at_cancel?: string | null
          user_id?: string
          within_three_business_days?: boolean
        }
        Relationships: []
      }
      case_client_notes: {
        Row: {
          case_id: string
          context_type: string
          created_at: string
          id: string
          include_in_analyzer: boolean
          note: string
          updated_at: string
          user_id: string
        }
        Insert: {
          case_id: string
          context_type?: string
          created_at?: string
          id?: string
          include_in_analyzer?: boolean
          note: string
          updated_at?: string
          user_id: string
        }
        Update: {
          case_id?: string
          context_type?: string
          created_at?: string
          id?: string
          include_in_analyzer?: boolean
          note?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "case_client_notes_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      case_events: {
        Row: {
          case_id: string | null
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          round_id: string | null
          user_id: string | null
        }
        Insert: {
          case_id?: string | null
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          round_id?: string | null
          user_id?: string | null
        }
        Update: {
          case_id?: string | null
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          round_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_events_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "case_events_round_id_fkey"
            columns: ["round_id"]
            isOneToOne: false
            referencedRelation: "dispute_rounds"
            referencedColumns: ["id"]
          },
        ]
      }
      case_workflows: {
        Row: {
          case_id: string
          completed_steps: Json
          created_at: string | null
          current_step: number
          id: string
          status: string
          step_data: Json
          updated_at: string | null
          user_id: string
          workflow_key: string
        }
        Insert: {
          case_id: string
          completed_steps?: Json
          created_at?: string | null
          current_step?: number
          id?: string
          status?: string
          step_data?: Json
          updated_at?: string | null
          user_id: string
          workflow_key: string
        }
        Update: {
          case_id?: string
          completed_steps?: Json
          created_at?: string | null
          current_step?: number
          id?: string
          status?: string
          step_data?: Json
          updated_at?: string | null
          user_id?: string
          workflow_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "case_workflows_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      cases: {
        Row: {
          account_name: string
          account_number_last4: string | null
          account_type: string
          bureau: string
          claimed_balance: string | null
          collector_address: string | null
          collector_city: string | null
          collector_name: string | null
          collector_state: string | null
          collector_zip: string | null
          consumer_confirmation: string | null
          consumer_confirmation_at: string | null
          consumer_confirmation_question: string | null
          consumer_extra_info: string | null
          consumer_note: string | null
          created_at: string
          credit_report_id: string | null
          description: string | null
          detected_issue_key: string | null
          dispute_reason: string
          dispute_strategy_options: Json | null
          dispute_strength_score: number | null
          evidence_updated: boolean | null
          id: string
          identity_theft_claim: boolean
          identity_theft_confirmed_at: string | null
          original_creditor: string | null
          priority: string | null
          selected_dispute_strategy: string | null
          selected_dispute_strategy_label: string | null
          status: string
          strategy_confirmed_at: string | null
          strategy_selected_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_name: string
          account_number_last4?: string | null
          account_type: string
          bureau: string
          claimed_balance?: string | null
          collector_address?: string | null
          collector_city?: string | null
          collector_name?: string | null
          collector_state?: string | null
          collector_zip?: string | null
          consumer_confirmation?: string | null
          consumer_confirmation_at?: string | null
          consumer_confirmation_question?: string | null
          consumer_extra_info?: string | null
          consumer_note?: string | null
          created_at?: string
          credit_report_id?: string | null
          description?: string | null
          detected_issue_key?: string | null
          dispute_reason: string
          dispute_strategy_options?: Json | null
          dispute_strength_score?: number | null
          evidence_updated?: boolean | null
          id?: string
          identity_theft_claim?: boolean
          identity_theft_confirmed_at?: string | null
          original_creditor?: string | null
          priority?: string | null
          selected_dispute_strategy?: string | null
          selected_dispute_strategy_label?: string | null
          status?: string
          strategy_confirmed_at?: string | null
          strategy_selected_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_name?: string
          account_number_last4?: string | null
          account_type?: string
          bureau?: string
          claimed_balance?: string | null
          collector_address?: string | null
          collector_city?: string | null
          collector_name?: string | null
          collector_state?: string | null
          collector_zip?: string | null
          consumer_confirmation?: string | null
          consumer_confirmation_at?: string | null
          consumer_confirmation_question?: string | null
          consumer_extra_info?: string | null
          consumer_note?: string | null
          created_at?: string
          credit_report_id?: string | null
          description?: string | null
          detected_issue_key?: string | null
          dispute_reason?: string
          dispute_strategy_options?: Json | null
          dispute_strength_score?: number | null
          evidence_updated?: boolean | null
          id?: string
          identity_theft_claim?: boolean
          identity_theft_confirmed_at?: string | null
          original_creditor?: string | null
          priority?: string | null
          selected_dispute_strategy?: string | null
          selected_dispute_strategy_label?: string | null
          status?: string
          strategy_confirmed_at?: string | null
          strategy_selected_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cases_credit_report_id_fkey"
            columns: ["credit_report_id"]
            isOneToOne: false
            referencedRelation: "credit_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      cb_analyzer_sessions: {
        Row: {
          created_at: string
          extraction_confidence: number | null
          high_priority_count: number | null
          id: string
          item_count: number | null
          results_json: Json
          source: string
          user_id: string
        }
        Insert: {
          created_at?: string
          extraction_confidence?: number | null
          high_priority_count?: number | null
          id?: string
          item_count?: number | null
          results_json: Json
          source?: string
          user_id: string
        }
        Update: {
          created_at?: string
          extraction_confidence?: number | null
          high_priority_count?: number | null
          id?: string
          item_count?: number | null
          results_json?: Json
          source?: string
          user_id?: string
        }
        Relationships: []
      }
      checkins: {
        Row: {
          created_at: string
          event_label: string | null
          id: string
          memorial_id: string
          message: string | null
          name: string
          photo_url: string | null
        }
        Insert: {
          created_at?: string
          event_label?: string | null
          id?: string
          memorial_id: string
          message?: string | null
          name: string
          photo_url?: string | null
        }
        Update: {
          created_at?: string
          event_label?: string | null
          id?: string
          memorial_id?: string
          message?: string | null
          name?: string
          photo_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checkins_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_acceptances: {
        Row: {
          accepted_at: string
          full_name: string
          id: string
          ip_address: string | null
          product: string
          user_agent: string | null
          user_id: string
          version: string
        }
        Insert: {
          accepted_at?: string
          full_name: string
          id?: string
          ip_address?: string | null
          product: string
          user_agent?: string | null
          user_id: string
          version: string
        }
        Update: {
          accepted_at?: string
          full_name?: string
          id?: string
          ip_address?: string | null
          product?: string
          user_agent?: string | null
          user_id?: string
          version?: string
        }
        Relationships: []
      }
      compliance_agreements: {
        Row: {
          acquisition_channel: string
          address_document_id: string | null
          address_snapshot: Json | null
          address_verified_at: string | null
          agreement_text: string
          cancellation_deadline: string
          cancellation_notice_text: string
          cancelled_at: string | null
          created_at: string
          document_hash: string
          full_name: string
          id: string
          identity_acknowledged_at: string | null
          identity_document_id: string | null
          ip_address: string | null
          product: string
          signature_name: string
          signed_at: string
          status: string
          statutory_disclosure_text: string
          user_agent: string | null
          user_id: string
          version: string
        }
        Insert: {
          acquisition_channel: string
          address_document_id?: string | null
          address_snapshot?: Json | null
          address_verified_at?: string | null
          agreement_text: string
          cancellation_deadline: string
          cancellation_notice_text: string
          cancelled_at?: string | null
          created_at?: string
          document_hash: string
          full_name: string
          id?: string
          identity_acknowledged_at?: string | null
          identity_document_id?: string | null
          ip_address?: string | null
          product: string
          signature_name: string
          signed_at?: string
          status?: string
          statutory_disclosure_text: string
          user_agent?: string | null
          user_id: string
          version: string
        }
        Update: {
          acquisition_channel?: string
          address_document_id?: string | null
          address_snapshot?: Json | null
          address_verified_at?: string | null
          agreement_text?: string
          cancellation_deadline?: string
          cancellation_notice_text?: string
          cancelled_at?: string | null
          created_at?: string
          document_hash?: string
          full_name?: string
          id?: string
          identity_acknowledged_at?: string | null
          identity_document_id?: string | null
          ip_address?: string | null
          product?: string
          signature_name?: string
          signed_at?: string
          status?: string
          statutory_disclosure_text?: string
          user_agent?: string | null
          user_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "compliance_agreements_address_document_id_fkey"
            columns: ["address_document_id"]
            isOneToOne: false
            referencedRelation: "vault_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compliance_agreements_identity_document_id_fkey"
            columns: ["identity_document_id"]
            isOneToOne: false
            referencedRelation: "vault_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_events: {
        Row: {
          action: string | null
          agreement_id: string | null
          allowed: boolean | null
          created_at: string
          event_type: string
          id: string
          metadata: Json
          reason_codes: Json
          user_id: string
        }
        Insert: {
          action?: string | null
          agreement_id?: string | null
          allowed?: boolean | null
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json
          reason_codes?: Json
          user_id: string
        }
        Update: {
          action?: string | null
          agreement_id?: string | null
          allowed?: boolean | null
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json
          reason_codes?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "compliance_events_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "compliance_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      content_scores: {
        Row: {
          id: string
          metadata: Json | null
          post_id: string | null
          score: number | null
          score_type: string
          scored_at: string | null
          workspace_id: string
        }
        Insert: {
          id?: string
          metadata?: Json | null
          post_id?: string | null
          score?: number | null
          score_type: string
          scored_at?: string | null
          workspace_id: string
        }
        Update: {
          id?: string
          metadata?: Json | null
          post_id?: string | null
          score?: number | null
          score_type?: string
          scored_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_scores_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "meta_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_scores_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_agent_runs: {
        Row: {
          alerts_created: number
          completed_at: string | null
          error: string | null
          error_msg: string | null
          id: string
          profile_id: string
          started_at: string
          status: string
          tasks_created: number
          tokens_used: number | null
          trigger: string
        }
        Insert: {
          alerts_created?: number
          completed_at?: string | null
          error?: string | null
          error_msg?: string | null
          id?: string
          profile_id: string
          started_at?: string
          status?: string
          tasks_created?: number
          tokens_used?: number | null
          trigger?: string
        }
        Update: {
          alerts_created?: number
          completed_at?: string | null
          error?: string | null
          error_msg?: string | null
          id?: string
          profile_id?: string
          started_at?: string
          status?: string
          tasks_created?: number
          tokens_used?: number | null
          trigger?: string
        }
        Relationships: [
          {
            foreignKeyName: "cos_agent_runs_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_alerts: {
        Row: {
          action_label: string | null
          action_url: string | null
          body: string
          category: string
          created_at: string
          dismissed_at: string | null
          id: string
          is_dismissed: boolean
          is_read: boolean
          metadata: Json
          product_slug: string | null
          profile_id: string
          severity: Database["public"]["Enums"]["cos_alert_severity"]
          source: string | null
          source_ref: string | null
          title: string
        }
        Insert: {
          action_label?: string | null
          action_url?: string | null
          body: string
          category?: string
          created_at?: string
          dismissed_at?: string | null
          id?: string
          is_dismissed?: boolean
          is_read?: boolean
          metadata?: Json
          product_slug?: string | null
          profile_id: string
          severity: Database["public"]["Enums"]["cos_alert_severity"]
          source?: string | null
          source_ref?: string | null
          title: string
        }
        Update: {
          action_label?: string | null
          action_url?: string | null
          body?: string
          category?: string
          created_at?: string
          dismissed_at?: string | null
          id?: string
          is_dismissed?: boolean
          is_read?: boolean
          metadata?: Json
          product_slug?: string | null
          profile_id?: string
          severity?: Database["public"]["Enums"]["cos_alert_severity"]
          source?: string | null
          source_ref?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "cos_alerts_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_briefs: {
        Row: {
          ai_commentary: string | null
          alerts_count: number
          brief_type: Database["public"]["Enums"]["cos_brief_type"]
          content: Json
          deployment_summary: Json
          generated_at: string
          id: string
          period_end: string
          period_start: string
          profile_id: string
          revenue_summary: Json
          title: string
          top_priorities: Json
        }
        Insert: {
          ai_commentary?: string | null
          alerts_count?: number
          brief_type: Database["public"]["Enums"]["cos_brief_type"]
          content?: Json
          deployment_summary?: Json
          generated_at?: string
          id?: string
          period_end: string
          period_start: string
          profile_id: string
          revenue_summary?: Json
          title: string
          top_priorities?: Json
        }
        Update: {
          ai_commentary?: string | null
          alerts_count?: number
          brief_type?: Database["public"]["Enums"]["cos_brief_type"]
          content?: Json
          deployment_summary?: Json
          generated_at?: string
          id?: string
          period_end?: string
          period_start?: string
          profile_id?: string
          revenue_summary?: Json
          title?: string
          top_priorities?: Json
        }
        Relationships: [
          {
            foreignKeyName: "cos_briefs_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_commits: {
        Row: {
          additions: number | null
          author_email: string | null
          author_name: string | null
          branch: string | null
          committed_at: string
          deletions: number | null
          files_changed: number | null
          id: string
          message: string | null
          product_slug: string | null
          profile_id: string
          repo: string
          sha: string
          short_sha: string | null
          synced_at: string | null
          url: string | null
        }
        Insert: {
          additions?: number | null
          author_email?: string | null
          author_name?: string | null
          branch?: string | null
          committed_at: string
          deletions?: number | null
          files_changed?: number | null
          id?: string
          message?: string | null
          product_slug?: string | null
          profile_id: string
          repo: string
          sha: string
          short_sha?: string | null
          synced_at?: string | null
          url?: string | null
        }
        Update: {
          additions?: number | null
          author_email?: string | null
          author_name?: string | null
          branch?: string | null
          committed_at?: string
          deletions?: number | null
          files_changed?: number | null
          id?: string
          message?: string | null
          product_slug?: string | null
          profile_id?: string
          repo?: string
          sha?: string
          short_sha?: string | null
          synced_at?: string | null
          url?: string | null
        }
        Relationships: []
      }
      cos_content: {
        Row: {
          channel: string | null
          created_at: string
          id: string
          notes: string | null
          performance: Json
          product_slug: string | null
          profile_id: string
          published_at: string | null
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          channel?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          performance?: Json
          product_slug?: string | null
          profile_id: string
          published_at?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          channel?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          performance?: Json
          product_slug?: string | null
          profile_id?: string
          published_at?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cos_content_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_deployments: {
        Row: {
          branch: string | null
          commit_msg: string | null
          commit_sha: string | null
          deployed_at: string
          duration_secs: number | null
          environment: string
          error_msg: string | null
          id: string
          product_slug: string
          profile_id: string
          source: string
          source_ref: string | null
          status: string
          triggered_by: string | null
          url: string | null
          vercel_deployment_id: string | null
        }
        Insert: {
          branch?: string | null
          commit_msg?: string | null
          commit_sha?: string | null
          deployed_at?: string
          duration_secs?: number | null
          environment?: string
          error_msg?: string | null
          id?: string
          product_slug: string
          profile_id: string
          source?: string
          source_ref?: string | null
          status: string
          triggered_by?: string | null
          url?: string | null
          vercel_deployment_id?: string | null
        }
        Update: {
          branch?: string | null
          commit_msg?: string | null
          commit_sha?: string | null
          deployed_at?: string
          duration_secs?: number | null
          environment?: string
          error_msg?: string | null
          id?: string
          product_slug?: string
          profile_id?: string
          source?: string
          source_ref?: string | null
          status?: string
          triggered_by?: string | null
          url?: string | null
          vercel_deployment_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cos_deployments_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_leads: {
        Row: {
          company: string | null
          converted_at: string | null
          created_at: string
          email: string | null
          follow_up_at: string | null
          id: string
          name: string
          notes: string | null
          product_slug: string | null
          profile_id: string
          source: string | null
          status: string
          updated_at: string
          value: number | null
        }
        Insert: {
          company?: string | null
          converted_at?: string | null
          created_at?: string
          email?: string | null
          follow_up_at?: string | null
          id?: string
          name: string
          notes?: string | null
          product_slug?: string | null
          profile_id: string
          source?: string | null
          status?: string
          updated_at?: string
          value?: number | null
        }
        Update: {
          company?: string | null
          converted_at?: string | null
          created_at?: string
          email?: string | null
          follow_up_at?: string | null
          id?: string
          name?: string
          notes?: string | null
          product_slug?: string | null
          profile_id?: string
          source?: string | null
          status?: string
          updated_at?: string
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cos_leads_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_products: {
        Row: {
          active_users: number | null
          created_at: string
          description: string | null
          domain: string | null
          health: string
          id: string
          last_checked: string | null
          last_deploy: string | null
          metadata: Json
          mrr: number | null
          name: string
          open_issues: number
          profile_id: string
          slug: string
          status: string
          tier: number
          updated_at: string
          user_count: number | null
        }
        Insert: {
          active_users?: number | null
          created_at?: string
          description?: string | null
          domain?: string | null
          health?: string
          id?: string
          last_checked?: string | null
          last_deploy?: string | null
          metadata?: Json
          mrr?: number | null
          name: string
          open_issues?: number
          profile_id: string
          slug: string
          status?: string
          tier?: number
          updated_at?: string
          user_count?: number | null
        }
        Update: {
          active_users?: number | null
          created_at?: string
          description?: string | null
          domain?: string | null
          health?: string
          id?: string
          last_checked?: string | null
          last_deploy?: string | null
          metadata?: Json
          mrr?: number | null
          name?: string
          open_issues?: number
          profile_id?: string
          slug?: string
          status?: string
          tier?: number
          updated_at?: string
          user_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cos_products_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_revenue: {
        Row: {
          arr: number | null
          churned_subs: number
          failed_payments: number
          gross_revenue: number | null
          id: string
          last_synced_at: string | null
          metadata: Json
          mrr: number | null
          net_revenue: number | null
          new_subs: number
          period: string
          period_date: string
          product_slug: string | null
          profile_id: string
          recorded_at: string
          source: string
          stripe_sync_id: string | null
        }
        Insert: {
          arr?: number | null
          churned_subs?: number
          failed_payments?: number
          gross_revenue?: number | null
          id?: string
          last_synced_at?: string | null
          metadata?: Json
          mrr?: number | null
          net_revenue?: number | null
          new_subs?: number
          period?: string
          period_date?: string
          product_slug?: string | null
          profile_id: string
          recorded_at?: string
          source?: string
          stripe_sync_id?: string | null
        }
        Update: {
          arr?: number | null
          churned_subs?: number
          failed_payments?: number
          gross_revenue?: number | null
          id?: string
          last_synced_at?: string | null
          metadata?: Json
          mrr?: number | null
          net_revenue?: number | null
          new_subs?: number
          period?: string
          period_date?: string
          product_slug?: string | null
          profile_id?: string
          recorded_at?: string
          source?: string
          stripe_sync_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cos_revenue_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_tasks: {
        Row: {
          category: string
          completed_at: string | null
          created_at: string
          description: string | null
          due_at: string | null
          effort_score: number | null
          id: string
          impact_score: number | null
          metadata: Json
          priority: Database["public"]["Enums"]["cos_priority_level"]
          priority_level:
            | Database["public"]["Enums"]["cos_priority_level"]
            | null
          priority_score: number | null
          product_slug: string | null
          profile_id: string
          source: string | null
          source_ref: string | null
          status: Database["public"]["Enums"]["cos_task_status"]
          tags: string[]
          title: string
          updated_at: string
          urgency_score: number | null
        }
        Insert: {
          category?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_at?: string | null
          effort_score?: number | null
          id?: string
          impact_score?: number | null
          metadata?: Json
          priority?: Database["public"]["Enums"]["cos_priority_level"]
          priority_level?:
            | Database["public"]["Enums"]["cos_priority_level"]
            | null
          priority_score?: number | null
          product_slug?: string | null
          profile_id: string
          source?: string | null
          source_ref?: string | null
          status?: Database["public"]["Enums"]["cos_task_status"]
          tags?: string[]
          title: string
          updated_at?: string
          urgency_score?: number | null
        }
        Update: {
          category?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_at?: string | null
          effort_score?: number | null
          id?: string
          impact_score?: number | null
          metadata?: Json
          priority?: Database["public"]["Enums"]["cos_priority_level"]
          priority_level?:
            | Database["public"]["Enums"]["cos_priority_level"]
            | null
          priority_score?: number | null
          product_slug?: string | null
          profile_id?: string
          source?: string | null
          source_ref?: string | null
          status?: Database["public"]["Enums"]["cos_task_status"]
          tags?: string[]
          title?: string
          updated_at?: string
          urgency_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cos_tasks_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cos_teams_reports: {
        Row: {
          error_msg: string | null
          id: string
          payload: Json | null
          profile_id: string
          report_type: string
          sent_at: string | null
          status: string
          title: string
          webhook_url: string | null
        }
        Insert: {
          error_msg?: string | null
          id?: string
          payload?: Json | null
          profile_id: string
          report_type: string
          sent_at?: string | null
          status?: string
          title: string
          webhook_url?: string | null
        }
        Update: {
          error_msg?: string | null
          id?: string
          payload?: Json | null
          profile_id?: string
          report_type?: string
          sent_at?: string | null
          status?: string
          title?: string
          webhook_url?: string | null
        }
        Relationships: []
      }
      credit_reports: {
        Row: {
          abuse_flag_reason: string | null
          abuse_flagged: boolean
          accounts_normalized: Json | null
          created_at: string
          file_hash: string | null
          id: string
          name_match_status: string
          ownership_certified: boolean
          ownership_certified_at: string | null
          partial_match_confirmed: boolean
          partial_match_confirmed_at: string | null
          payload: Json
          preview_stats: Json | null
          provider: string
          pulled_at: string | null
          report_age_days: number | null
          report_date: string | null
          report_freshness_status: string | null
          report_id: string | null
          source: string | null
          status: string
          storage_path: string | null
          user_id: string
        }
        Insert: {
          abuse_flag_reason?: string | null
          abuse_flagged?: boolean
          accounts_normalized?: Json | null
          created_at?: string
          file_hash?: string | null
          id?: string
          name_match_status?: string
          ownership_certified?: boolean
          ownership_certified_at?: string | null
          partial_match_c…71873 tokens truncated…       first_name?: string | null
          full_name?: string | null
          id: string
          instagram?: string | null
          last_name?: string | null
          linkedin?: string | null
          phone?: string | null
          plan?: Database["public"]["Enums"]["plan_type"]
          role?: string | null
          state?: string | null
          state_code?: string | null
          system_role?: string
          tiktok?: string | null
          title?: string | null
          twitter?: string | null
          updated_at?: string
          user_id?: string
          verification_status?: string
          website?: string | null
          youtube?: string | null
          zip?: string | null
        }
        Update: {
          address?: string | null
          address_line1?: string | null
          address_line2?: string | null
          avatar_url?: string | null
          card_public?: boolean
          city?: string | null
          country_code?: string
          created_at?: string | null
          email?: string | null
          facebook?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          instagram?: string | null
          last_name?: string | null
          linkedin?: string | null
          phone?: string | null
          plan?: Database["public"]["Enums"]["plan_type"]
          role?: string | null
          state?: string | null
          state_code?: string | null
          system_role?: string
          tiktok?: string | null
          title?: string | null
          twitter?: string | null
          updated_at?: string
          user_id?: string
          verification_status?: string
          website?: string | null
          youtube?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      qr_codes: {
        Row: {
          created_at: string
          id: string
          memorial_id: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          memorial_id: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          memorial_id?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "qr_codes_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limit_events: {
        Row: {
          created_at: string
          id: string
          key: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          user_id?: string
        }
        Relationships: []
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string
          id: string
          is_active: boolean
          owner_org_id: string | null
          owner_type: Database["public"]["Enums"]["ReferralOwnerType"]
          owner_user_id: string | null
        }
        Insert: {
          code: string
          created_at?: string
          id: string
          is_active?: boolean
          owner_org_id?: string | null
          owner_type: Database["public"]["Enums"]["ReferralOwnerType"]
          owner_user_id?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          is_active?: boolean
          owner_org_id?: string | null
          owner_type?: Database["public"]["Enums"]["ReferralOwnerType"]
          owner_user_id?: string | null
        }
        Relationships: []
      }
      referral_events: {
        Row: {
          created_at: string
          event_type: Database["public"]["Enums"]["ReferralEventType"]
          id: string
          meta: Json | null
          ref_code: string
          referred_user_id: string | null
          referrer_org_id: string | null
          referrer_type: Database["public"]["Enums"]["ReferralOwnerType"]
          referrer_user_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: Database["public"]["Enums"]["ReferralEventType"]
          id: string
          meta?: Json | null
          ref_code: string
          referred_user_id?: string | null
          referrer_org_id?: string | null
          referrer_type: Database["public"]["Enums"]["ReferralOwnerType"]
          referrer_user_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: Database["public"]["Enums"]["ReferralEventType"]
          id?: string
          meta?: Json | null
          ref_code?: string
          referred_user_id?: string | null
          referrer_org_id?: string | null
          referrer_type?: Database["public"]["Enums"]["ReferralOwnerType"]
          referrer_user_id?: string | null
        }
        Relationships: []
      }
      remember_billing: {
        Row: {
          created_at: string
          current_period_end: string | null
          id: string
          plan: Database["public"]["Enums"]["plan_type"]
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan?: Database["public"]["Enums"]["plan_type"]
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan?: Database["public"]["Enums"]["plan_type"]
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "remember_billing_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      remembrance_events: {
        Row: {
          created_at: string
          day: number
          description: string | null
          id: string
          is_active: boolean
          location_address: string | null
          location_name: string | null
          memorial_id: string
          month: number
          time_of_day: string | null
          title: string
        }
        Insert: {
          created_at?: string
          day: number
          description?: string | null
          id?: string
          is_active?: boolean
          location_address?: string | null
          location_name?: string | null
          memorial_id: string
          month: number
          time_of_day?: string | null
          title: string
        }
        Update: {
          created_at?: string
          day?: number
          description?: string | null
          id?: string
          is_active?: boolean
          location_address?: string | null
          location_name?: string | null
          memorial_id?: string
          month?: number
          time_of_day?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "remembrance_events_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      remembrance_rsvps: {
        Row: {
          attending: boolean
          created_at: string
          email: string | null
          event_id: string
          id: string
          memorial_id: string
          name: string
          year: number
        }
        Insert: {
          attending?: boolean
          created_at?: string
          email?: string | null
          event_id: string
          id?: string
          memorial_id: string
          name: string
          year: number
        }
        Update: {
          attending?: boolean
          created_at?: string
          email?: string | null
          event_id?: string
          id?: string
          memorial_id?: string
          name?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "remembrance_rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "remembrance_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "remembrance_rsvps_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      round_reviews: {
        Row: {
          blocking_reasons: Json
          case_id: string
          completed_at: string | null
          completed_by: string | null
          created_at: string
          id: string
          next_round_justified: boolean
          outcome: string | null
          reviewed_report_id: string | null
          round_number: number
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          blocking_reasons?: Json
          case_id: string
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          id?: string
          next_round_justified?: boolean
          outcome?: string | null
          reviewed_report_id?: string | null
          round_number: number
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          blocking_reasons?: Json
          case_id?: string
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          id?: string
          next_round_justified?: boolean
          outcome?: string | null
          reviewed_report_id?: string | null
          round_number?: number
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "round_reviews_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      some_table: {
        Row: {
          column_a: string
          column_b: string | null
          id: number
        }
        Insert: {
          column_a: string
          column_b?: string | null
          id?: number
        }
        Update: {
          column_a?: string
          column_b?: string | null
          id?: number
        }
        Relationships: []
      }
      soundtrack_songs: {
        Row: {
          created_at: string
          embed_id: string | null
          id: string
          is_approved: boolean
          is_featured: boolean
          memorial_id: string
          note: string | null
          platform: Database["public"]["Enums"]["song_platform"]
          song_artist: string | null
          song_title: string
          submitted_by_email: string | null
          submitted_by_name: string
          url: string
        }
        Insert: {
          created_at?: string
          embed_id?: string | null
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          memorial_id: string
          note?: string | null
          platform?: Database["public"]["Enums"]["song_platform"]
          song_artist?: string | null
          song_title: string
          submitted_by_email?: string | null
          submitted_by_name: string
          url: string
        }
        Update: {
          created_at?: string
          embed_id?: string | null
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          memorial_id?: string
          note?: string | null
          platform?: Database["public"]["Enums"]["song_platform"]
          song_artist?: string | null
          song_title?: string
          submitted_by_email?: string | null
          submitted_by_name?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "soundtrack_songs_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_customer_links: {
        Row: {
          active: boolean
          created_at: string
          email: string | null
          id: string
          label: string | null
          metadata: Json
          product_slug: string | null
          profile_id: string
          stripe_customer_id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          email?: string | null
          id?: string
          label?: string | null
          metadata?: Json
          product_slug?: string | null
          profile_id: string
          stripe_customer_id: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          email?: string | null
          id?: string
          label?: string | null
          metadata?: Json
          product_slug?: string | null
          profile_id?: string
          stripe_customer_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "stripe_customer_links_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_product_map: {
        Row: {
          active: boolean
          created_at: string
          display_name: string | null
          id: string
          interval: string | null
          price_cents: number | null
          product_slug: string
          profile_id: string
          stripe_price_id: string | null
          stripe_product_id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          display_name?: string | null
          id?: string
          interval?: string | null
          price_cents?: number | null
          product_slug: string
          profile_id: string
          stripe_price_id?: string | null
          stripe_product_id: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          display_name?: string | null
          id?: string
          interval?: string | null
          price_cents?: number | null
          product_slug?: string
          profile_id?: string
          stripe_price_id?: string | null
          stripe_product_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "stripe_product_map_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string | null
          email: string
          id: string
          source: string | null
          status: string | null
          subscribed_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
        }
        Relationships: []
      }
      subscription_optimizer_progress: {
        Row: {
          autopay_enabled: boolean
          card_opened: boolean
          consolidation_reviewed: boolean
          first_payment_reported: boolean
          target_card_label: string | null
          target_card_limit_cents: number | null
          target_card_reward_rate: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          autopay_enabled?: boolean
          card_opened?: boolean
          consolidation_reviewed?: boolean
          first_payment_reported?: boolean
          target_card_label?: string | null
          target_card_limit_cents?: number | null
          target_card_reward_rate?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          autopay_enabled?: boolean
          card_opened?: boolean
          consolidation_reviewed?: boolean
          first_payment_reported?: boolean
          target_card_label?: string | null
          target_card_limit_cents?: number | null
          target_card_reward_rate?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      subscription_optimizer_statements: {
        Row: {
          created_at: string
          detected_count: number
          file_name: string
          file_size_bytes: number
          id: string
          mime_type: string
          parse_status: string
          statement_label: string | null
          statement_month: string | null
          storage_bucket: string
          storage_path: string
          user_id: string
        }
        Insert: {
          created_at?: string
          detected_count?: number
          file_name: string
          file_size_bytes: number
          id?: string
          mime_type: string
          parse_status?: string
          statement_label?: string | null
          statement_month?: string | null
          storage_bucket: string
          storage_path: string
          user_id: string
        }
        Update: {
          created_at?: string
          detected_count?: number
          file_name?: string
          file_size_bytes?: number
          id?: string
          mime_type?: string
          parse_status?: string
          statement_label?: string | null
          statement_month?: string | null
          storage_bucket?: string
          storage_path?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          email: string
          ended_at: string | null
          id: string
          metadata: Json | null
          started_at: string | null
          status: string | null
          tier: string | null
          unsubscribed: boolean
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string | null
          status?: string | null
          tier?: string | null
          unsubscribed?: boolean
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string | null
          status?: string | null
          tier?: string | null
          unsubscribed?: boolean
          user_id?: string | null
        }
        Relationships: []
      }
      systems: {
        Row: {
          active: boolean
          category: string
          color_token: string | null
          created_at: string
          description: string | null
          documentation_url: string | null
          health_url: string | null
          icon: string | null
          icon_url: string | null
          is_featured: boolean
          logo_url: string | null
          name: string
          product_slug: string | null
          requires_business: boolean
          short_name: string | null
          slug: string
          sort_order: number
          status: string
          supports_business: boolean
          supports_personal: boolean
          updated_at: string
          url: string | null
          visibility: string
        }
        Insert: {
          active?: boolean
          category?: string
          color_token?: string | null
          created_at?: string
          description?: string | null
          documentation_url?: string | null
          health_url?: string | null
          icon?: string | null
          icon_url?: string | null
          is_featured?: boolean
          logo_url?: string | null
          name: string
          product_slug?: string | null
          requires_business?: boolean
          short_name?: string | null
          slug: string
          sort_order?: number
          status?: string
          supports_business?: boolean
          supports_personal?: boolean
          updated_at?: string
          url?: string | null
          visibility?: string
        }
        Update: {
          active?: boolean
          category?: string
          color_token?: string | null
          created_at?: string
          description?: string | null
          documentation_url?: string | null
          health_url?: string | null
          icon?: string | null
          icon_url?: string | null
          is_featured?: boolean
          logo_url?: string | null
          name?: string
          product_slug?: string | null
          requires_business?: boolean
          short_name?: string | null
          slug?: string
          sort_order?: number
          status?: string
          supports_business?: boolean
          supports_personal?: boolean
          updated_at?: string
          url?: string | null
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "systems_product_slug_fkey"
            columns: ["product_slug"]
            isOneToOne: false
            referencedRelation: "product_registry"
            referencedColumns: ["product_slug"]
          },
        ]
      }
      threeb_accounts: {
        Row: {
          account_code: string
          account_type: string
          created_at: string
          display_name: string
          id: string
          is_active_context: boolean
          metadata: Json | null
          threeb_business_id: string | null
          threeb_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_code: string
          account_type: string
          created_at?: string
          display_name: string
          id?: string
          is_active_context?: boolean
          metadata?: Json | null
          threeb_business_id?: string | null
          threeb_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_code?: string
          account_type?: string
          created_at?: string
          display_name?: string
          id?: string
          is_active_context?: boolean
          metadata?: Json | null
          threeb_business_id?: string | null
          threeb_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "threeb_accounts_threeb_business_id_fkey"
            columns: ["threeb_business_id"]
            isOneToOne: false
            referencedRelation: "threeb_businesses"
            referencedColumns: ["threeb_business_id"]
          },
          {
            foreignKeyName: "threeb_accounts_threeb_id_fkey"
            columns: ["threeb_id"]
            isOneToOne: false
            referencedRelation: "threeb_ids"
            referencedColumns: ["id"]
          },
        ]
      }
      threeb_business_memberships: {
        Row: {
          created_at: string
          profile_id: string
          role: string
          status: string
          threeb_business_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          profile_id: string
          role?: string
          status?: string
          threeb_business_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          profile_id?: string
          role?: string
          status?: string
          threeb_business_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "threeb_business_memberships_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "threeb_business_memberships_threeb_business_id_fkey"
            columns: ["threeb_business_id"]
            isOneToOne: false
            referencedRelation: "threeb_businesses"
            referencedColumns: ["threeb_business_id"]
          },
        ]
      }
      threeb_businesses: {
        Row: {
          business_threeb_id_id: string
          created_at: string
          display_name: string
          is_active: boolean
          normalized_entity_key: string
          owner_profile_id: string
          owner_threeb_id_id: string
          threeb_business_id: string
          threeb_id: string
          updated_at: string
        }
        Insert: {
          business_threeb_id_id: string
          created_at?: string
          display_name: string
          is_active?: boolean
          normalized_entity_key: string
          owner_profile_id: string
          owner_threeb_id_id: string
          threeb_business_id?: string
          threeb_id: string
          updated_at?: string
        }
        Update: {
          business_threeb_id_id?: string
          created_at?: string
          display_name?: string
          is_active?: boolean
          normalized_entity_key?: string
          owner_profile_id?: string
          owner_threeb_id_id?: string
          threeb_business_id?: string
          threeb_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "threeb_businesses_business_threeb_id_id_fkey"
            columns: ["business_threeb_id_id"]
            isOneToOne: false
            referencedRelation: "threeb_ids"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "threeb_businesses_owner_profile_id_fkey"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "threeb_businesses_owner_threeb_id_id_fkey"
            columns: ["owner_threeb_id_id"]
            isOneToOne: false
            referencedRelation: "threeb_ids"
            referencedColumns: ["id"]
          },
        ]
      }
      threeb_ids: {
        Row: {
          created_at: string
          id: string
          id_type: string
          metadata: Json | null
          profile_id: string
          status: string
          threeb_code: string
          updated_at: string
          verified: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          id_type: string
          metadata?: Json | null
          profile_id: string
          status?: string
          threeb_code: string
          updated_at?: string
          verified?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          id_type?: string
          metadata?: Json | null
          profile_id?: string
          status?: string
          threeb_code?: string
          updated_at?: string
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "threeb_ids_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      threeb_users: {
        Row: {
          created_at: string
          role: Database["public"]["Enums"]["ThreeBRole"]
          status: Database["public"]["Enums"]["AccountStatus"]
          threeb_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          role: Database["public"]["Enums"]["ThreeBRole"]
          status?: Database["public"]["Enums"]["AccountStatus"]
          threeb_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          role?: Database["public"]["Enums"]["ThreeBRole"]
          status?: Database["public"]["Enums"]["AccountStatus"]
          threeb_id?: string
          user_id?: string
        }
        Relationships: []
      }
      tracks: {
        Row: {
          artist: string | null
          cover_path: string | null
          date_submitted: string | null
          file_path: string
          genre: string | null
          id: string
          profile_pic: string | null
          title: string
          uploaded_by: string | null
          username: string | null
        }
        Insert: {
          artist?: string | null
          cover_path?: string | null
          date_submitted?: string | null
          file_path: string
          genre?: string | null
          id?: string
          profile_pic?: string | null
          title: string
          uploaded_by?: string | null
          username?: string | null
        }
        Update: {
          artist?: string | null
          cover_path?: string | null
          date_submitted?: string | null
          file_path?: string
          genre?: string | null
          id?: string
          profile_pic?: string | null
          title?: string
          uploaded_by?: string | null
          username?: string | null
        }
        Relationships: []
      }
      trafficking_credit_cases: {
        Row: {
          consumer_statement: string | null
          created_at: string
          id: string
          identity_proof_confirmed: boolean
          preferred_contact_method: string
          preferred_contact_value: string | null
          status: string
          updated_at: string
          user_id: string
          victim_determination_confirmed: boolean
        }
        Insert: {
          consumer_statement?: string | null
          created_at?: string
          id?: string
          identity_proof_confirmed?: boolean
          preferred_contact_method?: string
          preferred_contact_value?: string | null
          status?: string
          updated_at?: string
          user_id: string
          victim_determination_confirmed?: boolean
        }
        Update: {
          consumer_statement?: string | null
          created_at?: string
          id?: string
          identity_proof_confirmed?: boolean
          preferred_contact_method?: string
          preferred_contact_value?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          victim_determination_confirmed?: boolean
        }
        Relationships: []
      }
      trafficking_credit_documents: {
        Row: {
          case_id: string
          created_at: string
          document_type: string
          file_name: string
          file_size_bytes: number
          id: string
          mime_type: string
          storage_bucket: string
          storage_path: string
          user_id: string
        }
        Insert: {
          case_id: string
          created_at?: string
          document_type: string
          file_name: string
          file_size_bytes: number
          id?: string
          mime_type: string
          storage_bucket: string
          storage_path: string
          user_id: string
        }
        Update: {
          case_id?: string
          created_at?: string
          document_type?: string
          file_name?: string
          file_size_bytes?: number
          id?: string
          mime_type?: string
          storage_bucket?: string
          storage_path?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trafficking_credit_documents_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "trafficking_credit_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      trafficking_credit_items: {
        Row: {
          account_number_masked: string | null
          bureau: string | null
          case_id: string
          created_at: string
          creditor_name: string
          id: string
          item_type: string
          reason_connected_to_trafficking: string
          user_id: string
        }
        Insert: {
          account_number_masked?: string | null
          bureau?: string | null
          case_id: string
          created_at?: string
          creditor_name: string
          id?: string
          item_type?: string
          reason_connected_to_trafficking: string
          user_id: string
        }
        Update: {
          account_number_masked?: string | null
          bureau?: string | null
          case_id?: string
          created_at?: string
          creditor_name?: string
          id?: string
          item_type?: string
          reason_connected_to_trafficking?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trafficking_credit_items_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "trafficking_credit_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      trafficking_credit_letters: {
        Row: {
          bureau: string
          case_id: string
          content: string
          created_at: string
          id: string
          letterstream_job_id: string | null
          letterstream_tracking: string | null
          mailed_at: string | null
          user_id: string
        }
        Insert: {
          bureau: string
          case_id: string
          content: string
          created_at?: string
          id?: string
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mailed_at?: string | null
          user_id: string
        }
        Update: {
          bureau?: string
          case_id?: string
          content?: string
          created_at?: string
          id?: string
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mailed_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trafficking_credit_letters_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "trafficking_credit_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      trip_routes: {
        Row: {
          created_at: string | null
          drive_hours: number | null
          fuel_cost: number | null
          fuel_stops: Json | null
          hos_timeline: Json | null
          id: string
          margin_est: number | null
          route_type: string
          tolls: number | null
          total_hours: number | null
          trip_id: string | null
        }
        Insert: {
          created_at?: string | null
          drive_hours?: number | null
          fuel_cost?: number | null
          fuel_stops?: Json | null
          hos_timeline?: Json | null
          id?: string
          margin_est?: number | null
          route_type: string
          tolls?: number | null
          total_hours?: number | null
          trip_id?: string | null
        }
        Update: {
          created_at?: string | null
          drive_hours?: number | null
          fuel_cost?: number | null
          fuel_stops?: Json | null
          hos_timeline?: Json | null
          id?: string
          margin_est?: number | null
          route_type?: string
          tolls?: number | null
          total_hours?: number | null
          trip_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trip_routes_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      trips: {
        Row: {
          created_at: string | null
          deadhead_miles: number | null
          departure: string | null
          destination: string
          driver_type: string | null
          equipment: string | null
          fuel_price: number | null
          id: string
          loaded_miles: number
          mpg: number | null
          notes: string | null
          origin: string
          rate: number
          status: string | null
        }
        Insert: {
          created_at?: string | null
          deadhead_miles?: number | null
          departure?: string | null
          destination: string
          driver_type?: string | null
          equipment?: string | null
          fuel_price?: number | null
          id?: string
          loaded_miles: number
          mpg?: number | null
          notes?: string | null
          origin: string
          rate: number
          status?: string | null
        }
        Update: {
          created_at?: string | null
          deadhead_miles?: number | null
          departure?: string | null
          destination?: string
          driver_type?: string | null
          equipment?: string | null
          fuel_price?: number | null
          id?: string
          loaded_miles?: number
          mpg?: number | null
          notes?: string | null
          origin?: string
          rate?: number
          status?: string | null
        }
        Relationships: []
      }
      usage_events: {
        Row: {
          amount_cents: number | null
          case_id: string | null
          created_at: string
          event_type: string
          id: string
          letter_id: string | null
          metadata: Json | null
          stripe_session_id: string | null
          user_id: string
        }
        Insert: {
          amount_cents?: number | null
          case_id?: string | null
          created_at?: string
          event_type: string
          id?: string
          letter_id?: string | null
          metadata?: Json | null
          stripe_session_id?: string | null
          user_id: string
        }
        Update: {
          amount_cents?: number | null
          case_id?: string | null
          created_at?: string
          event_type?: string
          id?: string
          letter_id?: string | null
          metadata?: Json | null
          stripe_session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_events_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usage_events_letter_id_fkey"
            columns: ["letter_id"]
            isOneToOne: false
            referencedRelation: "dispute_letters"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_metrics: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          metric_type: string
          metric_value: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          metric_type: string
          metric_value?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          metric_type?: string
          metric_value?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_actions: {
        Row: {
          action_id: string
          completed_at: string | null
          created_at: string
          id: string
          notes: string | null
          status: string
          user_id: string
        }
        Insert: {
          action_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          status?: string
          user_id: string
        }
        Update: {
          action_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_actions_action_id_fkey"
            columns: ["action_id"]
            isOneToOne: false
            referencedRelation: "action_library"
            referencedColumns: ["id"]
          },
        ]
      }
      user_events: {
        Row: {
          created_at: string
          event: string
          id: string
          properties: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          event: string
          id?: string
          properties?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          event?: string
          id?: string
          properties?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          access_source: string | null
          address: string | null
          address_verified_at: string | null
          address_verified_value: string | null
          analyzer_access_ends_at: string | null
          analyzer_plan: string | null
          analyzer_purchased: boolean | null
          analyzer_purchased_at: string | null
          builder_expires_at: string | null
          certified_mail_period_start: string | null
          certified_mail_used_this_cycle: number
          city: string | null
          created_at: string
          current_period_end: string | null
          first_name: string | null
          full_name: string | null
          last_analysis_id: string | null
          last_analyzed_at: string | null
          last_name: string | null
          last_report_source: string | null
          letter_period_start: string | null
          letters_extra_purchased: number
          letters_used_this_month: number
          mailing_address: string | null
          mailing_city: string | null
          mailing_state: string | null
          mailing_zip: string | null
          member_id: string | null
          mfsn_customer_token: string | null
          mfsn_linked_at: string | null
          mfsn_member_id: string | null
          onboarding_complete: boolean
          onboarding_step: number | null
          partner_provider: string | null
          partner_tier: number | null
          phone: string | null
          primary_goal: string | null
          report_refresh_due_at: string | null
          report_source: string | null
          report_uploaded_at: string | null
          save_offer_type: string | null
          save_offer_used: boolean
          save_offer_used_at: string | null
          score_updated_at: string | null
          self_reported_score: number | null
          state: string | null
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
          subscription_status: string | null
          tier: string
          updated_at: string
          user_id: string
          user_role: string
          vault_pin_enabled_at: string | null
          vault_pin_failed_attempts: number
          vault_pin_hash: string | null
          vault_pin_lockout_until: string | null
          vault_pin_reset_required: boolean
          zip: string | null
        }
        Insert: {
          access_source?: string | null
          address?: string | null
          address_verified_at?: string | null
          address_verified_value?: string | null
          analyzer_access_ends_at?: string | null
          analyzer_plan?: string | null
          analyzer_purchased?: boolean | null
          analyzer_purchased_at?: string | null
          builder_expires_at?: string | null
          certified_mail_period_start?: string | null
          certified_mail_used_this_cycle?: number
          city?: string | null
          created_at?: string
          current_period_end?: string | null
          first_name?: string | null
          full_name?: string | null
          last_analysis_id?: string | null
          last_analyzed_at?: string | null
          last_name?: string | null
          last_report_source?: string | null
          letter_period_start?: string | null
          letters_extra_purchased?: number
          letters_used_this_month?: number
          mailing_address?: string | null
          mailing_city?: string | null
          mailing_state?: string | null
          mailing_zip?: string | null
          member_id?: string | null
          mfsn_customer_token?: string | null
          mfsn_linked_at?: string | null
          mfsn_member_id?: string | null
          onboarding_complete?: boolean
          onboarding_step?: number | null
          partner_provider?: string | null
          partner_tier?: number | null
          phone?: string | null
          primary_goal?: string | null
          report_refresh_due_at?: string | null
          report_source?: string | null
          report_uploaded_at?: string | null
          save_offer_type?: string | null
          save_offer_used?: boolean
          save_offer_used_at?: string | null
          score_updated_at?: string | null
          self_reported_score?: number | null
          state?: string | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          tier?: string
          updated_at?: string
          user_id: string
          user_role?: string
          vault_pin_enabled_at?: string | null
          vault_pin_failed_attempts?: number
          vault_pin_hash?: string | null
          vault_pin_lockout_until?: string | null
          vault_pin_reset_required?: boolean
          zip?: string | null
        }
        Update: {
          access_source?: string | null
          address?: string | null
          address_verified_at?: string | null
          address_verified_value?: string | null
          analyzer_access_ends_at?: string | null
          analyzer_plan?: string | null
          analyzer_purchased?: boolean | null
          analyzer_purchased_at?: string | null
          builder_expires_at?: string | null
          certified_mail_period_start?: string | null
          certified_mail_used_this_cycle?: number
          city?: string | null
          created_at?: string
          current_period_end?: string | null
          first_name?: string | null
          full_name?: string | null
          last_analysis_id?: string | null
          last_analyzed_at?: string | null
          last_name?: string | null
          last_report_source?: string | null
          letter_period_start?: string | null
          letters_extra_purchased?: number
          letters_used_this_month?: number
          mailing_address?: string | null
          mailing_city?: string | null
          mailing_state?: string | null
          mailing_zip?: string | null
          member_id?: string | null
          mfsn_customer_token?: string | null
          mfsn_linked_at?: string | null
          mfsn_member_id?: string | null
          onboarding_complete?: boolean
          onboarding_step?: number | null
          partner_provider?: string | null
          partner_tier?: number | null
          phone?: string | null
          primary_goal?: string | null
          report_refresh_due_at?: string | null
          report_source?: string | null
          report_uploaded_at?: string | null
          save_offer_type?: string | null
          save_offer_used?: boolean
          save_offer_used_at?: string | null
          score_updated_at?: string | null
          self_reported_score?: number | null
          state?: string | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          tier?: string
          updated_at?: string
          user_id?: string
          user_role?: string
          vault_pin_enabled_at?: string | null
          vault_pin_failed_attempts?: number
          vault_pin_hash?: string | null
          vault_pin_lockout_until?: string | null
          vault_pin_reset_required?: boolean
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_last_analysis_id_fkey"
            columns: ["last_analysis_id"]
            isOneToOne: false
            referencedRelation: "cb_analyzer_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          amount_cents: number
          autopay_enabled: boolean
          category: string
          created_at: string
          frequency: string
          id: string
          merchant_key: string | null
          moved_to_card: boolean
          name: string
          notes: string | null
          occurrence_count: number
          review_action: string
          source_statement_id: string | null
          source_type: string
          target_card_label: string | null
          user_id: string
        }
        Insert: {
          amount_cents: number
          autopay_enabled?: boolean
          category?: string
          created_at?: string
          frequency?: string
          id?: string
          merchant_key?: string | null
          moved_to_card?: boolean
          name: string
          notes?: string | null
          occurrence_count?: number
          review_action?: string
          source_statement_id?: string | null
          source_type?: string
          target_card_label?: string | null
          user_id: string
        }
        Update: {
          amount_cents?: number
          autopay_enabled?: boolean
          category?: string
          created_at?: string
          frequency?: string
          id?: string
          merchant_key?: string | null
          moved_to_card?: boolean
          name?: string
          notes?: string | null
          occurrence_count?: number
          review_action?: string
          source_statement_id?: string | null
          source_type?: string
          target_card_label?: string | null
          user_id?: string
        }
        Relationships: []
      }
      vault_audit_log: {
        Row: {
          action: string
          created_at: string
          document_id: string | null
          id: string
          ip_address: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string
          document_id?: string | null
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string
          document_id?: string | null
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vault_audit_log_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "vault_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      vault_documents: {
        Row: {
          ai_summary: string | null
          analysis_id: string | null
          analyzed_at: string | null
          bureau: string | null
          case_id: string | null
          created_at: string
          document_date: string | null
          document_type: string
          extracted_text: string | null
          file_name: string
          file_size_bytes: number | null
          id: string
          metadata: Json | null
          mime_type: string | null
          original_filename: string | null
          round_id: string | null
          sensitivity_level: string
          storage_bucket: string
          storage_path: string
          updated_at: string
          upload_status: string
          user_id: string
        }
        Insert: {
          ai_summary?: string | null
          analysis_id?: string | null
          analyzed_at?: string | null
          bureau?: string | null
          case_id?: string | null
          created_at?: string
          document_date?: string | null
          document_type: string
          extracted_text?: string | null
          file_name: string
          file_size_bytes?: number | null
          id?: string
          metadata?: Json | null
          mime_type?: string | null
          original_filename?: string | null
          round_id?: string | null
          sensitivity_level?: string
          storage_bucket?: string
          storage_path: string
          updated_at?: string
          upload_status?: string
          user_id: string
        }
        Update: {
          ai_summary?: string | null
          analysis_id?: string | null
          analyzed_at?: string | null
          bureau?: string | null
          case_id?: string | null
          created_at?: string
          document_date?: string | null
          document_type?: string
          extracted_text?: string | null
          file_name?: string
          file_size_bytes?: number | null
          id?: string
          metadata?: Json | null
          mime_type?: string | null
          original_filename?: string | null
          round_id?: string | null
          sensitivity_level?: string
          storage_bucket?: string
          storage_path?: string
          updated_at?: string
          upload_status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vault_documents_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "cb_analyzer_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vault_documents_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vault_documents_round_id_fkey"
            columns: ["round_id"]
            isOneToOne: false
            referencedRelation: "dispute_rounds"
            referencedColumns: ["id"]
          },
        ]
      }
      vault_reports: {
        Row: {
          created_at: string
          id: string
          pulled_at: string | null
          raw_data: Json | null
          report_json: Json
          reported_on: string | null
          source: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          pulled_at?: string | null
          raw_data?: Json | null
          report_json: Json
          reported_on?: string | null
          source?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          pulled_at?: string | null
          raw_data?: Json | null
          report_json?: Json
          reported_on?: string | null
          source?: string
          user_id?: string
        }
        Relationships: []
      }
      vault_unlock_sessions: {
        Row: {
          created_at: string | null
          expires_at: string
          id: string
          session_token: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          expires_at: string
          id?: string
          session_token: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          expires_at?: string
          id?: string
          session_token?: string
          user_id?: string
        }
        Relationships: []
      }
      vault_unlocks: {
        Row: {
          id: string
          purchased_at: string | null
          user_id: string
        }
        Insert: {
          id?: string
          purchased_at?: string | null
          user_id: string
        }
        Update: {
          id?: string
          purchased_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      voice_memories: {
        Row: {
          audio_url: string
          author_email: string | null
          author_name: string
          created_at: string
          duration_secs: number | null
          id: string
          is_approved: boolean
          memorial_id: string
          transcript: string | null
        }
        Insert: {
          audio_url: string
          author_email?: string | null
          author_name: string
          created_at?: string
          duration_secs?: number | null
          id?: string
          is_approved?: boolean
          memorial_id: string
          transcript?: string | null
        }
        Update: {
          audio_url?: string
          author_email?: string | null
          author_name?: string
          created_at?: string
          duration_secs?: number | null
          id?: string
          is_approved?: boolean
          memorial_id?: string
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "voice_memories_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      vs_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          room_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          room_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          room_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vs_messages_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "vs_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      vs_room_members: {
        Row: {
          joined_at: string | null
          role: string | null
          room_id: string
          user_id: string
        }
        Insert: {
          joined_at?: string | null
          role?: string | null
          room_id: string
          user_id: string
        }
        Update: {
          joined_at?: string | null
          role?: string | null
          room_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vs_room_members_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "vs_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      vs_rooms: {
        Row: {
          created_at: string | null
          created_by: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      workspace_members: {
        Row: {
          id: string
          invited_at: string | null
          role: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          id?: string
          invited_at?: string | null
          role?: string
          user_id: string
          workspace_id: string
        }
        Update: {
          id?: string
          invited_at?: string | null
          role?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner_id: string
          plan: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          owner_id: string
          plan?: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner_id?: string
          plan?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      v_letter_generation_audit_safe: {
        Row: {
          admin_email_masked: string | null
          admin_id: string | null
          analyzer_session_id: string | null
          dispute_id: string | null
          generated_at: string | null
          id: string | null
          metadata: Json | null
        }
        Insert: {
          admin_email_masked?: never
          admin_id?: string | null
          analyzer_session_id?: string | null
          dispute_id?: string | null
          generated_at?: string | null
          id?: string | null
          metadata?: Json | null
        }
        Update: {
          admin_email_masked?: never
          admin_id?: string | null
          analyzer_session_id?: string | null
          dispute_id?: string | null
          generated_at?: string | null
          id?: string | null
          metadata?: Json | null
        }
        Relationships: []
      }
    }
    Functions: {
      claim_certified_mail_payment: {
        Args: {
          p_case_id: string
          p_letter_id: string
          p_tier: string
          p_user_id: string
        }
        Returns: string
      }
      claim_certified_mail_quota: {
        Args: { p_max: number; p_period: string; p_user_id: string }
        Returns: boolean
      }
      cleanup_expired_vault_sessions: { Args: never; Returns: undefined }
      cos_seed_products: { Args: { p_profile_id: string }; Returns: undefined }
      create_3b_business_for_current_user: {
        Args: {
          p_business_type: string
          p_company_name: string
          p_entity_type?: string
          p_slug?: string
        }
        Returns: {
          address_line1: string | null
          address_line2: string | null
          bank_account_status: string
          business_code: string | null
          business_email: string | null
          business_phone: string | null
          business_type: string
          city: string | null
          country: string | null
          created_at: string | null
          credit_builder_status: string
          dba_name: string | null
          domain: string | null
          domain_status: string
          dot_number: string | null
          ein: string | null
          ein_status: string
          entity_type: string | null
          formation_date: string | null
          formation_state: string | null
          funding_status: string
          id: string
          legal_name: string
          mc_number: string | null
          media_status: string
          naics_code: string | null
          name: string | null
          quick_text_phone: string | null
          state: string | null
          updated_at: string | null
          website_status: string
          website_url: string | null
          zip_code: string | null
        }
        SetofOptions: {
          from: "*"
          to: "businesses"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      current_user_id: { Args: never; Returns: string }
      ensure_three_b_founder_id: {
        Args: { p_profile_id: string }
        Returns: string
      }
      funding_data_freshness: {
        Args: {
          p_expires_at?: string
          p_last_verified_at: string
          p_manual_override?: string
        }
        Returns: string
      }
      funding_inquiry_budget_status: {
        Args: { p_business_id: string }
        Returns: {
          override_active: boolean
          override_reason: string
          rolling_6mo_count: number
          status: string
        }[]
      }
      funding_qualification_gate_status: {
        Args: { p_business_id: string }
        Returns: {
          blockers: string[]
          qualified: boolean
        }[]
      }
      generate_3b_business_code: { Args: never; Returns: string }
      generate_3b_user_code: { Args: never; Returns: string }
      generate_three_b_founder_id: { Args: never; Returns: string }
      generate_threeb_personal_code: { Args: never; Returns: string }
      get_financial_os_summary: {
        Args: never
        Returns: {
          active_vehicles: number
          entity_count: number
          mileage_deduction: number
          month_business: number
          month_business_miles: number
          month_mixed: number
          month_personal: number
          month_spend: number
          needs_review: number
          pending_bills: number
          receipts_pending: number
        }[]
      }
      get_guided_flow_stats: { Args: never; Returns: Json }
      get_my_3b_founder_identity: {
        Args: never
        Returns: {
          access_level: string
          allowed_products: string[]
          email: string
          founder_id: string
          user_3b_id: string
        }[]
      }
      get_my_system_access: {
        Args: never
        Returns: {
          access: string
          category: string
          description: string
          icon: string
          name: string
          plan_name: string
          slug: string
          url: string
        }[]
      }
      get_my_threeb_identity: { Args: never; Returns: Json }
      get_platform_totals: {
        Args: never
        Returns: {
          items_corrected: number
          items_deleted: number
          resolved_cases: number
          total_actions_done: number
          total_cases: number
          total_letters: number
          total_users: number
        }[]
      }
      get_timezones: {
        Args: never
        Returns: {
          name: string
        }[]
      }
      has_business_role: {
        Args: { p_business_id: string; p_roles?: string[] }
        Returns: boolean
      }
      import_expenses_csv:
        | { Args: { p_rows: Json; p_source?: string }; Returns: Json }
        | { Args: { rows: Json }; Returns: Json }
      increment_certified_mail_usage: {
        Args: { p_period: string; p_user_id: string }
        Returns: undefined
      }
      increment_failed_payments: {
        Args: {
          p_period_date: string
          p_profile_id: string
          p_stripe_sync_id: string
        }
        Returns: undefined
      }
      increment_letter_usage: {
        Args: { p_period: string; p_user_id: string }
        Returns: undefined
      }
      is_3b_founder: { Args: never; Returns: boolean }
      is_admin: { Args: never; Returns: boolean }
      is_business_member: { Args: { p_business_id: string }; Returns: boolean }
      is_business_owner: { Args: { p_business_id: string }; Returns: boolean }
      is_platform_admin: { Args: never; Returns: boolean }
      log_and_gather_letter_data: {
        Args: { p_admin_id?: string; p_context?: Json; p_dispute_id: string }
        Returns: Json
      }
      my_workspace_ids: { Args: never; Returns: string[] }
      normalize_entity_key: { Args: { p_entity: string }; Returns: string }
      nullif_unknown: { Args: { p: string }; Returns: string }
      peek_certified_mail_payment: {
        Args: {
          p_case_id: string
          p_letter_id: string
          p_tier: string
          p_user_id: string
        }
        Returns: boolean
      }
      process_stripe_webhook_atomic: {
        Args: {
          p_business_id: string
          p_event_id: string
          p_event_type: string
          p_expected_price_id?: string
          p_expires_at?: string
          p_plan_sku: string
          p_policy_on_payment_failed?: string
          p_user_id: string
        }
        Returns: Json
      }
      register_business: {
        Args: {
          p_business_email?: string
          p_business_phone?: string
          p_city?: string
          p_dba_name?: string
          p_ein?: string
          p_entity_type?: string
          p_formation_state?: string
          p_legal_name: string
          p_state?: string
          p_website_url?: string
          p_zip_code?: string
        }
        Returns: string
      }
      release_certified_mail_payment: {
        Args: { p_event_id: string; p_user_id: string }
        Returns: boolean
      }
      release_certified_mail_quota: {
        Args: { p_period: string; p_user_id: string }
        Returns: undefined
      }
      resolve_profile_from_stripe_customer: {
        Args: { p_stripe_customer_id: string }
        Returns: string
      }
      resolve_threeb_business_id: {
        Args: {
          p_entity: string
          p_ownership_type: string
          p_threeb_id: string
        }
        Returns: string
      }
      resolve_verified_threeb_id: {
        Args: { p_user_id: string }
        Returns: string
      }
      safe_date: { Args: { p: string }; Returns: string }
      safe_numeric: { Args: { p: string }; Returns: number }
      safe_uuid: { Args: { p: string }; Returns: string }
      set_active_account: { Args: { p_account_id: string }; Returns: undefined }
      submit_bear_album_photo: {
        Args: {
          photo_caption: string
          photo_credit: string
          photo_jpeg: string
          photo_source: string
        }
        Returns: boolean
      }
      update_3b_business_profile: {
        Args: {
          p_address_line1?: string
          p_business_id: string
          p_business_phone?: string
          p_city?: string
          p_domain_email?: string
          p_dot_number?: string
          p_mc_number?: string
          p_postal_code?: string
          p_quick_text_phone?: string
          p_state?: string
          p_website?: string
        }
        Returns: {
          address_line1: string | null
          address_line2: string | null
          bank_account_status: string
          business_code: string | null
          business_email: string | null
          business_phone: string | null
          business_type: string
          city: string | null
          country: string | null
          created_at: string | null
          credit_builder_status: string
          dba_name: string | null
          domain: string | null
          domain_status: string
          dot_number: string | null
          ein: string | null
          ein_status: string
          entity_type: string | null
          formation_date: string | null
          formation_state: string | null
          funding_status: string
          id: string
          legal_name: string
          mc_number: string | null
          media_status: string
          naics_code: string | null
          name: string | null
          quick_text_phone: string | null
          state: string | null
          updated_at: string | null
          website_status: string
          website_url: string | null
          zip_code: string | null
        }
        SetofOptions: {
          from: "*"
          to: "businesses"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      AccountStatus: "active" | "suspended"
      AnalyzerStatus: "RUNNING" | "COMPLETED" | "FAILED"
      cos_alert_severity: "critical" | "warning" | "info"
      cos_brief_type: "morning" | "noon_exception" | "evening" | "weekly"
      cos_priority_level: "critical" | "high" | "medium" | "low" | "backlog"
      cos_task_status: "pending" | "in_progress" | "completed" | "dismissed"
      dish_category:
        | "main"
        | "side"
        | "salad"
        | "dessert"
        | "drinks"
        | "plates_utensils"
        | "other"
      DisputeStatus:
        | "new"
        | "pending_docs"
        | "ready_to_send"
        | "sent"
        | "waiting_response"
        | "response_received"
        | "closed_success"
        | "closed_failed"
        | "closed_other"
      DisputeTargetEntityType: "bureau" | "creditor" | "collector"
      DocumentCategory:
        | "credit_report"
        | "id_verification"
        | "address_verification"
        | "proof_of_payment"
        | "correspondence_in"
        | "correspondence_out"
        | "system_generated_letter"
        | "supporting_evidence"
        | "other"
      EntitlementSource: "system" | "admin" | "billing"
      expense_category:
        | "content"
        | "sales"
        | "upgrades"
        | "new_builds"
        | "shared_infrastructure"
        | "home_office"
        | "trailer_office"
        | "vehicle_business_use"
        | "personal_general"
        | "personal_health"
        | "personal_food"
        | "personal_entertainment"
        | "personal_misc"
      expense_recurrence:
        | "one_time"
        | "weekly"
        | "monthly"
        | "quarterly"
        | "annual"
      expense_status: "pending" | "approved" | "rejected" | "reimbursed"
      expense_type: "personal" | "business" | "mixed"
      invite_role: "viewer" | "contributor" | "family"
      LinkStatus: "active" | "inactive"
      mc_kpi_trend: "up" | "down" | "flat"
      mc_priority_level: "critical" | "high" | "medium" | "low" | "backlog"
      mc_project_status:
        | "ideation"
        | "planning"
        | "active"
        | "paused"
        | "shipped"
        | "cancelled"
      mc_report_type:
        | "weekly_ceo"
        | "monthly_board"
        | "quarterly_review"
        | "annual"
        | "custom"
      mc_risk_level: "critical" | "high" | "medium" | "low"
      mc_risk_status: "open" | "mitigated" | "accepted" | "closed"
      media_type: "photo" | "video"
      memorial_theme: "classic" | "sunrise" | "garden" | "ocean" | "golden"
      MfsnStatus: "active" | "inactive" | "suspended"
      plan_type: "basic" | "legacy" | "premium" | "funeral_home"
      ReferralEventType: "SIGNUP" | "VERIFIED" | "PAID"
      ReferralOwnerType: "USER" | "ORG"
      song_platform: "spotify" | "apple_music" | "youtube" | "other"
      ThreeBRole: "client" | "reseller" | "operator" | "admin" | "affiliate"
      tile_type:
        | "story"
        | "photo"
        | "video"
        | "song"
        | "quote"
        | "candle"
        | "prayer"
        | "event"
        | "donation"
        | "family_update"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      AccountStatus: ["active", "suspended"],
      AnalyzerStatus: ["RUNNING", "COMPLETED", "FAILED"],
      cos_alert_severity: ["critical", "warning", "info"],
      cos_brief_type: ["morning", "noon_exception", "evening", "weekly"],
      cos_priority_level: ["critical", "high", "medium", "low", "backlog"],
      cos_task_status: ["pending", "in_progress", "completed", "dismissed"],
      dish_category: [
        "main",
        "side",
        "salad",
        "dessert",
        "drinks",
        "plates_utensils",
        "other",
      ],
      DisputeStatus: [
        "new",
        "pending_docs",
        "ready_to_send",
        "sent",
        "waiting_response",
        "response_received",
        "closed_success",
        "closed_failed",
        "closed_other",
      ],
      DisputeTargetEntityType: ["bureau", "creditor", "collector"],
      DocumentCategory: [
        "credit_report",
        "id_verification",
        "address_verification",
        "proof_of_payment",
        "correspondence_in",
        "correspondence_out",
        "system_generated_letter",
        "supporting_evidence",
        "other",
      ],
      EntitlementSource: ["system", "admin", "billing"],
      expense_category: [
        "content",
        "sales",
        "upgrades",
        "new_builds",
        "shared_infrastructure",
        "home_office",
        "trailer_office",
        "vehicle_business_use",
        "personal_general",
        "personal_health",
        "personal_food",
        "personal_entertainment",
        "personal_misc",
      ],
      expense_recurrence: [
        "one_time",
        "weekly",
        "monthly",
        "quarterly",
        "annual",
      ],
      expense_status: ["pending", "approved", "rejected", "reimbursed"],
      expense_type: ["personal", "business", "mixed"],
      invite_role: ["viewer", "contributor", "family"],
      LinkStatus: ["active", "inactive"],
      mc_kpi_trend: ["up", "down", "flat"],
      mc_priority_level: ["critical", "high", "medium", "low", "backlog"],
      mc_project_status: [
        "ideation",
        "planning",
        "active",
        "paused",
        "shipped",
        "cancelled",
      ],
      mc_report_type: [
        "weekly_ceo",
        "monthly_board",
        "quarterly_review",
        "annual",
        "custom",
      ],
      mc_risk_level: ["critical", "high", "medium", "low"],
      mc_risk_status: ["open", "mitigated", "accepted", "closed"],
      media_type: ["photo", "video"],
      memorial_theme: ["classic", "sunrise", "garden", "ocean", "golden"],
      MfsnStatus: ["active", "inactive", "suspended"],
      plan_type: ["basic", "legacy", "premium", "funeral_home"],
      ReferralEventType: ["SIGNUP", "VERIFIED", "PAID"],
      ReferralOwnerType: ["USER", "ORG"],
      song_platform: ["spotify", "apple_music", "youtube", "other"],
      ThreeBRole: ["client", "reseller", "operator", "admin", "affiliate"],
      tile_type: [
        "story",
        "photo",
        "video",
        "song",
        "quote",
        "candle",
        "prayer",
        "event",
        "donation",
        "family_update",
      ],
    },
  },
} as const
