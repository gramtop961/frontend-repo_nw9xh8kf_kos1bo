import { Bell, Trophy, Wallet, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 grid place-items-center text-white font-bold shadow-md">
            FF
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
              BD FF Tournament – RRR Esports Style
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">Play • Compete • Win</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Trophy className="h-4 w-4 text-amber-500" />
            Leaderboard
          </button>
          <button className="relative inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rose-500 text-white text-[10px] grid place-items-center">3</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Wallet className="h-4 w-4 text-emerald-600" />
            Wallet
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 hover:bg-gray-50">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
