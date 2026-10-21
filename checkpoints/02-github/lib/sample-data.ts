import type { Applicant, StudySession } from "@/types/study";

// PRD 비고에 적힌 예시 데이터예요. 실제 이름과 연락처는 넣지 않아요.
export const studySession: StudySession = {
  title: "주 1회 알고리즘 스터디",
  schedule: "매주 토요일 오전 10시",
  capacity: 8,
};

export const sampleApplicants: Applicant[] = [
  { name: "김민준", contact: "카카오톡 ID" },
  { name: "이서연", contact: "이메일" },
  { name: "박지훈", contact: "카카오톡 ID" },
];
