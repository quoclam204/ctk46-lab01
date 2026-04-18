"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 shadow-sm border-b backdrop-blur-sm ring-1 ring-black/5 dark:bg-gray-900/90 dark:border-gray-800 dark:ring-white/10">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-blue-600 dark:text-blue-400"
          >
            QUỐC LÂM
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900"
            aria-label="Mở menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Giới thiệu
            </Link>
            <Link
              href="/skills"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Kỹ năng
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Dự án
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Liên hệ
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="mt-3 flex flex-col gap-2 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white/80 p-2 md:hidden dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900/80">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link
              href="/skills"
              className="rounded-md px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Kỹ năng
            </Link>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Dự án
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
