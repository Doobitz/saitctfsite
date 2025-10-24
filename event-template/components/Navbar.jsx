export default function Navbar() {
    return (
        <nav className="bg-slate-800 text amber-400 py-4 px-6 flex justify-between">
            <div className="space-x-4">
                <h1 className="text-4xl font-bold text-amber-400">Vault 403</h1>
                <h4 className="text-xs font-semibold text-amber-500">CONTAINS MANY SECRETS</h4>
            </div>
            <div className="text-xl space-x-4">
                <a href="http://localhost:3000" className="hover:text-blue-400">SAIT.CTF.Site</a>
                <a href="/" className="hover:text-blue-400">Home</a>
                <a href="/rules" className="hover:text-blue-400">Rules</a>
                <a href="/schedule" className="hover:text-blue-400">Schedule</a>
                <a href="/links" className="hover:text-blue-400">Links</a>
            </div>
        </nav>
    );
}
