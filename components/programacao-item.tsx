"use client";

import type React from "react";
import { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  Share2,
  Download,
  Award,
  Coffee,
  Film,
  Mic,
  FileText,
  Filter,
  Search,
} from "lucide-react";
import { format, isSameDay, addMinutes } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useTranslations } from "next-intl";

// ---------------------------------------------------------
// Tipos
// ---------------------------------------------------------
type EventProps = {
  time: string; // "HH:mm"
  title: string;
  location: string;
  nature?: string; // Palestra | Mesa Redonda | Apresentação | Cerimônia | Exibição | Outro
  speakers?: string;
  description?: string;
  date?: string; // YYYY-MM-DD (usada para realçar Hoje e gerar ICS)
};

type DayScheduleProps = {
  day: string; // ex.: "Quarta-feira"
  date: string; // YYYY-MM-DD
  events: EventProps[];
};

type ProgrammingScheduleProps = {
  days: DayScheduleProps[];
};

// ---------------------------------------------------------
// Utilidades
// ---------------------------------------------------------
const natureColors: Record<string, string> = {
  Palestra: "bg-amber-100 text-amber-800 ring-amber-200",
  "Mesa Redonda": "bg-violet-100 text-violet-800 ring-violet-200",
  Cerimônia: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  Apresentação: "bg-blue-100 text-blue-800 ring-blue-200",
  Exibição: "bg-rose-100 text-rose-800 ring-rose-200",
  Outro: "bg-slate-100 text-slate-700 ring-slate-200",
};

const natureIcon = (nature?: string) => {
  switch (nature) {
    case "Palestra":
      return <Mic className="h-3.5 w-3.5" />;
    case "Mesa Redonda":
      return <Users className="h-3.5 w-3.5" />;
    case "Cerimônia":
      return <Award className="h-3.5 w-3.5" />;
    case "Apresentação":
      return <FileText className="h-3.5 w-3.5" />;
    case "Exibição":
      return <Film className="h-3.5 w-3.5" />;
    case "Outro":
      return <Coffee className="h-3.5 w-3.5" />;
    default:
      return <Calendar className="h-3.5 w-3.5" />;
  }
};

const parseHHmm = (time: string) => {
  // aceita "9:00" ou "09:00"
  const [h, m] = time.split(":").map((v) => parseInt(v, 10));
  return { h, m };
};

const eventDateTime = (date: string, time: string) => {
  const { h, m } = parseHHmm(time);
  const d = new Date(date + "T00:00:00");
  d.setHours(h, m, 0, 0);
  return d;
};

const isNowWindow = (date?: string, time?: string, minutes = 60) => {
  if (!date || !time) return false;
  const start = eventDateTime(date, time);
  const end = addMinutes(start, minutes);
  const now = new Date();
  return now >= start && now <= end;
};

