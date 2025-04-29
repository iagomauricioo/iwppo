import { useTranslations } from 'next-intl';
import ProgramacaoItem from "./programacao-item";

export default function ProgramacaoPage() {
  const t = useTranslations('ProgramacaoPage');

  const days = t.raw('days');

  return (
    <div
      className="min-h-screen bg-[#A5DEF1] py-8 md:py-12 px-3 md:px-4"
      id="programacao"
    >
      <ProgramacaoItem days={days} />
    </div>
  );
}