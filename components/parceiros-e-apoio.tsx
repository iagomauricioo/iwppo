"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Dados dos parceiros, apoiadores e realizadores
const parceiros = [
  {
    nome: "Parceiro 3",
    logo: "/parceiros/fapeal.png",
  },
  {
    nome: "Parceiro 5",
    logo: "/parceiros/oceandecade.png",
  },
  {
    nome: "Parceiro 6",
    logo: "/parceiros/athena.png",
  },
  {
    nome: "Parceiro 7",
    logo: "/parceiros/numas.png",
  },
  {
    nome: "Parceiro 8",
    logo: "/parceiros/oceanosdeplastico.png",
  },
  {
    nome: "Parceiro 9",
    logo: "/parceiros/unesco.png",
  },
  {
    nome: "Parceiro 10",
    logo: "/parceiros/vittia.png",
  },
  {
    nome: "Parceiro 11",
    logo: "/parceiros/acpn.png",
  },
];

const apoiadores = [
  {
    nome: "CAPES",
    logo: "/parceiros/capes.png",
    descricao: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
  },
  {
    nome: "CNPq",
    logo: "/parceiros/cnpq.png",
    descricao: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
  },
];

const realizadores = [
  {
    nome: "Centro Universitário CESMAC",
    logo: "/parceiros/cesmac.png",
    descricao:
      "Instituição de ensino superior comprometida com a excelência acadêmica e a formação de profissionais qualificados.",
    website: "https://www.cesmac.edu.br/",
  },
  {
    nome: "PPGASA - Programa de Pós-Graduação em Análise de Sistemas Ambientais",
    logo: "/parceiros/ppgasa.png",
    descricao:
      "Programa de pós-graduação dedicado à pesquisa e formação em análise de sistemas ambientais.",
    website:
      "https://www.cesmac.edu.br/pos-graduacao/stricto-sensu/analise-de-sistemas-ambientais",
  },
];

// Componente de Seção reutilizável para Parceiros, Apoio e Realização
function SecaoAnimada({
  id,
  titulo,
  itens,
  bgColor = "bg-blue-100",
  textColor = "text-blue-900",
  mostrarDescricao = false,
  mostrarWebsite = false,
  tamanhoLogo = "max-h-[142px]",
  colunas = "sm:grid-cols-3 lg:grid-cols-4",
}: {
  id: string;
  titulo: string;
  itens: Array<{
    nome: string;
    logo: string;
    descricao?: string;
    website?: string;
  }>;
  bgColor?: string;
  textColor?: string;
  mostrarDescricao?: boolean;
  mostrarWebsite?: boolean;
  tamanhoLogo?: string;
  colunas?: string;
}) {
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
    <section className={`w-full py-12 ${bgColor}`} ref={ref} id={id}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${textColor}`}
          >
            {titulo}
          </h2>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 ${
            mostrarDescricao ? "sm:grid-cols-2" : colunas
          } gap-8 mt-12`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {itens.map((item, index) => (
            <motion.div
              key={index}
              className={`flex ${
                mostrarDescricao ? "flex-col" : ""
              } items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "#F0F9FF", // Leve tom azulado ao passar o mouse
              }}
            >
              <div
                className={`${
                  mostrarDescricao ? "mb-4" : ""
                } flex justify-center items-center`}
              >
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={item.nome}
                  width={300}
                  height={150}
                  className={`object-contain ${tamanhoLogo}`}
                />
              </div>

              {mostrarDescricao && item.descricao && (
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2 text-blue-800">
                    {item.nome}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{item.descricao}</p>
                  {mostrarWebsite && item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      Website
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Componente principal que renderiza todas as seções
export default function ParceirosEApoio() {
  return (
    <>
      <SecaoAnimada
        id="realizacao"
        titulo="Realização"
        itens={realizadores}
        bgColor="bg-blue-50"
        mostrarDescricao={true}
        mostrarWebsite={true}
        tamanhoLogo="max-h-[200px]"
        colunas="sm:grid-cols-2"
      />
      <SecaoAnimada
        id="apoio"
        titulo="Apoio"
        itens={apoiadores}
        bgColor="bg-blue-100"
        mostrarDescricao={true}
      />
      <SecaoAnimada
        id="parceiros"
        titulo="Nossos Parceiros"
        itens={parceiros}
        bgColor="bg-blue-50"
        colunas="sm:grid-cols-3"
      />
    </>
  );
}
