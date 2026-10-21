import { Suspense } from "react";
import { connection } from "next/server";
import SetupNotice from "./setup-notice";
import SignupSection from "./signup-section";
import { createServerSupabase } from "@/lib/supabase/server";

// 이 파일은 서버 쪽에서 화면을 그려요. ("use client"가 없어요)
// 모임 정보와 명단은 코드가 아니라 창고(Supabase)의 표에서 읽어와요.
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <StudyPage />
    </Suspense>
  );
}

function Loading() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 text-zinc-500 dark:text-zinc-400">
      창고에서 모임 정보를 꺼내오는 중이에요...
    </main>
  );
}

async function StudyPage() {
  // 빌드할 때 한 번 읽고 굳히지 않고, 누가 열 때마다 창고에서 새로 읽어요.
  await connection();

  const supabase = createServerSupabase();
  if (!supabase) {
    return (
      <SetupNotice title="아직 창고(Supabase)가 연결되지 않았어요">
        <p>
          프로젝트 폴더에 <code>.env.local</code> 파일을 직접 만들고,{" "}
          <code>.env.example</code>에 적힌 세 이름에 Supabase 대시보드의 값을 붙여넣어 주세요.
        </p>
        <p>배포한 주소라면 Vercel의 Settings → Environment Variables에 같은 이름으로 넣고 Redeploy 해주세요.</p>
      </SetupNotice>
    );
  }

  const { data: session, error: sessionError } = await supabase
    .from("study_sessions")
    .select("id, title, schedule, capacity")
    .order("id")
    .limit(1)
    .maybeSingle();

  if (sessionError) {
    console.error("모임 정보 읽기 실패:", sessionError.message);
    return (
      <SetupNotice title="모임 정보를 읽어오지 못했어요">
        <p>열쇠 이름이 틀렸거나, 표 이름이 코드와 다를 수 있어요.</p>
        <p>터미널에 찍힌 오류 메시지를 지우지 말고 에이전트에게 그대로 보여주세요.</p>
      </SetupNotice>
    );
  }

  if (!session) {
    return (
      <SetupNotice title="아직 모임이 없어요">
        <p>
          <code>study_sessions</code> 표가 비어 있어요. <code>supabase/schema.sql</code>의 예시 데이터를 넣거나
          에이전트에게 모임 한 건을 넣어달라고 해주세요.
        </p>
      </SetupNotice>
    );
  }

  const { data: applicants, error: applicantsError } = await supabase
    .from("applications")
    .select("id, name, contact")
    .eq("session_id", session.id)
    .order("created_at");

  if (applicantsError) {
    console.error("신청 명단 읽기 실패:", applicantsError.message);
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <header className="mb-10">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          함께 공부할 사람을 찾고 있어요
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {session.title}
        </h1>
        <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div>
            <dt className="text-sm text-zinc-500 dark:text-zinc-400">일시</dt>
            <dd className="mt-1 font-medium">{session.schedule}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500 dark:text-zinc-400">정원</dt>
            <dd className="mt-1 font-medium">{session.capacity}명</dd>
          </div>
        </dl>
      </header>

      <SignupSection
        sessionId={session.id}
        applicants={applicants ?? []}
        capacity={session.capacity}
        loadFailed={Boolean(applicantsError)}
      />
    </main>
  );
}
