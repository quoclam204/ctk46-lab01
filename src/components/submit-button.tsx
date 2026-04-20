"use client";

import { useFormStatus } from "react-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pendingLabel?: ReactNode;
}

export default function SubmitButton({
  pendingLabel,
  children,
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const isDisabled = pending || disabled;

  return (
    <button
      {...props}
      type={props.type ?? "submit"}
      className={className}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {pending ? (pendingLabel ?? children) : children}
    </button>
  );
}
