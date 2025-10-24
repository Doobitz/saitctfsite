export default function LinksSection() {
  const linkGroups = {
    Hosts: [
      {
        name: "SAIT",
        image: "/images/links/sait.svg",
        url: "https://www.sait.ca/",
        blurb: "Event hosted by SAIT's School for Advanced Digital Technology."
      },
    ],
    "Speakers and Sponsors": [
      {
        name: "Please Find a Sponsor.",
        image: "/images/links/sponsor1.png",
        url: "https://cybercorp.example.com",
        blurb: "Or we can put in speaker companies as well."
      },
    ],
    "SAIT CTF Social Media": [
      {
        name: "SAITCTF Instagram",
        image: "/images/links/instagram.png",
        url: "https://instagram.com/saitctf",
        blurb: "Behind-the-scenes photos and stories from SAIT CTF Events."
      },
      {
        name: "SAITCTF LinkedIn",
        image: "/images/links/linkedin.png",
        url: "https://linkedin.com/saitctf",
        blurb: "Connect with us on LinkedIn to meet the people who make our events amazing!"
      },
      {
        name: "SAITCTF Bluesky",
        image: "/images/links/bluesky.png",
        url: "https://bsky.app/saitctf",
        blurb: "Follow us on Bluesky for real-time updates and CTF tips!"
      },
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">Links</h2>

      {Object.entries(linkGroups).map(([group, links]) => (
        <div key={group} className="mb-12">
          <h3 className="text-2xl text-amber-300 mb-4">{group}</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 rounded-lg p-4 flex flex-col items-center text-center transition"
              >
                <img
                  src={link.image}
                  alt={link.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <p className="text-lg font-semibold text-amber-400">{link.name}</p>
                <p className="text-sm text-gray-300 mt-1">{link.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

