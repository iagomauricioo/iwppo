import SubscribeCard from "./subscribe-card";
import { useTranslations } from 'next-intl';

export default function SubscribeSection() {
    const t = useTranslations('SubscribeSection');
    const subscribeOptions = t.raw('options');

    return (
        <main className="bg-[#caf0f8] min-h-[65vh] flex flex-col items-center py-12 px-6 rounded-lg" id="inscricao">
            <h2 className="text-[#0A0F70] font-bold text-3xl mb-10 text-center">
                {t('title')}
            </h2>
            <section className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
                {subscribeOptions.map((option: any, index: any) => (
                    <SubscribeCard
                        key={index}
                        title={option.title}
                        price={option.price}
                        features={option.features}
                        buttonText={option.buttonText}
                    />
                ))}
            </section>
        </main>
    );
}