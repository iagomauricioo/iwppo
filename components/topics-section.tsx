"use client";

import { Globe, FlaskRoundIcon as Flask, Recycle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TopicsSection() {
  const t = useTranslations('TopicsSection');
  return (
    <section className="py-16 bg-[#caf0f8] rounded-lg" id="topicos-principais">
      <div className="container mx-auto">
        <h3 className="text-[#0A0F70] font-bold text-3xl mb-8 text-center">
          {t('title')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center px-4">
          {/* Topic 1: Pesquisa e Inovação */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Flask className="h-12 w-12 text-[#0077B6] mb-4" />
            <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
              {t('items.research.title')}
            </h4>
            <p className="text-gray-700 text-center">
              {t('items.research.description')}
            </p>
          </div>

          {/* Topic 2: Economia Circular */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Recycle className="h-12 w-12 text-[#0077B6] mb-4" />
            <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
              {t('items.circular.title')}
            </h4>
            <p className="text-gray-700 text-center">
              {t('items.circular.description')}
            </p>
          </div>

          {/* Topic 3: Cooperação Global */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Globe className="h-12 w-12 text-[#0077B6] mb-4" />
            <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
              {t('items.cooperation.title')}
            </h4>
            <p className="text-gray-700 text-center">
              {t('items.cooperation.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
