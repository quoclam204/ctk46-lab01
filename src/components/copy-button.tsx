"use client";

import * as React from "react";
import { useState } from "react";

type CopyButtonProps = {
  text: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ text, className, type = "button", ...props }, ref) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      } catch {
        setCopied(false);
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={handleCopy}
        className={
          className ??
          "inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        }
        aria-live="polite"
        {...props}
      >
        {copied ? "Đã copy!" : "Copy"}
      </button>
    );
  },
);

CopyButton.displayName = "CopyButton";

export default CopyButton;
