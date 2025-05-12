"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  logo: string;
  duration?: number; // duração em segundos antes do auto-fade
}

export default function SplashScreen({
  logo,
  duration = 1,
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Efeito para iniciar o fade out após a duração especificada
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#0A0F70]"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-48 h-48 md:w-64 md:h-64 relative"
        >
          <Image
            src={logo || "/placeholder.svg"}
            alt="IWPPO Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
