export default function Navbar(){
    return (
        <nav className="bg-purple-800 text-gray-100 py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-bold">SAIT.SADT.CTFs</h1>
            <div className="space-x-4">
                <a href="/" className="hover:text-red-400">Home</a>
                <a href="/about" className="hover:text-red-400">About</a>
                <a href="/writeups" className="hover:text-red-400">Writeups</a>
            </div>
        </nav>
    );
}
