import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="vi" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col">
        <TooltipProvider>
          <Navbar />
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
