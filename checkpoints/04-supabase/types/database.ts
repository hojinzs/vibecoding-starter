// Supabase 표 구조를 그대로 옮긴 타입이에요.
// 표의 열과 이 타입은 같은 약속이라, 표를 바꾸면 이 파일도 같이 바꿔야 해요.
// (에이전트에게 "Supabase 표 구조로 타입을 다시 만들어줘"라고 하면 다시 만들 수 있어요.)

export type Database = {
  public: {
    Tables: {
      study_sessions: {
        Row: {
          id: number;
          title: string;
          schedule: string;
          capacity: number;
        };
        Insert: {
          id?: never;
          title: string;
          schedule: string;
          capacity: number;
        };
        Update: {
          id?: never;
          title?: string;
          schedule?: string;
          capacity?: number;
        };
        Relationships: [];
      };
      applications: {
        Row: {
          id: number;
          session_id: number;
          name: string;
          contact: string;
          created_at: string;
        };
        Insert: {
          id?: never;
          session_id: number;
          name: string;
          contact: string;
          created_at?: string;
        };
        Update: {
          id?: never;
          session_id?: number;
          name?: string;
          contact?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "applications_session_id_fkey";
            columns: ["session_id"];
            isOneToOne: false;
            referencedRelation: "study_sessions";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
