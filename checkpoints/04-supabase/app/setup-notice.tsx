// 창고(Supabase)가 아직 준비되지 않았을 때 하얀 오류 화면 대신 보여주는 안내예요.

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SetupNotice({ title, children }: Props) {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <div className="rounded-xl border border-amber-300 bg-amber-50 p-6 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="mt-3 space-y-2 text-sm leading-6">{children}</div>
      </div>
    </main>
  );
}
