import { Calendar, Clock, Coins, Users } from "lucide-react";

function ProgressBar({ current, total }) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-fuchsia-500 to-violet-600 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function TournamentCard({
  title,
  fee,
  prize,
  killReward,
  date,
  time,
  spots,
  totalSpots,
  category = "BR",
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm bg-white">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> {category}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <button className="rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
          Join
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <Coins className="h-4 w-4 text-amber-500" /> Entry {fee}
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Coins className="h-4 w-4 text-emerald-600" /> Prize {prize}
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="h-4 w-4 text-violet-600" /> {spots}/{totalSpots} joined
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar className="h-4 w-4" /> {date} <Clock className="h-4 w-4 ml-2" /> {time}
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">Kill reward: {killReward}</div>

      <div className="mt-3">
        <ProgressBar current={spots} total={totalSpots} />
      </div>

      <Countdown startsInMinutes={15} />
    </div>
  );
}

function Countdown({ startsInMinutes = 10 }) {
  const target = Date.now() + startsInMinutes * 60 * 1000;
  const [, force] = useState(0);

  useEffect(() => {
    const id = setInterval(() => force((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, target - Date.now());
  const s = Math.floor((remaining / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((remaining / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
      <div className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5">
        <Clock className="h-4 w-4 text-fuchsia-600" /> Starts In: {m}:{s}
      </div>
      <a href="#" className="text-fuchsia-700 font-medium hover:underline">
        Details
      </a>
    </div>
  );
}

import { useEffect, useState } from "react";
