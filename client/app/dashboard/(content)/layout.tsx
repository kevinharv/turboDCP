export default function DashboardContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="flex flex-col h-full w-full text-slate-950 p-4">
        {children}
    </section>
  );
}