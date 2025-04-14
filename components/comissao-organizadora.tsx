import Image from "next/image";
import Link from "next/link";
import { Globe, ExternalLink } from "lucide-react";

interface MemberProps {
  name: string;
  title: string;
  country: string;
  image: string;
  lattesUrl: string | null;
}

const members: MemberProps[] = [
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
    <div className="w-full bg-gradient-to-b from-sky-100 to-blue-50 px-4 py-8 md:py-12 rounded-lg">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-blue-900 md:mb-4 md:text-4xl">
          Comissão Organizadora
        </h1>

        {/* Mobile subtitle */}
        <h2 className="mb-6 text-center text-lg font-medium text-blue-600 md:hidden">
          II Workshop Internacional sobre a Poluição Plástica nos Oceanos
        </h2>

        {/* Desktop subtitle and description */}
        <div className="mb-8 hidden flex-col items-center md:flex">
          <div className="mb-2 flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-medium text-blue-600">
              Especialistas Internacionais em Poluição Oceânica
            </h2>
          </div>
          <p className="max-w-3xl text-center text-gray-700">
            Nosso comitê científico é composto por renomados pesquisadores e
            especialistas internacionais dedicados ao estudo e combate da
            poluição plástica nos oceanos.
          </p>
        </div>

        {/* Members grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Foto de ${member.name}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-blue-900">
                    {member.title} {member.name}
                  </h3>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Globe className="h-4 w-4" />
                    <span>{member.country}</span>
                  </div>
                  {member.lattesUrl && (
                  <Link
                    href={member.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-1 text-blue-500 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Currículo Lattes</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas só no mobile */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-blue-100 p-4 text-center shadow-sm">
            <p className="text-xl font-bold text-blue-900">15+</p>
            <p className="text-sm text-blue-700">Países Representados</p>
          </div>
          <div className="rounded-lg bg-blue-100 p-4 text-center shadow-sm">
            <p className="text-xl font-bold text-blue-900">30+</p>
            <p className="text-sm text-blue-700">Membros do Comitê</p>
          </div>
        </div>
      </div>
    </div>
  );
}
