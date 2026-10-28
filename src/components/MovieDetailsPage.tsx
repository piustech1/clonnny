import React, { useState } from "react";
import {
  Search as SearchIcon,
  Bell,
  ArrowLeft,
  Star,
  Play,
  Bookmark,
  Download,
  ChevronDown,
  Headphones,
  Home,
  Heart,
  User as UserIcon,
} from "lucide-react";
import { FreeWatchLogo } from "./HomePage";

interface MovieDetailsPageProps {
  onBack: () => void;
  onNavigateTab: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onLogout?: () => void;
  movieTitle?: string;
  onSelectMovie?: (movieId: string, isSeries?: boolean, title?: string) => void;
  onNavigateToNotifications?: () => void;
}

const CAST_MEMBERS = [
  {
    name: "Joel McCr...",
    role: "Robert Rains...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Fay Wray",
    role: "Eve Trowbrid...",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Leslie Ban...",
    role: "Count Zaroff",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Robert Ar...",
    role: "Martin Trow...",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Noble Joh...",
    role: "Ivan",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Steve...",
    role: "Cast Role",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
  },
];

const RELATED_MOVIES = [
  {
    id: "rel-1",
    title: "Mirzapur 16",
    rating: "9.3",
    year: "2024",
    posterGradient: "from-amber-950 via-orange-950 to-black",
    highlightTitle: "MIRZAPUR",
  },
  {
    id: "rel-2",
    title: "Mirzapur 15",
    rating: "9.2",
    year: "2024",
    posterGradient: "from-stone-900 via-amber-950 to-black",
    highlightTitle: "MIRZAPUR",
  },
  {
    id: "rel-3",
    title: "Mirzapur 14",
    rating: "9.1",
    year: "2024",
    posterGradient: "from-amber-900 via-stone-950 to-black",
    highlightTitle: "MIRZAPUR",
  },
  {
    id: "rel-4",
    title: "Mirzapur",
    rating: "9.0",
    year: "2024",
    posterGradient: "from-stone-950 via-neutral-900 to-black",
    highlightTitle: "MIRZAPUR",
  },
];

export const MovieDetailsPage: React.FC<MovieDetailsPageProps> = ({
  onBack,
  onNavigateTab,
  onLogout,
  movieTitle = "The MOST DANGEROUS GAME",
  onSelectMovie,
  onNavigateToNotifications,
}) => {
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

      {/* 2. HERO BANNER WITH THE ACTRESS BACKDROP */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-stone-900">
        {/* Cinematic Asian Period / Noir Drama Backdrop */}
        <div className="absolute inset-0 bg-stone-950">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80"
            alt="The Most Dangerous Game"
            className="w-full h-full object-cover object-top opacity-60 mix-blend-luminosity filter brightness-75 contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-950/40 to-black/60" />
        </div>

        {/* Ambient Top & Bottom Scrims */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />

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

        {/* Hero Bottom Info (Date, Title, VJ Luganda Dubbed, Tags) */}
        <div className="absolute bottom-3 left-4 right-4 z-20 space-y-2">
          <div className="text-xs font-medium text-neutral-400">October 28, 2026</div>

          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-amber-500 font-serif leading-tight drop-shadow-md">
              <span className="text-sm font-sans italic text-amber-400 block font-normal">The</span>
              {movieTitle}
            </h1>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4c1d95] text-white text-[11px] font-bold shrink-0 shadow-md">
              <Headphones className="w-3.5 h-3.5 text-[#00E676]" />
              <span>VJ LUGANDA DUBBED</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              1h 55min
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              Action
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              Movie
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1c1c1e] text-[11px] font-semibold text-neutral-300">
              PG-13
            </span>
          </div>
        </div>
      </div>

      {/* 3. ACTION BUTTONS ROW (Play, Bookmark, Download) */}
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

      {/* 4. CAST SECTION */}
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

      {/* 5. SYNOPSIS SECTION */}
      <div className="px-4 mt-7">
        <h3 className="text-base font-extrabold text-white tracking-tight mb-3">Synopsis</h3>

        <div className="rounded-2xl bg-[#141416] border border-white/5 p-4 shadow-md">
          <p className={`text-xs text-neutral-300 leading-relaxed font-normal ${isReadMore ? "" : "line-clamp-3"}`}>
            Eve is an American sitcom starring Eve, Jason Winston George, Ali Landry, Natalie Desselle-Reid, Brian Hooks and Sean Maguire. It aired on the UPN network from September 15, 2003, to May 11, 2006. The series revolves around two friends in Miami navigating relationships and career ambitions.
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

      {/* 6. RELATED MOVIES SECTION */}
      <div className="px-4 mt-7">
        <h3 className="text-base font-extrabold text-white tracking-tight mb-3">Related Movies</h3>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {RELATED_MOVIES.map((movie) => (
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
                  <div className="text-[10px] font-black text-amber-400 leading-tight drop-shadow-md">
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

      {/* 7. FIXED BOTTOM NAVIGATION BAR (Hidden on desktop) */}
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
