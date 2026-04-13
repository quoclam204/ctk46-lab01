import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Nguyễn Lê Quốc Lâm</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Lớp: <strong>CTK46B</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212399</strong>
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <p className="text-xl text-gray-600 mb-6">Sở thích: Thích ngủ</p>
        <p className="text-xl text-gray-600 mb-6">
          Mục tiêu: Trở thành Backend Developer
        </p>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800">
            🚀 Đây là project Next.JS đầu tiên của tôi!
          </p>
        </div>
      </div>
    </main>
  );
}
