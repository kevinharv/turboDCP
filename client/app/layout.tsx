import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Authentication from "@/components/Authentication";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TurboDCP",
  description: "Blazingly fast transcoding and packaging for cinema distribution!",
};

// To-Do - check based on session (probably checked by middleware, used here)
const isLoggedIn = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isLoggedIn && <Authentication />}

        {isLoggedIn && children}
      </body>
    </html>
  );
}
