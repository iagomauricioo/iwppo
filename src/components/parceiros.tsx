import Image from "next/image"

export default function Parceiros() {
  return (
    <section className="w-full py-12 bg-blue-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center  mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
            Nossos Parceiros
          </h2>
          <p className="max-w-[700px] text-blue-700 md:text-xl">
            Trabalhamos com as melhores empresas para oferecer soluções de qualidade
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={parceiro.logo || "/placeholder.svg"}
                alt={parceiro.nome}
                width={250}
                height={0}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
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
    nome: "Parceiro 5",
    logo: "/parceiros/policoncret.png",
  }
]
