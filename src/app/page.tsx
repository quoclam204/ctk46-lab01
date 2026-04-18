import Link from "next/link";
import Counter from "@/src/components/counter";
import CopyButton from "@/src/components/copy-button";

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
        <CopyButton text="nguyenlequoc@gmail.com" />
      </div>

      <div className="mt-12 flex justify-center">
        <Counter />
      </div>
    </div>
  );
}
