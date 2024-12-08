export default function DashboardContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="flex flex-col h-full text-slate-950 p-4">
        <h1>Hello There!</h1>
        {children}
    </section>
  );
}