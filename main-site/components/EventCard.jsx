export default function EventCard({ 
    name, 
    date, 
    link,
    textColor="text-2x1 font-bold",
    textColorClass="text-white",
    boxColorClass="border border-gray-700",
    hoverColorClass="hover:bg-gray-800",
    dateColorClass="text-gray-400",
    bgColorClass="bg-black"
    }) {
    return (
        <a
            href={link}
            className={`${boxColorClass} ${bgColorClass} rounded-lg p-6 ${hoverColorClass} transition`}
        >
            <h3 className={`${textColor} ${textColorClass} mb-2`}>{name}</h3>
            <p className={`${dateColorClass}`}>{date}</p>
        </a>
    );
}
