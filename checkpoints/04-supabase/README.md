# 스터디 신청 페이지

모임 정보를 한 화면에서 보고, 이름과 연락 수단만 남기면 신청이 끝나는 페이지예요.
Next.js로 만들었고, 신청 명단은 Supabase 데이터베이스에 쌓여요.

이 프로젝트는 화면 담당과 처리 담당이 한 프로젝트 안에서 어떻게 나뉘는지 배우기 위한 실습이에요.

## 실행하기

Node.js 20.9 이상이 필요해요.

1. Supabase 프로젝트에 표를 만들어요. 강의에서는 에이전트가 만들고, 직접 만들 때는 `supabase/schema.sql`을 SQL Editor에서 실행해요.
2. `.env.example`을 참고해 `.env.local` 파일을 **직접** 만들고 Supabase 대시보드의 값을 붙여넣어요.
3. 실행해요.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열어요.

## 지금 알아둘 것

- 신청은 Supabase의 `applications` 표에 저장돼요. 다른 브라우저나 기기에서 열어도 같은 명단이 보여요.
- 주소를 아는 사람은 누구나 명단을 볼 수 있어요. 실제 이름과 연락처는 넣지 마세요.
- `.env.local`은 GitHub에 올리지 않아요. 배포 환경에는 Vercel의 Environment Variables로 따로 넣어요.
