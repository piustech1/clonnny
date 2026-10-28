import React, { useState } from "react";
import {
  Search as SearchIcon,
  Bell,
  ArrowLeft,
  Star,
  Play,
  SkipForward,
  Bookmark,
  Download,
  ChevronDown,
  Check,
  Home,
  Heart,
  User as UserIcon,
} from "lucide-react";
import { FreeWatchLogo } from "./HomePage";

interface SeriesDetailsPageProps {
  onBack: () => void;
  onNavigateTab: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onLogout?: () => void;
  onSelectMovie?: (movieId: string, isSeries?: boolean, title?: string) => void;
  onNavigateToNotifications?: () => void;
}

const CAST_MEMBERS = [
  {
    name: "Jenna Ortega",
    role: "Wednesday ...",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Steve Buscemi",
    role: "Barry Dort",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Emma Myers",
    role: "Enid Sinclair",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Hunter Doohan",
    role: "Tyler Galpin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Joy Sunday",
    role: "Bianca Barclay",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Moosa Mostafa",
    role: "Eugene ...",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
  },
];

const MORE_LIKE_THIS = [
  {
    id: "mlt-1",
    title: "The Mortuary Coll...",
    rating: "9.0",
    year: "2024",
    posterGradient: "from-emerald-950 via-teal-950 to-black",
    highlightTitle: "MORTUARY COLLECTION",
  },
  {
    id: "mlt-2",
    title: "Kaleidoscope",
    rating: "9.1",
    year: "2024",
    posterGradient: "from-blue-600 via-yellow-500 to-purple-800",
    highlightTitle: "KALEIDOSCOPE",
  },
  {
    id: "mlt-3",
    title: "Mirzapur 16",
    rating: "9.3",
    year: "2024",
    posterGradient: "from-amber-950 via-orange-950 to-black",
    highlightTitle: "MIRZAPUR",
  },
  {
    id: "mlt-4",
    title: "Mirzapur",
    rating: "9.2",
    year: "2024",
    posterGradient: "from-stone-900 via-amber-950 to-black",
    highlightTitle: "MIRZAPUR",
  },
];

