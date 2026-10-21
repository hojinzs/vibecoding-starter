"use client";

// 이 파일은 브라우저(화면 쪽)에서 돌아요. 입력과 클릭을 받아야 해서 맨 위에 "use client"가 있어요.
// 저장은 직접 하지 않고 서버 쪽 함수(app/actions.ts)에 맡겨요.

import { useActionState } from "react";
import { submitApplication, type SignupState } from "./actions";
import type { Applicant } from "@/types/study";

type Props = {
  sessionId: number;
  applicants: Applicant[];
  capacity: number;
  loadFailed: boolean;
};

const initialState: SignupState = { status: "idle", message: "" };

export default function SignupSection({
  sessionId,
  applicants,
  capacity,
  loadFailed,
}: Props) {
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initialState,
  );

  return (
    <>
      <section className="mb-10">
        <h2 className="text-xl font-semibold">신청하기</h2>
        <form action={formAction} className="mt-4 flex flex-col gap-3">
          <input type="hidden" name="sessionId" value={sessionId} />
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">이름</span>
            <input
              name="name"
              defaultValue={state.fields?.name}
              className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 dark:border-zinc-700"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              연락 수단
            </span>
            <input
              name="contact"
              placeholder="카카오톡 ID 또는 이메일"
              defaultValue={state.fields?.contact}
              className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 dark:border-zinc-700"
            />
          </label>
          <button
            type="submit"
            disabled={pending}
            className="mt-2 rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {pending ? "저장하는 중..." : "신청하기"}
          </button>
          {state.message && (
            <p
              aria-live="polite"
              className={
                state.status === "error"
                  ? "text-sm text-red-600 dark:text-red-400"
                  : "text-sm text-zinc-600 dark:text-zinc-400"
              }
            >
              {state.message}
            </p>
          )}
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold">
          신청자 명단{" "}
          <span className="text-base font-normal text-zinc-500 dark:text-zinc-400">
            {applicants.length}명 / 정원 {capacity}명
          </span>
        </h2>
        {loadFailed && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            명단을 읽어오지 못했어요. 새로고침해도 계속되면 터미널의 오류 메시지를 확인해주세요.
          </p>
        )}
        <ul className="mt-4 divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {applicants.map((applicant) => (
            <li key={applicant.id} className="flex justify-between px-5 py-3">
              <span className="font-medium">{applicant.name}</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                {applicant.contact}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
