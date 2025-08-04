"use client";

import Image from "next/image";

interface SeloSustentavelProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SeloSustentavel({
  className = "",
  size = "md",
}: SeloSustentavelProps) {
  // Definir tamanhos em pixels
  const dimensions = {
    sm: 100,
    md: 150,
    lg: 200,
  };

  const sizePx = dimensions[size];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/Selo Sustentável (1).png"
        alt="Selo Atitude Sustentável"
        width={sizePx}
        height={sizePx}
        priority
      />
    </div>
  );
}
