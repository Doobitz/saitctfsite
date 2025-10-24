import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinksSection from "../components/LinksSection";

export default function LinksPage() {
  return (
    <div className="bg-blue-950 text-amber-400 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
}

