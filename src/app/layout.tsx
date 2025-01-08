import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian - Portfolio",
  description: "Julian's personal website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center w-full">
        {children}
      </body>
    </html>
  );
}
