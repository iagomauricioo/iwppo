"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Scale,
  CheckCircle2,
  Users,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SeloSustentavelPremiacao() {
  const t = useTranslations("SeloSustentavelPremiacao"); // usa as chaves já existentes p/ o título

  // Lista "o selo é concedido aos trabalhos que se destacam em:"
  const destaques = [
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Clareza e força da mensagem",
      desc:
        "História bem contada, direta e coerente. Qualidade de áudio e imagem que favoreça a compreensão.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Relevância e originalidade das ideias",
      desc:
        "Alinhamento ao tema da poluição plástica, com dados, fatos ou exemplos reais. Abordagens criativas contam pontos.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Envolvimento da comunidade",
      desc:
        "Representatividade e engajamento (número/diversidade de participantes, inclusão de diferentes grupos).",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Impacto ambiental positivo (comprovado ou potencial)",
      desc:
        "Ações concretas, mensuráveis e com possibilidade de escala ou efeito duradouro.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Capacidade de inspirar mudanças duradouras",
      desc:
        "Vídeos que mobilizam, provocam reflexão e estimulam novas atitudes sustentáveis.",
    },
  ];

  // Tabela de critérios (7) com descrição e perguntas-guia
  const criterios = [
    {
      titulo: "1. Clareza e qualidade da mensagem",
      desc:
        "O vídeo apresenta a ideia de forma clara, direta e coerente, com boa qualidade de áudio e imagem.",
      perguntas:
        "A mensagem é facilmente compreendida? Há uma narrativa coerente?",
    },
    {
      titulo: "2. Relevância do conteúdo",
      desc:
        "Aborda diretamente o tema da poluição plástica nos oceanos, com informações corretas e contextualizadas.",
      perguntas:
        "O vídeo está alinhado com o tema central? Mostra dados, fatos ou exemplos reais?",
    },
    {
      titulo: "3. População envolvida",
      desc:
        "Representatividade e engajamento da comunidade (número e diversidade de participantes, inclusão de diferentes grupos sociais).",
      perguntas:
        "Quantas pessoas participaram ativamente? Há diversidade etária, de gênero ou cultural?",
    },
    {
      titulo: "4. Significância das atitudes apresentadas",
      desc:
        "Ações com potencial de gerar impacto ambiental positivo real e mensurável.",
      perguntas:
        "As atitudes são concretas e replicáveis? Possuem escala ou efeito duradouro?",
    },
    {
      titulo: "5. Criatividade e inovação",
      desc:
        "Uso criativo de recursos visuais, sonoros ou narrativos para transmitir a mensagem.",
      perguntas:
        "O vídeo é original e cativa o espectador? Há soluções ou abordagens inovadoras?",
    },
    {
      titulo: "6. Potencial de inspiração e mobilização",
      desc:
        "Capacidade de motivar o público a adotar práticas sustentáveis.",
      perguntas: "O vídeo provoca reflexão e estimula ação?",
    },
    {
      titulo: "7. Conformidade com o tempo e formato",
      desc:
        "Respeito ao limite de até 3 minutos e adequação técnica (resolução, enquadramento, edição).",
      perguntas:
        "O vídeo está dentro do tempo e tecnicamente adequado?",
    },
  ];

  return (
    <section id="selo-sustentavel" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título e subtítulo (mesmo padrão do RegulamentoSection) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            {t("atitude")} {t("sustentavel")} – IWPPO
          </h2>
          <p className="text-blue-700 mt-2 max-w-3xl mx-auto">
            Imagine um mundo onde cada pequena ação conta. Nas praias, nos portos, nos rios e até nas
            ruas, decisões diárias moldam o futuro dos oceanos. No IWPPO, acreditamos que boas ideias
            merecem mais que reconhecimento — elas merecem ser exemplo. Foi assim que nasceu o Selo de
            Atitude Sustentável: mais que um prêmio, um símbolo de compromisso, criatividade e impacto
            positivo.
          </p>
          <p className="text-blue-700 mt-2 max-w-3xl mx-auto">
            Durante o evento, participantes de diferentes países e comunidades são convidados a contar
            suas histórias em vídeos de até 3 minutos — mostrando ações reais para reduzir a poluição
            plástica: de campanhas educativas e mutirões de limpeza a tecnologias inovadoras e soluções
            simples e replicáveis.
          </p>
        </motion.div>

        {/* Grid “o selo é concedido a quem se destaca em…” (mesmo estilo do bloco de regras) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destaques.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <div className="text-blue-700 bg-blue-100 rounded-lg p-2 h-fit">{item.icon}</div>
              <div>
                <h3 className="text-blue-900 font-semibold">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto de rede/compartilhamento */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-blue-800 text-center max-w-4xl mx-auto"
        >
          Receber o selo é fazer parte de uma rede global de agentes de mudança. Ao final do evento,
          os vídeos premiados serão compartilhados internacionalmente, inspirando novas ações e
          multiplicando o alcance dessas atitudes. Cada vencedor leva não só um reconhecimento, mas um
          convite: continuar agindo e inspirando. O oceano começa no nosso quintal — e cuidar dele
          começa com uma escolha, hoje.
        </motion.p>

        {/* Critérios de avaliação (bloco azul) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-blue-900 text-white rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Scale className="h-5 w-5 text-blue-200" />
            <h3 className="text-xl font-bold">Critérios para Avaliação dos Vídeos – Selo Sustentável</h3>
          </div>

          <p className="text-blue-100 mb-4">
            Cada critério recebe pontuação de <strong>0 a 5</strong>. Utilize as perguntas‑guia para validar seu vídeo:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
            {criterios.map((c, i) => (
              <li key={i}>
                <p className="font-semibold text-blue-50">{c.titulo}</p>
                <p className="text-blue-100/90 text-sm mt-1">{c.desc}</p>
                <p className="text-blue-200 text-xs mt-2">
                  <span className="font-semibold">Perguntas‑guia:</span> {c.perguntas}
                </p>
                <p className="text-blue-200 text-xs mt-1">Pontuação: 0–5</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-sm text-blue-200">
            <p className="font-semibold mb-1">Escala sugerida de avaliação</p>
            <p>0 = Não atende ao critério</p>
            <p>1–2 = Atende de forma muito limitada</p>
            <p>3 = Atende parcialmente, com lacunas</p>
            <p>4 = Atende bem, com pequenos ajustes possíveis</p>
            <p>5 = Atende de forma excelente, sem ajustes necessários</p>
          </div>
        </motion.div>

        {/* Ações — download do regulamento + envio de vídeo (mesma estética de botões) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* 🔴 Download do REGULAMENTO */}
          <Link
            href="/docs/Selo de Atitude Sustentável Texto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#ff3333] hover:bg-[#e62e2e] text-white font-semibold shadow-md transition"
          >
            <Download className="h-5 w-5" />
            Baixar Regulamento (PDF)
          </Link>

          {/* 🔵 Enviar vídeo (mantido como call-to-action secundária) */}
          <a
            href="https://doity.com.br/iwppo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-md transition"
          >
            <FileText className="h-5 w-5" />
            Enviar meu vídeo (até 3 min)
          </a>
        </div>
      </div>
    </section>
  );
}