const toICS = (evt: EventProps & { dayDate: string }) => {
  const start = eventDateTime(evt.dayDate, evt.time);
  // duração padrão 60min
  const end = addMinutes(start, 60);
  const pad = (n: number) => String(n).padStart(2, "0");
  const dt = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;

  const summary = evt.title.replace(/\n/g, " ");
  const description = (evt.description || "")
    .replace(/\n/g, " ")
    .slice(0, 800);

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//IWPPO//Programacao//PT-BR
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${Date.now()}@iwppo.com
DTSTAMP:${dt(new Date())}
DTSTART:${dt(start)}
DTEND:${dt(end)}
SUMMARY:${summary}
DESCRIPTION:${description}
LOCATION:${evt.location}
END:VEVENT
END:VCALENDAR`;
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

// ---------------------------------------------------------
// Cartão de Evento
// ---------------------------------------------------------
const EventCard = ({
  time,
  title,
  location,
  nature,
  speakers,
  description,
  date,
}: EventProps) => {
  const t = useTranslations("ProgramacaoPage");
  const [expanded, setExpanded] = useState(false);
  const today = date ? isSameDay(new Date(date), new Date()) : false;
  const live = isNowWindow(date, time, 60);

  const badgeClass = natureColors[nature || "Outro"] || natureColors["Outro"];

  const handleAddCalendar = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const ics = toICS({
      time,
      title,
      location,
      nature,
      speakers,
      description,
      dayDate: date || format(new Date(), "yyyy-MM-dd"),
    });
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/[^\w]+/g, "-")}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `${title} — ${format(
      eventDateTime(date || format(new Date(), "yyyy-MM-dd"), time),
      "dd/MM/yyyy HH:mm",
      { locale: ptBR }
    )} — ${location}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText });
        return;
      } catch {
        /* usuário cancelou */
      }
    }
    const ok = await copyToClipboard(shareText);
    if (ok) alert(t("copiado_area_transferencia"));
  };

  return (
    <motion.div
      className={`relative flex flex-col rounded-xl overflow-hidden shadow-sm bg-white/95 backdrop-blur border border-slate-200 ${
        today ? "ring-2 ring-blue-300" : ""
      }`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(2,6,23,0.08)" }}
      transition={{ duration: 0.28 }}
    >
      {live && (
        <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" aria-hidden />
      )}

      <button
        className="group text-left p-4 sm:p-5"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="flex items-start gap-3">
          <div className="flex items-center text-blue-700 font-semibold min-w-20">
            <Clock className="h-4 w-4 mr-1" />
            <span className="tabular-nums">{time}</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-blue-950 text-base sm:text-lg leading-snug truncate">
                {title}
              </h3>

              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] ring-1 ${badgeClass}`}
                title={nature}
              >
                {natureIcon(nature)}
                <span className="font-medium">{nature || "Outro"}</span>
              </span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[13px] text-slate-600">
              <span className="inline-flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {location}
              </span>
              {date && (
                <span className="inline-flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {format(new Date(date), "dd/MM", { locale: ptBR })}
                </span>
              )}
              {today && (
                <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[11px] ring-1 ring-blue-200">
                  {t("hoje")}
                </span>
              )}
              {live && (
                <span className="inline-flex items-center gap-1 text-red-600 text-[12px]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  {t("ao_vivo")}
                </span>
              )}
            </div>
          </div>

          <div className="mt-0.5 text-slate-400 group-hover:text-blue-600">
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="px-4 sm:px-5 pb-4 -mt-1 border-t border-slate-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {speakers && speakers !== "-" && (
              <div className="mb-2 text-slate-700 text-sm flex items-start">
                <Users className="h-4 w-4 mr-1 mt-0.5" />
                <div>
                  <span className="font-medium">{t("palestrantes_label")}:</span>{" "}
                  {speakers}
                </div>
              </div>
            )}
            {description && (
              <div className="text-slate-600 text-sm leading-relaxed">
                {description}
              </div>
            )}

            <div className="mt-3 flex gap-2">
              <button
                onClick={handleAddCalendar}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50"
              >
                <Download className="h-3.5 w-3.5" /> {t("adicionar_calendario")}
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50"
              >
                <Share2 className="h-3.5 w-3.5" /> {t("compartilhar")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ---------------------------------------------------------
// Bloco de Dia
// ---------------------------------------------------------
const DaySchedule = ({ day, date, events }: DayScheduleProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const hasToday = events.some((e) =>
    isSameDay(new Date(e.date || date), new Date())
  );
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <motion.section
      ref={ref}
      id={`dia-${date}`}
      className={`rounded-2xl p-4 sm:p-6 shadow-md bg-white/60 backdrop-blur border border-slate-200 ${
        hasToday ? "ring-2 ring-blue-200" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
    >
      <button
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={() => setCollapsed((v) => !v)}
        aria-expanded={!collapsed}
      >
        <h2 className="text-blue-950 font-extrabold text-lg sm:text-xl">
          {day} • {format(new Date(date), "dd/MM", { locale: ptBR })}
          {hasToday && (
            <span className="ml-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
              Hoje
            </span>
          )}
        </h2>
        <div className="text-slate-400">
          {collapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            className="mt-4 sm:mt-6 space-y-3 sm:space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {events.map((evt, i) => (
              <EventCard key={`${evt.time}-${i}`} {...evt} date={evt.date || date} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

// ---------------------------------------------------------
// Componente Principal
// ---------------------------------------------------------
export default function ProgramacaoItem({ days }: ProgrammingScheduleProps) {
  const t = useTranslations("ProgramacaoPage");
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const flatTypes = [
    "Palestra",
    "Mesa Redonda",
    "Apresentação",
    "Cerimônia",
    "Exibição",
    "Outro",
  ];

  // Top nav para pular entre os dias
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash.startsWith("#dia-")) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const filteredDays = useMemo(() => {
    return days
      .map((day) => {
        const events = day.events.filter((event) => {
          const q = searchTerm.trim().toLowerCase();
          const matchesSearch =
            q === "" ||
            event.title.toLowerCase().includes(q) ||
            (event.speakers && event.speakers.toLowerCase().includes(q)) ||
            (event.description && event.description.toLowerCase().includes(q)) ||
            (event.location && event.location.toLowerCase().includes(q));

          const matchesFilter =
            filter === "all" ||
            (filter === "today" &&
              isSameDay(new Date(event.date || day.date), new Date())) ||
            (flatTypes.includes(filter) &&
              (event.nature || "Outro") === filter);

          return matchesSearch && matchesFilter;
        });
        return { ...day, events };
      })
      .filter((d) => d.events.length > 0);
  }, [days, filter, searchTerm]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Fundo decorativo chamativo */}
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[90%] rounded-[48px] blur-3xl bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 opacity-60" />
      </div>

      <motion.h1
        className="text-blue-950 font-extrabold text-2xl sm:text-3xl text-center mb-6 tracking-tight"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {t("programacao")}
      </motion.h1>

      {/* Barra de busca + filtros */}
      <motion.div
        className="bg-white/70 backdrop-blur rounded-xl p-4 mb-6 shadow-sm border border-slate-200"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={t("buscar_eventos")}
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label={t("buscar_eventos")}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[{ key: "all", label: t("todos") }, { key: "today", label: t("hoje") }]
              .concat(flatTypes.map((tp) => ({ key: tp, label: tp })))
              .map((btn) => (
                <button
                  key={btn.key}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors border ${
                    filter === btn.key
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                  onClick={() => setFilter(btn.key)}
                  aria-pressed={filter === btn.key}
                >
                  {btn.key === "all" && <Filter className="h-3.5 w-3.5" />}
                  {btn.label}
                </button>
              ))}
          </div>
        </div>
      </motion.div>

      {/* Navegação rápida por dia */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
        {days.map((d) => (
          <a
            key={d.date}
            href={`#dia-${d.date}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span className="font-semibold text-blue-900">{d.day}</span>
            <span className="text-slate-500">
              {format(new Date(d.date), "dd/MM", { locale: ptBR })}
            </span>
          </a>
        ))}
      </div>

      {filteredDays.length > 0 ? (
        <div className="space-y-6 sm:space-y-8">
          {filteredDays.map((day, i) => (
            <DaySchedule key={`${day.date}-${i}`} {...day} />
          ))}
        </div>
      ) : (
        <motion.div
          className="bg-white rounded-xl p-8 text-center text-slate-500 border border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t("nenhum_evento")}
        </motion.div>
      )}
    </div>
  );
}
