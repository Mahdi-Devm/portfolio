import type React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function CardWrapper({
  children,
  className = "",
  onMouseEnter,
  onMouseLeave,
}: CardWrapperProps) {
  return (
    <div
      className={`bg-card rounded-lg p-6 border border-primary/20 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
