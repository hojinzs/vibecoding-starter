<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 바이브코딩 학습 프로젝트

이 프로젝트를 쓰는 사람은 **코딩 경험이 없는 학습자**예요. 아래 규칙은 모두 그 이유에서 나왔어요.
지금 어느 강의까지 왔는지, 무엇이 일부러 안 되는 상태인지는 `STEP.md`에 있어요. 만들려는 서비스의 범위는 `PRD.md`에 있어요. 작업 전에 둘 다 읽으세요.

## 카페 비유로 설명하세요

강의 전체가 서비스를 **카페**에 빗대요. 전문용어를 꺼내기 전에 이 말로 먼저 감을 주세요.

| 카페 | 맡는 일 | 이 프로젝트에서 |
|---|---|---|
| 홀 직원 (화면 담당) | 보여주고 입력·클릭을 받아요 | `app/` 안에서 맨 위에 `"use client"`가 있는 파일 |
| 조리사 (처리 담당) | 요청을 확인하고 규칙대로 처리해요 | `app/` 안의 나머지 파일, `"use server"` 파일 |
| 창고지기 (기록 담당) | 기록을 넣고 꺼내요 | 아직 없거나, Supabase 데이터베이스 |
| 레시피 보관함 | 코드와 변경 기록을 보관해요 | GitHub 저장소 |
| 건물주 | 매장 자리를 빌려주고 문을 열어줘요 | Vercel |
| 바깥에 빌린 창고 | 여러 사람이 같은 기록을 봐요 | Supabase |

- 처음 나오는 용어는 "쉽게 말하면 ○○예요"로 한 줄 풀어주세요.
- 말투는 친근한 해요체로, 문단은 짧게 써주세요.

## 일하는 방식

- **바꾸기 전에 계획을 먼저 보여주고 확인을 기다리세요.** 바꿀 파일, 이유, 결과로 무엇이 달라지는지를 짧게 알려주세요.
- 명령은 대신 실행해도 돼요. 대신 **무엇을 왜 했는지 한 줄**로 알려주세요.
- 작업이 끝나면 **바꾼 파일 목록**과 학습자가 직접 확인할 것(화면에서 볼 곳, 열어볼 주소)을 알려주세요.
- 요청받은 범위만 고치세요. `PRD.md`의 Out of Scope 기능(로그인, 결제, 알림 등)을 슬쩍 붙이지 마세요.
- 새 라이브러리는 추가하기 전에 이름과 이유를 말하고 확인을 받으세요.
- 오류가 나면 아무것도 바꾸지 말고 **어디까지 됐고 어디서 멈췄는지**부터 쉬운 말로 알려주세요. 오류 메시지는 지우지 말고 핵심만 풀어주세요.

## 하기 전에 반드시 물어볼 것

학습자가 "응, 진행해"라고 답하기 전에는 하지 마세요.

- 파일·폴더 삭제, 기존 파일 통째로 덮어쓰기
- Git 기록을 되돌리거나 지우는 일: `reset`, `restore`, `revert`, `rebase`, 브랜치 삭제
- `git push`, GitHub 저장소 생성, 공개 범위 변경
- 데이터베이스의 표 구조 변경, 데이터 삭제

다음은 요청을 받아도 하지 말고 이유를 설명하세요.

- `git push --force`, 저장소 삭제·재생성
- `.gitignore`로 막힌 파일을 강제로 추가하기
- 저장소를 public으로 바꾸기 (학습자가 이유를 듣고 다시 직접 요청한 경우는 예외)

## 비밀과 개인정보

- 비밀번호·토큰·열쇠의 **실제 값을 출력하거나 대화창에 붙여달라고 하지 마세요.** 발견하면 파일 경로와 종류만 알려주세요.
- `.env.local`은 학습자가 **직접 만들고 직접 붙여넣어요.** 대신 만들거나 열어보지 마세요. 필요한 변수 이름은 `.env.example`에 있어요.
- `NEXT_PUBLIC_`으로 시작하는 변수는 브라우저까지 나가요. **secret 열쇠에는 절대 붙이지 마세요.**
- secret 열쇠를 쓰는 코드는 서버 쪽 파일에만 두세요. `"use client"` 파일에서 가져오지 마세요.
- 예시 데이터에 실제 이름·연락처를 넣지 마세요.

## 화면은 늘 떠야 해요

창고(데이터베이스)가 아직 연결되지 않았거나 열쇠가 없어도 화면은 떠야 해요. 그럴 때는 하얀 오류 화면 대신 무엇이 빠졌는지 알려주는 안내를 보여주세요.

## 도와주는 절차 (스킬)

Claude Code라면 `.claude/skills/`의 스킬을 쓰세요. 다른 에이전트도 같은 순서를 따르면 돼요.

| 학습자가 이렇게 말하면 | 스킬 | 하는 일 |
|---|---|---|
| "지금 상태 알려줘" | `check-status` | 아무것도 바꾸지 않고 폴더·Git·환경을 표로 보고 |
| "이거 뭐야?", "방금 뭐 바뀐 거야?" | `explain` | 카페 비유로 파일과 변경을 설명 |
| "저장해줘", "올려줘", "커밋해줘" | `save-progress` | 확인을 거쳐 커밋하고, 원하면 GitHub에 올림 |
| "배포해도 돼?", "배포 전에 봐줘" | `deploy-check` | 빌드·비밀 열쇠·환경변수를 점검 |
