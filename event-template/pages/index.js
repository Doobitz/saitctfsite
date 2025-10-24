import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-blue-950 text-amber-400 min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <main className="flex-grow text-center py-20">
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                SAIT&apos;s Fall 2025 CTF challenge competition. Join your fellow students, friends, and industry members to test your cybersecurity and hacking skills.</p><br></br>
                <p className=" text-gray-400 max-w-2xl mx-auto">Hosted at the SAIT School for Advanced Digital Technology&apos;s downtown campus, come test your mettle against numerous challenges designed to push your cybersecurity and lateral thinking skills to their limits. This single day event will also feature insights from industry professionals and plenty of accessible activities for people just getting their start into the world of cybersecurity. This event is open to all post-secondary students, high school students, and industry professionals (those with exerience or even people looking to switch into the field), and SAIT alumni of all stripes. </p>
                
                <div className="mt-10 text-white flex justify-center gap-4">
                    <a href="https://ctfd.example.com/vault403" target="_blank" className="text-sky-950 bg-amber-400 hover:bg-black hover:text-white px-6 py-3 rounded-lg font-semibold">Register NOW</a>
                    <a href="https://discord.gg/fMym5CJc8K" target="_blank" className="font-semibold border border-white px-6 py-3 rounded-lg hover:bg-yellow-200 hover:text-sky-950">Join the Discord</a>
                    <a href="https://ctfd.example.com/vault403" className="bg-blue-400 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">Enter the Vault</a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
