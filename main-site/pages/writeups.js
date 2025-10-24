import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
        <div className="bg-gray-800 text-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow text-center py-24">
                <h1 className="text-5xl font-bold mb-4">CTF Writeups</h1>
                <p className="text-lg text-gray-400 mb-12">Sometimes people tell us how they broke things!</p>
                
                <div className="text-white">
                    <h2 className="text-3xl py-4">About Us</h2>
                    <p className="text-center">I&apos;m going to attach a CMS to this and hopefully an interactive frontend.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
