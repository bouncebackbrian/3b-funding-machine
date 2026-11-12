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
          partial_match_confirmed?: boolean
          partial_match_confirmed_at?: string | null
          payload: Json
          preview_stats?: Json | null
          provider?: string
          pulled_at?: string | null
          report_age_days?: number | null
          report_date?: string | null
          report_freshness_status?: string | null
          report_id?: string | null
          source?: string | null
          status?: string
          storage_path?: string | null
          user_id: string
        }
        Update: {
          abuse_flag_reason?: string | null
          abuse_flagged?: boolean
          accounts_normalized?: Json | null
          created_at?: string
          file_hash?: string | null
          id?: string
          name_match_status?: string
          ownership_certified?: boolean
          ownership_certified_at?: string | null
          partial_match_confirmed?: boolean
          partial_match_confirmed_at?: string | null
          payload?: Json
          preview_stats?: Json | null
          provider?: string
          pulled_at?: string | null
          report_age_days?: number | null
          report_date?: string | null
          report_freshness_status?: string | null
          report_id?: string | null
          source?: string | null
          status?: string
          storage_path?: string | null
          user_id?: string
        }
        Relationships: []
      }
      daily_growth_reports: {
        Row: {
          account_id: string
          avg_viral_score: number | null
          followers: number | null
          id: string
          platform: string
          report_date: string
          total_comments: number | null
          total_impressions: number | null
          total_likes: number | null
          total_posts: number | null
          total_reach: number | null
          total_saves: number | null
          total_shares: number | null
          workspace_id: string
        }
        Insert: {
          account_id: string
          avg_viral_score?: number | null
          followers?: number | null
          id?: string
          platform: string
          report_date: string
          total_comments?: number | null
          total_impressions?: number | null
          total_likes?: number | null
          total_posts?: number | null
          total_reach?: number | null
          total_saves?: number | null
          total_shares?: number | null
          workspace_id: string
        }
        Update: {
          account_id?: string
          avg_viral_score?: number | null
          followers?: number | null
          id?: string
          platform?: string
          report_date?: string
          total_comments?: number | null
          total_impressions?: number | null
          total_likes?: number | null
          total_posts?: number | null
          total_reach?: number | null
          total_saves?: number | null
          total_shares?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_growth_reports_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "meta_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_growth_reports_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_letters: {
        Row: {
          approved_at: string | null
          approved_content: string | null
          approved_content_hash: string | null
          case_id: string
          content: string
          created_at: string
          evidence_score: number | null
          generated_by: string | null
          id: string
          letter_type: string | null
          letterstream_job_id: string | null
          letterstream_tracking: string | null
          mail_class: string | null
          mail_job_id: string | null
          mailed_at: string | null
          metadata: Json | null
          preview_text: string | null
          reviewed_at: string | null
          round_number: number
          sent_at: string | null
          stall_risk_score: number | null
          template_key: string | null
          user_id: string
          variables_json: Json | null
          voice: string
        }
        Insert: {
          approved_at?: string | null
          approved_content?: string | null
          approved_content_hash?: string | null
          case_id: string
          content: string
          created_at?: string
          evidence_score?: number | null
          generated_by?: string | null
          id?: string
          letter_type?: string | null
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mail_class?: string | null
          mail_job_id?: string | null
          mailed_at?: string | null
          metadata?: Json | null
          preview_text?: string | null
          reviewed_at?: string | null
          round_number?: number
          sent_at?: string | null
          stall_risk_score?: number | null
          template_key?: string | null
          user_id: string
          variables_json?: Json | null
          voice?: string
        }
        Update: {
          approved_at?: string | null
          approved_content?: string | null
          approved_content_hash?: string | null
          case_id?: string
          content?: string
          created_at?: string
          evidence_score?: number | null
          generated_by?: string | null
          id?: string
          letter_type?: string | null
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mail_class?: string | null
          mail_job_id?: string | null
          mailed_at?: string | null
          metadata?: Json | null
          preview_text?: string | null
          reviewed_at?: string | null
          round_number?: number
          sent_at?: string | null
          stall_risk_score?: number | null
          template_key?: string | null
          user_id?: string
          variables_json?: Json | null
          voice?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispute_letters_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_letters_mail_job_id_fkey"
            columns: ["mail_job_id"]
            isOneToOne: false
            referencedRelation: "mail_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_outcomes: {
        Row: {
          analyzer_item_id: string | null
          analyzer_session_id: string | null
          created_at: string
          dispute_id: string
          effective_at: string
          id: string
          outcome: string
          outcome_type: string | null
          raw_payload: Json
          resolved_at: string | null
        }
        Insert: {
          analyzer_item_id?: string | null
          analyzer_session_id?: string | null
          created_at?: string
          dispute_id: string
          effective_at?: string
          id?: string
          outcome: string
          outcome_type?: string | null
          raw_payload?: Json
          resolved_at?: string | null
        }
        Update: {
          analyzer_item_id?: string | null
          analyzer_session_id?: string | null
          created_at?: string
          dispute_id?: string
          effective_at?: string
          id?: string
          outcome?: string
          outcome_type?: string | null
          raw_payload?: Json
          resolved_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dispute_outcomes_analyzer_item_id_fkey"
            columns: ["analyzer_item_id"]
            isOneToOne: false
            referencedRelation: "analyzer_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_outcomes_analyzer_session_id_fkey"
            columns: ["analyzer_session_id"]
            isOneToOne: false
            referencedRelation: "analyzer_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_outcomes_dispute_id_fkey"
            columns: ["dispute_id"]
            isOneToOne: false
            referencedRelation: "disputes"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_plans: {
        Row: {
          analyzer_session_id: string
          created_at: string
          duration_days: number
          id: string
          phase: string
          plan_json: Json | null
          total_disputes: number
          updated_at: string
          user_id: string
        }
        Insert: {
          analyzer_session_id: string
          created_at?: string
          duration_days?: number
          id?: string
          phase: string
          plan_json?: Json | null
          total_disputes?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          analyzer_session_id?: string
          created_at?: string
          duration_days?: number
          id?: string
          phase?: string
          plan_json?: Json | null
          total_disputes?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispute_plans_analyzer_session_id_fkey"
            columns: ["analyzer_session_id"]
            isOneToOne: false
            referencedRelation: "analyzer_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_responses: {
        Row: {
          ai_summary: string | null
          bureau: string
          case_id: string
          created_at: string
          document_url: string | null
          extracted_text: string | null
          id: string
          letter_id: string | null
          mail_job_id: string | null
          metadata: Json | null
          notes: string | null
          received_date: string
          recommended_next_action: string | null
          response_deadline: string | null
          response_status: string
          response_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_summary?: string | null
          bureau: string
          case_id: string
          created_at?: string
          document_url?: string | null
          extracted_text?: string | null
          id?: string
          letter_id?: string | null
          mail_job_id?: string | null
          metadata?: Json | null
          notes?: string | null
          received_date: string
          recommended_next_action?: string | null
          response_deadline?: string | null
          response_status?: string
          response_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_summary?: string | null
          bureau?: string
          case_id?: string
          created_at?: string
          document_url?: string | null
          extracted_text?: string | null
          id?: string
          letter_id?: string | null
          mail_job_id?: string | null
          metadata?: Json | null
          notes?: string | null
          received_date?: string
          recommended_next_action?: string | null
          response_deadline?: string | null
          response_status?: string
          response_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispute_responses_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_responses_letter_id_fkey"
            columns: ["letter_id"]
            isOneToOne: false
            referencedRelation: "dispute_letters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_responses_mail_job_id_fkey"
            columns: ["mail_job_id"]
            isOneToOne: false
            referencedRelation: "mail_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_round_expectations: {
        Row: {
          account_name: string
          account_number_last4: string | null
          bureau: string
          case_id: string
          challenged_issue: string | null
          created_at: string
          expected_outcomes: Json
          id: string
          monitoring_status: string
          next_round_number: number
          outcome_results: Json
          recommended_strategies: Json
          response_document_id: string | null
          response_received_at: string | null
          response_summary: string | null
          response_type: string | null
          selected_strategy_key: string | null
          selected_strategy_label: string | null
          source_letter_id: string | null
          source_packet_id: string | null
          source_round_number: number
          strategy_confirmed_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_name: string
          account_number_last4?: string | null
          bureau: string
          case_id: string
          challenged_issue?: string | null
          created_at?: string
          expected_outcomes?: Json
          id?: string
          monitoring_status?: string
          next_round_number: number
          outcome_results?: Json
          recommended_strategies?: Json
          response_document_id?: string | null
          response_received_at?: string | null
          response_summary?: string | null
          response_type?: string | null
          selected_strategy_key?: string | null
          selected_strategy_label?: string | null
          source_letter_id?: string | null
          source_packet_id?: string | null
          source_round_number: number
          strategy_confirmed_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_name?: string
          account_number_last4?: string | null
          bureau?: string
          case_id?: string
          challenged_issue?: string | null
          created_at?: string
          expected_outcomes?: Json
          id?: string
          monitoring_status?: string
          next_round_number?: number
          outcome_results?: Json
          recommended_strategies?: Json
          response_document_id?: string | null
          response_received_at?: string | null
          response_summary?: string | null
          response_type?: string | null
          selected_strategy_key?: string | null
          selected_strategy_label?: string | null
          source_letter_id?: string | null
          source_packet_id?: string | null
          source_round_number?: number
          strategy_confirmed_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispute_round_expectations_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_round_expectations_source_letter_id_fkey"
            columns: ["source_letter_id"]
            isOneToOne: false
            referencedRelation: "dispute_letters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispute_round_expectations_source_packet_id_fkey"
            columns: ["source_packet_id"]
            isOneToOne: false
            referencedRelation: "bureau_packets"
            referencedColumns: ["id"]
          },
        ]
      }
      dispute_rounds: {
        Row: {
          case_id: string
          created_at: string
          dispute_delivered_at: string | null
          dispute_filed_at: string
          extended_deadline_at: string | null
          extra_info_submitted: boolean | null
          id: string
          investigation_deadline_at: string | null
          last_response_at: string | null
          next_action: string | null
          next_action_due_at: string | null
          outcome: string | null
          procedural_violation: boolean
          recommended_letter_type: string | null
          resolved_at: string | null
          response_analyzed_at: string | null
          response_deadline: string
          response_outcome: string | null
          response_received_at: string | null
          round_number: number
          round_status: string
          round2_required: boolean | null
          round3_required: boolean | null
          updated_at: string
          user_id: string
          violation_details: string | null
          violation_type: string | null
        }
        Insert: {
          case_id: string
          created_at?: string
          dispute_delivered_at?: string | null
          dispute_filed_at?: string
          extended_deadline_at?: string | null
          extra_info_submitted?: boolean | null
          id?: string
          investigation_deadline_at?: string | null
          last_response_at?: string | null
          next_action?: string | null
          next_action_due_at?: string | null
          outcome?: string | null
          procedural_violation?: boolean
          recommended_letter_type?: string | null
          resolved_at?: string | null
          response_analyzed_at?: string | null
          response_deadline: string
          response_outcome?: string | null
          response_received_at?: string | null
          round_number?: number
          round_status?: string
          round2_required?: boolean | null
          round3_required?: boolean | null
          updated_at?: string
          user_id: string
          violation_details?: string | null
          violation_type?: string | null
        }
        Update: {
          case_id?: string
          created_at?: string
          dispute_delivered_at?: string | null
          dispute_filed_at?: string
          extended_deadline_at?: string | null
          extra_info_submitted?: boolean | null
          id?: string
          investigation_deadline_at?: string | null
          last_response_at?: string | null
          next_action?: string | null
          next_action_due_at?: string | null
          outcome?: string | null
          procedural_violation?: boolean
          recommended_letter_type?: string | null
          resolved_at?: string | null
          response_analyzed_at?: string | null
          response_deadline?: string
          response_outcome?: string | null
          response_received_at?: string | null
          round_number?: number
          round_status?: string
          round2_required?: boolean | null
          round3_required?: boolean | null
          updated_at?: string
          user_id?: string
          violation_details?: string | null
          violation_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dispute_rounds_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      disputes: {
        Row: {
          account_id: string | null
          analyzer_item_id: string | null
          bureau: string
          created_at: string
          dispute_plan_id: string
          dispute_reason: string | null
          id: string
          issue_type: string | null
          item_number: number | null
          letter_body: string | null
          response_date: string | null
          response_text: string | null
          round_number: number | null
          sent_date: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          analyzer_item_id?: string | null
          bureau: string
          created_at?: string
          dispute_plan_id: string
          dispute_reason?: string | null
          id?: string
          issue_type?: string | null
          item_number?: number | null
          letter_body?: string | null
          response_date?: string | null
          response_text?: string | null
          round_number?: number | null
          sent_date?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_id?: string | null
          analyzer_item_id?: string | null
          bureau?: string
          created_at?: string
          dispute_plan_id?: string
          dispute_reason?: string | null
          id?: string
          issue_type?: string | null
          item_number?: number | null
          letter_body?: string | null
          response_date?: string | null
          response_text?: string | null
          round_number?: number | null
          sent_date?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "disputes_dispute_plan_id_fkey"
            columns: ["dispute_plan_id"]
            isOneToOne: false
            referencedRelation: "dispute_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_disputes_analyzer_item"
            columns: ["analyzer_item_id"]
            isOneToOne: false
            referencedRelation: "analyzer_items"
            referencedColumns: ["id"]
          },
        ]
      }
      ecosystem_founders: {
        Row: {
          created_at: string
          founder_id: string
          id: string
          profile_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          founder_id: string
          id?: string
          profile_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          founder_id?: string
          id?: string
          profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ecosystem_founders_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      encryption_keys: {
        Row: {
          created_at: string | null
          key: string
          key_name: string
          owner_id: string | null
          uid: string | null
        }
        Insert: {
          created_at?: string | null
          key: string
          key_name: string
          owner_id?: string | null
          uid?: string | null
        }
        Update: {
          created_at?: string | null
          key?: string
          key_name?: string
          owner_id?: string | null
          uid?: string | null
        }
        Relationships: []
      }
      enforcement_actions: {
        Row: {
          analyzer_item_id: string | null
          analyzer_session_id: string
          created_at: string
          id: string
          member_id: string
          metadata: Json
          status: string
          target_entity: string
        }
        Insert: {
          analyzer_item_id?: string | null
          analyzer_session_id: string
          created_at?: string
          id?: string
          member_id: string
          metadata?: Json
          status?: string
          target_entity: string
        }
        Update: {
          analyzer_item_id?: string | null
          analyzer_session_id?: string
          created_at?: string
          id?: string
          member_id?: string
          metadata?: Json
          status?: string
          target_entity?: string
        }
        Relationships: [
          {
            foreignKeyName: "enforcement_actions_analyzer_item_id_fkey"
            columns: ["analyzer_item_id"]
            isOneToOne: false
            referencedRelation: "analyzer_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enforcement_actions_analyzer_session_id_fkey"
            columns: ["analyzer_session_id"]
            isOneToOne: false
            referencedRelation: "analyzer_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      entitlements: {
        Row: {
          business_id: string | null
          correlation_id: string
          created_at: string
          expires_at: string | null
          id: string
          plan_sku: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          business_id?: string | null
          correlation_id: string
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_sku: string
          status: string
          updated_at?: string
          user_id: string
        }
        Update: {
          business_id?: string | null
          correlation_id?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_sku?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      event_schedule_items: {
        Row: {
          created_at: string
          description: string | null
          end_time: string | null
          id: string
          memorial_id: string
          sort_order: number
          start_time: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_time?: string | null
          id?: string
          memorial_id: string
          sort_order?: number
          start_time: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          end_time?: string | null
          id?: string
          memorial_id?: string
          sort_order?: number
          start_time?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_schedule_items_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      evidence_items: {
        Row: {
          case_id: string
          evidence_status: string
          file_name: string
          file_type: string | null
          file_url: string
          id: string
          storage_path: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          case_id: string
          evidence_status?: string
          file_name: string
          file_type?: string | null
          file_url: string
          id?: string
          storage_path: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          case_id?: string
          evidence_status?: string
          file_name?: string
          file_type?: string | null
          file_url?: string
          id?: string
          storage_path?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_items_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      EvidenceEvent: {
        Row: {
          actor: string
          chainHash: string
          disputeId: string
          eventType: string
          id: string
          occurredAt: string
          payloadHash: string
          previousHash: string | null
          recordedAt: string
        }
        Insert: {
          actor: string
          chainHash: string
          disputeId: string
          eventType: string
          id: string
          occurredAt: string
          payloadHash: string
          previousHash?: string | null
          recordedAt?: string
        }
        Update: {
          actor?: string
          chainHash?: string
          disputeId?: string
          eventType?: string
          id?: string
          occurredAt?: string
          payloadHash?: string
          previousHash?: string | null
          recordedAt?: string
        }
        Relationships: []
      }
      expense_budgets: {
        Row: {
          category: Database["public"]["Enums"]["expense_category"]
          created_at: string
          expense_type: Database["public"]["Enums"]["expense_type"]
          id: string
          monthly_limit: number
          notes: string | null
          period_month: number
          period_year: number
          profile_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          id?: string
          monthly_limit: number
          notes?: string | null
          period_month: number
          period_year: number
          profile_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          id?: string
          monthly_limit?: number
          notes?: string | null
          period_month?: number
          period_year?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "expense_budgets_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expense_business_id_review: {
        Row: {
          created_at: string
          entity: string | null
          expense_id: string
          reason: string
          threeb_id: string | null
        }
        Insert: {
          created_at?: string
          entity?: string | null
          expense_id: string
          reason: string
          threeb_id?: string | null
        }
        Update: {
          created_at?: string
          entity?: string | null
          expense_id?: string
          reason?: string
          threeb_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expense_business_id_review_expense_id_fkey"
            columns: ["expense_id"]
            isOneToOne: true
            referencedRelation: "expenses"
            referencedColumns: ["id"]
          },
        ]
      }
      expense_import_batches: {
        Row: {
          created_at: string
          id: string
          row_count: number
          source: string
          status: string
          threeb_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          row_count?: number
          source: string
          status?: string
          threeb_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          row_count?: number
          source?: string
          status?: string
          threeb_id?: string
          user_id?: string
        }
        Relationships: []
      }
      expense_items: {
        Row: {
          ai_categorized: boolean
          ai_confidence: number | null
          allocation: Json | null
          amount: number
          approved_at: string | null
          approved_by: string | null
          category: Database["public"]["Enums"]["expense_category"]
          created_at: string
          currency: string
          description: string | null
          expense_date: string
          expense_type: Database["public"]["Enums"]["expense_type"]
          external_id: string | null
          id: string
          is_tax_deductible: boolean | null
          line_items: Json | null
          notes: string | null
          ocr_confidence: number | null
          ocr_raw: Json | null
          product_slug: string | null
          profile_id: string
          receipt_storage_path: string | null
          receipt_url: string | null
          recurrence: Database["public"]["Enums"]["expense_recurrence"] | null
          reimbursable: boolean | null
          reimbursed_at: string | null
          status: Database["public"]["Enums"]["expense_status"]
          tax_amount: number | null
          tax_category: string | null
          title: string
          updated_at: string
          vendor: string | null
        }
        Insert: {
          ai_categorized?: boolean
          ai_confidence?: number | null
          allocation?: Json | null
          amount: number
          approved_at?: string | null
          approved_by?: string | null
          category: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          currency?: string
          description?: string | null
          expense_date?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          external_id?: string | null
          id?: string
          is_tax_deductible?: boolean | null
          line_items?: Json | null
          notes?: string | null
          ocr_confidence?: number | null
          ocr_raw?: Json | null
          product_slug?: string | null
          profile_id: string
          receipt_storage_path?: string | null
          receipt_url?: string | null
          recurrence?: Database["public"]["Enums"]["expense_recurrence"] | null
          reimbursable?: boolean | null
          reimbursed_at?: string | null
          status?: Database["public"]["Enums"]["expense_status"]
          tax_amount?: number | null
          tax_category?: string | null
          title: string
          updated_at?: string
          vendor?: string | null
        }
        Update: {
          ai_categorized?: boolean
          ai_confidence?: number | null
          allocation?: Json | null
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          category?: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          currency?: string
          description?: string | null
          expense_date?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          external_id?: string | null
          id?: string
          is_tax_deductible?: boolean | null
          line_items?: Json | null
          notes?: string | null
          ocr_confidence?: number | null
          ocr_raw?: Json | null
          product_slug?: string | null
          profile_id?: string
          receipt_storage_path?: string | null
          receipt_url?: string | null
          recurrence?: Database["public"]["Enums"]["expense_recurrence"] | null
          reimbursable?: boolean | null
          reimbursed_at?: string | null
          status?: Database["public"]["Enums"]["expense_status"]
          tax_amount?: number | null
          tax_category?: string | null
          title?: string
          updated_at?: string
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expense_items_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expense_receipts: {
        Row: {
          created_at: string
          file_url: string
          id: string
          ocr_text: string | null
          original_filename: string | null
          parsed_status: string
          threeb_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_url: string
          id?: string
          ocr_text?: string | null
          original_filename?: string | null
          parsed_status?: string
          threeb_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_url?: string
          id?: string
          ocr_text?: string | null
          original_filename?: string | null
          parsed_status?: string
          threeb_id?: string
          user_id?: string
        }
        Relationships: []
      }
      expense_subscriptions: {
        Row: {
          amount: number
          category: Database["public"]["Enums"]["expense_category"]
          created_at: string
          currency: string
          expense_type: Database["public"]["Enums"]["expense_type"]
          id: string
          is_active: boolean | null
          next_billing: string | null
          notes: string | null
          product_slug: string | null
          profile_id: string
          recurrence: Database["public"]["Enums"]["expense_recurrence"]
          title: string
          vendor: string | null
        }
        Insert: {
          amount: number
          category: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          currency?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          id?: string
          is_active?: boolean | null
          next_billing?: string | null
          notes?: string | null
          product_slug?: string | null
          profile_id: string
          recurrence?: Database["public"]["Enums"]["expense_recurrence"]
          title: string
          vendor?: string | null
        }
        Update: {
          amount?: number
          category?: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          currency?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          id?: string
          is_active?: boolean | null
          next_billing?: string | null
          notes?: string | null
          product_slug?: string | null
          profile_id?: string
          recurrence?: Database["public"]["Enums"]["expense_recurrence"]
          title?: string
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expense_subscriptions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expense_summaries: {
        Row: {
          category: Database["public"]["Enums"]["expense_category"]
          created_at: string
          expense_type: Database["public"]["Enums"]["expense_type"]
          id: string
          item_count: number
          period_month: number
          period_year: number
          product_slug: string | null
          profile_id: string
          total_amount: number
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          expense_type: Database["public"]["Enums"]["expense_type"]
          id?: string
          item_count?: number
          period_month: number
          period_year: number
          product_slug?: string | null
          profile_id: string
          total_amount?: number
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          expense_type?: Database["public"]["Enums"]["expense_type"]
          id?: string
          item_count?: number
          period_month?: number
          period_year?: number
          product_slug?: string | null
          profile_id?: string
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "expense_summaries_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number
          business_amount: number | null
          business_percent: number | null
          business_purpose: string | null
          category: string | null
          confidence_score: number | null
          created_at: string
          entity: string | null
          expense_date: string | null
          gallons: number | null
          id: string
          merchant: string | null
          notes: string | null
          odometer: number | null
          ownership_type: string | null
          payment_method: string | null
          personal_amount: number | null
          price_per_gallon: number | null
          receipt_id: string | null
          receipt_image: string | null
          source: string
          subcategory: string | null
          tax_category: string | null
          tax_deductible: boolean | null
          threeb_business_id: string
          threeb_id: string
          transaction_id: string | null
          user_id: string
          vehicle: string | null
          vendor: string | null
        }
        Insert: {
          amount: number
          business_amount?: number | null
          business_percent?: number | null
          business_purpose?: string | null
          category?: string | null
          confidence_score?: number | null
          created_at?: string
          entity?: string | null
          expense_date?: string | null
          gallons?: number | null
          id?: string
          merchant?: string | null
          notes?: string | null
          odometer?: number | null
          ownership_type?: string | null
          payment_method?: string | null
          personal_amount?: number | null
          price_per_gallon?: number | null
          receipt_id?: string | null
          receipt_image?: string | null
          source: string
          subcategory?: string | null
          tax_category?: string | null
          tax_deductible?: boolean | null
          threeb_business_id: string
          threeb_id: string
          transaction_id?: string | null
          user_id: string
          vehicle?: string | null
          vendor?: string | null
        }
        Update: {
          amount?: number
          business_amount?: number | null
          business_percent?: number | null
          business_purpose?: string | null
          category?: string | null
          confidence_score?: number | null
          created_at?: string
          entity?: string | null
          expense_date?: string | null
          gallons?: number | null
          id?: string
          merchant?: string | null
          notes?: string | null
          odometer?: number | null
          ownership_type?: string | null
          payment_method?: string | null
          personal_amount?: number | null
          price_per_gallon?: number | null
          receipt_id?: string | null
          receipt_image?: string | null
          source?: string
          subcategory?: string | null
          tax_category?: string | null
          tax_deductible?: boolean | null
          threeb_business_id?: string
          threeb_id?: string
          transaction_id?: string | null
          user_id?: string
          vehicle?: string | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_receipt_id_fkey"
            columns: ["receipt_id"]
            isOneToOne: false
            referencedRelation: "expense_receipts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_threeb_business_id_fkey"
            columns: ["threeb_business_id"]
            isOneToOne: false
            referencedRelation: "threeb_businesses"
            referencedColumns: ["threeb_business_id"]
          },
        ]
      }
      facebook_live_sessions: {
        Row: {
          created_at: string
          dash_playback_url: string | null
          ended_at: string | null
          fb_live_video_id: string | null
          id: string
          memorial_id: string
          permalink_url: string | null
          secure_stream_url: string | null
          started_at: string | null
          status: string
          stream_url: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          dash_playback_url?: string | null
          ended_at?: string | null
          fb_live_video_id?: string | null
          id?: string
          memorial_id: string
          permalink_url?: string | null
          secure_stream_url?: string | null
          started_at?: string | null
          status?: string
          stream_url?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          dash_playback_url?: string | null
          ended_at?: string | null
          fb_live_video_id?: string | null
          id?: string
          memorial_id?: string
          permalink_url?: string | null
          secure_stream_url?: string | null
          started_at?: string | null
          status?: string
          stream_url?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "facebook_live_sessions_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      "Fleet Commander": {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      fleet_loads: {
        Row: {
          business_id: string | null
          created_at: string | null
          dropoff: string | null
          id: string
          load_type: string | null
          miles: number | null
          order_number: string | null
          pickup: string | null
          recommendation: string | null
          score: number | null
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string | null
          dropoff?: string | null
          id?: string
          load_type?: string | null
          miles?: number | null
          order_number?: string | null
          pickup?: string | null
          recommendation?: string | null
          score?: number | null
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string | null
          dropoff?: string | null
          id?: string
          load_type?: string | null
          miles?: number | null
          order_number?: string | null
          pickup?: string | null
          recommendation?: string | null
          score?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      foundation_intakes: {
        Row: {
          business_name: string | null
          completion_flag: boolean
          created_at: string
          description: string
          email: string
          entity_type: string
          goals: Json
          handoffs: Json
          id: string
          industry: string
          lead_source: string | null
          naics_code: string | null
          naics_flags: Json
          naics_title: string | null
          name: string
          name_keywords: string | null
          name_source: string
          name_style: string | null
          notes: string | null
          packet_text: string
          packet_version: string
          path: string
          phone: string | null
          readiness_score: number
          shortlisted_names: Json
          state: string
          steps: Json
          timeline: string
        }
        Insert: {
          business_name?: string | null
          completion_flag?: boolean
          created_at?: string
          description: string
          email: string
          entity_type: string
          goals: Json
          handoffs?: Json
          id?: string
          industry: string
          lead_source?: string | null
          naics_code?: string | null
          naics_flags?: Json
          naics_title?: string | null
          name: string
          name_keywords?: string | null
          name_source?: string
          name_style?: string | null
          notes?: string | null
          packet_text: string
          packet_version?: string
          path: string
          phone?: string | null
          readiness_score: number
          shortlisted_names?: Json
          state: string
          steps: Json
          timeline: string
        }
        Update: {
          business_name?: string | null
          completion_flag?: boolean
          created_at?: string
          description?: string
          email?: string
          entity_type?: string
          goals?: Json
          handoffs?: Json
          id?: string
          industry?: string
          lead_source?: string | null
          naics_code?: string | null
          naics_flags?: Json
          naics_title?: string | null
          name?: string
          name_keywords?: string | null
          name_source?: string
          name_style?: string | null
          notes?: string | null
          packet_text?: string
          packet_version?: string
          path?: string
          phone?: string | null
          readiness_score?: number
          shortlisted_names?: Json
          state?: string
          steps?: Json
          timeline?: string
        }
        Relationships: []
      }
      founding_members: {
        Row: {
          benefits_granted: Json
          claimed_at: string
          credit_report_id: string | null
          id: string
          membership_expires_at: string
          mfsn_verified: boolean
          slot_number: number
          user_id: string
        }
        Insert: {
          benefits_granted?: Json
          claimed_at?: string
          credit_report_id?: string | null
          id?: string
          membership_expires_at?: string
          mfsn_verified?: boolean
          slot_number: number
          user_id: string
        }
        Update: {
          benefits_granted?: Json
          claimed_at?: string
          credit_report_id?: string | null
          id?: string
          membership_expires_at?: string
          mfsn_verified?: boolean
          slot_number?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "founding_members_credit_report_id_fkey"
            columns: ["credit_report_id"]
            isOneToOne: false
            referencedRelation: "credit_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_audit_log: {
        Row: {
          action: string
          actor: string | null
          after: Json | null
          before: Json | null
          business_id: string | null
          created_at: string
          id: string
          reason: string | null
        }
        Insert: {
          action: string
          actor?: string | null
          after?: Json | null
          before?: Json | null
          business_id?: string | null
          created_at?: string
          id?: string
          reason?: string | null
        }
        Update: {
          action?: string
          actor?: string | null
          after?: Json | null
          before?: Json | null
          business_id?: string | null
          created_at?: string
          id?: string
          reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_audit_log_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_bankability_checks: {
        Row: {
          business_id: string
          classification: string
          created_at: string
          funding_profile_id: string
          id: string
          notes: string | null
          requirement_key: string
          requirement_label: string
          status: string
          updated_at: string
        }
        Insert: {
          business_id: string
          classification: string
          created_at?: string
          funding_profile_id: string
          id?: string
          notes?: string | null
          requirement_key: string
          requirement_label: string
          status?: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          classification?: string
          created_at?: string
          funding_profile_id?: string
          id?: string
          notes?: string | null
          requirement_key?: string
          requirement_label?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_bankability_checks_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_bankability_checks_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_business_plan_sections: {
        Row: {
          approved_at: string | null
          business_id: string
          business_plan_id: string
          created_at: string
          edited_content: string | null
          generated_at: string | null
          generated_content: string | null
          id: string
          section_type: string
          source_metadata: Json | null
          status: string
          updated_at: string
          version: number
        }
        Insert: {
          approved_at?: string | null
          business_id: string
          business_plan_id: string
          created_at?: string
          edited_content?: string | null
          generated_at?: string | null
          generated_content?: string | null
          id?: string
          section_type: string
          source_metadata?: Json | null
          status?: string
          updated_at?: string
          version?: number
        }
        Update: {
          approved_at?: string | null
          business_id?: string
          business_plan_id?: string
          created_at?: string
          edited_content?: string | null
          generated_at?: string | null
          generated_content?: string | null
          id?: string
          section_type?: string
          source_metadata?: Json | null
          status?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "funding_business_plan_sections_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_business_plan_sections_business_plan_id_fkey"
            columns: ["business_plan_id"]
            isOneToOne: false
            referencedRelation: "funding_business_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_business_plans: {
        Row: {
          business_id: string
          created_at: string
          created_by: string | null
          equipment_request_id: string
          evidence_coverage_pct: number | null
          funding_profile_id: string
          id: string
          status: string
          updated_at: string
          version: number
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by?: string | null
          equipment_request_id: string
          evidence_coverage_pct?: number | null
          funding_profile_id: string
          id?: string
          status?: string
          updated_at?: string
          version: number
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string | null
          equipment_request_id?: string
          evidence_coverage_pct?: number | null
          funding_profile_id?: string
          id?: string
          status?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "funding_business_plans_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_business_plans_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_business_plans_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_consents: {
        Row: {
          accepted: boolean
          accepted_at: string
          business_id: string
          disclosure_type: string
          disclosure_version: string
          id: string
          user_id: string
        }
        Insert: {
          accepted?: boolean
          accepted_at?: string
          business_id: string
          disclosure_type: string
          disclosure_version?: string
          id?: string
          user_id: string
        }
        Update: {
          accepted?: boolean
          accepted_at?: string
          business_id?: string
          disclosure_type?: string
          disclosure_version?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_consents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_credit_profiles: {
        Row: {
          average_account_age_months: number | null
          bureau: string
          business_id: string
          created_at: string
          fico_score: number | null
          id: string
          oldest_account_age_months: number | null
          recent_inquiries_180d: number
          recent_inquiries_30d: number
          recent_inquiries_365d: number
          recent_inquiries_90d: number
          score_date: string | null
          updated_at: string
          user_id: string | null
          utilization_pct: number | null
        }
        Insert: {
          average_account_age_months?: number | null
          bureau: string
          business_id: string
          created_at?: string
          fico_score?: number | null
          id?: string
          oldest_account_age_months?: number | null
          recent_inquiries_180d?: number
          recent_inquiries_30d?: number
          recent_inquiries_365d?: number
          recent_inquiries_90d?: number
          score_date?: string | null
          updated_at?: string
          user_id?: string | null
          utilization_pct?: number | null
        }
        Update: {
          average_account_age_months?: number | null
          bureau?: string
          business_id?: string
          created_at?: string
          fico_score?: number | null
          id?: string
          oldest_account_age_months?: number | null
          recent_inquiries_180d?: number
          recent_inquiries_30d?: number
          recent_inquiries_365d?: number
          recent_inquiries_90d?: number
          score_date?: string | null
          updated_at?: string
          user_id?: string | null
          utilization_pct?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_credit_profiles_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_customer_opportunities: {
        Row: {
          business_id: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string
          created_by: string | null
          customer_name: string
          equipment_request_id: string | null
          expected_frequency: string | null
          expected_rate: number | null
          expected_volume: number | null
          funding_profile_id: string
          id: string
          notes: string | null
          payment_terms: string | null
          rate_unit: string | null
          stage: string
          territory: string | null
          updated_at: string
          volume_period: string | null
          work_type: string | null
        }
        Insert: {
          business_id: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by?: string | null
          customer_name: string
          equipment_request_id?: string | null
          expected_frequency?: string | null
          expected_rate?: number | null
          expected_volume?: number | null
          funding_profile_id: string
          id?: string
          notes?: string | null
          payment_terms?: string | null
          rate_unit?: string | null
          stage?: string
          territory?: string | null
          updated_at?: string
          volume_period?: string | null
          work_type?: string | null
        }
        Update: {
          business_id?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by?: string | null
          customer_name?: string
          equipment_request_id?: string | null
          expected_frequency?: string | null
          expected_rate?: number | null
          expected_volume?: number | null
          funding_profile_id?: string
          id?: string
          notes?: string | null
          payment_terms?: string | null
          rate_unit?: string | null
          stage?: string
          territory?: string | null
          updated_at?: string
          volume_period?: string | null
          work_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_customer_opportunities_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_customer_opportunities_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_customer_opportunities_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_documents: {
        Row: {
          bankability_check_id: string | null
          business_id: string
          category: string
          created_at: string
          created_by: string | null
          customer_opportunity_id: string | null
          document_date: string | null
          document_type: string
          equipment_request_id: string | null
          expiration_date: string | null
          file_name: string | null
          funding_profile_id: string
          id: string
          notes: string | null
          owner_id: string | null
          requirement_classification: string
          source: string | null
          status: string
          storage_path: string | null
          underwriting_request_id: string | null
          updated_at: string
          upload_date: string | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          bankability_check_id?: string | null
          business_id: string
          category: string
          created_at?: string
          created_by?: string | null
          customer_opportunity_id?: string | null
          document_date?: string | null
          document_type: string
          equipment_request_id?: string | null
          expiration_date?: string | null
          file_name?: string | null
          funding_profile_id: string
          id?: string
          notes?: string | null
          owner_id?: string | null
          requirement_classification?: string
          source?: string | null
          status?: string
          storage_path?: string | null
          underwriting_request_id?: string | null
          updated_at?: string
          upload_date?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          bankability_check_id?: string | null
          business_id?: string
          category?: string
          created_at?: string
          created_by?: string | null
          customer_opportunity_id?: string | null
          document_date?: string | null
          document_type?: string
          equipment_request_id?: string | null
          expiration_date?: string | null
          file_name?: string | null
          funding_profile_id?: string
          id?: string
          notes?: string | null
          owner_id?: string | null
          requirement_classification?: string
          source?: string | null
          status?: string
          storage_path?: string | null
          underwriting_request_id?: string | null
          updated_at?: string
          upload_date?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_documents_bankability_check_id_fkey"
            columns: ["bankability_check_id"]
            isOneToOne: false
            referencedRelation: "funding_bankability_checks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_documents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_documents_customer_opportunity_id_fkey"
            columns: ["customer_opportunity_id"]
            isOneToOne: false
            referencedRelation: "funding_customer_opportunities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_documents_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_documents_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "funding_owners"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_equipment_profiles_super_dump: {
        Row: {
          axle_count: number | null
          billable_hours_per_month: number | null
          body_capacity_cubic_yards: number | null
          brake_condition: string | null
          business_id: string
          created_at: string
          created_by: string | null
          def_scr_system_condition: string | null
          differential: string | null
          dpf_condition: string | null
          dump_body_manufacturer: string | null
          engine: string | null
          engine_hours: number | null
          equipment_request_id: string
          frame_condition: string | null
          fuel_cost_per_hour: number | null
          has_current_dot_inspection: boolean | null
          has_ecm_report: boolean | null
          has_lift_tag_axle: boolean | null
          has_pto: boolean | null
          has_steering_tag_axle: boolean | null
          hoist_condition: string | null
          hydraulic_pump_condition: string | null
          id: string
          idle_hours: number | null
          legal_payload_lbs: number | null
          loads_per_day: number | null
          maintenance_cost_per_hour: number | null
          manufacturer: string | null
          model: string | null
          model_year: number | null
          notes: string | null
          rate_per_hour: number | null
          rate_per_load: number | null
          rate_per_ton: number | null
          suspension_type: string | null
          tailgate_type: string | null
          tire_condition: string | null
          tons_per_day: number | null
          tons_per_load: number | null
          transmission: string | null
          updated_at: string
          vin: string | null
        }
        Insert: {
          axle_count?: number | null
          billable_hours_per_month?: number | null
          body_capacity_cubic_yards?: number | null
          brake_condition?: string | null
          business_id: string
          created_at?: string
          created_by?: string | null
          def_scr_system_condition?: string | null
          differential?: string | null
          dpf_condition?: string | null
          dump_body_manufacturer?: string | null
          engine?: string | null
          engine_hours?: number | null
          equipment_request_id: string
          frame_condition?: string | null
          fuel_cost_per_hour?: number | null
          has_current_dot_inspection?: boolean | null
          has_ecm_report?: boolean | null
          has_lift_tag_axle?: boolean | null
          has_pto?: boolean | null
          has_steering_tag_axle?: boolean | null
          hoist_condition?: string | null
          hydraulic_pump_condition?: string | null
          id?: string
          idle_hours?: number | null
          legal_payload_lbs?: number | null
          loads_per_day?: number | null
          maintenance_cost_per_hour?: number | null
          manufacturer?: string | null
          model?: string | null
          model_year?: number | null
          notes?: string | null
          rate_per_hour?: number | null
          rate_per_load?: number | null
          rate_per_ton?: number | null
          suspension_type?: string | null
          tailgate_type?: string | null
          tire_condition?: string | null
          tons_per_day?: number | null
          tons_per_load?: number | null
          transmission?: string | null
          updated_at?: string
          vin?: string | null
        }
        Update: {
          axle_count?: number | null
          billable_hours_per_month?: number | null
          body_capacity_cubic_yards?: number | null
          brake_condition?: string | null
          business_id?: string
          created_at?: string
          created_by?: string | null
          def_scr_system_condition?: string | null
          differential?: string | null
          dpf_condition?: string | null
          dump_body_manufacturer?: string | null
          engine?: string | null
          engine_hours?: number | null
          equipment_request_id?: string
          frame_condition?: string | null
          fuel_cost_per_hour?: number | null
          has_current_dot_inspection?: boolean | null
          has_ecm_report?: boolean | null
          has_lift_tag_axle?: boolean | null
          has_pto?: boolean | null
          has_steering_tag_axle?: boolean | null
          hoist_condition?: string | null
          hydraulic_pump_condition?: string | null
          id?: string
          idle_hours?: number | null
          legal_payload_lbs?: number | null
          loads_per_day?: number | null
          maintenance_cost_per_hour?: number | null
          manufacturer?: string | null
          model?: string | null
          model_year?: number | null
          notes?: string | null
          rate_per_hour?: number | null
          rate_per_load?: number | null
          rate_per_ton?: number | null
          suspension_type?: string | null
          tailgate_type?: string | null
          tire_condition?: string | null
          tons_per_day?: number | null
          tons_per_load?: number | null
          transmission?: string | null
          updated_at?: string
          vin?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_equipment_profiles_super_dump_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_equipment_profiles_super_dump_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: true
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_equipment_requests: {
        Row: {
          business_id: string
          business_purpose: string | null
          closing_costs: number
          created_at: string
          created_by: string | null
          delivery_cost: number
          equipment_category: string
          equipment_hours: number | null
          equipment_mileage: number | null
          equipment_subtype: string
          equipment_year: number | null
          estimated_purchase_price: number | null
          estimated_total_project_cost: number | null
          funding_profile_id: string
          id: string
          initial_repairs_cost: number
          insurance_deposit: number
          monthly_debt_service: number | null
          monthly_fixed_costs_excl_debt: number
          new_or_used: string | null
          notes: string | null
          proposed_interest_rate_pct: number | null
          proposed_term_months: number | null
          registration_fees: number
          requested_loan_amount: number | null
          required_upgrades_cost: number
          sales_tax: number
          status: string
          updated_at: string
          working_capital: number
        }
        Insert: {
          business_id: string
          business_purpose?: string | null
          closing_costs?: number
          created_at?: string
          created_by?: string | null
          delivery_cost?: number
          equipment_category: string
          equipment_hours?: number | null
          equipment_mileage?: number | null
          equipment_subtype: string
          equipment_year?: number | null
          estimated_purchase_price?: number | null
          estimated_total_project_cost?: number | null
          funding_profile_id: string
          id?: string
          initial_repairs_cost?: number
          insurance_deposit?: number
          monthly_debt_service?: number | null
          monthly_fixed_costs_excl_debt?: number
          new_or_used?: string | null
          notes?: string | null
          proposed_interest_rate_pct?: number | null
          proposed_term_months?: number | null
          registration_fees?: number
          requested_loan_amount?: number | null
          required_upgrades_cost?: number
          sales_tax?: number
          status?: string
          updated_at?: string
          working_capital?: number
        }
        Update: {
          business_id?: string
          business_purpose?: string | null
          closing_costs?: number
          created_at?: string
          created_by?: string | null
          delivery_cost?: number
          equipment_category?: string
          equipment_hours?: number | null
          equipment_mileage?: number | null
          equipment_subtype?: string
          equipment_year?: number | null
          estimated_purchase_price?: number | null
          estimated_total_project_cost?: number | null
          funding_profile_id?: string
          id?: string
          initial_repairs_cost?: number
          insurance_deposit?: number
          monthly_debt_service?: number | null
          monthly_fixed_costs_excl_debt?: number
          new_or_used?: string | null
          notes?: string | null
          proposed_interest_rate_pct?: number | null
          proposed_term_months?: number | null
          registration_fees?: number
          requested_loan_amount?: number | null
          required_upgrades_cost?: number
          sales_tax?: number
          status?: string
          updated_at?: string
          working_capital?: number
        }
        Relationships: [
          {
            foreignKeyName: "funding_equipment_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_equipment_requests_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_financial_snapshots: {
        Row: {
          accounts_payable: number | null
          accounts_receivable: number | null
          annual_revenue: number | null
          as_of_date: string
          average_daily_balance: number | null
          business_id: string
          cash_reserves: number | null
          checking_balance: number | null
          created_at: string
          created_by: string | null
          equipment_reserve: number | null
          existing_business_debt: number | null
          existing_equipment_loan_payments: number | null
          funding_profile_id: string
          id: string
          monthly_deposits: number | null
          monthly_revenue: number | null
          notes: string | null
          nsf_count_90d: number | null
          overdraft_count_90d: number | null
          owner_contributions: number | null
          owner_draws: number | null
          savings_balance: number | null
          tax_reserve: number | null
          updated_at: string
        }
        Insert: {
          accounts_payable?: number | null
          accounts_receivable?: number | null
          annual_revenue?: number | null
          as_of_date?: string
          average_daily_balance?: number | null
          business_id: string
          cash_reserves?: number | null
          checking_balance?: number | null
          created_at?: string
          created_by?: string | null
          equipment_reserve?: number | null
          existing_business_debt?: number | null
          existing_equipment_loan_payments?: number | null
          funding_profile_id: string
          id?: string
          monthly_deposits?: number | null
          monthly_revenue?: number | null
          notes?: string | null
          nsf_count_90d?: number | null
          overdraft_count_90d?: number | null
          owner_contributions?: number | null
          owner_draws?: number | null
          savings_balance?: number | null
          tax_reserve?: number | null
          updated_at?: string
        }
        Update: {
          accounts_payable?: number | null
          accounts_receivable?: number | null
          annual_revenue?: number | null
          as_of_date?: string
          average_daily_balance?: number | null
          business_id?: string
          cash_reserves?: number | null
          checking_balance?: number | null
          created_at?: string
          created_by?: string | null
          equipment_reserve?: number | null
          existing_business_debt?: number | null
          existing_equipment_loan_payments?: number | null
          funding_profile_id?: string
          id?: string
          monthly_deposits?: number | null
          monthly_revenue?: number | null
          notes?: string | null
          nsf_count_90d?: number | null
          overdraft_count_90d?: number | null
          owner_contributions?: number | null
          owner_draws?: number | null
          savings_balance?: number | null
          tax_reserve?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_financial_snapshots_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_financial_snapshots_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_fit_engine_results: {
        Row: {
          blocker_codes: string[]
          business_id: string
          created_at: string
          eligibility: string
          fit_score: number
          freshness: string
          id: string
          product_id: string
          product_terms_id: string | null
          product_terms_version: number | null
          reason_codes: string[]
          rules_snapshot: Json
          run_id: string
        }
        Insert: {
          blocker_codes?: string[]
          business_id: string
          created_at?: string
          eligibility: string
          fit_score: number
          freshness: string
          id?: string
          product_id: string
          product_terms_id?: string | null
          product_terms_version?: number | null
          reason_codes?: string[]
          rules_snapshot?: Json
          run_id: string
        }
        Update: {
          blocker_codes?: string[]
          business_id?: string
          created_at?: string
          eligibility?: string
          fit_score?: number
          freshness?: string
          id?: string
          product_id?: string
          product_terms_id?: string | null
          product_terms_version?: number | null
          reason_codes?: string[]
          rules_snapshot?: Json
          run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_fit_engine_results_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_fit_engine_results_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "funding_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_fit_engine_results_product_terms_id_fkey"
            columns: ["product_terms_id"]
            isOneToOne: false
            referencedRelation: "funding_product_terms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_fit_engine_results_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "funding_fit_engine_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_fit_engine_runs: {
        Row: {
          business_id: string
          created_at: string
          created_by: string | null
          engine_version: string
          equipment_request_id: string | null
          id: string
          input_snapshot: Json
          product_count: number
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by?: string | null
          engine_version: string
          equipment_request_id?: string | null
          id?: string
          input_snapshot: Json
          product_count?: number
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string | null
          engine_version?: string
          equipment_request_id?: string | null
          id?: string
          input_snapshot?: Json
          product_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "funding_fit_engine_runs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_fit_engine_runs_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_inquiries: {
        Row: {
          application_id: string | null
          bureau: string
          business_id: string
          confirmed: boolean
          created_at: string
          creditor: string | null
          id: string
          inquiry_date: string
          notes: string | null
          source: string | null
          updated_at: string
        }
        Insert: {
          application_id?: string | null
          bureau: string
          business_id: string
          confirmed?: boolean
          created_at?: string
          creditor?: string | null
          id?: string
          inquiry_date: string
          notes?: string | null
          source?: string | null
          updated_at?: string
        }
        Update: {
          application_id?: string | null
          bureau?: string
          business_id?: string
          confirmed?: boolean
          created_at?: string
          creditor?: string | null
          id?: string
          inquiry_date?: string
          notes?: string | null
          source?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_inquiries_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_inquiry_budget_overrides: {
        Row: {
          active: boolean
          business_id: string
          created_at: string
          expires_at: string | null
          id: string
          overridden_by: string
          overridden_status: string
          reason: string
        }
        Insert: {
          active?: boolean
          business_id: string
          created_at?: string
          expires_at?: string | null
          id?: string
          overridden_by: string
          overridden_status: string
          reason: string
        }
        Update: {
          active?: boolean
          business_id?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          overridden_by?: string
          overridden_status?: string
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_inquiry_budget_overrides_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_lenders: {
        Row: {
          active: boolean
          created_at: string
          id: string
          institution_type: string
          name: string
          notes: string | null
          relationship_bank: boolean
          slug: string
          updated_at: string
          website_url: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          id?: string
          institution_type: string
          name: string
          notes?: string | null
          relationship_bank?: boolean
          slug: string
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: string
          institution_type?: string
          name?: string
          notes?: string | null
          relationship_bank?: boolean
          slug?: string
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      funding_operating_cost_assumptions: {
        Row: {
          beginning_cash: number
          business_id: string
          created_at: string
          created_by: string | null
          def_cost_per_month: number
          driver_labor_cost_per_month: number
          equipment_request_id: string
          fuel_cost_per_month: number
          id: string
          insurance_per_month: number
          maintenance_reserve_per_month: number
          minimum_cash_reserve: number
          other_fixed_per_month: number
          payroll_burden_pct: number
          permits_registration_per_month: number
          repairs_per_month: number
          tires_per_month: number
          updated_at: string
        }
        Insert: {
          beginning_cash?: number
          business_id: string
          created_at?: string
          created_by?: string | null
          def_cost_per_month?: number
          driver_labor_cost_per_month?: number
          equipment_request_id: string
          fuel_cost_per_month?: number
          id?: string
          insurance_per_month?: number
          maintenance_reserve_per_month?: number
          minimum_cash_reserve?: number
          other_fixed_per_month?: number
          payroll_burden_pct?: number
          permits_registration_per_month?: number
          repairs_per_month?: number
          tires_per_month?: number
          updated_at?: string
        }
        Update: {
          beginning_cash?: number
          business_id?: string
          created_at?: string
          created_by?: string | null
          def_cost_per_month?: number
          driver_labor_cost_per_month?: number
          equipment_request_id?: string
          fuel_cost_per_month?: number
          id?: string
          insurance_per_month?: number
          maintenance_reserve_per_month?: number
          minimum_cash_reserve?: number
          other_fixed_per_month?: number
          payroll_burden_pct?: number
          permits_registration_per_month?: number
          repairs_per_month?: number
          tires_per_month?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_operating_cost_assumptions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_operating_cost_assumptions_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: true
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_owners: {
        Row: {
          business_id: string
          created_at: string
          created_by: string | null
          full_name: string
          funding_profile_id: string
          has_cdl: boolean | null
          id: string
          notes: string | null
          ownership_percent: number | null
          role: string | null
          transportation_experience_years: number | null
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by?: string | null
          full_name: string
          funding_profile_id: string
          has_cdl?: boolean | null
          id?: string
          notes?: string | null
          ownership_percent?: number | null
          role?: string | null
          transportation_experience_years?: number | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string | null
          full_name?: string
          funding_profile_id?: string
          has_cdl?: boolean | null
          id?: string
          notes?: string | null
          ownership_percent?: number | null
          role?: string | null
          transportation_experience_years?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_owners_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_owners_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_package_documents: {
        Row: {
          business_id: string
          category: string
          created_at: string
          document_id: string
          document_type: string
          id: string
          package_id: string
          status_at_compile_time: string
        }
        Insert: {
          business_id: string
          category: string
          created_at?: string
          document_id: string
          document_type: string
          id?: string
          package_id: string
          status_at_compile_time: string
        }
        Update: {
          business_id?: string
          category?: string
          created_at?: string
          document_id?: string
          document_type?: string
          id?: string
          package_id?: string
          status_at_compile_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_package_documents_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_package_documents_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "funding_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_package_documents_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "funding_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_packages: {
        Row: {
          business_id: string
          business_plan_id: string
          created_at: string
          created_by: string | null
          equipment_request_id: string
          funding_profile_id: string
          id: string
          snapshot: Json
          status: string
        }
        Insert: {
          business_id: string
          business_plan_id: string
          created_at?: string
          created_by?: string | null
          equipment_request_id: string
          funding_profile_id: string
          id?: string
          snapshot: Json
          status?: string
        }
        Update: {
          business_id?: string
          business_plan_id?: string
          created_at?: string
          created_by?: string | null
          equipment_request_id?: string
          funding_profile_id?: string
          id?: string
          snapshot?: Json
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_packages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_packages_business_plan_id_fkey"
            columns: ["business_plan_id"]
            isOneToOne: false
            referencedRelation: "funding_business_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_packages_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_packages_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_partner_programs: {
        Row: {
          active_from: string | null
          active_to: string | null
          advertising_restrictions: string | null
          affiliate_enabled: boolean
          allowed_states: string[] | null
          compliance_reviewed_at: string | null
          compliance_reviewed_by: string | null
          cookie_window_days: number | null
          created_at: string
          dashboard_url: string | null
          disclosure_template: string
          estimated_payout: number | null
          id: string
          last_verified_at: string | null
          linked_affiliate_program_id: string | null
          network_name: string | null
          paid_search_restrictions: string | null
          partner_name: string
          partner_type: string | null
          payout_currency: string
          payout_trigger: string | null
          payout_type: string | null
          payout_window_days: number | null
          program_name: string
          program_url: string | null
          requires_compliance_review: boolean
          requires_license: boolean
          restricted_states: string[]
          status: string
          terms_url: string | null
          trademark_restrictions: string | null
          updated_at: string
        }
        Insert: {
          active_from?: string | null
          active_to?: string | null
          advertising_restrictions?: string | null
          affiliate_enabled?: boolean
          allowed_states?: string[] | null
          compliance_reviewed_at?: string | null
          compliance_reviewed_by?: string | null
          cookie_window_days?: number | null
          created_at?: string
          dashboard_url?: string | null
          disclosure_template?: string
          estimated_payout?: number | null
          id?: string
          last_verified_at?: string | null
          linked_affiliate_program_id?: string | null
          network_name?: string | null
          paid_search_restrictions?: string | null
          partner_name: string
          partner_type?: string | null
          payout_currency?: string
          payout_trigger?: string | null
          payout_type?: string | null
          payout_window_days?: number | null
          program_name: string
          program_url?: string | null
          requires_compliance_review?: boolean
          requires_license?: boolean
          restricted_states?: string[]
          status?: string
          terms_url?: string | null
          trademark_restrictions?: string | null
          updated_at?: string
        }
        Update: {
          active_from?: string | null
          active_to?: string | null
          advertising_restrictions?: string | null
          affiliate_enabled?: boolean
          allowed_states?: string[] | null
          compliance_reviewed_at?: string | null
          compliance_reviewed_by?: string | null
          cookie_window_days?: number | null
          created_at?: string
          dashboard_url?: string | null
          disclosure_template?: string
          estimated_payout?: number | null
          id?: string
          last_verified_at?: string | null
          linked_affiliate_program_id?: string | null
          network_name?: string | null
          paid_search_restrictions?: string | null
          partner_name?: string
          partner_type?: string | null
          payout_currency?: string
          payout_trigger?: string | null
          payout_type?: string | null
          payout_window_days?: number | null
          program_name?: string
          program_url?: string | null
          requires_compliance_review?: boolean
          requires_license?: boolean
          restricted_states?: string[]
          status?: string
          terms_url?: string | null
          trademark_restrictions?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_partner_programs_linked_affiliate_program_id_fkey"
            columns: ["linked_affiliate_program_id"]
            isOneToOne: false
            referencedRelation: "affiliate_programs"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_product_bureau_rules: {
        Row: {
          active: boolean
          bureau: string
          confidence_level: string
          created_at: string
          id: string
          notes: string | null
          product_id: string
          rule_type: string
          source_url: string | null
          state_scope: string | null
          updated_at: string
          verified_at: string | null
        }
        Insert: {
          active?: boolean
          bureau: string
          confidence_level: string
          created_at?: string
          id?: string
          notes?: string | null
          product_id: string
          rule_type: string
          source_url?: string | null
          state_scope?: string | null
          updated_at?: string
          verified_at?: string | null
        }
        Update: {
          active?: boolean
          bureau?: string
          confidence_level?: string
          created_at?: string
          id?: string
          notes?: string | null
          product_id?: string
          rule_type?: string
          source_url?: string | null
          state_scope?: string | null
          updated_at?: string
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_product_bureau_rules_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "funding_products"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_product_partner_links: {
        Row: {
          active: boolean
          affiliate_url: string | null
          created_at: string
          id: string
          last_verified_at: string | null
          partner_program_id: string
          priority: number
          product_id: string
          subid_template: string | null
          tracking_code: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          affiliate_url?: string | null
          created_at?: string
          id?: string
          last_verified_at?: string | null
          partner_program_id: string
          priority?: number
          product_id: string
          subid_template?: string | null
          tracking_code?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          affiliate_url?: string | null
          created_at?: string
          id?: string
          last_verified_at?: string | null
          partner_program_id?: string
          priority?: number
          product_id?: string
          subid_template?: string | null
          tracking_code?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_product_partner_links_partner_program_id_fkey"
            columns: ["partner_program_id"]
            isOneToOne: false
            referencedRelation: "funding_partner_programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_product_partner_links_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "funding_products"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_product_rules: {
        Row: {
          active: boolean
          blocking: boolean
          comparator: string | null
          compare_value: Json | null
          created_at: string
          explanation: string | null
          id: string
          product_id: string
          rule_key: string
          rule_label: string
          rule_type: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          blocking?: boolean
          comparator?: string | null
          compare_value?: Json | null
          created_at?: string
          explanation?: string | null
          id?: string
          product_id: string
          rule_key: string
          rule_label: string
          rule_type: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          blocking?: boolean
          comparator?: string | null
          compare_value?: Json | null
          created_at?: string
          explanation?: string | null
          id?: string
          product_id?: string
          rule_key?: string
          rule_label?: string
          rule_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_product_rules_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "funding_products"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_product_terms: {
        Row: {
          active: boolean
          annual_fee: number | null
          balance_transfer_fee_pct: number | null
          created_at: string
          effective_from: string | null
          effective_to: string | null
          freshness_override: string | null
          id: string
          intro_apr_months: number | null
          intro_apr_pct: number | null
          last_verified_at: string | null
          origination_fee_pct: number | null
          other_fees: Json
          post_intro_apr_pct: number | null
          product_id: string
          promo_terms: string | null
          updated_at: string
          verification_source_url: string | null
          version: number
        }
        Insert: {
          active?: boolean
          annual_fee?: number | null
          balance_transfer_fee_pct?: number | null
          created_at?: string
          effective_from?: string | null
          effective_to?: string | null
          freshness_override?: string | null
          id?: string
          intro_apr_months?: number | null
          intro_apr_pct?: number | null
          last_verified_at?: string | null
          origination_fee_pct?: number | null
          other_fees?: Json
          post_intro_apr_pct?: number | null
          product_id: string
          promo_terms?: string | null
          updated_at?: string
          verification_source_url?: string | null
          version?: number
        }
        Update: {
          active?: boolean
          annual_fee?: number | null
          balance_transfer_fee_pct?: number | null
          created_at?: string
          effective_from?: string | null
          effective_to?: string | null
          freshness_override?: string | null
          id?: string
          intro_apr_months?: number | null
          intro_apr_pct?: number | null
          last_verified_at?: string | null
          origination_fee_pct?: number | null
          other_fees?: Json
          post_intro_apr_pct?: number | null
          product_id?: string
          promo_terms?: string | null
          updated_at?: string
          verification_source_url?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "funding_product_terms_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "funding_products"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_products: {
        Row: {
          active: boolean
          bank_relationship_required: boolean
          bank_statement_requirement_months: number | null
          business_only: boolean
          collateral_required: boolean
          created_at: string
          description: string | null
          estimated_limit_max: number | null
          estimated_limit_min: number | null
          hard_pull_expected: boolean
          id: string
          known_bureau: string | null
          last_verified_at: string | null
          lender_id: string
          maximum_amount: number | null
          membership_required: boolean
          minimum_amount: number | null
          minimum_annual_revenue: number | null
          minimum_business_age_months: number | null
          minimum_fico: number | null
          minimum_monthly_revenue: number | null
          name: string
          personal_guarantee_required: boolean | null
          personal_guarantee_type: string | null
          preferred_fico: number | null
          product_type: string
          revenue_verification_required: boolean
          slug: string
          soft_pull_prequal_available: boolean
          updated_at: string
          verification_source_url: string | null
        }
        Insert: {
          active?: boolean
          bank_relationship_required?: boolean
          bank_statement_requirement_months?: number | null
          business_only?: boolean
          collateral_required?: boolean
          created_at?: string
          description?: string | null
          estimated_limit_max?: number | null
          estimated_limit_min?: number | null
          hard_pull_expected?: boolean
          id?: string
          known_bureau?: string | null
          last_verified_at?: string | null
          lender_id: string
          maximum_amount?: number | null
          membership_required?: boolean
          minimum_amount?: number | null
          minimum_annual_revenue?: number | null
          minimum_business_age_months?: number | null
          minimum_fico?: number | null
          minimum_monthly_revenue?: number | null
          name: string
          personal_guarantee_required?: boolean | null
          personal_guarantee_type?: string | null
          preferred_fico?: number | null
          product_type: string
          revenue_verification_required?: boolean
          slug: string
          soft_pull_prequal_available?: boolean
          updated_at?: string
          verification_source_url?: string | null
        }
        Update: {
          active?: boolean
          bank_relationship_required?: boolean
          bank_statement_requirement_months?: number | null
          business_only?: boolean
          collateral_required?: boolean
          created_at?: string
          description?: string | null
          estimated_limit_max?: number | null
          estimated_limit_min?: number | null
          hard_pull_expected?: boolean
          id?: string
          known_bureau?: string | null
          last_verified_at?: string | null
          lender_id?: string
          maximum_amount?: number | null
          membership_required?: boolean
          minimum_amount?: number | null
          minimum_annual_revenue?: number | null
          minimum_business_age_months?: number | null
          minimum_fico?: number | null
          minimum_monthly_revenue?: number | null
          name?: string
          personal_guarantee_required?: boolean | null
          personal_guarantee_type?: string | null
          preferred_fico?: number | null
          product_type?: string
          revenue_verification_required?: boolean
          slug?: string
          soft_pull_prequal_available?: boolean
          updated_at?: string
          verification_source_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_products_lender_id_fkey"
            columns: ["lender_id"]
            isOneToOne: false
            referencedRelation: "funding_lenders"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_profiles: {
        Row: {
          business_id: string
          created_at: string
          created_by: string | null
          desired_timeline: string | null
          funding_goal_type: string | null
          funding_purpose: string | null
          id: string
          notes: string | null
          onboarding_completed_at: string | null
          status: string
          target_amount: number | null
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by?: string | null
          desired_timeline?: string | null
          funding_goal_type?: string | null
          funding_purpose?: string | null
          id?: string
          notes?: string | null
          onboarding_completed_at?: string | null
          status?: string
          target_amount?: number | null
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string | null
          desired_timeline?: string | null
          funding_goal_type?: string | null
          funding_purpose?: string | null
          id?: string
          notes?: string | null
          onboarding_completed_at?: string | null
          status?: string
          target_amount?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_profiles_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_providers: {
        Row: {
          active: boolean
          category: string
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          category: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      funding_readiness_rules: {
        Row: {
          active: boolean
          category: string
          created_at: string
          id: string
          label: string
          required: boolean
          rule_key: string
          sort_order: number
          updated_at: string
          weight: number
          why_it_matters: string | null
        }
        Insert: {
          active?: boolean
          category: string
          created_at?: string
          id?: string
          label: string
          required?: boolean
          rule_key: string
          sort_order?: number
          updated_at?: string
          weight?: number
          why_it_matters?: string | null
        }
        Update: {
          active?: boolean
          category?: string
          created_at?: string
          id?: string
          label?: string
          required?: boolean
          rule_key?: string
          sort_order?: number
          updated_at?: string
          weight?: number
          why_it_matters?: string | null
        }
        Relationships: []
      }
      funding_readiness_scores: {
        Row: {
          bankability_score: number | null
          business_id: string
          calculated_at: string
          created_at: string
          entity_formed: boolean
          funding_readiness_score: number | null
          has_bank_account: boolean
          has_business_address: boolean
          has_business_credit: boolean
          has_business_phone: boolean
          has_domain_email: boolean
          has_ein: boolean
          has_revenue: boolean
          has_website: boolean
          id: string
          updated_at: string
        }
        Insert: {
          bankability_score?: number | null
          business_id: string
          calculated_at?: string
          created_at?: string
          entity_formed?: boolean
          funding_readiness_score?: number | null
          has_bank_account?: boolean
          has_business_address?: boolean
          has_business_credit?: boolean
          has_business_phone?: boolean
          has_domain_email?: boolean
          has_ein?: boolean
          has_revenue?: boolean
          has_website?: boolean
          id?: string
          updated_at?: string
        }
        Update: {
          bankability_score?: number | null
          business_id?: string
          calculated_at?: string
          created_at?: string
          entity_formed?: boolean
          funding_readiness_score?: number | null
          has_bank_account?: boolean
          has_business_address?: boolean
          has_business_credit?: boolean
          has_business_phone?: boolean
          has_domain_email?: boolean
          has_ein?: boolean
          has_revenue?: boolean
          has_website?: boolean
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_readiness_scores_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_readiness_snapshots: {
        Row: {
          business_id: string
          category_scores: Json
          computed_at: string
          id: string
          next_best_action: Json | null
          overall_score: number
          rule_results: Json
          status: string
        }
        Insert: {
          business_id: string
          category_scores: Json
          computed_at?: string
          id?: string
          next_best_action?: Json | null
          overall_score: number
          rule_results: Json
          status: string
        }
        Update: {
          business_id?: string
          category_scores?: Json
          computed_at?: string
          id?: string
          next_best_action?: Json | null
          overall_score?: number
          rule_results?: Json
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_readiness_snapshots_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_red_flags: {
        Row: {
          business_id: string
          corrective_action: string | null
          created_at: string
          documentation_needed: string | null
          equipment_request_id: string | null
          flag_key: string
          funding_profile_id: string
          id: string
          problem: string
          status: string
          updated_at: string
          why_it_matters: string | null
        }
        Insert: {
          business_id: string
          corrective_action?: string | null
          created_at?: string
          documentation_needed?: string | null
          equipment_request_id?: string | null
          flag_key: string
          funding_profile_id: string
          id?: string
          problem: string
          status?: string
          updated_at?: string
          why_it_matters?: string | null
        }
        Update: {
          business_id?: string
          corrective_action?: string | null
          created_at?: string
          documentation_needed?: string | null
          equipment_request_id?: string | null
          flag_key?: string
          funding_profile_id?: string
          id?: string
          problem?: string
          status?: string
          updated_at?: string
          why_it_matters?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_red_flags_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_red_flags_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_red_flags_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_revenue_evidence: {
        Row: {
          amount: number | null
          business_id: string
          created_at: string
          created_by: string | null
          customer_opportunity_id: string | null
          description: string | null
          document_reference: string | null
          equipment_request_id: string | null
          evidence_date: string | null
          evidence_type: string
          funding_profile_id: string
          id: string
          updated_at: string
        }
        Insert: {
          amount?: number | null
          business_id: string
          created_at?: string
          created_by?: string | null
          customer_opportunity_id?: string | null
          description?: string | null
          document_reference?: string | null
          equipment_request_id?: string | null
          evidence_date?: string | null
          evidence_type: string
          funding_profile_id: string
          id?: string
          updated_at?: string
        }
        Update: {
          amount?: number | null
          business_id?: string
          created_at?: string
          created_by?: string | null
          customer_opportunity_id?: string | null
          description?: string | null
          document_reference?: string | null
          equipment_request_id?: string | null
          evidence_date?: string | null
          evidence_type?: string
          funding_profile_id?: string
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_revenue_evidence_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_revenue_evidence_customer_opportunity_id_fkey"
            columns: ["customer_opportunity_id"]
            isOneToOne: false
            referencedRelation: "funding_customer_opportunities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_revenue_evidence_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_revenue_evidence_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_strategies: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          business_id: string
          change_reason: string | null
          equipment_request_id: string | null
          funding_profile_id: string
          generated_at: string
          id: string
          next_review_at: string | null
          notes: string | null
          primary_goal: string | null
          status: string
          strategy_version: number
          target_amount_estimate: number | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          business_id: string
          change_reason?: string | null
          equipment_request_id?: string | null
          funding_profile_id: string
          generated_at?: string
          id?: string
          next_review_at?: string | null
          notes?: string | null
          primary_goal?: string | null
          status?: string
          strategy_version: number
          target_amount_estimate?: number | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          business_id?: string
          change_reason?: string | null
          equipment_request_id?: string | null
          funding_profile_id?: string
          generated_at?: string
          id?: string
          next_review_at?: string | null
          notes?: string | null
          primary_goal?: string | null
          status?: string
          strategy_version?: number
          target_amount_estimate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "funding_strategies_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_strategies_equipment_request_id_fkey"
            columns: ["equipment_request_id"]
            isOneToOne: false
            referencedRelation: "funding_equipment_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_strategies_funding_profile_id_fkey"
            columns: ["funding_profile_id"]
            isOneToOne: false
            referencedRelation: "funding_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      funding_strategy_steps: {
        Row: {
          action_url: string | null
          affiliate_relationship: boolean
          business_id: string
          category: string
          created_at: string
          dependency_sequence: number | null
          description: string | null
          estimated_amount: number | null
          funding_provider: string | null
          id: string
          sequence: number
          status: string
          strategy_id: string
          target_date: string | null
          title: string
          updated_at: string
        }
        Insert: {
          action_url?: string | null
          affiliate_relationship?: boolean
          business_id: string
          category: string
          created_at?: string
          dependency_sequence?: number | null
          description?: string | null
          estimated_amount?: number | null
          funding_provider?: string | null
          id?: string
          sequence: number
          status?: string
          strategy_id: string
          target_date?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          action_url?: string | null
          affiliate_relationship?: boolean
          business_id?: string
          category?: string
          created_at?: string
          dependency_sequence?: number | null
          description?: string | null
          estimated_amount?: number | null
          funding_provider?: string | null
          id?: string
          sequence?: number
          status?: string
          strategy_id?: string
          target_date?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funding_strategy_steps_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funding_strategy_steps_strategy_id_fkey"
            columns: ["strategy_id"]
            isOneToOne: false
            referencedRelation: "funding_strategies"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_items: {
        Row: {
          caption: string | null
          created_at: string
          event_label: string | null
          id: string
          is_approved: boolean
          is_featured: boolean
          is_hidden: boolean
          media_type: Database["public"]["Enums"]["media_type"]
          memorial_id: string
          source: string
          thumbnail_url: string | null
          uploader_email: string | null
          uploader_name: string
          url: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          event_label?: string | null
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          is_hidden?: boolean
          media_type?: Database["public"]["Enums"]["media_type"]
          memorial_id: string
          source?: string
          thumbnail_url?: string | null
          uploader_email?: string | null
          uploader_name: string
          url: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          event_label?: string | null
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          is_hidden?: boolean
          media_type?: Database["public"]["Enums"]["media_type"]
          memorial_id?: string
          source?: string
          thumbnail_url?: string | null
          uploader_email?: string | null
          uploader_name?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_items_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      guestbook_entries: {
        Row: {
          author_email: string | null
          author_name: string
          created_at: string
          id: string
          is_approved: boolean
          keep_updated: boolean
          memorial_id: string
          message: string
          relationship: string | null
        }
        Insert: {
          author_email?: string | null
          author_name: string
          created_at?: string
          id?: string
          is_approved?: boolean
          keep_updated?: boolean
          memorial_id: string
          message: string
          relationship?: string | null
        }
        Update: {
          author_email?: string | null
          author_name?: string
          created_at?: string
          id?: string
          is_approved?: boolean
          keep_updated?: boolean
          memorial_id?: string
          message?: string
          relationship?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guestbook_entries_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      guided_flow_submissions: {
        Row: {
          already_enrolled: string | null
          completed_all_steps: boolean | null
          created_at: string
          credit_score_range: string | null
          has_address_banking: string | null
          has_entity: string | null
          has_funding_docs: string | null
          has_web_brand: string | null
          id: string
          lead_email: string | null
          lead_name: string | null
          lead_phone: string | null
          referrer: string | null
          result_headline: string | null
          routed_service: string
          session_id: string | null
        }
        Insert: {
          already_enrolled?: string | null
          completed_all_steps?: boolean | null
          created_at?: string
          credit_score_range?: string | null
          has_address_banking?: string | null
          has_entity?: string | null
          has_funding_docs?: string | null
          has_web_brand?: string | null
          id?: string
          lead_email?: string | null
          lead_name?: string | null
          lead_phone?: string | null
          referrer?: string | null
          result_headline?: string | null
          routed_service: string
          session_id?: string | null
        }
        Update: {
          already_enrolled?: string | null
          completed_all_steps?: boolean | null
          created_at?: string
          credit_score_range?: string | null
          has_address_banking?: string | null
          has_entity?: string | null
          has_funding_docs?: string | null
          has_web_brand?: string | null
          id?: string
          lead_email?: string | null
          lead_name?: string | null
          lead_phone?: string | null
          referrer?: string | null
          result_headline?: string | null
          routed_service?: string
          session_id?: string | null
        }
        Relationships: []
      }
      identity_audit: {
        Row: {
          actor_user_id: string | null
          created_at: string | null
          event_type: string
          id: string
          payload: Json | null
        }
        Insert: {
          actor_user_id?: string | null
          created_at?: string | null
          event_type: string
          id?: string
          payload?: Json | null
        }
        Update: {
          actor_user_id?: string | null
          created_at?: string | null
          event_type?: string
          id?: string
          payload?: Json | null
        }
        Relationships: []
      }
      identity_theft_accounts: {
        Row: {
          account_name: string
          account_number_masked: string | null
          account_type: string | null
          bureau: string | null
          created_at: string
          creditor_address: string | null
          creditor_city: string | null
          creditor_name: string | null
          creditor_state: string | null
          creditor_zip: string | null
          id: string
          is_collection: boolean
          is_fraudulent_account: boolean
          is_fraudulent_inquiry: boolean
          theft_case_id: string
          user_id: string
        }
        Insert: {
          account_name: string
          account_number_masked?: string | null
          account_type?: string | null
          bureau?: string | null
          created_at?: string
          creditor_address?: string | null
          creditor_city?: string | null
          creditor_name?: string | null
          creditor_state?: string | null
          creditor_zip?: string | null
          id?: string
          is_collection?: boolean
          is_fraudulent_account?: boolean
          is_fraudulent_inquiry?: boolean
          theft_case_id: string
          user_id: string
        }
        Update: {
          account_name?: string
          account_number_masked?: string | null
          account_type?: string | null
          bureau?: string | null
          created_at?: string
          creditor_address?: string | null
          creditor_city?: string | null
          creditor_name?: string | null
          creditor_state?: string | null
          creditor_zip?: string | null
          id?: string
          is_collection?: boolean
          is_fraudulent_account?: boolean
          is_fraudulent_inquiry?: boolean
          theft_case_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "identity_theft_accounts_theft_case_id_fkey"
            columns: ["theft_case_id"]
            isOneToOne: false
            referencedRelation: "identity_theft_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      identity_theft_cases: {
        Row: {
          consumer_attestation: boolean
          consumer_attested_at: string | null
          created_at: string
          ftc_report_number: string | null
          id: string
          notes: string | null
          police_report_number: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          consumer_attestation?: boolean
          consumer_attested_at?: string | null
          created_at?: string
          ftc_report_number?: string | null
          id?: string
          notes?: string | null
          police_report_number?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          consumer_attestation?: boolean
          consumer_attested_at?: string | null
          created_at?: string
          ftc_report_number?: string | null
          id?: string
          notes?: string | null
          police_report_number?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      identity_theft_documents: {
        Row: {
          document_type: string
          file_name: string | null
          file_url: string | null
          id: string
          storage_path: string | null
          theft_case_id: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          document_type: string
          file_name?: string | null
          file_url?: string | null
          id?: string
          storage_path?: string | null
          theft_case_id: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          document_type?: string
          file_name?: string | null
          file_url?: string | null
          id?: string
          storage_path?: string | null
          theft_case_id?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "identity_theft_documents_theft_case_id_fkey"
            columns: ["theft_case_id"]
            isOneToOne: false
            referencedRelation: "identity_theft_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      identity_theft_letters: {
        Row: {
          content: string
          created_at: string
          id: string
          letterstream_job_id: string | null
          letterstream_tracking: string | null
          mailed_at: string | null
          recipient_name: string | null
          recipient_type: string | null
          template_key: string
          theft_case_id: string
          user_id: string
          variables_json: Json | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mailed_at?: string | null
          recipient_name?: string | null
          recipient_type?: string | null
          template_key: string
          theft_case_id: string
          user_id: string
          variables_json?: Json | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          letterstream_job_id?: string | null
          letterstream_tracking?: string | null
          mailed_at?: string | null
          recipient_name?: string | null
          recipient_type?: string | null
          template_key?: string
          theft_case_id?: string
          user_id?: string
          variables_json?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "identity_theft_letters_theft_case_id_fkey"
            columns: ["theft_case_id"]
            isOneToOne: false
            referencedRelation: "identity_theft_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      identity_verifications: {
        Row: {
          bureau: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
          verification_method: string
          verification_sent_at: string
          verification_status: string
          verified_at: string | null
        }
        Insert: {
          bureau: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
          verification_method?: string
          verification_sent_at?: string
          verification_status?: string
          verified_at?: string | null
        }
        Update: {
          bureau?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
          verification_method?: string
          verification_sent_at?: string
          verification_status?: string
          verified_at?: string | null
        }
        Relationships: []
      }
      intakes: {
        Row: {
          bottleneck: string
          breaks_first: string
          business_name: string
          completion_flag: boolean
          created_at: string
          delivery: string
          email: string
          goals_30_60: string
          id: string
          industry: string
          lead_channels: string | null
          lead_source: string | null
          name: string
          offer_tier: string
          packet_text: string
          packet_version: string
          pain_points: string
          role: string
          sales_process: string
          team_size: string
          tools: string | null
          tried_already: string
          website: string | null
          weekly_capacity: string
        }
        Insert: {
          bottleneck: string
          breaks_first: string
          business_name: string
          completion_flag?: boolean
          created_at?: string
          delivery: string
          email: string
          goals_30_60: string
          id?: string
          industry: string
          lead_channels?: string | null
          lead_source?: string | null
          name: string
          offer_tier: string
          packet_text: string
          packet_version?: string
          pain_points: string
          role: string
          sales_process: string
          team_size: string
          tools?: string | null
          tried_already: string
          website?: string | null
          weekly_capacity: string
        }
        Update: {
          bottleneck?: string
          breaks_first?: string
          business_name?: string
          completion_flag?: boolean
          created_at?: string
          delivery?: string
          email?: string
          goals_30_60?: string
          id?: string
          industry?: string
          lead_channels?: string | null
          lead_source?: string | null
          name?: string
          offer_tier?: string
          packet_text?: string
          packet_version?: string
          pain_points?: string
          role?: string
          sales_process?: string
          team_size?: string
          tools?: string | null
          tried_already?: string
          website?: string | null
          weekly_capacity?: string
        }
        Relationships: []
      }
      integration_registry: {
        Row: {
          auth_method: string | null
          created_at: string
          display_name: string
          endpoint: string | null
          health_status: string
          id: string
          integration_slug: string
          last_health_check: string | null
          status: string
          system_type: string
          updated_at: string
        }
        Insert: {
          auth_method?: string | null
          created_at?: string
          display_name: string
          endpoint?: string | null
          health_status?: string
          id?: string
          integration_slug: string
          last_health_check?: string | null
          status?: string
          system_type: string
          updated_at?: string
        }
        Update: {
          auth_method?: string | null
          created_at?: string
          display_name?: string
          endpoint?: string | null
          health_status?: string
          id?: string
          integration_slug?: string
          last_health_check?: string | null
          status?: string
          system_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          area: string | null
          budget: number | null
          created_at: string
          email: string | null
          follow_up_at: string | null
          id: string
          lead_type: string
          name: string
          notes: string | null
          phone: string | null
          stage: string
          timeline: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          area?: string | null
          budget?: number | null
          created_at?: string
          email?: string | null
          follow_up_at?: string | null
          id?: string
          lead_type?: string
          name: string
          notes?: string | null
          phone?: string | null
          stage?: string
          timeline?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          area?: string | null
          budget?: number | null
          created_at?: string
          email?: string | null
          follow_up_at?: string | null
          id?: string
          lead_type?: string
          name?: string
          notes?: string | null
          phone?: string | null
          stage?: string
          timeline?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      letter_generation_audit: {
        Row: {
          admin_id: string | null
          analyzer_session_id: string | null
          dispute_id: string
          generated_at: string
          id: string
          metadata: Json | null
        }
        Insert: {
          admin_id?: string | null
          analyzer_session_id?: string | null
          dispute_id: string
          generated_at?: string
          id?: string
          metadata?: Json | null
        }
        Update: {
          admin_id?: string | null
          analyzer_session_id?: string | null
          dispute_id?: string
          generated_at?: string
          id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      letter_qc_reviews: {
        Row: {
          account_label: string | null
          admin_notes: string | null
          admin_status: string
          bureau: string | null
          case_id: string | null
          change_reason: string | null
          claim_expires_at: string | null
          claimed_at: string | null
          claimed_by: string | null
          client_name: string | null
          client_reapproval_required: boolean
          client_reapproved_at: string | null
          created_at: string
          hard_failures: Json
          id: string
          letter_id: string | null
          letter_snapshot_hash: string | null
          mailing_tier: string | null
          material_change: boolean
          packet_id: string | null
          payment_event_id: string | null
          priority: string
          provider_job_id: string | null
          provider_tracking: string | null
          qc_findings: Json
          qc_score: number | null
          qc_status: string
          quota_exempt: boolean
          recipient_override: Json | null
          recipient_type: string
          release_status: string
          released_at: string | null
          released_by: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          round_number: number | null
          source_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_label?: string | null
          admin_notes?: string | null
          admin_status?: string
          bureau?: string | null
          case_id?: string | null
          change_reason?: string | null
          claim_expires_at?: string | null
          claimed_at?: string | null
          claimed_by?: string | null
          client_name?: string | null
          client_reapproval_required?: boolean
          client_reapproved_at?: string | null
          created_at?: string
          hard_failures?: Json
          id?: string
          letter_id?: string | null
          letter_snapshot_hash?: string | null
          mailing_tier?: string | null
          material_change?: boolean
          packet_id?: string | null
          payment_event_id?: string | null
          priority?: string
          provider_job_id?: string | null
          provider_tracking?: string | null
          qc_findings?: Json
          qc_score?: number | null
          qc_status?: string
          quota_exempt?: boolean
          recipient_override?: Json | null
          recipient_type?: string
          release_status?: string
          released_at?: string | null
          released_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          round_number?: number | null
          source_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_label?: string | null
          admin_notes?: string | null
          admin_status?: string
          bureau?: string | null
          case_id?: string | null
          change_reason?: string | null
          claim_expires_at?: string | null
          claimed_at?: string | null
          claimed_by?: string | null
          client_name?: string | null
          client_reapproval_required?: boolean
          client_reapproved_at?: string | null
          created_at?: string
          hard_failures?: Json
          id?: string
          letter_id?: string | null
          letter_snapshot_hash?: string | null
          mailing_tier?: string | null
          material_change?: boolean
          packet_id?: string | null
          payment_event_id?: string | null
          priority?: string
          provider_job_id?: string | null
          provider_tracking?: string | null
          qc_findings?: Json
          qc_score?: number | null
          qc_status?: string
          quota_exempt?: boolean
          recipient_override?: Json | null
          recipient_type?: string
          release_status?: string
          released_at?: string | null
          released_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          round_number?: number | null
          source_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "letter_qc_reviews_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "letter_qc_reviews_letter_id_fkey"
            columns: ["letter_id"]
            isOneToOne: false
            referencedRelation: "dispute_letters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "letter_qc_reviews_packet_id_fkey"
            columns: ["packet_id"]
            isOneToOne: false
            referencedRelation: "bureau_packets"
            referencedColumns: ["id"]
          },
        ]
      }
      letter_review_samples: {
        Row: {
          admin_id: string | null
          analyzer_context: Json | null
          created_at: string
          dispute_id: string
          id: string
          letter_data: Json | null
          letter_html: string | null
          letter_text: string | null
          status: string | null
        }
        Insert: {
          admin_id?: string | null
          analyzer_context?: Json | null
          created_at?: string
          dispute_id: string
          id?: string
          letter_data?: Json | null
          letter_html?: string | null
          letter_text?: string | null
          status?: string | null
        }
        Update: {
          admin_id?: string | null
          analyzer_context?: Json | null
          created_at?: string
          dispute_id?: string
          id?: string
          letter_data?: Json | null
          letter_html?: string | null
          letter_text?: string | null
          status?: string | null
        }
        Relationships: []
      }
      loads: {
        Row: {
          created_at: string | null
          dropoff: string | null
          id: string
          load_type: string | null
          miles: number | null
          order_number: string | null
          pickup: string | null
          recommendation: string | null
          score: number | null
        }
        Insert: {
          created_at?: string | null
          dropoff?: string | null
          id?: string
          load_type?: string | null
          miles?: number | null
          order_number?: string | null
          pickup?: string | null
          recommendation?: string | null
          score?: number | null
        }
        Update: {
          created_at?: string | null
          dropoff?: string | null
          id?: string
          load_type?: string | null
          miles?: number | null
          order_number?: string | null
          pickup?: string | null
          recommendation?: string | null
          score?: number | null
        }
        Relationships: []
      }
      mail_billing_ledger: {
        Row: {
          billing_eligibility_reason: string | null
          billing_mode: string
          billing_status: string
          bureau: string | null
          bureau_mailing_order_id: string
          charge_eligible_at: string | null
          charged_at: string | null
          cost_status: string
          created_at: string
          currency: string
          customer_price_cents: number
          delivered_at: string | null
          dispute_round: number | null
          gross_margin_percent: number | null
          gross_profit_cents: number | null
          id: string
          mail_type: string | null
          mailed_at: string | null
          page_count: number | null
          pricing_exception: boolean
          pricing_exception_reason: string | null
          pricing_rule_version: string | null
          provider: string
          provider_accepted_at: string | null
          provider_actual_cost_cents: number | null
          provider_estimated_cost_cents: number | null
          provider_order_id: string | null
          refund_amount_cents: number | null
          refunded_at: string | null
          service_definition_version: string | null
          source_id: string | null
          source_type: string | null
          stripe_charge_id: string | null
          stripe_customer_id: string | null
          stripe_payment_intent_id: string | null
          stripe_payment_method_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_eligibility_reason?: string | null
          billing_mode?: string
          billing_status?: string
          bureau?: string | null
          bureau_mailing_order_id: string
          charge_eligible_at?: string | null
          charged_at?: string | null
          cost_status?: string
          created_at?: string
          currency?: string
          customer_price_cents?: number
          delivered_at?: string | null
          dispute_round?: number | null
          gross_margin_percent?: number | null
          gross_profit_cents?: number | null
          id?: string
          mail_type?: string | null
          mailed_at?: string | null
          page_count?: number | null
          pricing_exception?: boolean
          pricing_exception_reason?: string | null
          pricing_rule_version?: string | null
          provider?: string
          provider_accepted_at?: string | null
          provider_actual_cost_cents?: number | null
          provider_estimated_cost_cents?: number | null
          provider_order_id?: string | null
          refund_amount_cents?: number | null
          refunded_at?: string | null
          service_definition_version?: string | null
          source_id?: string | null
          source_type?: string | null
          stripe_charge_id?: string | null
          stripe_customer_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_payment_method_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_eligibility_reason?: string | null
          billing_mode?: string
          billing_status?: string
          bureau?: string | null
          bureau_mailing_order_id?: string
          charge_eligible_at?: string | null
          charged_at?: string | null
          cost_status?: string
          created_at?: string
          currency?: string
          customer_price_cents?: number
          delivered_at?: string | null
          dispute_round?: number | null
          gross_margin_percent?: number | null
          gross_profit_cents?: number | null
          id?: string
          mail_type?: string | null
          mailed_at?: string | null
          page_count?: number | null
          pricing_exception?: boolean
          pricing_exception_reason?: string | null
          pricing_rule_version?: string | null
          provider?: string
          provider_accepted_at?: string | null
          provider_actual_cost_cents?: number | null
          provider_estimated_cost_cents?: number | null
          provider_order_id?: string | null
          refund_amount_cents?: number | null
          refunded_at?: string | null
          service_definition_version?: string | null
          source_id?: string | null
          source_type?: string | null
          stripe_charge_id?: string | null
          stripe_customer_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_payment_method_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mail_billing_ledger_bureau_mailing_order_id_fkey"
            columns: ["bureau_mailing_order_id"]
            isOneToOne: false
            referencedRelation: "bureau_mailing_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      mail_evidence: {
        Row: {
          bureau: string
          case_id: string
          classification: string
          classification_notes: string | null
          classified_by: string | null
          created_at: string
          days_from_dispute: number | null
          dispute_round_id: string | null
          document_urls: string[]
          envelope_image_url: string | null
          id: string
          manual_classification: boolean
          postmark_date: string | null
          raw_text: string | null
          received_at: string
          round_number: number
          triggers_violation: boolean
          user_id: string
          violation_type: string | null
        }
        Insert: {
          bureau: string
          case_id: string
          classification?: string
          classification_notes?: string | null
          classified_by?: string | null
          created_at?: string
          days_from_dispute?: number | null
          dispute_round_id?: string | null
          document_urls?: string[]
          envelope_image_url?: string | null
          id?: string
          manual_classification?: boolean
          postmark_date?: string | null
          raw_text?: string | null
          received_at?: string
          round_number?: number
          triggers_violation?: boolean
          user_id: string
          violation_type?: string | null
        }
        Update: {
          bureau?: string
          case_id?: string
          classification?: string
          classification_notes?: string | null
          classified_by?: string | null
          created_at?: string
          days_from_dispute?: number | null
          dispute_round_id?: string | null
          document_urls?: string[]
          envelope_image_url?: string | null
          id?: string
          manual_classification?: boolean
          postmark_date?: string | null
          raw_text?: string | null
          received_at?: string
          round_number?: number
          triggers_violation?: boolean
          user_id?: string
          violation_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mail_evidence_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mail_evidence_dispute_round_id_fkey"
            columns: ["dispute_round_id"]
            isOneToOne: false
            referencedRelation: "dispute_rounds"
            referencedColumns: ["id"]
          },
        ]
      }
      mail_jobs: {
        Row: {
          case_id: string
          cost_cents: number | null
          created_at: string
          delivery_method: string
          id: string
          letter_id: string
          metadata: Json | null
          payment_status: string | null
          price_cents: number | null
          provider: string
          status: string
          tracking_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          case_id: string
          cost_cents?: number | null
          created_at?: string
          delivery_method: string
          id?: string
          letter_id: string
          metadata?: Json | null
          payment_status?: string | null
          price_cents?: number | null
          provider?: string
          status?: string
          tracking_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          case_id?: string
          cost_cents?: number | null
          created_at?: string
          delivery_method?: string
          id?: string
          letter_id?: string
          metadata?: Json | null
          payment_status?: string | null
          price_cents?: number | null
          provider?: string
          status?: string
          tracking_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mail_jobs_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mail_jobs_letter_id_fkey"
            columns: ["letter_id"]
            isOneToOne: false
            referencedRelation: "dispute_letters"
            referencedColumns: ["id"]
          },
        ]
      }
      manual_reports: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          report_json: Json
          source: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          report_json: Json
          source?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          report_json?: Json
          source?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mc_agent_runs: {
        Row: {
          completed_at: string | null
          error_msg: string | null
          id: string
          profile_id: string
          reports_created: number | null
          risks_flagged: number | null
          started_at: string
          status: string
          tokens_used: number | null
        }
        Insert: {
          completed_at?: string | null
          error_msg?: string | null
          id?: string
          profile_id: string
          reports_created?: number | null
          risks_flagged?: number | null
          started_at?: string
          status?: string
          tokens_used?: number | null
        }
        Update: {
          completed_at?: string | null
          error_msg?: string | null
          id?: string
          profile_id?: string
          reports_created?: number | null
          risks_flagged?: number | null
          started_at?: string
          status?: string
          tokens_used?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mc_agent_runs_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mc_kpis: {
        Row: {
          created_at: string
          id: string
          metric_name: string
          metric_value: number | null
          notes: string | null
          period_end: string | null
          period_start: string | null
          product_slug: string
          profile_id: string
          recorded_at: string
          target_value: number | null
          trend: Database["public"]["Enums"]["mc_kpi_trend"] | null
          unit: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          metric_name: string
          metric_value?: number | null
          notes?: string | null
          period_end?: string | null
          period_start?: string | null
          product_slug: string
          profile_id: string
          recorded_at?: string
          target_value?: number | null
          trend?: Database["public"]["Enums"]["mc_kpi_trend"] | null
          unit?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          metric_name?: string
          metric_value?: number | null
          notes?: string | null
          period_end?: string | null
          period_start?: string | null
          product_slug?: string
          profile_id?: string
          recorded_at?: string
          target_value?: number | null
          trend?: Database["public"]["Enums"]["mc_kpi_trend"] | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mc_kpis_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mc_projects: {
        Row: {
          actual_launch: string | null
          budget_usd: number | null
          created_at: string
          description: string | null
          id: string
          name: string
          notes: string | null
          owner: string | null
          phase: string | null
          priority: Database["public"]["Enums"]["mc_priority_level"]
          product_slug: string | null
          profile_id: string
          slug: string
          spend_usd: number | null
          status: Database["public"]["Enums"]["mc_project_status"]
          tags: Json | null
          target_launch: string | null
          updated_at: string
        }
        Insert: {
          actual_launch?: string | null
          budget_usd?: number | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          notes?: string | null
          owner?: string | null
          phase?: string | null
          priority?: Database["public"]["Enums"]["mc_priority_level"]
          product_slug?: string | null
          profile_id: string
          slug: string
          spend_usd?: number | null
          status?: Database["public"]["Enums"]["mc_project_status"]
          tags?: Json | null
          target_launch?: string | null
          updated_at?: string
        }
        Update: {
          actual_launch?: string | null
          budget_usd?: number | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          notes?: string | null
          owner?: string | null
          phase?: string | null
          priority?: Database["public"]["Enums"]["mc_priority_level"]
          product_slug?: string | null
          profile_id?: string
          slug?: string
          spend_usd?: number | null
          status?: Database["public"]["Enums"]["mc_project_status"]
          tags?: Json | null
          target_launch?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mc_projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mc_reports: {
        Row: {
          ai_commentary: string | null
          created_at: string
          decisions_made: Json | null
          executive_summary: string | null
          generated_at: string
          highlights: Json | null
          id: string
          kpi_snapshot: Json | null
          next_actions: Json | null
          period_label: string | null
          profile_id: string
          report_type: Database["public"]["Enums"]["mc_report_type"]
          risks: Json | null
          title: string
        }
        Insert: {
          ai_commentary?: string | null
          created_at?: string
          decisions_made?: Json | null
          executive_summary?: string | null
          generated_at?: string
          highlights?: Json | null
          id?: string
          kpi_snapshot?: Json | null
          next_actions?: Json | null
          period_label?: string | null
          profile_id: string
          report_type?: Database["public"]["Enums"]["mc_report_type"]
          risks?: Json | null
          title: string
        }
        Update: {
          ai_commentary?: string | null
          created_at?: string
          decisions_made?: Json | null
          executive_summary?: string | null
          generated_at?: string
          highlights?: Json | null
          id?: string
          kpi_snapshot?: Json | null
          next_actions?: Json | null
          period_label?: string | null
          profile_id?: string
          report_type?: Database["public"]["Enums"]["mc_report_type"]
          risks?: Json | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "mc_reports_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mc_risks: {
        Row: {
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          impact: number | null
          mitigation: string | null
          owner: string | null
          probability: number | null
          product_slug: string | null
          profile_id: string
          risk_level: Database["public"]["Enums"]["mc_risk_level"]
          risk_score: number | null
          status: Database["public"]["Enums"]["mc_risk_status"]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          impact?: number | null
          mitigation?: string | null
          owner?: string | null
          probability?: number | null
          product_slug?: string | null
          profile_id: string
          risk_level?: Database["public"]["Enums"]["mc_risk_level"]
          risk_score?: number | null
          status?: Database["public"]["Enums"]["mc_risk_status"]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          impact?: number | null
          mitigation?: string | null
          owner?: string | null
          probability?: number | null
          product_slug?: string | null
          profile_id?: string
          risk_level?: Database["public"]["Enums"]["mc_risk_level"]
          risk_score?: number | null
          status?: Database["public"]["Enums"]["mc_risk_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mc_risks_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mc_roadmap: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          notes: string | null
          priority: Database["public"]["Enums"]["mc_priority_level"] | null
          product_slug: string | null
          profile_id: string
          quarter: string
          status: string
          title: string
          updated_at: string
          year: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          notes?: string | null
          priority?: Database["public"]["Enums"]["mc_priority_level"] | null
          product_slug?: string | null
          profile_id: string
          quarter: string
          status?: string
          title: string
          updated_at?: string
          year?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          notes?: string | null
          priority?: Database["public"]["Enums"]["mc_priority_level"] | null
          product_slug?: string | null
          profile_id?: string
          quarter?: string
          status?: string
          title?: string
          updated_at?: string
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mc_roadmap_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mc_snapshots: {
        Row: {
          active_products: number | null
          created_at: string
          critical_risks: number | null
          id: string
          open_risks: number | null
          portfolio_data: Json | null
          products_live: number | null
          profile_id: string
          snapshot_at: string
          total_arr: number | null
          total_mrr: number | null
        }
        Insert: {
          active_products?: number | null
          created_at?: string
          critical_risks?: number | null
          id?: string
          open_risks?: number | null
          portfolio_data?: Json | null
          products_live?: number | null
          profile_id: string
          snapshot_at?: string
          total_arr?: number | null
          total_mrr?: number | null
        }
        Update: {
          active_products?: number | null
          created_at?: string
          critical_risks?: number | null
          id?: string
          open_risks?: number | null
          portfolio_data?: Json | null
          products_live?: number | null
          profile_id?: string
          snapshot_at?: string
          total_arr?: number | null
          total_mrr?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mc_snapshots_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_activity_log: {
        Row: {
          action: string
          actor: string | null
          actor_id: string | null
          created_at: string | null
          details: Json | null
          entity_id: string
          entity_type: string
          id: string
        }
        Insert: {
          action: string
          actor?: string | null
          actor_id?: string | null
          created_at?: string | null
          details?: Json | null
          entity_id: string
          entity_type: string
          id?: string
        }
        Update: {
          action?: string
          actor?: string | null
          actor_id?: string | null
          created_at?: string | null
          details?: Json | null
          entity_id?: string
          entity_type?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_activity_log_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "media_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_admin_notes: {
        Row: {
          author_id: string | null
          created_at: string | null
          entity_id: string
          entity_type: string
          id: string
          note: string
        }
        Insert: {
          author_id?: string | null
          created_at?: string | null
          entity_id: string
          entity_type: string
          id?: string
          note: string
        }
        Update: {
          author_id?: string | null
          created_at?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          note?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_admin_notes_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "media_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_analytics_events: {
        Row: {
          created_at: string
          event_name: string
          id: string
          lead_id: string | null
          properties: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_name: string
          id?: string
          lead_id?: string | null
          properties?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_name?: string
          id?: string
          lead_id?: string | null
          properties?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_analytics_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      media_brand_intakes: {
        Row: {
          business_description: string | null
          business_name: string | null
          color_preferences: string | null
          competitors: string | null
          created_at: string | null
          customer_id: string
          existing_assets_notes: string | null
          id: string
          industry: string | null
          inspiration_references: string | null
          order_id: string | null
          raw_responses: Json | null
          target_customer: string | null
          tone_preference: string | null
        }
        Insert: {
          business_description?: string | null
          business_name?: string | null
          color_preferences?: string | null
          competitors?: string | null
          created_at?: string | null
          customer_id: string
          existing_assets_notes?: string | null
          id?: string
          industry?: string | null
          inspiration_references?: string | null
          order_id?: string | null
          raw_responses?: Json | null
          target_customer?: string | null
          tone_preference?: string | null
        }
        Update: {
          business_description?: string | null
          business_name?: string | null
          color_preferences?: string | null
          competitors?: string | null
          created_at?: string | null
          customer_id?: string
          existing_assets_notes?: string | null
          id?: string
          industry?: string | null
          inspiration_references?: string | null
          order_id?: string | null
          raw_responses?: Json | null
          target_customer?: string | null
          tone_preference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_brand_intakes_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_brand_intakes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      media_clients: {
        Row: {
          billing_status: string
          company_name: string | null
          created_at: string
          email: string
          full_name: string
          has_listing_access: boolean
          id: string
          lead_id: string | null
          notes: string | null
          phone: string | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          billing_status?: string
          company_name?: string | null
          created_at?: string
          email: string
          full_name: string
          has_listing_access?: boolean
          id?: string
          lead_id?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          billing_status?: string
          company_name?: string | null
          created_at?: string
          email?: string
          full_name?: string
          has_listing_access?: boolean
          id?: string
          lead_id?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_clients_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      media_consultations: {
        Row: {
          booked_at: string | null
          calendly_event_id: string | null
          company_name: string | null
          converted_lead_id: string | null
          created_at: string | null
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          service_interest: string | null
          status: string | null
        }
        Insert: {
          booked_at?: string | null
          calendly_event_id?: string | null
          company_name?: string | null
          converted_lead_id?: string | null
          created_at?: string | null
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          service_interest?: string | null
          status?: string | null
        }
        Update: {
          booked_at?: string | null
          calendly_event_id?: string | null
          company_name?: string | null
          converted_lead_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          service_interest?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_consultations_converted_lead_id_fkey"
            columns: ["converted_lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      media_content_requests: {
        Row: {
          admin_notes: string | null
          client_id: string | null
          created_at: string
          deadline: string | null
          description: string | null
          file_urls: string[] | null
          id: string
          notes: string | null
          service_type: string | null
          status: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          client_id?: string | null
          created_at?: string
          deadline?: string | null
          description?: string | null
          file_urls?: string[] | null
          id?: string
          notes?: string | null
          service_type?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          client_id?: string | null
          created_at?: string
          deadline?: string | null
          description?: string | null
          file_urls?: string[] | null
          id?: string
          notes?: string | null
          service_type?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_content_requests_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      media_customers: {
        Row: {
          auth_user_id: string | null
          company_name: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          internal_notes: string | null
          phone: string | null
          source_lead_id: string | null
          stripe_customer_id: string | null
          updated_at: string | null
        }
        Insert: {
          auth_user_id?: string | null
          company_name?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          internal_notes?: string | null
          phone?: string | null
          source_lead_id?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
        }
        Update: {
          auth_user_id?: string | null
          company_name?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          internal_notes?: string | null
          phone?: string | null
          source_lead_id?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_customers_source_lead_id_fkey"
            columns: ["source_lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      media_domain_requests: {
        Row: {
          acquisition_cost: number | null
          admin_notes: string | null
          created_at: string | null
          credential_reference: string | null
          credentials_delivered: boolean | null
          customer_id: string
          dns_configured: boolean | null
          email_configured: boolean | null
          expiry_date: string | null
          id: string
          order_id: string | null
          preferred_domains: string[]
          registrar: string | null
          registrar_order_id: string | null
          selected_domain: string | null
          status: string | null
          transfer_date: string | null
          updated_at: string | null
        }
        Insert: {
          acquisition_cost?: number | null
          admin_notes?: string | null
          created_at?: string | null
          credential_reference?: string | null
          credentials_delivered?: boolean | null
          customer_id: string
          dns_configured?: boolean | null
          email_configured?: boolean | null
          expiry_date?: string | null
          id?: string
          order_id?: string | null
          preferred_domains: string[]
          registrar?: string | null
          registrar_order_id?: string | null
          selected_domain?: string | null
          status?: string | null
          transfer_date?: string | null
          updated_at?: string | null
        }
        Update: {
          acquisition_cost?: number | null
          admin_notes?: string | null
          created_at?: string | null
          credential_reference?: string | null
          credentials_delivered?: boolean | null
          customer_id?: string
          dns_configured?: boolean | null
          email_configured?: boolean | null
          expiry_date?: string | null
          id?: string
          order_id?: string | null
          preferred_domains?: string[]
          registrar?: string | null
          registrar_order_id?: string | null
          selected_domain?: string | null
          status?: string | null
          transfer_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_domain_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_domain_requests_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      media_ecosystem_referrals: {
        Row: {
          created_at: string
          ecosystem_product: string
          id: string
          lead_id: string | null
          reason: string | null
          source_feature: string | null
          status: string
          wizard_submission_id: string | null
        }
        Insert: {
          created_at?: string
          ecosystem_product: string
          id?: string
          lead_id?: string | null
          reason?: string | null
          source_feature?: string | null
          status?: string
          wizard_submission_id?: string | null
        }
        Update: {
          created_at?: string
          ecosystem_product?: string
          id?: string
          lead_id?: string | null
          reason?: string | null
          source_feature?: string | null
          status?: string
          wizard_submission_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_ecosystem_referrals_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_ecosystem_referrals_wizard_submission_id_fkey"
            columns: ["wizard_submission_id"]
            isOneToOne: false
            referencedRelation: "media_growth_wizard_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      media_email_events: {
        Row: {
          created_at: string | null
          customer_id: string | null
          entity_id: string | null
          entity_type: string | null
          id: string
          lead_id: string | null
          resend_id: string | null
          status: string | null
          template: string
          to_email: string
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          lead_id?: string | null
          resend_id?: string | null
          status?: string | null
          template: string
          to_email: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          lead_id?: string | null
          resend_id?: string | null
          status?: string | null
          template?: string
          to_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_email_events_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_email_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      media_generated_marketing_assets: {
        Row: {
          created_at: string
          email_copy: string | null
          facebook_listing: string | null
          facebook_open_house: string | null
          flyer_copy: string | null
          generation_version: number
          hashtags: string | null
          id: string
          instagram_caption: string | null
          is_current: boolean
          listing_id: string
          model_used: string | null
          reel_script: string | null
          sms_copy: string | null
        }
        Insert: {
          created_at?: string
          email_copy?: string | null
          facebook_listing?: string | null
          facebook_open_house?: string | null
          flyer_copy?: string | null
          generation_version?: number
          hashtags?: string | null
          id?: string
          instagram_caption?: string | null
          is_current?: boolean
          listing_id: string
          model_used?: string | null
          reel_script?: string | null
          sms_copy?: string | null
        }
        Update: {
          created_at?: string
          email_copy?: string | null
          facebook_listing?: string | null
          facebook_open_house?: string | null
          flyer_copy?: string | null
          generation_version?: number
          hashtags?: string | null
          id?: string
          instagram_caption?: string | null
          is_current?: boolean
          listing_id?: string
          model_used?: string | null
          reel_script?: string | null
          sms_copy?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_generated_marketing_assets_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "media_property_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      media_growth_wizard_submissions: {
        Row: {
          annual_revenue_range: string | null
          business_name: string | null
          challenges: string[] | null
          collects_leads: boolean | null
          created_at: string
          email: string | null
          employee_count: string | null
          growth_goals: string[] | null
          has_social: boolean | null
          has_website: boolean | null
          id: string
          industry: string | null
          lead_id: string | null
          name: string | null
          phone: string | null
          raw_responses: Json | null
          recommendations: Json | null
          runs_ads: boolean | null
          source: string | null
          status: string
          years_in_business: string | null
        }
        Insert: {
          annual_revenue_range?: string | null
          business_name?: string | null
          challenges?: string[] | null
          collects_leads?: boolean | null
          created_at?: string
          email?: string | null
          employee_count?: string | null
          growth_goals?: string[] | null
          has_social?: boolean | null
          has_website?: boolean | null
          id?: string
          industry?: string | null
          lead_id?: string | null
          name?: string | null
          phone?: string | null
          raw_responses?: Json | null
          recommendations?: Json | null
          runs_ads?: boolean | null
          source?: string | null
          status?: string
          years_in_business?: string | null
        }
        Update: {
          annual_revenue_range?: string | null
          business_name?: string | null
          challenges?: string[] | null
          collects_leads?: boolean | null
          created_at?: string
          email?: string | null
          employee_count?: string | null
          growth_goals?: string[] | null
          has_social?: boolean | null
          has_website?: boolean | null
          id?: string
          industry?: string | null
          lead_id?: string | null
          name?: string | null
          phone?: string | null
          raw_responses?: Json | null
          recommendations?: Json | null
          runs_ads?: boolean | null
          source?: string | null
          status?: string
          years_in_business?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_growth_wizard_submissions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "media_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      media_leads: {
        Row: {
          assigned_to: string | null
          company_name: string | null
          converted_customer_id: string | null
          created_at: string | null
          email: string
          id: string
          lead_type: string | null
          message: string | null
          name: string
          phone: string | null
          service_interest: string | null
          source: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          company_name?: string | null
          converted_customer_id?: string | null
          created_at?: string | null
          email: string
          id?: string
          lead_type?: string | null
          message?: string | null
          name: string
          phone?: string | null
          service_interest?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          company_name?: string | null
          converted_customer_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          lead_type?: string | null
          message?: string | null
          name?: string
          phone?: string | null
          service_interest?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "media_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_leads_converted_customer_fk"
            columns: ["converted_customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
        ]
      }
      media_listing_photos: {
        Row: {
          category: string
          created_at: string
          id: string
          listing_id: string
          public_url: string
          sort_order: number
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          listing_id: string
          public_url: string
          sort_order?: number
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          listing_id?: string
          public_url?: string
          sort_order?: number
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_listing_photos_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "media_property_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      media_listing_revision_requests: {
        Row: {
          admin_response: string | null
          asset_type: string | null
          created_at: string
          id: string
          listing_id: string
          notes: string
          status: string
        }
        Insert: {
          admin_response?: string | null
          asset_type?: string | null
          created_at?: string
          id?: string
          listing_id: string
          notes: string
          status?: string
        }
        Update: {
          admin_response?: string | null
          asset_type?: string | null
          created_at?: string
          id?: string
          listing_id?: string
          notes?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_listing_revision_requests_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "media_property_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      media_logo_projects: {
        Row: {
          admin_notes: string | null
          approved_at: string | null
          assigned_to: string | null
          brand_intake_id: string | null
          concept_presented_at: string | null
          created_at: string | null
          customer_id: string
          delivered_at: string | null
          id: string
          order_id: string | null
          revisions_included: number | null
          revisions_used: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          approved_at?: string | null
          assigned_to?: string | null
          brand_intake_id?: string | null
          concept_presented_at?: string | null
          created_at?: string | null
          customer_id: string
          delivered_at?: string | null
          id?: string
          order_id?: string | null
          revisions_included?: number | null
          revisions_used?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          approved_at?: string | null
          assigned_to?: string | null
          brand_intake_id?: string | null
          concept_presented_at?: string | null
          created_at?: string | null
          customer_id?: string
          delivered_at?: string | null
          id?: string
          order_id?: string | null
          revisions_included?: number | null
          revisions_used?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_logo_projects_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "media_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_logo_projects_brand_intake_id_fkey"
            columns: ["brand_intake_id"]
            isOneToOne: false
            referencedRelation: "media_brand_intakes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_logo_projects_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_logo_projects_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      media_marketplace_orders: {
        Row: {
          amount_cents: number | null
          client_id: string | null
          commission_cents: number | null
          created_at: string
          id: string
          service_id: string | null
          status: string
          vendor_id: string | null
        }
        Insert: {
          amount_cents?: number | null
          client_id?: string | null
          commission_cents?: number | null
          created_at?: string
          id?: string
          service_id?: string | null
          status?: string
          vendor_id?: string | null
        }
        Update: {
          amount_cents?: number | null
          client_id?: string | null
          commission_cents?: number | null
          created_at?: string
          id?: string
          service_id?: string | null
          status?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_marketplace_orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_marketplace_orders_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "media_marketplace_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_marketplace_orders_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "media_marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      media_marketplace_services: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          is_featured: boolean
          price_cents: number | null
          price_display: string | null
          title: string
          vendor_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          is_featured?: boolean
          price_cents?: number | null
          price_display?: string | null
          title: string
          vendor_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          is_featured?: boolean
          price_cents?: number | null
          price_display?: string | null
          title?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_marketplace_services_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "media_marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      media_marketplace_vendors: {
        Row: {
          business_name: string
          category: string | null
          commission_pct: number | null
          created_at: string
          description: string | null
          email: string
          id: string
          status: string
          user_id: string | null
        }
        Insert: {
          business_name: string
          category?: string | null
          commission_pct?: number | null
          created_at?: string
          description?: string | null
          email: string
          id?: string
          status?: string
          user_id?: string | null
        }
        Update: {
          business_name?: string
          category?: string | null
          commission_pct?: number | null
          created_at?: string
          description?: string | null
          email?: string
          id?: string
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      media_orders: {
        Row: {
          amount: number
          balance_due: number | null
          client_id: string | null
          created_at: string | null
          currency: string | null
          customer_id: string
          deposit_paid: boolean | null
          fulfillment_status: string | null
          id: string
          metadata: Json | null
          package_id: string | null
          payment_status: string | null
          stripe_customer_id: string | null
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          balance_due?: number | null
          client_id?: string | null
          created_at?: string | null
          currency?: string | null
          customer_id: string
          deposit_paid?: boolean | null
          fulfillment_status?: string | null
          id?: string
          metadata?: Json | null
          package_id?: string | null
          payment_status?: string | null
          stripe_customer_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          balance_due?: number | null
          client_id?: string | null
          created_at?: string | null
          currency?: string | null
          customer_id?: string
          deposit_paid?: boolean | null
          fulfillment_status?: string | null
          id?: string
          metadata?: Json | null
          package_id?: string | null
          payment_status?: string | null
          stripe_customer_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_orders_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "media_service_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      media_portfolio_clients: {
        Row: {
          after_url: string | null
          before_url: string | null
          created_at: string
          id: string
          industry: string | null
          is_published: boolean
          name: string
          results: Json | null
          slug: string
          sort_order: number
          summary: string | null
        }
        Insert: {
          after_url?: string | null
          before_url?: string | null
          created_at?: string
          id?: string
          industry?: string | null
          is_published?: boolean
          name: string
          results?: Json | null
          slug: string
          sort_order?: number
          summary?: string | null
        }
        Update: {
          after_url?: string | null
          before_url?: string | null
          created_at?: string
          id?: string
          industry?: string | null
          is_published?: boolean
          name?: string
          results?: Json | null
          slug?: string
          sort_order?: number
          summary?: string | null
        }
        Relationships: []
      }
      media_profiles: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_admin: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_admin?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_admin?: boolean | null
        }
        Relationships: []
      }
      media_project_assets: {
        Row: {
          asset_type: string | null
          created_at: string | null
          customer_id: string
          file_name: string
          file_type: string | null
          id: string
          notes: string | null
          project_id: string
          project_type: string
          storage_path: string
          uploaded_by: string | null
          version: number | null
        }
        Insert: {
          asset_type?: string | null
          created_at?: string | null
          customer_id: string
          file_name: string
          file_type?: string | null
          id?: string
          notes?: string | null
          project_id: string
          project_type: string
          storage_path: string
          uploaded_by?: string | null
          version?: number | null
        }
        Update: {
          asset_type?: string | null
          created_at?: string | null
          customer_id?: string
          file_name?: string
          file_type?: string | null
          id?: string
          notes?: string | null
          project_id?: string
          project_type?: string
          storage_path?: string
          uploaded_by?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "media_project_assets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_project_assets_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "media_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_projects: {
        Row: {
          client_id: string | null
          created_at: string
          customer_id: string | null
          deadline: string | null
          delivered_at: string | null
          description: string | null
          id: string
          notes: string | null
          order_id: string | null
          project_type: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          customer_id?: string | null
          deadline?: string | null
          delivered_at?: string | null
          description?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          project_type: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          customer_id?: string | null
          deadline?: string | null
          delivered_at?: string | null
          description?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          project_type?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_projects_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_projects_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      media_property_listings: {
        Row: {
          admin_notes: string | null
          bathrooms: number | null
          bedrooms: number | null
          client_id: string
          created_at: string
          id: string
          import_confirmed_permission: boolean
          imported_from: string | null
          imported_raw_data: Json | null
          key_features: string[] | null
          listing_description: string | null
          listing_price: string
          lot_size: string | null
          mls_link: string | null
          neighborhood_highlights: string | null
          open_house_date: string | null
          open_house_time: string | null
          order_id: string | null
          preferred_cta: string | null
          preferred_tone: string | null
          property_address: string
          realtor_email: string | null
          realtor_name: string
          realtor_phone: string | null
          school_area_notes: string | null
          service_package_slug: string | null
          source_url: string | null
          special_instructions: string | null
          square_footage: number | null
          status: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          client_id: string
          created_at?: string
          id?: string
          import_confirmed_permission?: boolean
          imported_from?: string | null
          imported_raw_data?: Json | null
          key_features?: string[] | null
          listing_description?: string | null
          listing_price: string
          lot_size?: string | null
          mls_link?: string | null
          neighborhood_highlights?: string | null
          open_house_date?: string | null
          open_house_time?: string | null
          order_id?: string | null
          preferred_cta?: string | null
          preferred_tone?: string | null
          property_address: string
          realtor_email?: string | null
          realtor_name: string
          realtor_phone?: string | null
          school_area_notes?: string | null
          service_package_slug?: string | null
          source_url?: string | null
          special_instructions?: string | null
          square_footage?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          client_id?: string
          created_at?: string
          id?: string
          import_confirmed_permission?: boolean
          imported_from?: string | null
          imported_raw_data?: Json | null
          key_features?: string[] | null
          listing_description?: string | null
          listing_price?: string
          lot_size?: string | null
          mls_link?: string | null
          neighborhood_highlights?: string | null
          open_house_date?: string | null
          open_house_time?: string | null
          order_id?: string | null
          preferred_cta?: string | null
          preferred_tone?: string | null
          property_address?: string
          realtor_email?: string | null
          realtor_name?: string
          realtor_phone?: string | null
          school_area_notes?: string | null
          service_package_slug?: string | null
          source_url?: string | null
          special_instructions?: string | null
          square_footage?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_property_listings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_property_listings_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      media_revisions: {
        Row: {
          admin_response: string | null
          created_at: string | null
          customer_id: string | null
          feedback: string
          id: string
          project_id: string
          project_type: string
          resolved: boolean | null
          resolved_at: string | null
          round_number: number
          submitted_by: string | null
        }
        Insert: {
          admin_response?: string | null
          created_at?: string | null
          customer_id?: string | null
          feedback: string
          id?: string
          project_id: string
          project_type: string
          resolved?: boolean | null
          resolved_at?: string | null
          round_number: number
          submitted_by?: string | null
        }
        Update: {
          admin_response?: string | null
          created_at?: string | null
          customer_id?: string | null
          feedback?: string
          id?: string
          project_id?: string
          project_type?: string
          resolved?: boolean | null
          resolved_at?: string | null
          round_number?: number
          submitted_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_revisions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
        ]
      }
      media_service_packages: {
        Row: {
          balance_amount: number | null
          base_price: number
          deposit_amount: number | null
          description: string | null
          id: string
          is_active: boolean | null
          is_deposit: boolean | null
          is_recurring: boolean | null
          name: string
          order_type: string
          slug: string
          sort_order: number | null
          stripe_price_id: string | null
          stripe_product_id: string | null
        }
        Insert: {
          balance_amount?: number | null
          base_price: number
          deposit_amount?: number | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_deposit?: boolean | null
          is_recurring?: boolean | null
          name: string
          order_type: string
          slug: string
          sort_order?: number | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Update: {
          balance_amount?: number | null
          base_price?: number
          deposit_amount?: number | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_deposit?: boolean | null
          is_recurring?: boolean | null
          name?: string
          order_type?: string
          slug?: string
          sort_order?: number | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Relationships: []
      }
      media_testimonials: {
        Row: {
          author_name: string
          author_title: string | null
          client_id: string | null
          created_at: string
          id: string
          is_published: boolean
          quote: string
          rating: number | null
          sort_order: number
        }
        Insert: {
          author_name: string
          author_title?: string | null
          client_id?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          quote: string
          rating?: number | null
          sort_order?: number
        }
        Update: {
          author_name?: string
          author_title?: string | null
          client_id?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          quote?: string
          rating?: number | null
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "media_testimonials_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      media_uploaded_files: {
        Row: {
          client_id: string | null
          created_at: string
          file_name: string
          file_size: number | null
          id: string
          mime_type: string | null
          project_id: string | null
          request_id: string | null
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          file_name: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          project_id?: string | null
          request_id?: string | null
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          file_name?: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          project_id?: string | null
          request_id?: string | null
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_uploaded_files_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "media_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_uploaded_files_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "media_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_uploaded_files_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "media_content_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      media_website_projects: {
        Row: {
          admin_notes: string | null
          assigned_to: string | null
          created_at: string | null
          customer_id: string
          domain_request_id: string | null
          hosting_platform: string | null
          id: string
          kickoff_date: string | null
          launch_checklist_complete: boolean | null
          launched_at: string | null
          live_url: string | null
          logo_project_id: string | null
          order_id: string | null
          pages_count: number | null
          questionnaire_id: string | null
          revisions_included: number | null
          revisions_used: number | null
          status: string | null
          target_launch_date: string | null
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          assigned_to?: string | null
          created_at?: string | null
          customer_id: string
          domain_request_id?: string | null
          hosting_platform?: string | null
          id?: string
          kickoff_date?: string | null
          launch_checklist_complete?: boolean | null
          launched_at?: string | null
          live_url?: string | null
          logo_project_id?: string | null
          order_id?: string | null
          pages_count?: number | null
          questionnaire_id?: string | null
          revisions_included?: number | null
          revisions_used?: number | null
          status?: string | null
          target_launch_date?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          assigned_to?: string | null
          created_at?: string | null
          customer_id?: string
          domain_request_id?: string | null
          hosting_platform?: string | null
          id?: string
          kickoff_date?: string | null
          launch_checklist_complete?: boolean | null
          launched_at?: string | null
          live_url?: string | null
          logo_project_id?: string | null
          order_id?: string | null
          pages_count?: number | null
          questionnaire_id?: string | null
          revisions_included?: number | null
          revisions_used?: number | null
          status?: string | null
          target_launch_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_website_projects_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "media_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_website_projects_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_website_projects_domain_request_id_fkey"
            columns: ["domain_request_id"]
            isOneToOne: false
            referencedRelation: "media_domain_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_website_projects_logo_project_id_fkey"
            columns: ["logo_project_id"]
            isOneToOne: false
            referencedRelation: "media_logo_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_website_projects_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_website_projects_questionnaire_id_fkey"
            columns: ["questionnaire_id"]
            isOneToOne: false
            referencedRelation: "media_website_questionnaires"
            referencedColumns: ["id"]
          },
        ]
      }
      media_website_questionnaires: {
        Row: {
          competitor_sites: string | null
          content_provided: boolean | null
          created_at: string | null
          customer_id: string
          has_photography: boolean | null
          id: string
          inspiration_sites: string | null
          key_messages: Json | null
          order_id: string | null
          pages_needed: string[] | null
          raw_responses: Json | null
          special_features: string[] | null
          website_purpose: string | null
        }
        Insert: {
          competitor_sites?: string | null
          content_provided?: boolean | null
          created_at?: string | null
          customer_id: string
          has_photography?: boolean | null
          id?: string
          inspiration_sites?: string | null
          key_messages?: Json | null
          order_id?: string | null
          pages_needed?: string[] | null
          raw_responses?: Json | null
          special_features?: string[] | null
          website_purpose?: string | null
        }
        Update: {
          competitor_sites?: string | null
          content_provided?: boolean | null
          created_at?: string | null
          customer_id?: string
          has_photography?: boolean | null
          id?: string
          inspiration_sites?: string | null
          key_messages?: Json | null
          order_id?: string | null
          pages_needed?: string[] | null
          raw_responses?: Json | null
          special_features?: string[] | null
          website_purpose?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_website_questionnaires_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "media_customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_website_questionnaires_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "media_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      memorial_events: {
        Row: {
          created_at: string
          event_date: string
          event_time: string | null
          id: string
          latitude: number | null
          livestream_url: string | null
          location_address: string | null
          location_name: string | null
          longitude: number | null
          memorial_id: string
          notes: string | null
          rsvp_enabled: boolean
          title: string
        }
        Insert: {
          created_at?: string
          event_date: string
          event_time?: string | null
          id?: string
          latitude?: number | null
          livestream_url?: string | null
          location_address?: string | null
          location_name?: string | null
          longitude?: number | null
          memorial_id: string
          notes?: string | null
          rsvp_enabled?: boolean
          title: string
        }
        Update: {
          created_at?: string
          event_date?: string
          event_time?: string | null
          id?: string
          latitude?: number | null
          livestream_url?: string | null
          location_address?: string | null
          location_name?: string | null
          longitude?: number | null
          memorial_id?: string
          notes?: string | null
          rsvp_enabled?: boolean
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "memorial_events_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      memorial_guests: {
        Row: {
          address: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          email: string | null
          facebook_url: string | null
          id: string
          is_approved: boolean
          is_attending: boolean
          memorial_id: string
          name: string
          phone: string | null
          relationship: string
          relationship_cat: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string | null
          facebook_url?: string | null
          id?: string
          is_approved?: boolean
          is_attending?: boolean
          memorial_id: string
          name: string
          phone?: string | null
          relationship: string
          relationship_cat?: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string | null
          facebook_url?: string | null
          id?: string
          is_approved?: boolean
          is_attending?: boolean
          memorial_id?: string
          name?: string
          phone?: string | null
          relationship?: string
          relationship_cat?: string
        }
        Relationships: [
          {
            foreignKeyName: "memorial_guests_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      memorial_invites: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string | null
          expires_at: string
          id: string
          invited_by: string
          memorial_id: string
          phone: string | null
          role: Database["public"]["Enums"]["invite_role"]
          token: string
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email?: string | null
          expires_at?: string
          id?: string
          invited_by: string
          memorial_id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["invite_role"]
          token?: string
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string | null
          expires_at?: string
          id?: string
          invited_by?: string
          memorial_id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["invite_role"]
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "memorial_invites_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memorial_invites_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      memorial_photos: {
        Row: {
          caption: string | null
          category: string
          created_at: string
          display_order: number
          id: string
          is_approved: boolean
          is_featured: boolean
          memorial_id: string
          uploader_id: string | null
          uploader_name: string | null
          url: string
        }
        Insert: {
          caption?: string | null
          category?: string
          created_at?: string
          display_order?: number
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          memorial_id: string
          uploader_id?: string | null
          uploader_name?: string | null
          url: string
        }
        Update: {
          caption?: string | null
          category?: string
          created_at?: string
          display_order?: number
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          memorial_id?: string
          uploader_id?: string | null
          uploader_name?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "memorial_photos_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memorial_photos_uploader_id_fkey"
            columns: ["uploader_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      memorial_videos: {
        Row: {
          created_at: string
          id: string
          is_approved: boolean
          memorial_id: string
          title: string | null
          type: string
          uploader_id: string | null
          uploader_name: string | null
          url: string | null
          youtube_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_approved?: boolean
          memorial_id: string
          title?: string | null
          type?: string
          uploader_id?: string | null
          uploader_name?: string | null
          url?: string | null
          youtube_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_approved?: boolean
          memorial_id?: string
          title?: string | null
          type?: string
          uploader_id?: string | null
          uploader_name?: string | null
          url?: string | null
          youtube_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "memorial_videos_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memorial_videos_uploader_id_fkey"
            columns: ["uploader_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      memorials: {
        Row: {
          birth_date: string | null
          celebration_link_token: string
          comped_note: string | null
          created_at: string
          donation_cashapp: string | null
          donation_gofundme: string | null
          donation_paypal: string | null
          donation_stripe_link: string | null
          donation_venmo: string | null
          facebook_group_name: string | null
          facebook_group_url: string | null
          family_contact_email: string | null
          family_contact_name: string | null
          fb_access_token: string | null
          fb_group_id: string | null
          fb_page_id: string | null
          first_name: string
          hero_image_url: string | null
          id: string
          is_comped: boolean
          is_private: boolean
          is_published: boolean
          last_name: string
          life_story: string | null
          live_mode: boolean
          owner_id: string
          passing_date: string | null
          plan: Database["public"]["Enums"]["plan_type"]
          slug: string
          spotify_access_token: string | null
          spotify_playlist_id: string | null
          spotify_playlist_url: string | null
          spotify_refresh_token: string | null
          spotify_token_expires: string | null
          theme: Database["public"]["Enums"]["memorial_theme"]
          updated_at: string
        }
        Insert: {
          birth_date?: string | null
          celebration_link_token?: string
          comped_note?: string | null
          created_at?: string
          donation_cashapp?: string | null
          donation_gofundme?: string | null
          donation_paypal?: string | null
          donation_stripe_link?: string | null
          donation_venmo?: string | null
          facebook_group_name?: string | null
          facebook_group_url?: string | null
          family_contact_email?: string | null
          family_contact_name?: string | null
          fb_access_token?: string | null
          fb_group_id?: string | null
          fb_page_id?: string | null
          first_name: string
          hero_image_url?: string | null
          id?: string
          is_comped?: boolean
          is_private?: boolean
          is_published?: boolean
          last_name: string
          life_story?: string | null
          live_mode?: boolean
          owner_id: string
          passing_date?: string | null
          plan?: Database["public"]["Enums"]["plan_type"]
          slug: string
          spotify_access_token?: string | null
          spotify_playlist_id?: string | null
          spotify_playlist_url?: string | null
          spotify_refresh_token?: string | null
          spotify_token_expires?: string | null
          theme?: Database["public"]["Enums"]["memorial_theme"]
          updated_at?: string
        }
        Update: {
          birth_date?: string | null
          celebration_link_token?: string
          comped_note?: string | null
          created_at?: string
          donation_cashapp?: string | null
          donation_gofundme?: string | null
          donation_paypal?: string | null
          donation_stripe_link?: string | null
          donation_venmo?: string | null
          facebook_group_name?: string | null
          facebook_group_url?: string | null
          family_contact_email?: string | null
          family_contact_name?: string | null
          fb_access_token?: string | null
          fb_group_id?: string | null
          fb_page_id?: string | null
          first_name?: string
          hero_image_url?: string | null
          id?: string
          is_comped?: boolean
          is_private?: boolean
          is_published?: boolean
          last_name?: string
          life_story?: string | null
          live_mode?: boolean
          owner_id?: string
          passing_date?: string | null
          plan?: Database["public"]["Enums"]["plan_type"]
          slug?: string
          spotify_access_token?: string | null
          spotify_playlist_id?: string | null
          spotify_playlist_url?: string | null
          spotify_refresh_token?: string | null
          spotify_token_expires?: string | null
          theme?: Database["public"]["Enums"]["memorial_theme"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "memorials_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      memory_tiles: {
        Row: {
          author_email: string | null
          author_name: string
          author_relationship: string | null
          body: string | null
          created_at: string
          display_order: number
          id: string
          is_approved: boolean
          is_featured: boolean
          memorial_id: string
          photo_url: string | null
          quote_attribution: string | null
          quote_text: string | null
          song_artist: string | null
          song_embed_id: string | null
          song_platform: Database["public"]["Enums"]["song_platform"] | null
          song_title: string | null
          song_url: string | null
          tile_type: Database["public"]["Enums"]["tile_type"]
          title: string | null
          video_url: string | null
        }
        Insert: {
          author_email?: string | null
          author_name: string
          author_relationship?: string | null
          body?: string | null
          created_at?: string
          display_order?: number
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          memorial_id: string
          photo_url?: string | null
          quote_attribution?: string | null
          quote_text?: string | null
          song_artist?: string | null
          song_embed_id?: string | null
          song_platform?: Database["public"]["Enums"]["song_platform"] | null
          song_title?: string | null
          song_url?: string | null
          tile_type: Database["public"]["Enums"]["tile_type"]
          title?: string | null
          video_url?: string | null
        }
        Update: {
          author_email?: string | null
          author_name?: string
          author_relationship?: string | null
          body?: string | null
          created_at?: string
          display_order?: number
          id?: string
          is_approved?: boolean
          is_featured?: boolean
          memorial_id?: string
          photo_url?: string | null
          quote_attribution?: string | null
          quote_text?: string | null
          song_artist?: string | null
          song_embed_id?: string | null
          song_platform?: Database["public"]["Enums"]["song_platform"] | null
          song_title?: string | null
          song_url?: string | null
          tile_type?: Database["public"]["Enums"]["tile_type"]
          title?: string | null
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "memory_tiles_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string
          id: string
          room_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          room_id: string
        }
        Update: {
          created_at?: string
          id?: string
          room_id?: string
        }
        Relationships: []
      }
      meta_accounts: {
        Row: {
          created_at: string | null
          fb_followers: number | null
          id: string
          ig_followers: number | null
          ig_user_id: string | null
          ig_username: string | null
          last_synced_at: string | null
          page_access_token: string
          page_id: string
          page_name: string | null
          token_expires_at: string | null
          updated_at: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          fb_followers?: number | null
          id?: string
          ig_followers?: number | null
          ig_user_id?: string | null
          ig_username?: string | null
          last_synced_at?: string | null
          page_access_token: string
          page_id: string
          page_name?: string | null
          token_expires_at?: string | null
          updated_at?: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          fb_followers?: number | null
          id?: string
          ig_followers?: number | null
          ig_user_id?: string | null
          ig_username?: string | null
          last_synced_at?: string | null
          page_access_token?: string
          page_id?: string
          page_name?: string | null
          token_expires_at?: string | null
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meta_accounts_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      meta_insights: {
        Row: {
          comments: number | null
          followers_gained: number | null
          id: string
          impressions: number | null
          likes: number | null
          meta_post_id: string | null
          post_id: string
          profile_visits: number | null
          reach: number | null
          saves: number | null
          shares: number | null
          snapshot_at: string | null
          snapshot_date: string | null
          updated_at: string
          views: number | null
          viral_score: number | null
          workspace_id: string
        }
        Insert: {
          comments?: number | null
          followers_gained?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          meta_post_id?: string | null
          post_id: string
          profile_visits?: number | null
          reach?: number | null
          saves?: number | null
          shares?: number | null
          snapshot_at?: string | null
          snapshot_date?: string | null
          updated_at?: string
          views?: number | null
          viral_score?: number | null
          workspace_id: string
        }
        Update: {
          comments?: number | null
          followers_gained?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          meta_post_id?: string | null
          post_id?: string
          profile_visits?: number | null
          reach?: number | null
          saves?: number | null
          shares?: number | null
          snapshot_at?: string | null
          snapshot_date?: string | null
          updated_at?: string
          views?: number | null
          viral_score?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meta_insights_meta_post_id_fkey"
            columns: ["meta_post_id"]
            isOneToOne: false
            referencedRelation: "meta_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meta_insights_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "meta_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meta_insights_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      meta_posts: {
        Row: {
          account_id: string | null
          caption: string | null
          created_at: string | null
          id: string
          media_type: string | null
          meta_account_id: string | null
          permalink: string | null
          platform: string
          post_id: string
          posted_at: string | null
          published_at: string | null
          synced_at: string | null
          thumbnail_url: string | null
          updated_at: string
          viral_score: number | null
          workspace_id: string
        }
        Insert: {
          account_id?: string | null
          caption?: string | null
          created_at?: string | null
          id?: string
          media_type?: string | null
          meta_account_id?: string | null
          permalink?: string | null
          platform: string
          post_id: string
          posted_at?: string | null
          published_at?: string | null
          synced_at?: string | null
          thumbnail_url?: string | null
          updated_at?: string
          viral_score?: number | null
          workspace_id: string
        }
        Update: {
          account_id?: string | null
          caption?: string | null
          created_at?: string | null
          id?: string
          media_type?: string | null
          meta_account_id?: string | null
          permalink?: string | null
          platform?: string
          post_id?: string
          posted_at?: string | null
          published_at?: string | null
          synced_at?: string | null
          thumbnail_url?: string | null
          updated_at?: string
          viral_score?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meta_posts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "meta_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meta_posts_meta_account_id_fkey"
            columns: ["meta_account_id"]
            isOneToOne: false
            referencedRelation: "meta_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meta_posts_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      mfa_recovery_codes: {
        Row: {
          code_hash: string
          created_at: string
          id: string
          used_at: string | null
          user_id: string
        }
        Insert: {
          code_hash: string
          created_at?: string
          id?: string
          used_at?: string | null
          user_id: string
        }
        Update: {
          code_hash?: string
          created_at?: string
          id?: string
          used_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      mfsn_client_connections: {
        Row: {
          connected_at: string
          connection_status: string
          disconnected_at: string | null
          eligible_for_3b_at: string | null
          last_credit_report_id: string | null
          last_import_at: string | null
          last_verified_at: string | null
          membership_start_source: string
          membership_started_at: string | null
          mfsn_email: string
          token_fingerprint: string | null
          token_last4: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          connected_at?: string
          connection_status?: string
          disconnected_at?: string | null
          eligible_for_3b_at?: string | null
          last_credit_report_id?: string | null
          last_import_at?: string | null
          last_verified_at?: string | null
          membership_start_source?: string
          membership_started_at?: string | null
          mfsn_email: string
          token_fingerprint?: string | null
          token_last4?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          connected_at?: string
          connection_status?: string
          disconnected_at?: string | null
          eligible_for_3b_at?: string | null
          last_credit_report_id?: string | null
          last_import_at?: string | null
          last_verified_at?: string | null
          membership_start_source?: string
          membership_started_at?: string | null
          mfsn_email?: string
          token_fingerprint?: string | null
          token_last4?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mfsn_enrollments: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mfsn_import_logs: {
        Row: {
          created_at: string | null
          error_details: Json | null
          error_message: string | null
          file_name: string | null
          id: string
          imported_by: string | null
          mfsn_member_id: string | null
          pulled_at: string | null
          rows_created: number
          rows_errored: number
          rows_skipped: number
          rows_total: number
          rows_updated: number
          status: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          error_details?: Json | null
          error_message?: string | null
          file_name?: string | null
          id?: string
          imported_by?: string | null
          mfsn_member_id?: string | null
          pulled_at?: string | null
          rows_created?: number
          rows_errored?: number
          rows_skipped?: number
          rows_total?: number
          rows_updated?: number
          status?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          error_details?: Json | null
          error_message?: string | null
          file_name?: string | null
          id?: string
          imported_by?: string | null
          mfsn_member_id?: string | null
          pulled_at?: string | null
          rows_created?: number
          rows_errored?: number
          rows_skipped?: number
          rows_total?: number
          rows_updated?: number
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      mfsn_members: {
        Row: {
          created_at: string | null
          email: string | null
          enrolled_date: string | null
          full_name: string | null
          id: string
          imported_by: string | null
          last_import_at: string | null
          member_id: string
          membership_status: string
          partner_id: string | null
          phone: string | null
          renewal_date: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          enrolled_date?: string | null
          full_name?: string | null
          id?: string
          imported_by?: string | null
          last_import_at?: string | null
          member_id: string
          membership_status?: string
          partner_id?: string | null
          phone?: string | null
          renewal_date?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          enrolled_date?: string | null
          full_name?: string | null
          id?: string
          imported_by?: string | null
          last_import_at?: string | null
          member_id?: string
          membership_status?: string
          partner_id?: string | null
          phone?: string | null
          renewal_date?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mfsn_members_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      Notice: {
        Row: {
          artifactRef: string | null
          contentHash: string
          disputeId: string
          generatedAt: string
          id: string
          type: string
        }
        Insert: {
          artifactRef?: string | null
          contentHash: string
          disputeId: string
          generatedAt?: string
          id: string
          type: string
        }
        Update: {
          artifactRef?: string | null
          contentHash?: string
          disputeId?: string
          generatedAt?: string
          id?: string
          type?: string
        }
        Relationships: []
      }
      ops_agent_runs: {
        Row: {
          agent_name: string
          ended_at: string | null
          error: string | null
          id: number
          payload: Json | null
          run_key: string | null
          started_at: string
          status: string
        }
        Insert: {
          agent_name: string
          ended_at?: string | null
          error?: string | null
          id?: number
          payload?: Json | null
          run_key?: string | null
          started_at?: string
          status?: string
        }
        Update: {
          agent_name?: string
          ended_at?: string | null
          error?: string | null
          id?: number
          payload?: Json | null
          run_key?: string | null
          started_at?: string
          status?: string
        }
        Relationships: []
      }
      partner_clicks: {
        Row: {
          business_id: string
          clicked_at: string
          funding_product_id: string | null
          id: string
          partner_program_id: string | null
          source_component: string | null
          source_page: string
          strategy_step_id: string | null
          user_id: string
        }
        Insert: {
          business_id: string
          clicked_at?: string
          funding_product_id?: string | null
          id?: string
          partner_program_id?: string | null
          source_component?: string | null
          source_page: string
          strategy_step_id?: string | null
          user_id: string
        }
        Update: {
          business_id?: string
          clicked_at?: string
          funding_product_id?: string | null
          id?: string
          partner_program_id?: string | null
          source_component?: string | null
          source_page?: string
          strategy_step_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_clicks_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_clicks_funding_product_id_fkey"
            columns: ["funding_product_id"]
            isOneToOne: false
            referencedRelation: "funding_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_clicks_partner_program_id_fkey"
            columns: ["partner_program_id"]
            isOneToOne: false
            referencedRelation: "partner_programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_clicks_strategy_step_id_fkey"
            columns: ["strategy_step_id"]
            isOneToOne: false
            referencedRelation: "funding_strategy_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_client_lineage_history: {
        Row: {
          changed_at: string
          changed_by: string | null
          client_user_id: string
          from_partner_id: string | null
          id: string
          metadata: Json
          reason: string
          to_partner_id: string
        }
        Insert: {
          changed_at?: string
          changed_by?: string | null
          client_user_id: string
          from_partner_id?: string | null
          id?: string
          metadata?: Json
          reason: string
          to_partner_id: string
        }
        Update: {
          changed_at?: string
          changed_by?: string | null
          client_user_id?: string
          from_partner_id?: string | null
          id?: string
          metadata?: Json
          reason?: string
          to_partner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_client_lineage_history_from_partner_id_fkey"
            columns: ["from_partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_client_lineage_history_to_partner_id_fkey"
            columns: ["to_partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_clients: {
        Row: {
          attributed_at: string
          attribution_source: string
          client_user_id: string
          id: string
          notes: string | null
          original_partner_id: string | null
          partner_id: string
        }
        Insert: {
          attributed_at?: string
          attribution_source?: string
          client_user_id: string
          id?: string
          notes?: string | null
          original_partner_id?: string | null
          partner_id: string
        }
        Update: {
          attributed_at?: string
          attribution_source?: string
          client_user_id?: string
          id?: string
          notes?: string | null
          original_partner_id?: string | null
          partner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_clients_original_partner_id_fkey"
            columns: ["original_partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_clients_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_compliance: {
        Row: {
          independent_affiliate_agreement_accepted_at: string | null
          independent_affiliate_agreement_ip_hash: string | null
          independent_affiliate_agreement_version: string | null
          partner_id: string
          updated_at: string
          w9_document_id: string | null
          w9_reviewed_at: string | null
          w9_reviewed_by: string | null
          w9_status: string
          w9_submitted_at: string | null
        }
        Insert: {
          independent_affiliate_agreement_accepted_at?: string | null
          independent_affiliate_agreement_ip_hash?: string | null
          independent_affiliate_agreement_version?: string | null
          partner_id: string
          updated_at?: string
          w9_document_id?: string | null
          w9_reviewed_at?: string | null
          w9_reviewed_by?: string | null
          w9_status?: string
          w9_submitted_at?: string | null
        }
        Update: {
          independent_affiliate_agreement_accepted_at?: string | null
          independent_affiliate_agreement_ip_hash?: string | null
          independent_affiliate_agreement_version?: string | null
          partner_id?: string
          updated_at?: string
          w9_document_id?: string | null
          w9_reviewed_at?: string | null
          w9_reviewed_by?: string | null
          w9_status?: string
          w9_submitted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_compliance_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: true
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_events: {
        Row: {
          created_at: string
          event_type: string
          id: string
          metadata: Json
          partner_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json
          partner_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json
          partner_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_events_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_mfsn_credentials: {
        Row: {
          api_token_encrypted: string
          base_url: string | null
          configured_at: string
          mfsn_partner_id: string
          partner_id: string
          updated_at: string
        }
        Insert: {
          api_token_encrypted: string
          base_url?: string | null
          configured_at?: string
          mfsn_partner_id: string
          partner_id: string
          updated_at?: string
        }
        Update: {
          api_token_encrypted?: string
          base_url?: string | null
          configured_at?: string
          mfsn_partner_id?: string
          partner_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_mfsn_credentials_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: true
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_profiles: {
        Row: {
          affiliate_activation_paid_at: string | null
          affiliate_fee_status: string
          affiliate_last_active_at: string | null
          affiliate_renewal_current_period_end: string | null
          affiliate_renewal_subscription_id: string | null
          approved_at: string | null
          approved_by: string | null
          bio: string | null
          branding_mode: string
          business_name: string | null
          created_at: string
          custom_domain: string | null
          custom_domain_status: string
          display_name: string
          ein_fingerprint: string | null
          ein_last4: string | null
          ein_recorded_at: string | null
          id: string
          is_active: boolean
          logo_url: string | null
          mfsn_affiliate_verified_at: string | null
          mfsn_affiliate_verified_by: string | null
          mfsn_referral_url: string | null
          primary_color: string | null
          slug: string
          sponsor_partner_id: string | null
          support_email: string | null
          support_phone: string | null
          three_b_business_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          affiliate_activation_paid_at?: string | null
          affiliate_fee_status?: string
          affiliate_last_active_at?: string | null
          affiliate_renewal_current_period_end?: string | null
          affiliate_renewal_subscription_id?: string | null
          approved_at?: string | null
          approved_by?: string | null
          bio?: string | null
          branding_mode?: string
          business_name?: string | null
          created_at?: string
          custom_domain?: string | null
          custom_domain_status?: string
          display_name: string
          ein_fingerprint?: string | null
          ein_last4?: string | null
          ein_recorded_at?: string | null
          id?: string
          is_active?: boolean
          logo_url?: string | null
          mfsn_affiliate_verified_at?: string | null
          mfsn_affiliate_verified_by?: string | null
          mfsn_referral_url?: string | null
          primary_color?: string | null
          slug: string
          sponsor_partner_id?: string | null
          support_email?: string | null
          support_phone?: string | null
          three_b_business_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          affiliate_activation_paid_at?: string | null
          affiliate_fee_status?: string
          affiliate_last_active_at?: string | null
          affiliate_renewal_current_period_end?: string | null
          affiliate_renewal_subscription_id?: string | null
          approved_at?: string | null
          approved_by?: string | null
          bio?: string | null
          branding_mode?: string
          business_name?: string | null
          created_at?: string
          custom_domain?: string | null
          custom_domain_status?: string
          display_name?: string
          ein_fingerprint?: string | null
          ein_last4?: string | null
          ein_recorded_at?: string | null
          id?: string
          is_active?: boolean
          logo_url?: string | null
          mfsn_affiliate_verified_at?: string | null
          mfsn_affiliate_verified_by?: string | null
          mfsn_referral_url?: string | null
          primary_color?: string | null
          slug?: string
          sponsor_partner_id?: string | null
          support_email?: string | null
          support_phone?: string | null
          three_b_business_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_profiles_sponsor_partner_id_fkey"
            columns: ["sponsor_partner_id"]
            isOneToOne: false
            referencedRelation: "partner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_programs: {
        Row: {
          affiliate_url: string | null
          approved_for_recommendations: boolean
          base_url: string | null
          category: string
          compensation_notes: string | null
          compensation_type: string | null
          created_at: string
          disclosure_text: string
          id: string
          partner_name: string
          program_name: string | null
          referral_code: string | null
          status: string
          terms_last_reviewed_at: string | null
          updated_at: string
        }
        Insert: {
          affiliate_url?: string | null
          approved_for_recommendations?: boolean
          base_url?: string | null
          category: string
          compensation_notes?: string | null
          compensation_type?: string | null
          created_at?: string
          disclosure_text?: string
          id?: string
          partner_name: string
          program_name?: string | null
          referral_code?: string | null
          status?: string
          terms_last_reviewed_at?: string | null
          updated_at?: string
        }
        Update: {
          affiliate_url?: string | null
          approved_for_recommendations?: boolean
          base_url?: string | null
          category?: string
          compensation_notes?: string | null
          compensation_type?: string | null
          created_at?: string
          disclosure_text?: string
          id?: string
          partner_name?: string
          program_name?: string | null
          referral_code?: string | null
          status?: string
          terms_last_reviewed_at?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      potluck_items: {
        Row: {
          category: Database["public"]["Enums"]["dish_category"]
          claimed_by_email: string | null
          claimed_by_name: string | null
          created_at: string
          id: string
          is_claimed: boolean
          item_name: string
          memorial_id: string
          notes: string | null
          serves: number | null
        }
        Insert: {
          category?: Database["public"]["Enums"]["dish_category"]
          claimed_by_email?: string | null
          claimed_by_name?: string | null
          created_at?: string
          id?: string
          is_claimed?: boolean
          item_name: string
          memorial_id: string
          notes?: string | null
          serves?: number | null
        }
        Update: {
          category?: Database["public"]["Enums"]["dish_category"]
          claimed_by_email?: string | null
          claimed_by_name?: string | null
          created_at?: string
          id?: string
          is_claimed?: boolean
          item_name?: string
          memorial_id?: string
          notes?: string | null
          serves?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "potluck_items_memorial_id_fkey"
            columns: ["memorial_id"]
            isOneToOne: false
            referencedRelation: "memorials"
            referencedColumns: ["id"]
          },
        ]
      }
      processed_webhook_events: {
        Row: {
          created_at: string
          event_id: string
        }
        Insert: {
          created_at?: string
          event_id: string
        }
        Update: {
          created_at?: string
          event_id?: string
        }
        Relationships: []
      }
      product_registry: {
        Row: {
          admin_view_enabled: boolean
          created_at: string
          description: string | null
          display_name: string
          id: string
          is_active: boolean
          owner_project_ref: string | null
          product_slug: string
          requires_business: boolean
          requires_entitlement: boolean
          sort_order: number
          updated_at: string
        }
        Insert: {
          admin_view_enabled?: boolean
          created_at?: string
          description?: string | null
          display_name: string
          id?: string
          is_active?: boolean
          owner_project_ref?: string | null
          product_slug: string
          requires_business?: boolean
          requires_entitlement?: boolean
          sort_order?: number
          updated_at?: string
        }
        Update: {
          admin_view_enabled?: boolean
          created_at?: string
          description?: string | null
          display_name?: string
          id?: string
          is_active?: boolean
          owner_project_ref?: string | null
          product_slug?: string
          requires_business?: boolean
          requires_entitlement?: boolean
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          address_line1: string | null
          address_line2: string | null
          avatar_url: string | null
          card_public: boolean
          city: string | null
          country_code: string
          created_at: string | null
          email: string | null
          facebook: string | null
          first_name: string | null
          full_name: string | null
          id: string
          instagram: string | null
          last_name: string | null
          linkedin: string | null
          phone: string | null
          plan: Database["public"]["Enums"]["plan_type"]
          role: string | null
          state: string | null
          state_code: string | null
          system_role: string
          tiktok: string | null
          title: string | null
          twitter: string | null
          updated_at: string
          user_id: string
          verification_status: string
          website: string | null
          youtube: string | null
          zip: string | null
        }
        Insert: {
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
