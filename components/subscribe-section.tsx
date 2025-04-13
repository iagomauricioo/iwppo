import SubscribeCard from "./subscribe-card";

export default function SubscribeSection() {
    const subscribeOptions = [
        {
            title: "Alunos de Graduação",
            price: "R$ 30,00",
            description: "Inscrição",
            buttonText: "Inscreva-se",
        },
        {
            title: "Alunos de Pós-Graduação",
            price: "R$ 70,00",
            description: "Inscrição",
            buttonText: "Inscreva-se",
        },
        {
            title: "Professores da Educação Básica",
            price: "R$ 0,00",
            description: "Inscrição",
            buttonText: "Inscreva-se",
        },
        {
            title: "Professores / Pesquisadores",
            price: "R$ 100,00",
            description: "Inscrição",
            buttonText: "Participar",
        },
        {
            title: "Palestrantes",
            price: "R$ 0,00",
            description: "Inscrição grátis",
            buttonText: "Confirmar",
        },
    ];

    return (
        <main className="bg-[#caf0f8] min-h-[65vh] flex flex-col items-center py-12 px-6 rounded-lg">
            <h2 className="text-[#0A0F70] font-bold text-3xl mb-10 text-center">
                Inscrições
            </h2>
            <section className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
                {subscribeOptions.map((option, index) => (
                    <SubscribeCard
                        key={index}
                        title={option.title}
                        price={option.price}
                        description={option.description}
                        buttonText={option.buttonText}
                    />
                ))}
            </section>
        </main>
    );
}
