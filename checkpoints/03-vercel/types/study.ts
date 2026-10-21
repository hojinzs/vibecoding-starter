// 화면에서 다루는 데이터의 모양이에요.
// 타입은 "이 값에는 어떤 종류가 들어가야 하는지" 적어두는 약속이에요.

export type StudySession = {
  title: string; // 모임 이름
  schedule: string; // 언제 모이는지
  capacity: number; // 몇 명까지 받는지
};

export type Applicant = {
  name: string; // 신청자 이름
  contact: string; // 카카오톡 ID 또는 이메일
};
