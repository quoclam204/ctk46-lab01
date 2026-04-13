import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Lê Quốc Lâm - Trang cá nhân",
  description: "Sinh viên CTK46B, định hướng trở thành Backend Developer",
  keywords: ["Quốc Lâm", "Backend Developer", "CTK46B", "Next.js"],
  authors: [{ name: "Nguyễn Lê Quốc Lâm" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
