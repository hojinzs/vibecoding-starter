# 지금 단계: Supabase 연결 끝 (③장 도착점)

이 폴더는 강의 「Supabase에 데이터 저장하기」를 마친 상태예요.
(노션: https://app.notion.com/p/3b0ecd5a3ac28113907ec3fae1299c52)

## 지금까지 한 일

- 화면을 만들고, GitHub private 저장소에 올리고, Vercel로 배포했어요.
- Supabase에 표 두 개를 만들고 잠금(RLS)을 켰어요. `study_sessions`(모임)와 `applications`(신청)예요.
- 화면이 코드에 박힌 예시 대신 표에서 모임 정보와 명단을 읽어와요.
- 신청 버튼을 누르면 서버 쪽 함수가 `applications` 표에 한 줄을 저장해요.

| 파일 | 누구의 일 |
|---|---|
| `app/page.tsx` | 서버 쪽. 창고에서 모임 정보와 명단을 꺼내 화면을 그려요 |
| `app/signup-section.tsx` | 화면 쪽(`"use client"`). 입력을 받아 서버 쪽 함수에 넘겨요 |
| `app/actions.ts` | 서버 쪽(`"use server"`). 빈 칸을 확인하고 신청을 저장해요 |
| `lib/supabase/server.ts` | 서버 쪽. secret 열쇠로 창고 문을 여는 클라이언트 |
| `types/database.ts` | 표 구조와 똑같이 맞춘 타입 |
| `supabase/schema.sql` | 표를 다시 만들 때 쓰는 정답지 |

| 자리 | 지금 어디에 |
|---|---|
| 화면 담당 | 사용자의 브라우저 |
| 처리 담당 | Vercel의 서버 |
| 기록 담당 | Supabase 데이터베이스 |
| 코드와 변경 기록 | GitHub |

## 체크포인트에서 이어가는 경우

1. Supabase에서 새 프로젝트를 만들어요(계약서에 서명하는 일이라 학습자가 직접 해요).
2. SQL Editor에서 `supabase/schema.sql`을 실행해요.
3. `.env.local`을 **직접** 만들어 `.env.example`의 세 이름에 값을 붙여넣어요. 에이전트에게 열쇠 값을 보여주지 마세요.
4. 배포한다면 Vercel의 Environment Variables에도 같은 세 이름을 넣고 Redeploy 해요.

열쇠가 없으면 화면에 "아직 창고(Supabase)가 연결되지 않았어요" 안내가 떠요. 고장이 아니에요.

## 아직 안 한 것 (다음 챕터에서)

- 주소를 아는 사람은 누구나 명단을 볼 수 있어요. 로그인도, 누구에게 무엇까지 보여줄지 정하는 규칙도 없어요.
- 오류가 나도 사용자가 말해주기 전까지는 알 수 없어요.

실제 이름과 연락처는 아직 넣지 마세요.

## 실행하기

```bash
npm install
npm run dev
```
