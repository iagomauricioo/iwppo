"use client";
 
 import { useState } from "react";
 import Image from "next/image";
 import Link from "next/link";
 import { motion } from "framer-motion";
 import { Search } from "lucide-react";
 import { useTranslations, useLocale } from "next-intl";
 
 type Palestrante = {
 id: string;
 nome: string;
 cargo: string;
 instituicao: string;
 palestra: string;
 nacionalidade?: string;
 foto: string;
 };
 
 export default function PalestrantesConfirmados() {
 const [q, setQ] = useState("");
 const t = useTranslations("PalestrantesConfirmados");
 const locale = useLocale();
 
 // Se alguns arquivos tiverem extensão/nome diferente, declare aqui.
 // Caso não exista no mapa, cai no fallback /palestrantes/${id}.jpeg
 const FOTO_MAP: Record<string, string> = {
 "robson-santos": "/palestrantes/robson.png",
 "katia-viana": "/comissao-organizadora/katia.png",
 "fernando-lopez": "/palestrantes/dias.jpeg",
 "scott-wilson": "/palestrantes/scott_patton_wilson.jpg",
 "Fernando-miguel": "/palestrantes/fernando.png",
 "Helena-fernandez": "/palestrantes/helena-fernandez.png",
 "cristiane-siqueira": "/palestrantes/cristiane_de_souza_siqueira_pereira.jpg",
 Biagio: "/palestrantes/biagio-nova-foto.jpeg",
 "federico-sulis": "/palestrantes/federico-atualizada.jpeg",
 Marcell: "/palestrantes/marcell.jpeg",
 jornalista: "/palestrantes/jornalista.jpeg",
 jemille: "/palestrantes/jemille.jpeg",
 alireza: "/palestrantes/alireza.jpeg",
 "barbara-pinheiro": "/palestrantes/Dr Barbara Pinheiro_profile photo.jpg",
 vazquez: "/palestrantes/vazquez.jpg",
 clemilson: "/palestrantes/clemilson.jpeg",
 };
 
 // helper para evitar digitar o caminho e as chaves toda hora
 const p = (id: string): Palestrante => ({
 id,
 nome: t(palestrantes.${id}.nome),
 cargo: t(palestrantes.${id}.cargo),
 instituicao: t(palestrantes.${id}.instituicao),
 palestra: t(palestrantes.${id}.palestra),
 nacionalidade: t.has(palestrantes.${id}.nacionalidade)
 ? t(palestrantes.${id}.nacionalidade)
 : "",
 foto: FOTO_MAP[id] ?? /palestrantes/${id}.jpeg, // ajuste se a extensão/nome variar
 });
 
 // basta manter a lista de IDs aqui
 const ids = [
 "robson-santos",
 "katia-viana",
 "fernando-lopez",
 "scott-wilson",
 "Fernando-miguel",
 "Helena-fernandez",
 "cristiane-siqueira",
 "Biagio",
 "federico-sulis",
 "Marcell",
 "jornalista",
 "jemille",
 "alireza",
 "barbara-pinheiro",
 "vazquez",
 "clemilson",
 "aldilane"
 ] as const;
 
 const palestrantes: Palestrante[] = ids.map((id) => p(id));
 
 const filtered = palestrantes.filter((x) => {
 const txt = ${x.nome} ${x.cargo} ${x.instituicao} ${x.palestra}.toLowerCase();
 return txt.includes(q.toLowerCase());
 });
 
 return (
 <section
 id="palestrantes"
 className="py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white"
 >
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <motion.h2
 className="text-4xl md:text-5xl font-bold mb-2 text-white"
 initial={{ opacity: 0, y: -12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4 }}
 >
 {t("title1")} <span className="text-blue-200">{t("title2")}</span>
 </motion.h2>
 <motion.p
 className="text-lg text-blue-100 max-w-2xl mx-auto"
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: 0.1 }}
 >
 {t("descricao")}
 </motion.p>
 </div>
 
 {/* Busca */}
 <div className="max-w-md mx-auto mb-8">
 <div className="relative">
 <input
 value={q}
 onChange={(e) => setQ(e.target.value)}
 placeholder={t("placeholder")}
 className="w-full bg-blue-950/80 border border-blue-600 rounded-full py-3 px-5 pl-12 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
 />
 <Search className="absolute left-4 top-3.5 text-blue-200" size={18} />
 </div>
 </div>
 
 {/* Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
 {filtered.map((s, idx) => (
 <motion.article
 key={s.id}
 className="rounded-lg overflow-hidden shadow-lg bg-blue-800"
 initial={{ opacity: 0, y: 18 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.35, delay: idx * 0.05 }}
 whileHover={{ y: -4, transition: { duration: 0.15 } }}
 >
 {/* FOTO → Link para detalhes (com locale na rota) */}
 <Link
 href={/${locale}/palestrantes/${s.id}}
 className="relative block h-64 bg-blue-900/20 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
 >
 <Image
 src={s.foto || "/placeholder.svg"}
 alt={${s.nome} – ${s.cargo}}
 fill
 // mesmo tratamento do detalhe: não cortar
 className="object-contain p-2"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 priority={idx < 2}
 />
 <span className="sr-only">{t("ver_detalhes")}</span>
 </Link>
 
 <div className="p-4">
 <h3 className="text-xl font-bold text-white">{s.nome}</h3>
 <p className="text-white/90 font-medium">{s.cargo}</p>
 <p className="text-white/80 text-sm">{s.instituicao}</p>
 {s.nacionalidade && (
 <p className="text-white/70 text-sm mt-1">{s.nacionalidade}</p>
 )}
 
 <div className="border-t border-blue-700 mt-3 pt-3">
 <p className="text-white/80 text-sm font-medium">
 {t.has("titulo_palestra") ? t("titulo_palestra") : "Palestra"}:
 </p>
 <p className="text-white font-semibold">{s.palestra}</p>
 </div>
 </div>
 </motion.article>
 ))}
 </div>
 
 {filtered.length === 0 && (
 <div className="text-center py-10">
 <p className="text-blue-100 text-lg">
 {t.has("sem_resultados")
 ? t("sem_resultados", { termo: q })
 : Nenhum palestrante encontrado para "${q}"}
 </p>
 <button
 onClick={() => setQ("")}
 className="mt-3 text-blue-200 hover:text-blue-50 transition-colors"
 >
 {t.has("limpar_busca") ? t("limpar_busca") : "Limpar busca"}
 </button>
 </div>
 )}
 </div>
 </section>
 );
}
 