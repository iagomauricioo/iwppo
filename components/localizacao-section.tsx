"use client";

import { MapPin, Navigation, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LocationSection() {
  const t = useTranslations('LocationSection');
  return (
    <section
      id="localizacao"
      className="py-8 md:py-16 bg-gradient-to-b from-blue-100 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2 md:mb-4">
            {t('title')}
          </h2>
          <p className="text-sm md:text-base text-blue-700 max-w-2xl mx-auto px-2">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Map Container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1744649136730!6m8!1m7!1sahtW6DtWuQ43quPw1-uwKA!2m2!1d-9.656081212782288!2d-35.73504052983549!3f285.18992546366354!4f3.718099777540118!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info Container */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full order-1 md:order-2">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-blue-700">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-blue-900 mb-1 md:mb-2">
                    {t('address.title')}
                  </h3>
                  <p className="text-blue-700 text-sm md:text-base mb-1">
                    {t('address.place')}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    {t('address.street')}
                    <br />
                    {t('address.neighborhood')}
                    <br />
                    {t('address.zip')}
                  </p>
                </div>
              </div>
            </div>

            {/* How to Get There Card */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Navigation className="h-5 w-5 md:h-6 md:w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-blue-900 mb-1 md:mb-2">
                    {t('howToGetThere.title')}
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-sm md:text-base text-gray-600">
                      <span className="font-medium text-blue-700">
                        {t('howToGetThere.ofCar')}
                      </span>{" "}
                      {t('howToGetThere.car')}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      <span className="font-medium text-blue-700">
                        {t('howToGetThere.ofPublicTransport')}
                      </span>{" "}
                      {t('howToGetThere.publicTransport')}
                      <a
                        href="https://play.google.com/store/apps/details?id=br.com.cittabus&hl=pt-br&pli=1"
                        className="underline text-blue-500 hover:text-blue-700"
                      >
                        CittaMobi
                      </a>
                      .
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      <span className="font-medium text-blue-700">
                        {t('howToGetThere.ofAirport')}
                      </span>{" "}
                      {t('howToGetThere.airport')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-blue-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-blue-900 mb-1 md:mb-2">
                    {t('contact.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-2">
                    <span className="font-medium text-blue-700">{t('contact.phoneLabel')}</span>{" "}
                    (82) 3333-4444
                  </p>
                  <p className="text-sm md:text-base text-gray-600 flex flex-wrap items-center">
                    <span className="font-medium text-blue-700 mr-1">
                      Email:
                    </span>
                    <a
                      href="mailto:contato@centroculturaljs.com.br"
                      className="text-blue-500 hover:underline break-all"
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
