import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finsensa — See 13-week cash in 60s",
  description: "Cash forecast, alerts, and lender-ready snapshot for UK SMEs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
