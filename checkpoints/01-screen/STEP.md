# 지금 단계: 화면 만들기 끝

이 폴더는 강의 「Next.js로 화면 만들기」를 마친 상태예요.
(노션: https://app.notion.com/p/3b0ecd5a3ac28176b02ff9739f801e32)

## 지금까지 한 일

- `create-next-app` 기본값(TypeScript, Tailwind CSS, App Router)으로 `study-signup` 프로젝트를 만들었어요.
- 모임 정보, 신청 폼, 신청자 수, 신청자 명단을 한 화면에 붙였어요.
- 신청자 데이터의 모양을 `types/study.ts`에 타입으로 정해뒀어요. 이름과 연락 수단, 두 칸뿐이에요.

| 파일 | 누구의 일 |
|---|---|
| `app/page.tsx` | 서버 쪽. 모임 정보를 미리 그려서 보내요 |
| `app/signup-section.tsx` | 화면 쪽(`"use client"`). 신청을 받고 명단을 보여줘요 |
| `lib/sample-data.ts` | PRD 비고에 있는 예시 데이터 |

## 일부러 안 되는 것 (정상이에요)

- **새로고침하면 방금 남긴 신청이 사라져요.** 명단은 화면이 떠 있는 동안에만 기억되고, 어디에도 적히지 않아요. 카페로 치면 홀 직원이 주문을 손에만 쥐고 있는 상태예요.
- 다른 브라우저나 시크릿 창에서는 내가 남긴 신청이 보이지 않아요.
- 아직 Git 기록이 없어요. 되돌리고 싶으면 폴더를 통째로 복사해두는 수밖에 없어요.

이 문제들을 고치려고 데이터베이스나 저장 기능을 미리 붙이지 마세요. 다음 강의들에서 순서대로 풀어요.

## 실행하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열어요.

## 다음 강의

「GitHub에 소스 올리기」 (https://app.notion.com/p/3a7ecd5a3ac281a7b3a8ecd2a3dbcfab)
이 코드를 내 GitHub 계정의 비공개 저장소에 올리고, 변경 기록을 남기는 법을 배워요.
