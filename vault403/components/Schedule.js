// components/Schedule.jsx
export default function Schedule() {
  const scheduleItems = [
    { time: "8:30am - 9:00am", event: "Doors Open/Registration" },
    { time: "9:00am - 10:00am", event: "Speaker Presentations" },
    { time: "10:00am - 10:15am", event: "CTF Instructions" },
    { time: "10:15am - 3:00pm", event: "CTF Event" },
    { time: "3:15pm - 4:00pm", event: "Closing Ceremony, Prizes and Awards" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-amber-400 mb-6 text-center">
        Schedule
      </h2>
      <table className="w-full border-collapse border border-gray-700 text-amber-400">
        <thead>
          <tr className="bg-slate-800">
            <th className="border border-gray-600 px-4 py-2 text-left">Time</th>
            <th className="border border-gray-600 px-4 py-2 text-left">Event</th>
          </tr>
        </thead>
        <tbody>
          {scheduleItems.map(({ time, event }, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}
            >
              <td className="border border-gray-600 px-4 py-2">{time}</td>
              <td className="border border-gray-600 px-4 py-2">{event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

