---
name: checkpoint
description: 키트의 study-signup 체크포인트를 학습자가 이어서 작업할 폴더로 꺼내준다. "체크포인트에서 시작할래", "Vercel 강의부터 이어갈래", "내 프로젝트가 꼬였어, 다시 받고 싶어", "GitHub 강의 시작 상태로 줘"처럼 특정 강의 시점부터 이어가려는 요청에 사용한다.
---

# 체크포인트 꺼내기

학습자는 코딩 경험이 없어요. 해요체로, 한 번에 하나씩 확인받으며 진행하세요.

## 1. 어느 체크포인트인지 정하기

`docs/curriculum.md`의 표를 보여주고, 학습자가 **다음에 들을 강의**를 기준으로 골라요.

| 다음에 들을 강의 | 꺼낼 체크포인트 |
|---|---|
| GitHub에 소스 올리기 | `checkpoints/01-screen` |
| Vercel로 배포하기 | `checkpoints/02-github` |
| Supabase에 데이터 저장하기 | `checkpoints/03-vercel` |
| ④장 (③장 완성본이 필요할 때) | `checkpoints/04-supabase` |

「Next.js로 화면 만들기」를 들을 차례라면 체크포인트가 필요 없어요. `docs/prompts/02-nextjs-screen.md`의 프롬프트로 처음부터 만들도록 안내하세요.

## 2. 어디에 꺼낼지 정하기

- 기본은 **키트 폴더 옆**의 `study-signup`이에요. (예: 키트가 `~/Projects/vibecoding-starter`면 `~/Projects/study-signup`)
- 키트 폴더 **안**에는 절대 꺼내지 마세요. GitHub에 올릴 때 키트 전체가 함께 올라갈 수 있어요.
- 그 위치가 이미 있으면 **덮어쓰지 말고** 알려주세요. 학습자의 기존 작업일 수 있어요. `study-signup-02` 같은 다른 이름을 제안해요.
- 꺼낼 위치의 상위 폴더가 Git 저장소인지 확인해요. 그렇다면 GitHub 강의에서 문제가 되니 다른 위치를 제안해요.

여기까지 계획(어느 체크포인트를 어디에)을 보여주고 확인을 기다려요.

## 3. 꺼내기

- 체크포인트 폴더를 통째로 복사하되 `node_modules/`, `.next/`, `*.tsbuildinfo`는 빼요.
  - 예: `rsync -a --exclude node_modules --exclude .next --exclude '*.tsbuildinfo' checkpoints/02-github/ ../study-signup/`
- 숨김 파일(`.gitignore`, `.claude/`, `.env.example`)도 함께 복사됐는지 확인해요.
- `npm install`을 지금 실행할지 물어보고, 원하면 꺼낸 폴더에서 실행해요.

## 4. 안내하기

- 꺼낸 폴더의 전체 경로
- 그 폴더의 `STEP.md` 요약: 지금까지 한 일, **일부러 안 되는 것**, 다음 강의
- 이제 **꺼낸 폴더를 에이전트로 다시 열어야** 학습자용 규칙과 스킬이 적용된다는 것
- 04-supabase라면: `.env.local`은 학습자가 직접 만들어야 하고, Supabase에 표가 없으면 `supabase/schema.sql`을 SQL Editor에서 실행하면 된다는 것
