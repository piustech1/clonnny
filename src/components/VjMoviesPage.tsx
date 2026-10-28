import React from "react";
import {
  ArrowLeft,
  Search as SearchIcon,
  Bell,
  Home,
  Heart,
  Download,
  User as UserIcon,
  Star,
} from "lucide-react";
import { FreeWatchLogo } from "./HomePage";
import { VJDetailItem } from "./AvailableVJsPage";

export interface VjMovieItem {
  id: string;
  title: string;
  rating: string;
  year: string;
  vj: string;
  isSeries?: boolean;
  posterBg: string;
  customArt?: React.ReactNode;
}

interface VjMoviesPageProps {
  vj: VJDetailItem;
  onBack: () => void;
  onSelectMovie: (movieId: string, isSeries?: boolean, title?: string) => void;
  onNavigateTab: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onNavigateToNotifications?: () => void;
  onLogout?: () => void;
}

export const VjMoviesPage: React.FC<VjMoviesPageProps> = ({
  vj,
  onBack,
  onSelectMovie,
  onNavigateTab,
  onNavigateToNotifications,
}) => {
  // Movies list matching Screenshot_20261028-174246_cdb63c89.png
  const vjMovies: VjMovieItem[] = [
    {
      id: "vj-m-1",
      title: "ANIMALS",
      rating: "9.6",
      year: "2024",
      vj: vj.name,
      posterBg: "from-zinc-900 via-stone-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#171a21] flex flex-col justify-between p-2 overflow-hidden">
          {/* Ben Affleck split grid background motif */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/50 via-zinc-900 to-black pointer-events-none" />
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 opacity-30 pointer-events-none">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-white/15 bg-neutral-800/40" />
            ))}
          </div>
          <div className="relative z-10 flex justify-end">
            {/* Top Right VJ Pill */}
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full overflow-hidden bg-white/30 inline-block">
                <img src={vj.photoUrl} alt="" className="w-full h-full object-cover" />
              </span>
              <span>{vj.name}</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <h3 className="text-xl font-black text-white tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-none">
              ANIMALS
            </h3>
            <div className="flex gap-1 mt-1">
              <div className="w-1.5 h-3 bg-white/80" />
              <div className="w-1.5 h-3 bg-white/40" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vj-m-2",
      title: "BY ANY MEANS",
      rating: "9.5",
      year: "2024",
      vj: vj.name,
      posterBg: "from-amber-500 via-zinc-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#1c1811] flex flex-col justify-between p-2 overflow-hidden">
          {/* Split yellow / black poster style */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-amber-500/80 pointer-events-none opacity-85" />
          <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-zinc-950 pointer-events-none" />
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full overflow-hidden bg-white/30 inline-block">
                <img src={vj.photoUrl} alt="" className="w-full h-full object-cover" />
              </span>
              <span>{vj.name}</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="text-sm font-black text-amber-400 tracking-tight leading-none drop-shadow-md">
              BY
            </div>
            <div className="text-lg font-black text-amber-400 tracking-tight leading-none drop-shadow-md">
              ANY
            </div>
            <div className="text-xl font-black text-amber-400 tracking-tighter leading-none drop-shadow-md">
              MEANS
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vj-m-3",
      title: "Just Say It: Ava Peace: The story behind the hits",
      rating: "9.3",
      year: "2024",
      vj: vj.name,
      posterBg: "from-indigo-900 via-purple-950 to-black",
      customArt: (
        <div className="relative w-full h-full bg-gradient-to-b from-[#181135] to-[#090616] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full overflow-hidden bg-white/30 inline-block">
                <img src={vj.photoUrl} alt="" className="w-full h-full object-cover" />
              </span>
              <span>{vj.name}</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="inline-block px-1.5 py-0.5 rounded bg-lime-400 text-black text-[7.5px] font-black uppercase mb-0.5">
              Just Ava Peace:
            </div>
            <div className="text-sm font-black text-white leading-tight drop-shadow-md">
              The story
            </div>
            <div className="text-sm font-black text-white leading-tight drop-shadow-md">
              behind
            </div>
            <div className="text-base font-black text-white leading-none drop-shadow-md">
              the hits
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vj-m-4",
      title: "DRAWN TOGETHER",
      rating: "8.4",
      year: "2024",
      vj: vj.name,
      posterBg: "from-amber-950 via-zinc-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#1b1512] flex flex-col justify-between p-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/40 to-transparent pointer-events-none" />
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full overflow-hidden bg-white/30 inline-block">
                <img src={vj.photoUrl} alt="" className="w-full h-full object-cover" />
              </span>
              <span>{vj.name}</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="text-base font-serif font-black text-amber-300 tracking-wide leading-tight drop-shadow-md">
              DRAWN
            </div>
            <div className="text-sm font-serif font-black text-amber-200 tracking-wider leading-none drop-shadow-md">
              TOGETHER
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vj-m-5",
      title: "JUNIOR",
      rating: "8.4",
      year: "2026",
      vj: vj.name,
      posterBg: "from-sky-700 via-blue-950 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#11243b] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full overflow-hidden bg-white/30 inline-block">
                <img src={vj.photoUrl} alt="" className="w-full h-full object-cover" />
              </span>
              <span>{vj.name}</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10 text-center">
            <span className="text-[7.5px] italic text-sky-200 block">Nothing is inconceivable.</span>
            <div className="text-xl font-serif font-black text-white tracking-widest leading-none drop-shadow-md">
              JUNIOR
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vj-m-6",
      title: "THE MOST DANGEROUS GAME",
      rating: "9.2",
      year: "2024",
      vj: vj.name,
      posterBg: "from-red-950 via-zinc-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#200f13] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full overflow-hidden bg-white/30 inline-block">
                <img src={vj.photoUrl} alt="" className="w-full h-full object-cover" />
              </span>
              <span>{vj.name}</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="text-xs font-black text-red-500 tracking-wider">THE MOST</div>
            <div className="text-sm font-black text-white leading-tight">DANGEROUS GAME</div>
          </div>
        </div>
      ),
    },
  ];

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

      {/* 2. SUBHEADER: BACK BUTTON & CENTERED VJ BADGE PILL */}
      <div className="relative px-4 pt-3 pb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-[#1c1c1f] hover:bg-[#27272a] flex items-center justify-center text-white transition-colors cursor-pointer shrink-0 z-10"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Centered Pill with VJ Avatar + Name matching Screenshot 2 */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b0764]/90 border border-[#a855f7]/40 shadow-md">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-white/20 shrink-0">
            <img src={vj.photoUrl} alt={vj.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-xs font-black text-white tracking-wider uppercase">
            {vj.name}
          </span>
        </div>

        {/* Empty space for balance */}
        <div className="w-9 h-9" />
      </div>

      {/* 3. RESPONSIVE MOVIE GRID (3-cols mobile, 6-7 cols desktop) */}
      <div className="px-4 lg:px-8 pt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5 sm:gap-3 lg:gap-4 max-w-7xl mx-auto w-full flex-1">
        {vjMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onSelectMovie(movie.id, movie.isSeries, movie.title)}
            className="cursor-pointer group flex flex-col active:scale-95 transition-transform"
          >
            {/* Poster Card */}
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 group-hover:scale-[1.03] transition-all shadow-md">
              {movie.customArt}
            </div>

            {/* Bottom Rating and Year matching Screenshot 2 */}
            <div className="flex items-center gap-1.5 mt-1.5 px-0.5 text-xs font-bold text-neutral-300">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
                <span className="text-[11px] font-black text-white">{movie.rating}</span>
              </div>
              <span className="text-[11px] font-medium text-neutral-400">{movie.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. FIXED BOTTOM NAVIGATION BAR (Hidden on desktop) */}
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
