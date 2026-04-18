"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
      aria-pressed={isDark}
    >
      <span aria-hidden="true">{isDark ? "\ud83c\udf19" : "\u2600\ufe0f"}</span>
      <span>{isDark ? "Che do toi" : "Che do sang"}</span>
    </button>
  );
}
