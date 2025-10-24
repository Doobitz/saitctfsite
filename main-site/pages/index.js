import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
        <div className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow text-center py-24">
                <h1 className="text-5xl font-bold mb-4">Welcome to SAIT SADT CTFs!</h1>
                <p className="text-lg text-gray-400 mb-12">Where exploration becomes competitive.</p>
                
                <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
                <div className="grid sm:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
                    <EventCard
                        name="Vault 403"
                        date="November 15th, 2025"
                        link="http://localhost:3001"
                        textColorClass="text-amber-400"
                        boxColorClass="border border-amber-400"
                        hoverColorClass="hover:bg-blue-500"
                        dateColorClass="text-yellow-200"
                        bgColorClass="bg-sky-950"
                    />
                    
                    <EventCard
                        name="Winter 2026 CTF"
                        date="TBD February 2026"
                        link="http://comingsoon.saitctf.ca"
                        boxColorClass="border border-white"
                    />
                </div>
                
                <br></br><br></br><br></br>
                <h2 className="text-3x1 text-gray-400 font-semibold mb-6">Past Events</h2>
                <div className="grid sm:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
                    <EventCard
                        name="Al1c3 in Pwnderland"
                        date="July 26th, 2025"
                        link="http://localhost:3001"
                    />
                    
                    <EventCard
                        name="Squid Breach CTF"
                        date=" February 22nd, 2025"
                        link="http://comingsoon.saitctf.ca"
                    />
                </div>
            </main>
            <Footer />
        </div>  
    );
}
