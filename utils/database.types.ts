export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          id: number
          created_at: string | null
          name: string | null
          author: string | null
          year: number | null
          description: string | null
          tag: string | null
          created_by: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string | null
          author?: string | null
          year?: number | null
          description?: string | null
          tag?: string | null
          created_by?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string | null
          author?: string | null
          year?: number | null
          description?: string | null
          tag?: string | null
          created_by?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
        }
      }
      recipes: {
        Row: {
          id: number
          created_at: string | null
          title: string | null
          method: string | null
          rating: number | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          title?: string | null
          method?: string | null
          rating?: number | null
        }
        Update: {
          id?: number
          created_at?: string | null
          title?: string | null
          method?: string | null
          rating?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}