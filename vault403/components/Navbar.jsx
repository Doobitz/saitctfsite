import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-amber-400 py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo and subtitle */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">Vault 403</h1>
          <h4 className="text-xs font-semibold text-amber-500">CONTAINS MANY SECRETS</h4>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 text-xl">
          <a href="https://saitctf.ca" className="hover:text-blue-400">
            SAIT.CTF.Site
          </a>
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/rules" className="hover:text-blue-400">Rules</a>
          <a href="/schedule" className="hover:text-blue-400">Schedule</a>
          <a href="/links" className="hover:text-blue-400">Links</a>
        </div>
      </div>

      {/* Mobile menu, toggled by state */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-lg">
          <a href="https://saitctf.ca" className="block hover:text-blue-400">
            SAIT.CTF.Site
          </a>
          <a href="/" className="block hover:text-blue-400">Home</a>
          <a href="/rules" className="block hover:text-blue-400">Rules</a>
          <a href="/schedule" className="block hover:text-blue-400">Schedule</a>
          <a href="/links" className="block hover:text-blue-400">Links</a>
        </div>
      )}
    </nav>
  );
}

