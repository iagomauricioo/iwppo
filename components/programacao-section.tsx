import ProgramacaoItem from "./programacao-item";

export default function ProgramacaoPage() {
  const scheduleData = {
    days: [
      {
        day: "Dia 1",
        date: "10 de Setembro de 2025",
        events: [
          {
            time: "14:00",
            title: "Credenciamento",
            location: "",
            nature: "",
            speakers: "-",
            description: "",
          },
          {
            time: "15:30",
            title: "Cerimônia de abertura",
            location: "",
            nature: "Abertura",
            speakers:
              "Scott P. Wilson; Jessé Marques Pavão; Biagio F. Giannette; Douglas Apratto Tenório; Carlos Alberto Ciocce Sampaio",
            description: "Abertura do evento",
          },
          {
            time: "16:30",
            title: "Coffee Break",
            location: "",
            nature: "",
            speakers: "-",
            description: "Intervalo para network",
          },
          {
            time: "17:00",
            title: "Workshop",
            location: "",
            nature: "Workshop",
            speakers: "Brendan Kelaher; Alejandro Tagliafico",
            description:
              "Apresentação de metodologia para a identificação de plástico em tecidos de animais",
          },
          {
            time: "19:00",
            title: "Jantar Social",
            location: "",
            nature: "",
            speakers: "",
            description: "Jantar oferecido aos participantes",
          },
        ],
      },
      {
        day: "Dia 2",
        date: "11 de Setembro de 2025",
        events: [
          {
            time: "09:00",
            title: "Apresentação oral seção 1",
            location: "",
            nature: "Seminário",
            speakers: "Marcelo Reis",
            description:
              "Apresentação de pesquisas realizadas pelos participantes",
          },
          {
            time: "10:40",
            title: "Coffee Break",
            location: "",
            nature: "",
            speakers: "-",
            description: "Intervalo para network",
          },
          {
            time: "11:00",
            title: "Premiação aos pesquisadores",
            location: "",
            nature: "Outro",
            speakers: "Claudio Luis Santos Sampaio",
            description:
              "Seção que irá premiar os pesquisadores que contribuem com as temáticas do evento",
          },
          {
            time: "13:00",
            title: "Almoço",
            location: "",
            nature: "",
            speakers: "-",
            description: "",
          },
          {
            time: "14:00",
            title: "Apresentação oral seção 2",
            location: "",
            nature: "Seminário",
            speakers: "Selenobaldo Alexinaldo",
            description: "Apresentação das pesquisas pelos pesquisadores",
          },
          {
            time: "15:40",
            title: "Coffee Break",
            location: "",
            nature: "",
            speakers: "-",
            description: "Intervalo para network",
          },
          {
            time: "16:00",
            title: "Workshop",
            location: "",
            nature: "Workshop",
            speakers: "Robson Guimarães dos Santos",
            description:
              "Apresentação dos principais resultados das pesquisas a partir dos pontos focais do projeto Oceanos de Plástico",
          },
          {
            time: "17:30",
            title: "Cerimônia de Fechamento",
            location: "",
            nature: "Palestra",
            speakers:
              "Fernando J. Diaz Lopez; Brendan Kelaher; Alejandro Tagliafico",
            description: "Cerimônia de fechamento do evento",
          },
        ],
      },
      {
        day: "Dia 3",
        date: "12 de Setembro de 2025",
        events: [
          {
            time: "09:00",
            title: "Visita Técnica",
            location: "",
            nature: "Outro",
            speakers: "-",
            description: "Visita Técnica a startup Policoncret",
          },
        ],
      },
    ],
  };

  return (
    <div
      className="min-h-screen bg-[#A5DEF1] py-8 md:py-12 px-3 md:px-4"
      id="programacao"
    >
      <ProgramacaoItem days={scheduleData.days} />
    </div>
  );
}
