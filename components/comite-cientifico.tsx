import EquipeGrid, { MemberProps } from "./equipe-grid";

export default function ComiteCientifico() {
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
      image: "/comite-cientifico/profile.png"
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
      image: "/comite-cientifico/profile.png"
    }
  ];

  return (
    <EquipeGrid
      id="comite-cientifico"
      title="Comitê Científico"
      subtitle="2nd International Workshop on Plastic Pollution in the Oceans"
      members={comiteCientifico}
    />
  );
}