export const SeriesDetailsPage: React.FC<SeriesDetailsPageProps> = ({
  onBack,
  onNavigateTab,
  onLogout,
  onSelectMovie,
  onNavigateToNotifications,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<number>(2);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

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
              35
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

      {/* 2. HERO BANNER WITH WEDNESDAY */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-zinc-900">
        {/* Wednesday gothic backdrop illustration/still */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/90 to-slate-950">
          {/* Gothic Wednesday Face Composition */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-80 opacity-70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-black" />
            </div>
          </div>
        </div>

        {/* Ambient Top & Bottom Scrims */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Floating Top Controls: Back Button & Rating Badge */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black transition-colors cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-white">8.4</span>
          </div>
        </div>

        {/* Center Circular Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            type="button"
            className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <Play className="w-6 h-6 fill-black ml-0.5" />
          </button>
        </div>

        {/* Hero Bottom Info (2026, Title, VJ Ulio, Tag pills) */}
        <div className="absolute bottom-3 left-4 right-4 z-20 space-y-2">
          <div className="text-xs font-medium text-neutral-400">2026</div>

          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Wednesday Season 2: Episode 1
            </h1>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4c1d95] text-white text-[11px] font-bold shrink-0 shadow-md">
              <div className="w-4 h-4 rounded-full overflow-hidden bg-white/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                  alt="VJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>VJ ULIO</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              3 Seasons
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              Action
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              TV Series
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              TV-MA
            </span>
          </div>
        </div>
      </div>

      {/* 3. ACTION BUTTONS ROW (Play, Next Ep, Bookmark, Download) */}
      <div className="px-4 pt-4 flex items-center gap-2.5">
        <button
          type="button"
          className="flex-1 h-12 rounded-full bg-[#00E676] hover:bg-[#00c853] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00E676]/25 active:scale-[0.98] cursor-pointer"
        >
          <Play className="w-4 h-4 fill-black" />
          <span>PLAY</span>
        </button>

        <button
          type="button"
          className="px-4 h-12 rounded-full bg-[#0e2a18] border border-[#00E676]/40 hover:bg-[#133820] text-[#00E676] font-bold text-xs flex items-center gap-1.5 active:scale-[0.98] cursor-pointer"
        >
          <SkipForward className="w-3.5 h-3.5 fill-[#00E676]" />
          <span>Next Ep</span>
        </button>

        <button
          type="button"
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all cursor-pointer ${
            isBookmarked
              ? "bg-[#00E676] border-[#00E676] text-black"
              : "bg-[#1c1c1e] border-white/5 text-white hover:bg-[#28282b]"
          }`}
          title="Bookmark"
        >
          <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-black" : ""}`} />
        </button>

        <button
          type="button"
          onClick={() => setIsDownloaded(!isDownloaded)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all cursor-pointer ${
            isDownloaded
              ? "bg-sky-500 border-sky-500 text-white"
              : "bg-[#1c1c1e] border-white/5 text-white hover:bg-[#28282b]"
          }`}
          title="Download"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>

      {/* 4. SEASONS SELECTOR */}
      <div className="px-4 mt-6">
        <h2 className="text-base font-extrabold text-white tracking-wider uppercase mb-3">
          SEASONS
        </h2>

        <div className="flex items-center gap-3">
          {[1, 2, 3].map((seasonNum) => {
            const isActive = selectedSeason === seasonNum;
            return (
              <button
                key={seasonNum}
                type="button"
                onClick={() => setSelectedSeason(seasonNum)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30"
                    : "bg-[#18181b] text-neutral-300 hover:bg-[#222226]"
                }`}
              >
                {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                <span>Season {seasonNum}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. EPISODES ROW */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-extrabold text-white tracking-wider uppercase">
            EPISODES
          </h2>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full bg-[#00E676] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-[#00E676]/20 cursor-pointer"
          >
            <SkipForward className="w-3 h-3 fill-black" />
            <span>Next Episode</span>
          </button>
        </div>

        {/* 2 Episode Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Episode 1 */}
          <div className="cursor-pointer group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-t from-black via-zinc-900 to-slate-900 border border-white/10 group-hover:border-white/20 transition-all flex items-center justify-center shadow-md">
              <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-black ml-0.5" />
              </div>
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-white">
                EP 1
              </div>
            </div>
            <div className="mt-2">
              <h4 className="text-xs font-bold text-white leading-tight truncate">
                Here We Woe Again
              </h4>
              <div className="text-[11px] text-neutral-400 mt-0.5">1h 01m</div>
            </div>
          </div>

          {/* Episode 2 */}
          <div className="cursor-pointer group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-t from-black via-indigo-950 to-purple-950 border border-white/10 group-hover:border-white/20 transition-all flex items-center justify-center shadow-md">
              <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-black ml-0.5" />
              </div>
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-white">
                EP 2
              </div>
            </div>
            <div className="mt-2">
              <h4 className="text-xs font-bold text-white leading-tight truncate">
                The Devil You Woe
              </h4>
              <div className="text-[11px] text-neutral-400 mt-0.5">1h 02m</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CAST SECTION */}
      <div className="px-4 mt-7">
        <h3 className="text-base font-extrabold text-white tracking-tight mb-3">Cast</h3>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
          {CAST_MEMBERS.map((actor, idx) => (
            <div key={idx} className="flex flex-col items-center text-center shrink-0 w-16">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shadow-md">
                <img src={actor.avatar} alt={actor.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 text-xs font-bold text-white truncate w-full">
                {actor.name}
              </div>
              <div className="text-[10px] text-neutral-400 truncate w-full">
                {actor.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SYNOPSIS SECTION */}
      <div className="px-4 mt-7">
        <h3 className="text-base font-extrabold text-white tracking-tight mb-3">Synopsis</h3>

        <div className="rounded-2xl bg-[#141416] border border-white/5 p-4 shadow-md">
          <p className={`text-xs text-neutral-300 leading-relaxed font-normal ${isReadMore ? "" : "line-clamp-3"}`}>
            Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted
            mysteries while making new friends — and foes — at Nevermore Academy. As a monstrous
            killing spree terrorizes the local town, Wednesday must navigate her emerging psychic
            ability to solve the supernatural mystery that embroiled her parents 25 years ago.
          </p>

          <button
            type="button"
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-3 px-3 py-1.5 rounded-full bg-[#222226] hover:bg-[#2c2c32] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>{isReadMore ? "Show less" : "Read more"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isReadMore ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {/* 8. MORE LIKE THIS SECTION */}
      <div className="px-4 mt-7">
        <h3 className="text-base font-extrabold text-white tracking-tight mb-3">More Like This</h3>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {MORE_LIKE_THIS.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onSelectMovie?.(movie.id, false, movie.title)}
              className="w-[125px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
            >
              <div
                className={`relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t ${movie.posterGradient} border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between shadow-md`}
              >
                <div className="flex justify-end">
                  <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-amber-400 text-[10px] font-bold flex items-center gap-0.5">
                    ★ {movie.rating}
                  </span>
                </div>
                <div className="text-center pb-1">
                  <div className="text-[10px] font-black text-white leading-tight drop-shadow-md">
                    {movie.highlightTitle}
                  </div>
                </div>
              </div>

              <div className="mt-1.5 space-y-0.5">
                <h4 className="text-xs font-bold text-white truncate">{movie.title}</h4>
                <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
                  <span className="text-amber-400">★ {movie.rating}</span>
                  <span>•</span>
                  <span>{movie.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. FIXED BOTTOM NAVIGATION BAR (Hidden on desktop) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 flex items-center justify-around">
        <button
          type="button"
          onClick={() => onNavigateTab("home")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Home className="w-5 h-5 text-neutral-500" />
          <span className="text-[10px] font-medium text-neutral-500">Home</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab("search")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <SearchIcon className="w-5 h-5 text-[#00E676]" />
          <span className="text-[10px] font-medium text-[#00E676]">Search</span>
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
