import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const name = "Test User";

  return (
    <section className="flex flex-col h-screen">

      <div className="bg-slate-500 w-full h-12 flex justify-between items-center">  
        <div className="w-1/3 flex items-center">
          <span className="ml-4">Logo + Title</span>
        </div>
        
        <div className="w-1/3 flex justify-center items-center">
          <span>Center info?</span>
        </div>
        
        <div className="w-1/3 flex justify-end items-center">
          <span className="mr-4">{name}</span>
          <button className="mr-4 p-2 rounded-md bg-red-700">Logout</button>
        </div>
      </div>

      {/* Navigation tabs manipulate URL to change content */}
      <section className="bg-slate-600 flex h-full">
        <nav className="p-2 bg-red-500 h-full w-48">
          <Link href={"/dashboard/media"}><div className="hover:bg-purple-500">Media</div></Link>
          <Link href={"/dashboard/packages"}><div className="hover:bg-purple-500">Packages</div></Link>
          <Link href={"/dashboard/keys"}><div className="hover:bg-purple-500">Keys</div></Link>
        </nav>

        {children}
      </section>
    </section>
  );
}
