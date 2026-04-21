import Link from "next/link";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/pokemon", label: "Pokemon" },
  { href: "/guestbook", label: "Lưu bút" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            Portfolio
          </Link>

          {/* Menu */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
