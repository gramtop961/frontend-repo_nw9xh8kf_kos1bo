import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    title: "Play BR, CS & Lone Wolf",
    sub: "Daily tournaments, instant rewards",
    color: "from-fuchsia-500 to-violet-600",
  },
  {
    id: 2,
    title: "Win Big with RRR Esports",
    sub: "Top 3 winners highlighted on results",
    color: "from-amber-500 to-rose-500",
  },
  {
    id: 3,
    title: "Secure Wallet Payments",
    sub: "bKash, Nagad & Rocket supported",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % banners.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <div className="aspect-[16/6] w-full">
        {banners.map((b, i) => (
          <div
            key={b.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`h-full w-full bg-gradient-to-br ${b.color} text-white p-6 sm:p-10 flex flex-col justify-center`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight drop-shadow">
                {b.title}
              </h3>
              <p className="text-sm sm:text-base mt-2 opacity-90">{b.sub}</p>
              <div className="mt-4 flex gap-2">
                {banners.map((_, dot) => (
                  <span
                    key={dot}
                    className={`h-1.5 w-6 rounded-full transition-all ${
                      dot === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
