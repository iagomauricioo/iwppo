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
    <div className="flex flex-col sm:flex-row bg-[#D9F2F8] rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
      <div className="text-[#0077B6] font-semibold mb-2 sm:mb-0 sm:w-24 sm:flex-shrink-0">
        {time}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-[#0A2463] text-base sm:text-lg">
          {title}
        </h3>
        {nature && (
          <p className="text-gray-500 text-xs sm:text-sm">Natureza: {nature}</p>
        )}
        {location && (
          <p className="text-gray-500 text-xs sm:text-sm">Local: {location}</p>
        )}
        {speakers && speakers !== "-" && (
          <p className="text-gray-500 text-xs sm:text-sm break-words">
            <span className="font-medium">Palestrantes:</span> {speakers}
          </p>
        )}
        {description && (
          <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">
            {description}
          </p>
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
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
      <h2 className="text-[#0A2463] font-bold text-lg sm:text-xl mb-4 sm:mb-6">
        {day} - {date}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

type ProgrammingScheduleProps = {
  days: DayScheduleProps[];
};

export default function ProgramacaoItem({ days }: ProgrammingScheduleProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-[#0A2463] font-bold text-2xl sm:text-3xl text-center mb-6 sm:mb-8">
        Programação
      </h1>
      <div className="space-y-6 sm:space-y-8">
        {days.map((day, index) => (
          <DaySchedule key={index} {...day} />
        ))}
      </div>
    </div>
  );
}
