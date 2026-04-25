import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ktaliman trading",
  description: "Personal trading terminal MVP for COT + macro analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
