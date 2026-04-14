export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm space-y-2">
        <p>
          © 2026 — Nguyễn Lê Quốc Lâm | CTK46 — Các công nghệ mới trong PTPM
        </p>

        <div className="flex justify-center gap-4 text-sm">
          {/* GitHub */}
          <a
            href="https://github.com/quoclam204"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:nguyenlequoclam@gmail.com"
            className="hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
