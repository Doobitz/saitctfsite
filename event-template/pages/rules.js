import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-blue-950 text-amber-400 min-h-screen flex flex-col">
            <Navbar />
            <p>Rules</p>
            <Footer />
        </div>
    );
}
