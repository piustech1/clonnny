import React from "react";
import {
  ArrowLeft,
  Search as SearchIcon,
  Bell,
  Home,
  Heart,
  Download,
  User as UserIcon,
} from "lucide-react";
import { FreeWatchLogo } from "./HomePage";

export interface VJDetailItem {
  id: string;
  name: string;
  subtitle: string;
  photoUrl: string;
  accentColor: string; // ribbon slash color
  bgColor: string; // card right bg
  totalMovies: number;
}

export const ALL_VJS: VJDetailItem[] = [
  {
    id: "vj-emmy",
    name: "VJ EMMY",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    accentColor: "#00E5FF", // cyan slash
    bgColor: "from-[#0f1f3d] to-[#0a1428]",
    totalMovies: 48,
  },
  {
    id: "vj-ulio",
    name: "VJ ULIO",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&auto=format&fit=crop&q=80",
    accentColor: "#0284c7",
    bgColor: "from-[#0c4a6e] to-[#082f49]",
    totalMovies: 57,
  },
  {
    id: "vj-junior",
    name: "VJ JUNIOR",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    accentColor: "#ec4899", // pink slash
    bgColor: "from-[#3b0764] to-[#2e0249]",
    totalMovies: 124,
  },
  {
    id: "vj-isma-k",
    name: "VJ ISMA K",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    accentColor: "#a855f7", // purple slash
    bgColor: "from-[#2e1065] to-[#1e0845]",
    totalMovies: 62,
  },
  {
    id: "vj-heavy-q",
    name: "VJ HEAVY Q",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    accentColor: "#f43f5e", // red-pink slash
    bgColor: "from-[#831843] to-[#4c0519]",
    totalMovies: 53,
  },
  {
    id: "vj-musa",
    name: "VJ MUSA",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80",
    accentColor: "#ec4899", // pink slash
    bgColor: "from-[#3b0764] to-[#2e0249]",
    totalMovies: 39,
  },
  {
    id: "vj-shield",
    name: "VJ SHIELD",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    accentColor: "#00E5FF", // cyan slash
    bgColor: "from-[#0f1f3d] to-[#0a1428]",
    totalMovies: 31,
  },
  {
    id: "vj-ashim",
    name: "VJ ASHIM",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
    accentColor: "#e11d48",
    bgColor: "from-[#4c0519] to-[#2a040e]",
    totalMovies: 76,
  },
  {
    id: "vj-kevo",
    name: "VJ KEVO",
    subtitle: "LUGANDA DUBBED",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
    accentColor: "#f59e0b",
    bgColor: "from-[#451a03] to-[#290f02]",
    totalMovies: 44,
  },
];

interface AvailableVJsPageProps {
  onBack: () => void;
  onSelectVj: (vj: VJDetailItem) => void;
  onNavigateTab: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onNavigateToNotifications?: () => void;
  onLogout?: () => void;
}

export const AvailableVJsPage: React.FC<AvailableVJsPageProps> = ({
  onBack,
  onSelectVj,
  onNavigateTab,
  onNavigateToNotifications,
}) => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans flex flex-col pb-24 select-none">
      {/* 1. TOP HEADER BAR */}
      <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/5">
        <FreeWatchLogo />

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigateTab("search")}
            className="p-1 text-white hover:text-[#00E676] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={onNavigateToNotifications}
            className="relative p-1 text-white hover:text-[#00E676] transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#E50914] text-[10px] font-bold text-white flex items-center justify-center">
              37
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab("profile")}
            title="Account Profile"
            className="w-8 h-8 rounded-full overflow-hidden border border-white/20 active:scale-95 transition-transform cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* 2. SUBHEADER: BACK BUTTON, TITLE & VJ COUNT PILL */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-[#1c1c1f] hover:bg-[#27272a] flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <div>
            <h1 className="text-xl font-black text-white tracking-tight">Available VJs</h1>
            <p className="text-xs text-neutral-400 font-normal">
              Select a translator to view their translated movies
            </p>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-[#3b0764]/60 border border-[#a855f7]/40 text-xs font-bold text-[#d8b4fe] shadow-sm">
          37 VJs
        </div>
      </div>

      {/* 3. VJ BANNERS LIST / GRID */}
      <div className="px-4 lg:px-8 pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto w-full flex-1">
        {ALL_VJS.map((vj) => (
          <div
            key={vj.id}
            onClick={() => onSelectVj(vj)}
            className={`relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden bg-gradient-to-r ${vj.bgColor} border border-white/10 flex items-center justify-between cursor-pointer group shadow-lg active:scale-[0.99] transition-all`}
          >
            {/* Left Portrait & Stylized Diagonal Slash Geometry */}
            <div className="relative h-full w-[44%] sm:w-[38%] overflow-hidden">
              <img
                src={vj.photoUrl}
                alt={vj.name}
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
              />

              {/* Graphic Angled Slits matching screenshot */}
              <div
                className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 70%, 50% 30%)",
                  backgroundColor: vj.accentColor,
                  opacity: 0.85,
                }}
              />
              <div
                className="absolute top-1/2 right-2 w-4 h-8 pointer-events-none"
                style={{
                  backgroundColor: vj.accentColor,
                  clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 60%)",
                }}
              />
            </div>

            {/* Right Side: VJ Name & Luganda Dubbed Subtitle */}
            <div className="flex-1 px-5 flex flex-col justify-center items-end text-right">
              <h3 className="text-lg sm:text-xl font-black tracking-wider text-white group-hover:text-[#00E676] transition-colors">
                {vj.name}
              </h3>
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-sky-300/90 mt-1 uppercase">
                {vj.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. FIXED BOTTOM NAVIGATION BAR (Hidden on Desktop) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 flex items-center justify-around">
        <button
          type="button"
          onClick={() => onNavigateTab("home")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Home className="w-5 h-5 text-[#00E676]" />
          <span className="text-[10px] font-medium text-[#00E676]">Home</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab("search")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <SearchIcon className="w-5 h-5 text-neutral-500" />
          <span className="text-[10px] font-medium text-neutral-500">Search</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab("favorites")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Heart className="w-5 h-5 text-neutral-500" />
          <span className="text-[10px] font-medium text-neutral-500">Favorites</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab("downloads")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Download className="w-5 h-5 text-neutral-500" />
          <span className="text-[10px] font-medium text-neutral-500">Downloads</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab("profile")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <UserIcon className="w-5 h-5 text-neutral-500" />
          <span className="text-[10px] font-medium text-neutral-500">Profile</span>
        </button>
      </nav>
    </div>
  );
};
