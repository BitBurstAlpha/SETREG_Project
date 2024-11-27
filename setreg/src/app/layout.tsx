import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "SETReG - Connecting Clients with Engineering Experts",
  description: "Connecting Clients with Engineering Experts for a Sustainable Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-green-500 flex flex-col text-gray-900 font-sans">
        {/* Header */}
        <header className="bg-green-600 text-white sticky top-0 z-50 shadow-md">
          <div className="flex justify-between items-center p-5 max-w-screen-xl mx-auto">
            <Link href="/">
              <Image
                src="/setreg-logo.png"
                alt="setreg logo"
                width={150}
                height={60}
                priority
                className="logo"
              />
            </Link>
            <nav className="flex gap-8 text-lg">
              <Link href="/Jobs">Jobs</Link>
              <Link href="/Dashboard">Dashboard</Link>
              <Link href="/Payments">Payments</Link>
              <Link href="/Rating">Rating</Link>
              <div className="bg-green-700 p-3 rounded-lg">
                <Link href="/signup">
                  <button className="text-white font-semibold">Join</button>
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-20 pb-10"> {/* Adjusted padding for sticky header */}
          <div className="content-wrapper max-w-screen-xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-5">
          <div className="footer-container text-center">
            <p>&copy; {new Date().getFullYear()} SETReG. All Rights Reserved.</p>
            <nav className="mt-4">
              <a href="#" className="mx-3">About</a>
              <a href="#" className="mx-3">Privacy Policy</a>
              <a href="#" className="mx-3">Terms and Conditions</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}







