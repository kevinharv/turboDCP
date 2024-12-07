export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        Header Bar - something thin with title, basic info, user
        login/logout/profile
      </div>
      <nav>Navigation Bar</nav>

      {children}
    </section>
  );
}
