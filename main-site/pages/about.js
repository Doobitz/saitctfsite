import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
        <div className="bg-gray-800 text-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow text-center py-24">
                <h1 className="text-5xl font-bold mb-4">SAIT SADT CTFs</h1>
                <p className="text-lg text-gray-400 mb-12">A Cooperative Space to Learn About Cybersecurity Challenges</p>
                
                <div className="text-white">
                    <h2 className="text-3xl py-4">About Us</h2>
                    <p className="text-center">Insert SAIT Stuff Here, maybe stuff about what this site is, what it can be, then a bunch of contact info and some resources.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
