import SignupSection from "./signup-section";
import { sampleApplicants, studySession } from "@/lib/sample-data";

// 이 파일은 서버 쪽에서 화면을 미리 그려요. ("use client"가 없어요)
export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <header className="mb-10">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          함께 공부할 사람을 찾고 있어요
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {studySession.title}
        </h1>
        <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div>
            <dt className="text-sm text-zinc-500 dark:text-zinc-400">일시</dt>
            <dd className="mt-1 font-medium">{studySession.schedule}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500 dark:text-zinc-400">정원</dt>
            <dd className="mt-1 font-medium">{studySession.capacity}명</dd>
          </div>
        </dl>
      </header>

      <SignupSection
        initialApplicants={sampleApplicants}
        capacity={studySession.capacity}
      />
    </main>
  );
}
