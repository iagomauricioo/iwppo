"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "lucide-react";
import { useRef } from "react";
import { BrazilFlagIcon } from "./language-selector";
import { useTranslations } from "next-intl";

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
    name: "Douglas Apratto",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/2334413936004413",
    title: "Vice-Reitor do CESMAC",
    image: "/comissao-organizadora/douglas-apratto.jpeg",
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
    image: "/palestrantes/biagio-nova-foto.jpeg",
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
    image: "/comissao-organizadora/katia.png",
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
    country: "México",
    lattesUrl: null,
    title: "",
    image: "/palestrantes/dias.jpeg",
  },
  {
    name: "Romikson Christiano",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/0789963468825823",
    title: "",
    image: "/comissao-organizadora/romickson.jpeg",
  },
  {
    name: "Victoria Kamille",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/0462311949230820",
    title: "",
    image: "/comissao-organizadora/WhatsApp Image victoria-kamille.jpeg",
  },
  {
    name: "Alessandro Sarmento",
    country: "Brasil",
    lattesUrl: " http://lattes.cnpq.br/7440453632345842",
    title: "",
    image: "/comissao-organizadora/alessandro.jpg",
  },

    {
    name: "Clarissa Nascimento Soares",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/5106375055470886",
    title: "",
    image: "/comissao-organizadora/clarissa.jpeg",
  },

  {
    name: "Heitor Barbosa",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/3572553003745247",
    title: "",
    image: "/comissao-organizadora/heitor barbosa.jpeg",
  },

  {
    name: "Kleber Firmino da Silva",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/8230043920168127",
    title: "",
    image: "/comissao-organizadora/kleber-lere.jpeg",
  },

   {
    name: "Maria Fernanda Torres dos Santos",
    country: "Brasil",
    lattesUrl: "https://lattes.cnpq.br/7051469857398365",
    title: "",
    image: "/comissao-organizadora/mafe.jpeg",
  },

    {
    name: "Sue Reginis de Carvalho Moreira e Silva",
    country: "Brasil",
    lattesUrl: "http://lattes.cnpq.br/8752764399171308",
    title: "",
    image: "/comissao-organizadora/sue.jpeg",
  },

  {
    name: "Luis Alcides Brandini de Boni",
    country: "Brasil",
    lattesUrl: " http://lattes.cnpq.br/1040006998754753",
    title: "",
    image: "/comissao-organizadora/brandine.png",
  },


];

// Componentes de bandeira para Reino Unido (usando Austrália como solicitado) e Itália
const UKFlagIcon = () => (
  <img src="/flags/australia.png" alt="Austrália" className="inline-block align-middle mr-2 rounded-full border-2 border-white shadow ring-2 ring-blue-200 bg-white/80 transition-transform duration-150 hover:scale-110" style={{ width: 32, height: 32, objectFit: 'cover' }} />
);
const ItalyFlagIcon = () => (
  <img src="/flags/italy.png" alt="Itália" className="inline-block align-middle mr-2 rounded-full border-2 border-white shadow ring-2 ring-blue-200 bg-white/80 transition-transform duration-150 hover:scale-110" style={{ width: 32, height: 32, objectFit: 'cover' }} />
);
const MexicoFlagIcon = () => (
  <img src="/flags/mexico.png" alt="México" className="inline-block align-middle mr-2 rounded-full border-2 border-white shadow ring-2 ring-blue-200 bg-white/80 transition-transform duration-150 hover:scale-110" style={{ width: 32, height: 32, objectFit: 'cover' }} />
);

export default function ComissaoOrganizadora() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animações mais rápidas e suaves
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduzido de 0.15 para 0.05
        delayChildren: 0.1, // Reduzido de 0.3 para 0.1
        duration: 0.3, // Adicionado para tornar a transição mais rápida
      },
    },
  };

  const memberVariants = {
    hidden: {
      opacity: 0,
      y: 15, // Reduzido de 30 para 15
      rotateX: -10, // Reduzido de -30 para -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150, // Aumentado de 100 para 150
        damping: 18, // Aumentado de 12 para 18
        duration: 0.4, // Adicionado para tornar a transição mais rápida
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 }, // Reduzido de -50 para -20
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4, // Reduzido de 0.8 para 0.4
        ease: "easeOut",
      },
    },
  };
  const t = useTranslations("ComissaoOrganizadora");
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-12"
      id="comissao"
    >
      <motion.div variants={titleVariants} className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {t("title")}
        </h2>
        <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
          2<sup>nd</sup>
          {t("event_title")}
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto px-2 md:px-4"
        variants={containerVariants}
      >
        {membrosComissao.map((membro, index) => (
          <motion.div
            key={index}
            variants={memberVariants}
            whileHover={{
              scale: 1.02, // Reduzido de 1.03 para 1.02
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.15 }, // Reduzido de 0.2 para 0.15
            }}
            className="bg-white rounded-lg p-4 md:p-6 shadow-md flex flex-col items-center"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-3 md:mb-4 overflow-hidden rounded-full">
              <img
                src={membro.image || "/placeholder.svg"}
                alt={membro.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 text-center">
              {membro.name}
            </h3>
            {membro.title && (
              <p className="text-sm md:text-base text-blue-700 text-center">
                {membro.title}
              </p>
            )}
            <p className="text-sm md:text-base text-gray-600 text-center flex items-center justify-center">
              {membro.country === "Brasil" ? (
                <>
                  <BrazilFlagIcon className="h-4 w-4 mr-2" />
                </>
              ) : membro.country === "Reino Unido" ? (
                <>
                  <UKFlagIcon />
                </>
              ) : membro.country === "Itália" ? (
                <>
                  <ItalyFlagIcon />
                </>
              ) : membro.country === "México" ? (
                <>
                  <MexicoFlagIcon />
                </>
              ) : (
                membro.country
              )}
            </p>
            {membro.lattesUrl && (
              <motion.a
                href={membro.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm md:text-base text-blue-500 hover:text-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }} // Reduzido de 1.1 para 1.05
                whileTap={{ scale: 0.97 }} // Alterado de 0.95 para 0.97
              >
                Lattes <Link className="inline" size={16} />
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
          <h4 className="text-2xl md:text-3xl font-bold text-blue-900">
            {t("stats.countries.value")}
          </h4>
          <p className="text-sm md:text-base text-blue-700">
            {t("stats.countries.label")}
          </p>
        </motion.div>
        <motion.div
          variants={memberVariants}
          className="bg-blue-50 p-4 md:p-6 rounded-lg"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-blue-900">
            {t("stats.members.value")}
          </h4>
          <p className="text-sm md:text-base text-blue-700">
            {t("stats.members.label")}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
