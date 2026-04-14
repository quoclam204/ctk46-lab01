export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>

      <div className="space-y-4 text-gray-700">
        <div className="bg-gray-50 rounded-lg p-6 space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:nguyenlequoclam@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nguyenlequoclam@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/quoclam204"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/quoclam204
            </a>
          </p>

          <p>
            <strong>Trường:</strong> Đại học Đà Lạt (Dalat University)
          </p>

          <p>
            <strong>Vị trí:</strong> Lâm Đồng, Việt Nam
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Kết nối với tôi</h2>
          <p className="text-gray-600">
            Tôi luôn sẵn sàng hợp tác trong các dự án web (React, Next.js,
            Node.js) hoặc thực tập / freelance.
          </p>
        </div>
      </div>
    </div>
  );
}
