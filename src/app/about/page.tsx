import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-14 w-14">
          <AvatarFallback className="text-lg font-semibold">L</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold">Giới thiệu</h1>
      </div>

      <div className="space-y-4 text-gray-700">
        <p>
          Xin chào! Tôi là <strong>Lâm Quốc</strong>, sinh viên ngành Công nghệ
          Thông tin tại Đại học Đà Lạt, định hướng phát triển Fullstack Web
          Developer.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.js</li>
          <li>Node.js & Express</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>SQL (MySQL / PostgreSQL)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-gray-500">Công nghệ Thông tin (2022 — 2026)</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Mục tiêu</h2>
        <p>
          Trở thành Fullstack Developer, xây dựng các ứng dụng web thực tế và
          nâng cao kỹ năng làm việc với hệ thống backend & frontend.
        </p>
      </div>
    </div>
  );
}
