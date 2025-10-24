import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="bg-blue-950 text-amber-400 min-h-screen flex flex-col">
            <Navbar />
            <img
  src="/images/rules.png"
  alt="Vault 403 CTF Rules"
  className="max-w-[95vw] w-auto h-auto mx-auto block"
            />
            <Footer />
        </div>
    );
}
