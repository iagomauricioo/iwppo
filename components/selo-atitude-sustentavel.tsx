"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

interface SeloSustentavelProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SeloSustentavel({
  className = "",
  size = "md",
}: SeloSustentavelProps) {
  // Definir tamanhos baseados na prop size
  const dimensions = {
    sm: { width: 100, height: 100, fontSize: "text-xs", iconSize: 14 },
    md: { width: 150, height: 150, fontSize: "text-sm", iconSize: 20 },
    lg: { width: 200, height: 200, fontSize: "text-base", iconSize: 28 },
  };

  const { width, height, fontSize, iconSize } = dimensions[size];

  // Animações
  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Selo principal com pulso */}
      <motion.div
        className="relative"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        style={{ width, height }}
      >
        {/* Círculo externo rotativo */}
        <motion.div
          className="absolute inset-0"
          variants={rotateVariants}
          initial="initial"
          animate="animate"
        >
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx={width / 2}
              cy={height / 2}
              r={width / 2 - 5}
              stroke="#0077B6"
              strokeWidth="2"
              strokeDasharray="6 4"
              variants={drawVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </motion.div>

        {/* Círculo interno */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg
            width={width - 20}
            height={height - 20}
            viewBox={`0 0 ${width - 20} ${height - 20}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" }}
          >
            <motion.circle
              cx={(width - 20) / 2}
              cy={(height - 20) / 2}
              r={(width - 20) / 2}
              fill="#CAF0F8"
              variants={drawVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            />
          </svg>
        </motion.div>

        {/* Conteúdo do selo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-center"
          >
            {/* Ícone de folha */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, 0] }}
              transition={{
                scale: { duration: 0.5, delay: 1.2 },
                rotate: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              <Leaf size={iconSize} className="text-blue-700 mb-1" />
            </motion.div>

            {/* Texto "Atitude" */}
            <motion.div
              className={`font-bold ${fontSize} text-blue-900 tracking-wider`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              ATITUDE
            </motion.div>

            {/* Texto "Sustentável" */}
            <motion.div
              className={`font-bold ${fontSize} text-blue-700 tracking-wider`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              SUSTENTÁVEL
            </motion.div>
          </motion.div>
        </div>

        {/* Borda serrilhada */}
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d={generateZigZagCirclePath(
                width / 2,
                height / 2,
                width / 2 - 2,
                40
              )}
              stroke="#0096C7"
              strokeWidth="1.5"
              fill="none"
              variants={drawVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Função para gerar um caminho de círculo serrilhado
function generateZigZagCirclePath(
  centerX: number,
  centerY: number,
  radius: number,
  points: number
): string {
  let path = "";
  const angleStep = (2 * Math.PI) / points;

  for (let i = 0; i < points; i++) {
    const angle = i * angleStep;
    const outerRadius = radius + (i % 2 === 0 ? 3 : 0);
    const x = centerX + outerRadius * Math.cos(angle);
    const y = centerY + outerRadius * Math.sin(angle);

    if (i === 0) {
      path += `M ${x} ${y} `;
    } else {
      path += `L ${x} ${y} `;
    }
  }

  path += "Z";
  return path;
}
