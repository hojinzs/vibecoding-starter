"use client";

// 이 파일은 브라우저(화면 쪽)에서 돌아요. 입력과 클릭을 받아야 해서 맨 위에 "use client"가 있어요.

import { useState, type FormEvent } from "react";
import type { Applicant } from "@/types/study";

type Props = {
  initialApplicants: Applicant[];
  capacity: number;
};

export default function SignupSection({ initialApplicants, capacity }: Props) {
  // 명단은 화면이 떠 있는 동안에만 기억돼요. 새로고침하면 처음 세 명으로 돌아가요.
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();

    if (!name || !contact) {
      setMessage("이름과 연락 수단을 모두 채워주세요.");
      return;
    }

    setApplicants([...applicants, { name, contact }]);
    setMessage(`${name}님의 신청이 명단에 추가됐어요.`);
    form.reset();
  }

  return (
    <>
      <section className="mb-10">
        <h2 className="text-xl font-semibold">신청하기</h2>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">이름</span>
            <input
              name="name"
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
              className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 dark:border-zinc-700"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            신청하기
          </button>
          {message && (
            <p aria-live="polite" className="text-sm text-zinc-600 dark:text-zinc-400">
              {message}
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
        <ul className="mt-4 divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {applicants.map((applicant, index) => (
            <li key={index} className="flex justify-between px-5 py-3">
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
