# 지금 단계: GitHub에 올리기 끝

이 폴더는 강의 「GitHub에 소스 올리기」를 마친 상태예요.
(노션: https://app.notion.com/p/3a7ecd5a3ac281a7b3a8ecd2a3dbcfab)

## 지금까지 한 일

- 「Next.js로 화면 만들기」에서 모임 정보, 신청 폼, 신청자 수, 명단이 있는 화면을 만들었어요.
- `.gitignore`가 `node_modules`, `.next`, 실제 `.env` 파일을 막고 `.env.example`만 허용하게 보완했어요.
- `README.md`에 프로젝트 설명, 실행 방법, "신청은 브라우저 안에서만 유지돼요" 안내, 학습 목적을 적었어요.

| 파일 | 누구의 일 |
|---|---|
| `app/page.tsx` | 서버 쪽. 모임 정보를 미리 그려서 보내요 |
| `app/signup-section.tsx` | 화면 쪽(`"use client"`). 신청을 받고 명단을 보여줘요 |
| `lib/sample-data.ts` | PRD 비고에 있는 예시 데이터 |

## 체크포인트에서 이어가는 경우

이 폴더에는 Git 기록이 들어 있지 않아요. 강의의 흐름대로 **내 GitHub 계정에 private 저장소를 새로 만들어** 올리면 돼요.
에이전트에게 "저장해줘" 또는 "GitHub에 올려줘"라고 하면 `save-progress` 절차로 진행해요.

## 일부러 안 되는 것 (정상이에요)

- 새로고침하면 방금 남긴 신청이 사라져요. 아직 창고(데이터베이스)가 없어요.
- GitHub 저장소 주소를 열면 코드 파일만 보여요. **GitHub는 코드를 보관하는 곳이지 실행하는 곳이 아니에요.** 신청 페이지가 열리는 주소는 다음 강의에서 만들어요.

## 실행하기

```bash
npm install
npm run dev
```

## 다음 강의

「Vercel로 배포하기」 (https://app.notion.com/p/3b7ecd5a3ac2812b8ef8c14207993fc9)
GitHub 저장소를 Vercel에 연결해, 누구에게든 보낼 수 있는 주소를 만들어요.
