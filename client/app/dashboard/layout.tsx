import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "TurboDCP | Dashboard",
  description: "TurboDCP management dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <section className="flex flex-col h-screen">
     <Header /> 

      <section className="bg-gray-300 flex h-full">
        <Navigation />

        {children}
      </section>
    </section>
  );
}
