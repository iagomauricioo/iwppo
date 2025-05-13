"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import { format, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";

type EventProps = {
  time: string;
  title: string;
  location: string;
  nature?: string;
  speakers?: string;
  description?: string;
  date?: string; // Adicionado para verificar se o evento é hoje
};

const Event = ({
  time,
  title,
  location,
  nature,
  speakers,
  description,
  date,
}: EventProps) => {
  const [expanded, setExpanded] = useState(false);

  // Verificar se o evento é hoje
  const isToday = date ? isSameDay(new Date(date), new Date()) : false;

  // Verificar se o evento está acontecendo agora (simplificado)
  const isNow =
    isToday && time.includes(format(new Date(), "HH:mm", { locale: ptBR }));

  // Função para adicionar ao calendário
  const addToCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Aqui você implementaria a lógica para adicionar ao calendário
    // Por exemplo, gerar um link para Google Calendar ou Apple Calendar
    alert(`Evento "${title}" adicionado ao calendário!`);
  };

  return (
    <motion.div
      className={`flex flex-col bg-white rounded-lg shadow-sm overflow-hidden 
                 ${isToday ? "ring-2 ring-blue-400" : ""} 
                 ${isNow ? "bg-blue-50" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      <div
        className="flex flex-col sm:flex-row p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setExpanded(!expanded);
            e.preventDefault();
          }
        }}
      >
        {/* Indicador de evento atual */}
        {isNow && (
          <div
            className="absolute top-0 left-0 w-2 h-full bg-blue-500"
            aria-label="Evento acontecendo agora"
          />
        )}

        <div className="flex items-center text-blue-600 font-semibold mb-2 sm:mb-0 sm:w-28 sm:flex-shrink-0">
          <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>{time}</span>

          {isToday && (
            <span className="ml-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
              Hoje
            </span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-blue-900 text-base sm:text-lg">
              {title}
            </h3>
            <button
              className="ml-2 p-1 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              aria-label={expanded ? "Recolher detalhes" : "Expandir detalhes"}
            >
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-1">
            {location && (
              <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>{location}</span>
              </div>
            )}

            {nature && (
              <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>{nature}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="px-4 pb-4 pt-0 border-t border-gray-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {speakers && speakers !== "-" && (
              <div className="mb-2">
                <div className="flex items-start text-gray-600 text-sm">
                  <Users className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Palestrantes:</span>{" "}
                    {speakers}
                  </div>
                </div>
              </div>
            )}

            {description && (
              <div className="text-gray-600 text-sm mt-2">{description}</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type DayScheduleProps = {
  day: string;
  date: string;
  events: EventProps[];
};

const DaySchedule = ({ day, date, events }: DayScheduleProps) => {
  const [collapsed, setCollapsed] = useState(false);

  // Verificar se algum evento é hoje
  const hasEventsToday = events.some((event) =>
    isSameDay(new Date(event.date || date), new Date())
  );

  return (
    <motion.div
      className={`bg-white rounded-xl p-4 sm:p-6 shadow-md ${
        hasEventsToday ? "ring-2 ring-blue-300" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
        role="button"
        tabIndex={0}
        aria-expanded={!collapsed}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setCollapsed(!collapsed);
            e.preventDefault();
          }
        }}
      >
        <h2 className="text-blue-900 font-bold text-lg sm:text-xl">
          {day} - {date}
          {hasEventsToday && (
            <span className="ml-2 text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
              Hoje
            </span>
          )}
        </h2>
        <button
          className="p-1 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
          aria-label={
            collapsed ? "Expandir programação" : "Recolher programação"
          }
        >
          {collapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {!collapsed && (
          <motion.div
            className="mt-4 sm:mt-6 space-y-3 sm:space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {events.map((event, index) => (
              <Event
                key={index}
                {...event}
                date={event.date || date} // Passar a data para o evento
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type ProgrammingScheduleProps = {
  days: DayScheduleProps[];
};

export default function ProgramacaoItem({ days }: ProgrammingScheduleProps) {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar dias com base no filtro e termo de busca
  const filteredDays = days
    .map((day) => {
      // Filtrar eventos
      const filteredEvents = day.events.filter((event) => {
        // Filtrar por termo de busca
        const matchesSearch =
          searchTerm === "" ||
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (event.speakers &&
            event.speakers.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (event.description &&
            event.description.toLowerCase().includes(searchTerm.toLowerCase()));

        // Filtrar por tipo
        const matchesFilter =
          filter === "all" ||
          (filter === "today" &&
            isSameDay(new Date(event.date || day.date), new Date()));

        return matchesSearch && matchesFilter;
      });

      // Retornar dia com eventos filtrados
      return {
        ...day,
        events: filteredEvents,
      };
    })
    .filter((day) => day.events.length > 0); // Remover dias sem eventos

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.h1
        className="text-blue-900 font-bold text-2xl sm:text-3xl text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Programação
      </motion.h1>

      <motion.div
        className="bg-white rounded-lg p-4 mb-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar eventos, palestrantes..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar na programação"
            />
          </div>

          <div className="flex gap-2">
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
            >
              Todos
            </button>
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === "today"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("today")}
              aria-pressed={filter === "today"}
            >
              Hoje
            </button>
          </div>
        </div>
      </motion.div>

      {filteredDays.length > 0 ? (
        <div className="space-y-6 sm:space-y-8">
          {filteredDays.map((day, index) => (
            <DaySchedule key={index} {...day} />
          ))}
        </div>
      ) : (
        <motion.div
          className="bg-white rounded-lg p-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Nenhum evento encontrado para sua busca.
        </motion.div>
      )}
    </div>
  );
}
