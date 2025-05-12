import EquipeGrid from "./equipe-grid";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface MemberProps {
  name: string;
  title: string;
  country: string;
  image: string;
  lattesUrl: string | null;
}

const membrosComissao: MemberProps[] = [
  {
    name: "Jessé Marques Pavão",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/2811263859126204",
    title: "Presidente do evento",
    image: "/comissao-organizadora/jesse.png",
  },
  {
    name: "Selenobaldo Alexinaldo",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/4011554123832368",
    title: "",
    image: "/comissao-organizadora/selenobaldo.png",
  },
  {
    name: "Marcelo Reis",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/5766916493726386",
    title: "",
    image: "/comissao-organizadora/marcelo.png",
  },
  {
    name: "Biagio Fernando Giannetti",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/6709596635808853",
    title: "",
    image: "/comissao-organizadora/biagio.png",
  },
  {
    name: "Jarcilene Silva de Almeida",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/3305390900674832",
    title: "",
    image: "/comissao-organizadora/jarcilene.png",
  },
  {
    name: "Richard James Ladle",
    country: "Reino Unido",
    lattesUrl: "http://lattes.cnpq.br/9442171708024416",
    title: "",
    image: "/comissao-organizadora/richard.png",
  },
  {
    name: "Katia Viana Cavalcante",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/2715253110435470",
    title: "",
    image: "/comissao-organizadora/profile.png",
  },
  {
    name: "Cristiane de Souza Siqueira Pereira",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/8723281922978435",
    title: "",
    image: "/comissao-organizadora/cristiane.png",
  },
  {
    name: "Fernando J. Dìas Lopez",
    country: "Estrangeiro",
    lattesUrl: null,
    title: "",
    image: "/comissao-organizadora/profile.png",
  },
];

export default function ComissaoOrganizadora() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const memberVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-12"
    >
      <motion.div
        variants={titleVariants}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Comissão Organizadora
        </h2>
        <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
          2nd International Workshop on Plastic Pollution in the Oceans
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Nosso comissão organizadora é composta por renomados pesquisadores e especialistas internacionais dedicados ao estudo e combate da poluição plástica nos oceanos.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto px-2 md:px-4"
        variants={containerVariants}
      >
        {membrosComissao.map((membro, index) => (
          <motion.div
            key={index}
            variants={memberVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-lg p-4 md:p-6 shadow-md flex flex-col items-center"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-3 md:mb-4 overflow-hidden rounded-full">
              <img
                src={membro.image}
                alt={membro.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 text-center">{membro.name}</h3>
            {membro.title && <p className="text-sm md:text-base text-blue-700 text-center">{membro.title}</p>}
            <p className="text-sm md:text-base text-gray-600 text-center">{membro.country}</p>
            {membro.lattesUrl && (
              <motion.a
                href={membro.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm md:text-base text-blue-500 hover:text-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Lattes
              </motion.a>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto mt-8 md:mt-12 px-2 md:px-4 text-center"
      >
        <motion.div
          variants={memberVariants}
          className="bg-blue-50 p-4 md:p-6 rounded-lg"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-blue-900">15+</h4>
          <p className="text-sm md:text-base text-blue-700">Países Representados</p>
        </motion.div>
        <motion.div
          variants={memberVariants}
          className="bg-blue-50 p-4 md:p-6 rounded-lg"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-blue-900">30+</h4>
          <p className="text-sm md:text-base text-blue-700">Membros do Comitê</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
