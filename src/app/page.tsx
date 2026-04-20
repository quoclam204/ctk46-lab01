import Link from "next/link";
import Counter from "@/src/components/counter";
import CopyButton from "@/src/components/copy-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* HERO SECTION */}
      <div className="text-center mb-16">
        {/* Avatar */}
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl font-bold text-blue-600">LQ</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là <span className="text-blue-600">Lâm Quốc</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Định hướng phát
          triển Fullstack Web Developer, yêu thích Next.js, React và các công
          nghệ web hiện đại.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg
                       hover:bg-blue-700 transition-colors"
          >
            Xem dự án
          </Link>

          <Link
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg
                       hover:bg-gray-100 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "C",
            "C#",
            "Java",
            "JavaScript",
            "Python",
            ".NET",
            "Node.js",
            "React",
            "Express",
            "HTML5",
            "CSS3",
            "MySQL",
            "MongoDB",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 rounded-lg p-4 text-center font-medium shadow-sm
                         hover:bg-blue-50 hover:text-blue-600 hover:shadow-md
                         transition-all cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Alert className="mb-16">
        <AlertTitle>Đang mở nhận dự án nhỏ</AlertTitle>
        <AlertDescription>
          Nếu bạn cần hỗ trợ một landing page hoặc chỉnh sửa UI, hãy gửi lời
          nhắn. Tôi sẽ phản hồi sớm.
        </AlertDescription>
      </Alert>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Câu hỏi nhanh</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Bạn đang học gì?</AccordionTrigger>
            <AccordionContent>
              Mình tập trung vào Next.js, React và xây dựng API bằng Node.js.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Mục tiêu hiện tại là gì?</AccordionTrigger>
            <AccordionContent>
              Hoàn thiện portfolio và tham gia các dự án thực tế để nâng kỹ
              năng.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Liên hệ nhanh thế nào?</AccordionTrigger>
            <AccordionContent>
              Bạn có thể dùng form Contact hoặc bấm nút copy email ngay bên
              dưới.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* CTA SECTION */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Blog cá nhân</h2>

        <p className="text-gray-600 mb-4">
          Chia sẻ kiến thức về lập trình web, Next.js và kinh nghiệm học IT
        </p>

        <Link
          href="/blog"
          className="text-blue-600 font-semibold hover:underline"
        >
          Xem blog →
        </Link>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="text-sm text-gray-500">Copy email liên hệ</p>
        <Tooltip>
          <TooltipTrigger asChild>
            <CopyButton text="nguyenlequoc@gmail.com" />
          </TooltipTrigger>
          <TooltipContent>Nhấn để sao chép email</TooltipContent>
        </Tooltip>
      </div>

      <div className="mt-12 flex justify-center">
        <Counter />
      </div>
    </div>
  );
}
