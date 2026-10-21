-- 스터디 신청 페이지의 표 두 개예요.
-- 강의에서는 에이전트가 Supabase에 직접 만들어요. 체크포인트에서 이어가는 경우에만
-- Supabase 대시보드의 SQL Editor에 이 파일 내용을 붙여넣고 실행하세요.

-- 모임 정보: 한 번 정하면 잘 안 바뀌는 값
create table if not exists public.study_sessions (
  id bigint generated always as identity primary key,
  title text not null,
  schedule text not null,
  capacity integer not null check (capacity > 0)
);

-- 신청 명단: 신청할 때마다 계속 쌓이는 값
create table if not exists public.applications (
  id bigint generated always as identity primary key,
  session_id bigint not null references public.study_sessions (id),
  name text not null,
  contact text not null,
  created_at timestamptz not null default now()
);

-- 잠금(RLS)을 켜요. 정책을 만들지 않았으니 publishable 열쇠로는 아무것도 읽히지 않고,
-- 서버 쪽에서 secret 열쇠로만 읽고 써요.
alter table public.study_sessions enable row level security;
alter table public.applications enable row level security;

-- 예시 데이터 (PRD 비고). 실제 이름과 연락처는 넣지 않아요.
insert into public.study_sessions (title, schedule, capacity)
values ('주 1회 알고리즘 스터디', '매주 토요일 오전 10시', 8);

insert into public.applications (session_id, name, contact)
select id, v.name, v.contact
from public.study_sessions
cross join (values
  ('김민준', '카카오톡 ID'),
  ('이서연', '이메일'),
  ('박지훈', '카카오톡 ID')
) as v(name, contact)
where title = '주 1회 알고리즘 스터디';
