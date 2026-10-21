import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

// 창고(Supabase) 문을 여는 서버 전용 클라이언트예요.
// secret 열쇠를 쓰기 때문에 서버 쪽 파일에서만 가져와야 해요.
// 위의 import "server-only" 덕분에 화면 쪽("use client") 파일에서 가져오면 빌드가 멈춰요.
export function createServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  // 열쇠가 아직 없으면 null. 화면은 오류 대신 안내를 보여줘요.
  if (!url || !secretKey) return null;

  return createClient<Database>(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
