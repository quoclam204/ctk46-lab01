import Link from "next/link";
import Counter from "@/src/components/counter";
import CopyButtonWithTooltip from "@/src/components/copy-button-with-tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Pokemon = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

export default async function HomePage() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Ditto data");
  }

  const ditto = (await response.json()) as Pokemon;
  const heightMeters = ditto.height / 10;
  const weightKg = ditto.weight / 10;
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

      {/* DITTO SECTION */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Thông tin Pokemon: Ditto
        </h2>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center">
            {ditto.sprites.front_default ? (
              <img
                src={ditto.sprites.front_default}
                alt={`Pokemon ${ditto.name}`}
                className="w-20 h-20"
              />
            ) : (
              <span className="text-sm text-gray-500">No image</span>
            )}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold capitalize">{ditto.name}</p>
            <p className="text-sm text-gray-600">
              Cao: {heightMeters} m • Nặng: {weightKg} kg
            </p>
            <p className="text-sm text-gray-600">
              Hệ: {ditto.types.map((item) => item.type.name).join(", ")}
            </p>
          </div>
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
        <CopyButtonWithTooltip
          text="nguyenlequoc@gmail.com"
          tooltipText="Nhấn để sao chép email"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <Counter />
      </div>
    </div>
  );
}
