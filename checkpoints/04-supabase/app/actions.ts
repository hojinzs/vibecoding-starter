"use server";

// 신청 버튼을 누르면 브라우저가 이 함수를 불러요. 실행은 서버 쪽에서 해서 열쇠가 브라우저로 나가지 않아요.

import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";

export type SignupState = {
  status: "idle" | "success" | "error";
  message: string;
  fields?: { name: string; contact: string };
};

export async function submitApplication(
  _prevState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const sessionId = Number(formData.get("sessionId"));
  const fields = { name, contact };

  if (!name || !contact) {
    return { status: "error", message: "이름과 연락 수단을 모두 채워주세요.", fields };
  }
  if (name.length > 50 || contact.length > 100) {
    return { status: "error", message: "이름은 50자, 연락 수단은 100자까지 적을 수 있어요.", fields };
  }
  if (!Number.isInteger(sessionId)) {
    return { status: "error", message: "어느 모임에 대한 신청인지 알 수 없어요. 새로고침한 뒤 다시 신청해주세요.", fields };
  }

  const supabase = createServerSupabase();
  if (!supabase) {
    return { status: "error", message: "아직 창고(Supabase)가 연결되지 않아 저장할 수 없어요.", fields };
  }

  const { error } = await supabase
    .from("applications")
    .insert({ session_id: sessionId, name, contact });

  if (error) {
    console.error("신청 저장 실패:", error.message);
    return { status: "error", message: "신청을 저장하지 못했어요. 잠시 뒤 다시 시도해주세요.", fields };
  }

  // 명단을 다시 읽어와 화면을 갱신해요.
  revalidatePath("/");
  return { status: "success", message: `${name}님의 신청이 저장됐어요.` };
}
