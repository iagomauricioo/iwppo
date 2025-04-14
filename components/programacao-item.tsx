type EventProps = {
  time: string;
  title: string;
  location: string;
  nature?: string;
  speakers?: string;
  description?: string;
};

const Event = ({
  time,
  title,
  location,
  nature,
  speakers,
  description,
}: EventProps) => {
  return (
    <div className="flex bg-[#D9F2F8] rounded-lg p-4 mb-4">
      <div className="w-24 text-[#0077B6] font-semibold">{time}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-[#0A2463]">{title}</h3>
        {nature && <p className="text-gray-500 text-sm">Natureza: {nature}</p>}
        {location && <p className="text-gray-500 text-sm">Local: {location}</p>}
        {speakers && speakers !== "-" && (
          <p className="text-gray-500 text-sm">Palestrantes: {speakers}</p>
        )}
        {description && (
          <p className="text-gray-500 mt-2 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

type DayScheduleProps = {
  day: string;
  date: string;
  events: EventProps[];
};

const DaySchedule = ({ day, date, events }: DayScheduleProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-[#0A2463] font-bold text-xl mb-6">
        {day} - {date}
      </h2>
      {events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </div>
  );
};

type ProgrammingScheduleProps = {
  days: DayScheduleProps[];
};

export default function ProgramacaoItem({ days }: ProgrammingScheduleProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-[#0A2463] font-bold text-3xl text-center mb-8">
        Programação
      </h1>
      <div className="space-y-8">
        {days.map((day, index) => (
          <DaySchedule key={index} {...day} />
        ))}
      </div>
    </div>
  );
}
