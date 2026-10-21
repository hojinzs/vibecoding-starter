# 05 · Supabase에 데이터 저장하기

> 원문: https://app.notion.com/p/3b0ecd5a3ac28113907ec3fae1299c52 · 기준일 2026-10-21
> 원문이 바뀌었으면 원문을 따르세요. 시작 상태: `checkpoints/03-vercel` · 끝난 상태: `checkpoints/04-supabase`

## 0. 직접 할 일

- supabase.com에서 프로젝트를 만들어요. 데이터베이스 비밀번호는 바로 안전한 곳에 적어둬요.
- 에이전트에 Supabase를 연결해요. Claude는 **설정 → 커넥터**, ChatGPT는 **플러그인**에서 찾아요. 연습용 계정에만 연결하세요.

연결 확인:

```txt
지금 연결된 Supabase 프로젝트의 표 목록을 보여줘.
아무것도 만들거나 고치지 마.
```

## 1. 표 만들기

```txt
Supabase 프로젝트에 새 표 두 개를 만들어줘.

1. study_sessions (모임 정보)
   - id, 제목, 일시, 정원 열을 가진 표
2. applications (신청 명단)
   - id, 모임 id, 이름, 연락 수단, 남긴 시각 열을 가진 표
   - 모임 id는 study_sessions의 어느 행에 대한 신청인지 가리키는 열이야

각 열마다 어떤 종류의 값을 담을지 정하고,
왜 그 종류를 골랐는지 한 줄씩 이유를 알려줘.

두 표 모두 row level security(잠금)를 켜줘.

표를 다 만든 다음 예시 데이터를 넣어줘.

study_sessions에 모임 한 건
- 제목: 주 1회 알고리즘 스터디
- 일시: 매주 토요일 오전 10시
- 정원: 8

applications에 신청 세 건. 모두 위 모임에 대한 신청이야
- 김민준, 카카오톡 ID
- 이서연, 이메일
- 박지훈, 카카오톡 ID

주의:
- 실행하기 전에 어떤 표를 어떤 구조로 만들 계획인지 먼저 설명하고
  내가 확인한 다음에 진행해줘
- 기존에 있는 다른 표는 건드리거나 지우지 마
- 이 작업 범위를 벗어나는 표나 기능은 만들지 마
```

> 에이전트 연결이 안 될 때는 `checkpoints/04-supabase/supabase/schema.sql`을 Supabase의 SQL Editor에 붙여넣고 실행해도 같은 표가 만들어져요.

## 2. 타입 만들기

```txt
방금 만든 study_sessions와 applications 표 구조를 보고
TypeScript 타입을 만들어줘.

study-signup 프로젝트 안에 새 파일로 추가하고,
기존 파일은 지우지 마.
```

## 3. 열쇠 적기 (직접 해요)

`study-signup` 폴더에 `.env.local` 파일을 **직접** 만들고 Supabase 대시보드의 API 키 화면에서 값을 붙여넣어요. 에이전트 대화창에는 붙여넣지 마세요.

```txt
NEXT_PUBLIC_SUPABASE_URL=여기에_프로젝트_주소_붙여넣기
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=여기에_publishable_열쇠_붙여넣기
SUPABASE_SECRET_KEY=여기에_secret_열쇠_붙여넣기
```

## 4. 명단 읽어오기

```txt
study-signup 프로젝트에서 모임 정보와 신청 명단을
코드에 박아두지 말고 Supabase 표에서 읽어오도록 바꿔줘.

조건은 다음과 같아.

1. Supabase 클라이언트와 secret 열쇠는 서버 쪽 파일에서만 써.
   맨 위에 "use client"가 있는 파일에서는 절대 쓰지 마
2. secret 열쇠는 .env.local에서 읽어오고 코드 안에 직접 적지 마
3. 이미 만들어둔 타입을 그대로 써서 데이터 모양을 맞춰줘.
   타입과 표의 열 이름이 다르면 표를 기준으로 타입을 다시 만들어 맞춰.
   표 자체는 바꾸지 마
4. study_sessions에서 모임 정보를, applications에서 신청 명단을 읽어와
5. 화면의 구조와 디자인은 손대지 마. 데이터를 가져오는 부분만 바꿔
6. 새로 추가하는 라이브러리는 Supabase 클라이언트 하나로 제한해줘
7. 기존 파일을 지우거나 통째로 덮어쓰지 말고 필요한 부분만 고쳐줘
8. Supabase의 표나 데이터를 지우거나 새로 만들지 마. 읽기만 하면 돼
9. 작업이 끝나면 고친 파일 목록을 알려줘
```

## 5. 신청 저장하기

```txt
study-signup 프로젝트의 신청 폼을 고쳐줘.

- 신청 버튼을 누르면 Supabase의 applications 표에 새 행 하나가
  저장되게 해줘. 이름, 연락 수단, 어느 모임에 대한 신청인지,
  남긴 시각을 담아줘
- 저장 처리는 서버 쪽에서 하고 브라우저에는 열쇠가 나가지 않게 해줘
- 저장이 끝나면 명단을 다시 읽어와서 화면을 갱신해줘
- 이름이나 연락 수단 중 하나라도 비어 있으면 저장하지 말고
  무엇을 채워야 하는지 화면에 안내만 해줘
- 저장 중 오류가 나면 화면에도 실패했다는 걸 알려줘.
  조용히 넘어가면 안 돼
- Supabase 표의 구조는 바꾸지 마. applications에 행을 추가하는 것만 해.
  다른 표나 데이터는 건드리지 마
- 기존 파일은 지우지 말고 필요한 부분만 고쳐줘
- 새 라이브러리는 추가하지 말고 지금 있는 것만 써줘
```

## 6. 배포 환경에 열쇠 넘겨주기

Vercel의 **Settings → Environment Variables**에 `.env.local`의 세 이름을 그대로 넣어요. secret 열쇠에는 `NEXT_PUBLIC_`을 붙이지 않아요. 넣은 뒤 코드를 올려요.

```txt
study-signup에서 이번에 고친 내용을 GitHub에 올려줘.

1. 먼저 git status와 git diff로 바뀐 파일을 보여줘
2. .env.local이 기록 대상에 들어 있지 않은지 확인해서 알려줘
3. 내가 확인했다고 답하면
   "feat: Supabase에서 신청 명단 읽고 쓰기"로 커밋하고 main에 push해

- .env.local은 절대 커밋하지 마
- 열쇠 값을 화면에 출력하지도 마
```

## 확인하기

- [ ] 대시보드에서 모임 제목을 고치면 화면에 반영되나요?
- [ ] 시크릿 창에서도 같은 명단이 보이나요?
- [ ] 휴대폰에서 배포 주소로 남긴 신청이 컴퓨터 화면과 Table Editor에 보이나요?
- [ ] secret 열쇠가 왜 화면 쪽 코드에 있으면 안 되는지 말할 수 있나요?
