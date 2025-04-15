import EquipeGrid from "./equipe-grid";

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
    title: "",
    image: "/comissao-organizadora//jesse.png",
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
  return (
    <EquipeGrid
      id="comissao"
      title="Comissão Organizadora"
      subtitle="2nd International Workshop on Plastic Pollution in the Oceans"
      description="Nosso comissão organizadora é composta por renomados pesquisadores e especialistas internacionais dedicados ao estudo e combate da poluição plástica nos oceanos."
      members={membrosComissao}
      stats={[
        { label: "Países Representados", value: "15+" },
        { label: "Membros do Comitê", value: "30+" },
      ]}
    />
  );
}
