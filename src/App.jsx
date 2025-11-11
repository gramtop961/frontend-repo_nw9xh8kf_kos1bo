import Header from "./components/Header";
import BannerCarousel from "./components/BannerCarousel";
import Sections from "./components/Sections";
import { Rocket, Settings, User } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <BannerCarousel />
        <Sections />

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card title="My Matches" icon={<Rocket className="h-5 w-5 text-violet-600" />}> 
            Track joined matches, timers and room info.
          </Card>
          <Card title="Results" icon={<User className="h-5 w-5 text-emerald-600" />}> 
            Leaderboards, proofs and winners.
          </Card>
          <Card title="Profile" icon={<Settings className="h-5 w-5 text-amber-600" />}> 
            Wallet, deposits and settings.
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Card({ title, icon, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">{children}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} BD FF Tournament – RRR Esports Style. All rights reserved.
        </p>
        <p className="text-gray-500">Admin Secret Code: 01710</p>
      </div>
    </footer>
  );
}
