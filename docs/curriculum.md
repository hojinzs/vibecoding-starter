# 강의 지도

> 정본: 노션 「AI 강의 자료」 → 바이브코딩 ③ 개발하고 배포하기
> https://app.notion.com/p/3a4ecd5a3ac280599519e5d6e6e749e4
> 기준일 2026-10-21 · 다시 확인할 날 2027-01-21

## ③장의 흐름

```
다시 정한다 → 만든다 → 올린다 → 붙인다 → 서비스가 된다
```

| 순서 | 강의 | 이 강의에서 하는 일 | 끝난 상태 | 프롬프트 |
|---|---|---|---|---|
| 1 | [내 코드와 서비스는 어디에서 실행될까?](https://app.notion.com/p/3a7ecd5a3ac2813f9b65f07083fab5e9) | 코드·실행·데이터 구분, PRD 완성 | [PRD](prd/study-signup.md) | [01](prompts/01-prd.md) |
| 2 | [Next.js로 화면 만들기](https://app.notion.com/p/3b0ecd5a3ac28176b02ff9739f801e32) | PRD로 프로젝트 생성, 신청 화면 | `checkpoints/01-screen` | [02](prompts/02-nextjs-screen.md) |
| 3 | [GitHub에 소스 올리기](https://app.notion.com/p/3a7ecd5a3ac281a7b3a8ecd2a3dbcfab) | 비공개 저장소에 코드와 기록 올리기 | `checkpoints/02-github` | [03](prompts/03-github.md) |
| 4 | [Vercel로 배포하기](https://app.notion.com/p/3b7ecd5a3ac2812b8ef8c14207993fc9) | 누구나 열 수 있는 주소 만들기 | `checkpoints/03-vercel` | [04](prompts/04-vercel.md) |
| 5 | [Supabase에 데이터 저장하기](https://app.notion.com/p/3b0ecd5a3ac28113907ec3fae1299c52) | 신청 명단을 인터넷 창고에 저장 | `checkpoints/04-supabase` | [05](prompts/05-supabase.md) |

## 카페 비유

강의 전체가 서비스를 카페에 빗대요.

| 카페 | 맡는 일 | ③장이 끝나면 |
|---|---|---|
| 홀 직원 (화면 담당) | 보여주고 입력·클릭을 받아요 | 사용자의 브라우저 |
| 조리사 (처리 담당) | 요청을 확인하고 규칙대로 처리해요 | Vercel의 서버 |
| 창고지기 (기록 담당) | 기록을 넣고 꺼내요 | Supabase의 데이터베이스 |
| 레시피 보관함 | 코드와 변경 기록 | GitHub 저장소 |
| 건물주 | 매장 자리를 빌려주고 문을 열어줘요 | Vercel |

## 체크포인트마다 달라지는 것

| | 01-screen | 02-github | 03-vercel | 04-supabase |
|---|---|---|---|---|
| 신청이 남는 곳 | 화면에만 잠깐 | 화면에만 잠깐 | 화면에만 잠깐 | Supabase 표 |
| 새로고침하면 | 사라져요 | 사라져요 | 사라져요 | 그대로예요 |
| 다른 기기에서 보면 | 안 보여요 | 안 보여요 | 안 보여요 | 같은 명단이 보여요 |
| 추가된 것 | 화면, 타입 | README, `.gitignore` | 제목 문구 수정 | Supabase 읽기·쓰기, `.env.example`, `schema.sql` |

체크포인트에는 Git 기록, GitHub 저장소, Vercel·Supabase 연결이 들어 있지 않아요. 계정과 연결은 학습자가 자기 것으로 직접 만들어요.

## 기술 스택

create-next-app 기본값을 그대로 써요: TypeScript, Tailwind CSS, ESLint, App Router.
체크포인트를 만든 버전: Next.js 16.4.2, @supabase/supabase-js 2.117.3.
