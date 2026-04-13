import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full text-center">
        {/* Avatar (có thể thêm sau) */}
        <div className="mb-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
            L
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Xin chào! 👋</h1>

        <p className="text-gray-500 mb-6">
          Đây là trang giới thiệu cá nhân của tôi
        </p>

        {/* Info */}
        <div className="text-left space-y-2 mb-6">
          <p>
            <strong>👤 Họ và tên:</strong> Nguyễn Lê Quốc Lâm
          </p>
          <p>
            <strong>🏫 Lớp:</strong> CTK46B
          </p>
          <p>
            <strong>🆔 MSSV:</strong> 2212399
          </p>
          <p>
            <strong>📘 Môn học:</strong> Các công nghệ mới trong PTPM
          </p>
        </div>

        {/* Sở thích + mục tiêu */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-2">🎯 Sở thích</h2>
            <p className="text-sm text-gray-600">Ngủ 😴</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-2">🚀 Mục tiêu</h2>
            <p className="text-sm text-gray-600">Trở thành Backend Developer</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
          🚀 Đây là project Next.js đầu tiên của tôi!
        </div>
      </div>
    </main>
  );
}
