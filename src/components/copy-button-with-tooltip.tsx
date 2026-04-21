"use client";

import { useEffect, useState } from "react";
import CopyButton from "@/src/components/copy-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CopyButtonWithTooltipProps = {
  text: string;
  tooltipText?: string;
  className?: string;
};

export default function CopyButtonWithTooltip({
  text,
  tooltipText = "Nhan de sao chep email",
  className,
}: CopyButtonWithTooltipProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <CopyButton text={text} className={className} />;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <CopyButton text={text} className={className} />
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
}
