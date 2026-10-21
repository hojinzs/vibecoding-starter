import type { Database } from "./database";

// 화면에서 다루는 데이터의 모양이에요. 표 구조(types/database.ts)를 기준으로 만들어요.
type Tables = Database["public"]["Tables"];

export type StudySession = Tables["study_sessions"]["Row"];

export type Applicant = Pick<
  Tables["applications"]["Row"],
  "id" | "name" | "contact"
>;
