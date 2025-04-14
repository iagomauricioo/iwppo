"use client";

import { MapPin, Navigation, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="py-16 bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Localização
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            O evento será realizado no Centro Cultural João Sampaio, localizado
            em Maceió, Alagoas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[450px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1744648324911!6m8!1m7!1sahtW6DtWuQ43quPw1-uwKA!2m2!1d-9.656081212782288!2d-35.73504052983549!3f293.1249115030107!4f0.7833259915456239!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centro Cultural João Sampaio"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info Container */}
          <div className="flex flex-col gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-blue-700 mb-1">
                    Centro Cultural João Sampaio
                  </p>
                  <p className="text-gray-600">
                    Av. Moreira e Silva, 595
                    <br />
                    Farol, Maceió - AL
                    <br />
                    CEP: 57051-500
                  </p>
                </div>
              </div>
            </div>

            {/* How to Get There Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Navigation className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900 mb-2">
                    Como Chegar
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-700">
                        De Carro:
                      </span>{" "}
                      Estacionamento disponível no local.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-700">
                        Transporte Público:
                      </span>{" "}
                      Algumas linhas de ônibus passam perto do local como: 703 e
                      704. Para mais informações consulte o aplicativo do <a href="https://play.google.com/store/apps/details?id=br.com.cittabus&hl=pt-br&pli=1">CittaMobi</a>.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-700">
                        Do Aeroporto:
                      </span>{" "}
                      Aproximadamente 1 hora de carro ou táxi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900 mb-2">
                    Contato do Local
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium text-blue-700">Telefone:</span>{" "}
                    (82) 3333-4444
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="font-medium text-blue-700 mr-1">
                      Email:
                    </span>
                    <a
                      href="mailto:contato@centroculturaljs.com.br"
                      className="text-blue-500 hover:underline"
                    >
                      contato@centroculturaljs.com.br
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
