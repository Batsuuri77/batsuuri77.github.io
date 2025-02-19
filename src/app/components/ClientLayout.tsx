"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if the current route is "/about"
  const isAboutPage = pathname === "/pages/about";

  return (
    <>
      <Header />
      {children}
      {/* Conditionally render Footer based on the current route */}
      {!isAboutPage && <Footer />}
    </>
  );
}
