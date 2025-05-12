import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Parceiros() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="w-full py-12 bg-blue-100" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Nossos Parceiros
          </h2>
          <p className="max-w-[700px] text-blue-700 md:text-xl">
            Trabalhamos com as melhores empresas para oferecer soluções de
            qualidade
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {parceiros.map((parceiro, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "#F0F9FF", // Leve tom azulado ao passar o mouse
              }}
            >
              <Image
                src={parceiro.logo || "/placeholder.svg"}
                alt={parceiro.nome}
                width={250}
                height={0}
                className="object-contain max-h-[142px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Dados dos parceiros (substitua com os dados reais)
const parceiros = [
  {
    nome: "Parceiro 1",
    logo: "/parceiros/capes.png",
  },
  {
    nome: "Parceiro 2",
    logo: "/parceiros/cnpq.png",
  },
  {
    nome: "Parceiro 3",
    logo: "/parceiros/fapeal.png",
  },
  {
    nome: "Parceiro 4",
    logo: "/parceiros/cesmac.png",
  },
  {
    nome: "Parceiro 5",
    logo: "/parceiros/oceandecade.png",
  },
  {
    nome: "Parceiro 6",
    logo: "/parceiros/athena.png",
  },
];
