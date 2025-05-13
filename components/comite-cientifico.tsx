import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MemberProps {
  name: string;
  title: string;
  country: string;
  image: string;
  lattesUrl: string | null;
}

export default function ComiteCientifico() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.1,
    margin: "0px 0px -100px 0px"
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const memberVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 10 : 30,
      rotateX: isMobile ? 0 : -30,
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
    hidden: { opacity: 0, x: isMobile ? -20 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
      image: "/comite-cientifico/feni_dalano_roosevelt_agostinho.jpg"
    },
    {
      name: "Cecilia Maria Villas Boas de Almeida",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/1608486925932672",
      title: "",
      image: "/comite-cientifico/cecilia_maria_villas_boas_de_almeida.jpg"
    },
    {
      name: "Francisco Carlos Rocha de Barros Junior",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/1085274416109765",
      title: "",
      image: "/comite-cientifico/francisco_carlos_rocha_de_barros_junior.jpg"
    },
    {
      name: "Jairo Lizandro Schmitt",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9831871479916100",
      title: "",
      image: "/comite-cientifico/jairo_lizandro_schmitt.jpg"
    },
    {
      name: "Ana Claudia Mendes Malhado",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/6689567685438939",
      title: "",
      image: "/comite-cientifico/ana_claudia_mendes_malhado.jpg"
    },
    {
      name: "Federico Sulis",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/3008783829641984",
      title: "",
      image: "/comite-cientifico/federico_sulis.jpg"
    },
    {
      name: "Leticia Anderson Bassi",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/5902741462403490",
      title: "",
      image: "/comite-cientifico/leticia_anderson_bassi.jpg"
    },
    {
      name: "Enio Jose Bassi",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/7909865785610711",
      title: "",
      image: "/comite-cientifico/enio_jose_bassi.jpg"
    },
    {
      name: "Ciro Ramon Felix dos Santos Silva",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/7247502886182545",
      title: "",
      image: "/comite-cientifico/ciro_ramon_felix_dos_santos_silva.jpg"
    },
    {
      name: "Cristiane de Souza Siqueira Pereira",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/8723281922978435",
      title: "",
      image: "/comite-cientifico/cristiane_de_souza_siqueira_pereira.jpg"
    },
    {
      name: "Oscarina Viana de Sousa",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/6529999796909142",
      title: "",
      image: "/comite-cientifico/oscarina_viana.png"
    },
    {
      name: "Thiago Jose Matos Rocha",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9228726128290600",
      title: "",
      image: "/comite-cientifico/thiago_jose_matos_rocha.jpg"
    },
    {
      name: "Aldenir Feitosa dos Santos",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/4486728733567129",
      title: "",
      image: "/comite-cientifico/aldenir_feitosa_dos_santos.jpg"
    },
    {
      name: "Marcell Mariano Correa Maceno",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/5020237977975416",
      title: "",
      image: "/comite-cientifico/marcell_mariano_correa_maceno.jpg"
    },
    {
      name: "Thyago Anthony Soares Lima",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/1714186197608991",
      title: "",
      image: "/comite-cientifico/thyago_anthony_soares_lima.jpg"
    },
    {
      name: "Juliana de Carvalho Gaeta",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/4263676415808125",
      title: "",
      image: "/comite-cientifico/juliana_carvalho.png"
    },
    {
      name: "Livia Maria Batista Vilela",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9131024465339491",
      title: "",
      image: "/comite-cientifico/livia_maria_batista_vilela.jpg"
    },
    {
      name: "Eugenio Dantas Gomes Lima",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/5825503745817361",
      title: "",
      image: "/comite-cientifico/eugenio_dantas_gomes_lima.jpg"
    },
    {
      name: "Joao Paulo Lopes da Silva",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/2493672197811747",
      title: "",
      image: "/comite-cientifico/joao_paulo_lopes_da_silva.jpg"
    },
    {
      name: "Giulliano Aires Anderlini",
      country: "Brasil",
      lattesUrl: "http://lattes.cnpq.br/9921213344241191",
      title: "",
      image: "/comite-cientifico/giulliano_aires_anderlini.jpg"
    },
    {
      name: "Scott Paton Wilson",
      country: "Estrangeiro",
      lattesUrl: null,
      title: "",
      image: "/comite-cientifico/scott_patton_wilson.jpg"
    }
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
          Comitê Científico
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
          2nd International Workshop on Plastic Pollution in the Oceans
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Nosso comitê científico é formado por pesquisadores renomados dedicados ao avanço do conhecimento sobre a poluição plástica nos oceanos.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto px-2 md:px-4 relative"
        variants={containerVariants}
      >
        {comiteCientifico.map((membro, index) => (
          <motion.div
            key={index}
            variants={memberVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-lg p-4 md:p-6 shadow-md flex flex-col items-center relative z-20"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-3 md:mb-4 overflow-hidden rounded-full">
              <img
                src={membro.image}
                alt={membro.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-900 text-center">{membro.name}</h3>
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
    </motion.div>
  );
}

