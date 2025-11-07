import TournamentCard from "./TournamentCard";

export default function Sections() {
  const tournaments = [
    {
      title: "RRR BR Championship",
      fee: "৳20",
      prize: "৳300",
      killReward: "৳5/kill",
      date: "12 Nov",
      time: "8:00 PM",
      spots: 45,
      totalSpots: 48,
      category: "BR",
    },
    {
      title: "Clash Squad Rush",
      fee: "৳15",
      prize: "৳200",
      killReward: "৳3/kill",
      date: "12 Nov",
      time: "9:00 PM",
      spots: 24,
      totalSpots: 48,
      category: "CS",
    },
    {
      title: "Lone Wolf Arena",
      fee: "৳10",
      prize: "৳150",
      killReward: "৳4/kill",
      date: "13 Nov",
      time: "7:30 PM",
      spots: 12,
      totalSpots: 24,
      category: "Lone Wolf",
    },
  ];

  return (
    <section className="mt-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-fuchsia-600" />
        <h2 className="text-lg font-semibold text-gray-900">Play Tournaments</h2>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Battle Royale, Clash Squad and Lone Wolf — pick your mode and join.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {tournaments.map((t) => (
          <TournamentCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
}
