"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { BrazilFlagIcon } from "./language-selector";
import { useTranslations } from "next-intl";

interface MemberProps {
  name: string;
  title: string;
  country: string;
  image: string;
  lattesUrl: string | null;
}

// Componentes de bandeira para Reino Unido (usando Austrália como solicitado), Itália e México
const UKFlagIcon = () => (
  <img src="/flags/australia.png" alt="Austrália" className="inline-block align-middle mr-2 rounded-full border-2 border-white shadow ring-2 ring-blue-200 bg-white/80 transition-transform duration-150 hover:scale-110" style={{ width: 32, height: 32, objectFit: 'cover' }} />
);
const ItalyFlagIcon = () => (
  <img src="/flags/italy.png" alt="Itália" className="inline-block align-middle mr-2 rounded-full border-2 border-white shadow ring-2 ring-blue-200 bg-white/80 transition-transform duration-150 hover:scale-110" style={{ width: 32, height: 32, objectFit: 'cover' }} />
);
const MexicoFlagIcon = () => (
  <img src="/flags/mexico.png" alt="México" className="inline-block align-middle mr-2 rounded-full border-2 border-white shadow ring-2 ring-blue-200 bg-white/80 transition-transform duration-150 hover:scale-110" style={{ width: 32, height: 32, objectFit: 'cover' }} />
);

export default function ComiteCientifico() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, {
    once: true, // Alterado para true para evitar repetição da animação
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const t = useTranslations("ComiteCientifico");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animações mais rápidas e suaves
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Reduzido de 0.1 para 0.03
        delayChildren: 0.1, // Reduzido de 0.2 para 0.1
        duration: 0.3, // Adicionado para tornar a transição mais rápida
      },
    },
  };

  const memberVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 5 : 15, // Reduzido de 10/30 para 5/15
      rotateX: isMobile ? 0 : -10, // Reduzido de -30 para -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150, // Aumentado de 100 para 150
        damping: 15, // Aumentado de 12 para 15
        duration: 0.4, // Adicionado para tornar a transição mais rápida
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: isMobile ? -10 : -20 }, // Reduzido de -20/-50 para -10/-20
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, // Reduzido de 0.6 para 0.3
        ease: "easeOut",
      },
    },
  };

  const comiteCientifico: MemberProps[] = [
    {
      name: "Feni Dalano Roosevelt Agostinho",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/2739577358518765",
      title: "",
      image: "/comite-cientifico/feni_dalano_roosevelt_agostinho.jpg",
    },
    {
      name: "Cecilia Maria Villas Boas de Almeida",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/1608486925932672",
      title: "",
      image: "/comite-cientifico/cecilia_maria_villas_boas_de_almeida.jpg",
    },
    {
      name: "Francisco Carlos Rocha de Barros Junior",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/1085274416109765",
      title: "",
      image: "/comite-cientifico/francisco_carlos_rocha_de_barros_junior.jpg",
    },
    {
      name: "Jairo Lizandro Schmitt",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9831871479916100",
      title: "",
      image: "/comite-cientifico/jairo_lizandro_schmitt.jpg",
    },
    {
      name: "Ana Claudia Mendes Malhado",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/6689567685438939",
      title: "",
      image: "/comite-cientifico/ana_claudia_mendes_malhado.jpg",
    },
    {
      name: "Federico Sulis",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/3008783829641984",
      title: "",
      image: "/comite-cientifico/federico_sulis.jpg",
    },
    {
      name: "Leticia Anderson Bassi",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/5902741462403490",
      title: "",
      image: "/comite-cientifico/leticia_anderson_bassi.jpg",
    },
    {
      name: "Enio Jose Bassi",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/7909865785610711",
      title: "",
      image: "/comite-cientifico/enio_jose_bassi.jpg",
    },
    {
      name: "Ciro Ramon Felix dos Santos Silva",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/7247502886182545",
      title: "",
      image: "/comite-cientifico/ciro_ramon_felix_dos_santos_silva.jpg",
    },
    
    {
      name: "Oscarina Viana de Sousa",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/6529999796909142",
      title: "",
      image: "/comite-cientifico/oscarina_viana.png",
    },
    {
      name: "Thiago Jose Matos Rocha",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9228726128290600",
      title: "",
      image: "/comite-cientifico/thiago_jose_matos_rocha.jpg",
    },
    {
      name: "Aldenir Feitosa dos Santos",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/4486728733567129",
      title: "",
      image: "/comite-cientifico/aldenir_feitosa_dos_santos.jpg",
    },
    {
      name: "Marcell Mariano Correa Maceno",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/5020237977975416",
      title: "",
      image: "/palestrantes/marcell.jpeg",
    },
    {
      name: "Thyago Anthony Soares Lima",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/1714186197608991",
      title: "",
      image: "/comite-cientifico/thyago_anthony_soares_lima.jpg",
    },
    {
      name: "Juliana de Carvalho Gaeta",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/4263676415808125",
      title: "",
      image: "/comite-cientifico/juliana_carvalho.png",
    },
    {
      name: "Livia Maria Batista Vilela",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9131024465339491",
      title: "",
      image: "/comite-cientifico/livia_maria_batista_vilela.jpg",
    },
    {
      name: "Eugenio Dantas Gomes Lima",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/5825503745817361",
      title: "",
      image: "/comite-cientifico/eugenio_dantas_gomes_lima.jpg",
    },
    {
      name: "Joao Paulo Lopes da Silva",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/2493672197811747",
      title: "",
      image: "/comite-cientifico/joao_paulo_lopes_da_silva.jpg",
    },
    {
      name: "Giulliano Aires Anderlini",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9921213344241191",
      title: "",
      image: "/comite-cientifico/giulliano_aires_anderlini.jpg",
    },
    {
      name: "Scott Paton Wilson",
      country: "Reino Unido",
      lattesUrl: null,
      title: "",
      image: "/comite-cientifico/scott_patton_wilson.jpg",
    
    },

    {
      name: "Michella Grey Araújo Monteiro
",
      country: "Brasil",
      lattesUrl: http://lattes.cnpq.br/1558272977434037,
      title: "",
      image: "/comite-cientifico/Michella Grey Araújo Monteiro.jpeg",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || isMobile ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-12 bg-white relative z-10 min-h-[200px]"
      id="comite-cientifico"
    >
      <motion.div
        variants={titleVariants}
        className="text-center mb-8 md:mb-12 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto px-2 md:px-4 relative"
        variants={containerVariants}
      >
        {comiteCientifico.map((membro, index) => (
          <motion.div
            key={index}
            variants={memberVariants}
            whileHover={{
              scale: 1.02, // Reduzido de 1.03 para 1.02
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.15 }, // Reduzido de 0.2 para 0.15
            }}
            className="bg-white rounded-lg p-4 md:p-6 shadow-md flex flex-col items-center relative z-20"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-3 md:mb-4 overflow-hidden rounded-full">
              <img
                src={membro.image || "/placeholder.svg"}
                alt={membro.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-900 text-center">
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
    </motion.div>
  );
}
