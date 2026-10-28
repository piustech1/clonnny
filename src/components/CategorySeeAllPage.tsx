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
  Sparkles,
  Flame,
  Tv,
  Moon,
  Smile,
  Rocket,
  Compass,
} from "lucide-react";
import { FreeWatchLogo } from "./HomePage";

export interface CategoryMovieItem {
  id: string;
  title: string;
  rating: string;
  year: string;
  vj: string;
  isSeries?: boolean;
  posterBg: string;
  customArt?: React.ReactNode;
}

interface CategorySeeAllPageProps {
  categoryTitle: string;
  count?: number;
  iconType?: string;
  onBack: () => void;
  onSelectMovie: (movieId: string, isSeries?: boolean, title?: string) => void;
  onNavigateTab: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onNavigateToNotifications?: () => void;
  onLogout?: () => void;
}

export const CategorySeeAllPage: React.FC<CategorySeeAllPageProps> = ({
  categoryTitle = "Latest on FreeWatch",
  count = 43,
  iconType = "sparkles",
  onBack,
  onSelectMovie,
  onNavigateTab,
  onNavigateToNotifications,
}) => {
  // 9 movies matching Screenshot_20261028-174708_191d76fe.png
  const movies: CategoryMovieItem[] = [
    {
      id: "cat-1",
      title: "THE MORTUARY COLLECTION",
      rating: "9.0",
      year: "2024",
      vj: "Vj Ulio",
      posterBg: "from-emerald-950 via-teal-950 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#0a1818] flex flex-col justify-between p-2 overflow-hidden">
          {/* Creepy top hat mortician emerald glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/30 via-emerald-950/50 to-black pointer-events-none" />
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Ulio</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10 text-center">
            <span className="text-[7px] tracking-widest text-amber-300 uppercase block">THE</span>
            <div className="text-xs font-serif font-black text-amber-300 tracking-wider leading-none drop-shadow-md">
              MORTUARY
            </div>
            <span className="text-[7.5px] font-serif text-amber-200 tracking-widest uppercase block mt-0.5">
              COLLECTION
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "cat-2",
      title: "CRYSTAL LAKE",
      rating: "8.8",
      year: "2024",
      vj: "Vj Emmy",
      posterBg: "from-cyan-950 via-zinc-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#121c22] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Emmy</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <span className="text-[6.5px] font-medium text-cyan-200 block">peacock | ORIGINAL</span>
            <div className="text-base font-black text-red-500 tracking-wider leading-tight drop-shadow-md">
              CRYSTAL
            </div>
            <div className="text-base font-black text-red-500 tracking-wider leading-none drop-shadow-md">
              LAKE
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cat-3",
      title: "TINY FUGITIVES",
      rating: "8.7",
      year: "2024",
      vj: "Vj Emmy",
      posterBg: "from-sky-800 via-blue-950 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#1e3a5f] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Emmy</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10 text-center">
            <div className="text-xs font-black text-white tracking-wider leading-none">
              JOHNNY
            </div>
            <div className="text-base font-black text-white tracking-tight leading-tight mt-1 drop-shadow-md">
              FUGITIVES
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cat-4",
      title: "BARBARIAN",
      rating: "8.6",
      year: "2024",
      vj: "Vj Emmy",
      posterBg: "from-red-950 via-zinc-950 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#200508] flex flex-col justify-between p-2 overflow-hidden">
          {/* Illuminated doorway in red darkness */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-black to-black pointer-events-none" />
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Emmy</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="text-base font-serif font-black text-white tracking-widest leading-none drop-shadow-[0_2px_10px_rgba(255,0,0,0.5)]">
              BARBARIAN
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cat-5",
      title: "THAI FIGHTERS",
      rating: "8.5",
      year: "2024",
      vj: "Vj Emmy",
      posterBg: "from-amber-950 via-stone-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#1e150d] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Emmy</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10 text-center">
            <div className="text-base font-black text-amber-200 tracking-wider leading-none drop-shadow-md">
              THAI
            </div>
            <div className="text-sm font-black text-white tracking-tight leading-none mt-0.5 drop-shadow-md">
              FIGHTERS
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cat-6",
      title: "ANIMALS",
      rating: "9.6",
      year: "2024",
      vj: "Vj Junior",
      posterBg: "from-zinc-900 via-stone-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#171a21] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Junior</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <h3 className="text-xl font-black text-white tracking-tighter drop-shadow-md leading-none">
              ANIMALS
            </h3>
          </div>
        </div>
      ),
    },
    {
      id: "cat-7",
      title: "BY ANY MEANS",
      rating: "9.5",
      year: "2024",
      vj: "Vj Junior",
      posterBg: "from-amber-500 via-zinc-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#1c1811] flex flex-col justify-between p-2 overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-amber-500/80 pointer-events-none opacity-85" />
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Junior</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="text-lg font-black text-amber-400 tracking-tight leading-none drop-shadow-md">
              BY ANY
            </div>
            <div className="text-xl font-black text-amber-400 tracking-tighter leading-none drop-shadow-md">
              MEANS
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cat-8",
      title: "KALEIDOSCOPE",
      rating: "8.9",
      year: "2024",
      vj: "Vj Ulio",
      isSeries: true,
      posterBg: "from-purple-900 via-stone-900 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#181a20] flex flex-col justify-between p-2 overflow-hidden">
          {/* Multi-color stripes motif */}
          <div className="absolute inset-0 flex opacity-50 pointer-events-none">
            <div className="flex-1 bg-green-500/30" />
            <div className="flex-1 bg-yellow-500/30" />
            <div className="flex-1 bg-orange-500/30" />
            <div className="flex-1 bg-blue-500/30" />
          </div>
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>Vj Ulio</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <div className="text-xs font-black text-white tracking-widest uppercase leading-none drop-shadow-md">
              KALEIDOSCOPE
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cat-9",
      title: "Just Say It: Ava Peace: The story behind the hits",
      rating: "9.3",
      year: "2024",
      vj: "VJ Junior",
      posterBg: "from-indigo-900 via-purple-950 to-black",
      customArt: (
        <div className="relative w-full h-full bg-[#160f2d] flex flex-col justify-between p-2 overflow-hidden">
          <div className="relative z-10 flex justify-end">
            <div className="px-2 py-0.5 rounded-full bg-[#581c87]/90 border border-purple-400/40 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
              <span>VJ Junior</span>
            </div>
          </div>
          <div className="relative z-10 mt-auto pt-10">
            <span className="text-[7px] font-black text-lime-400 block uppercase">Ava Peace:</span>
            <div className="text-xs font-black text-white leading-tight drop-shadow-md">
              The story behind
            </div>
          </div>
        </div>
      ),
    },
  ];

  const renderIcon = () => {
    switch (iconType) {
      case "flame":
        return <Flame className="w-4 h-4 text-orange-400" />;
      case "tv":
        return <Tv className="w-4 h-4 text-purple-400" />;
      case "moon":
        return <Moon className="w-4 h-4 text-red-400" />;
      case "smile":
        return <Smile className="w-4 h-4 text-amber-400" />;
      case "rocket":
        return <Rocket className="w-4 h-4 text-blue-400" />;
      case "compass":
        return <Compass className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#00E5FF]" />;
    }
  };

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

      {/* 2. SUBHEADER: BACK BUTTON, SECTION ICON, TITLE & COUNT BADGE */}
      <div className="px-4 pt-3 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-[#1c1c1f] hover:bg-[#27272a] flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0d222b] border border-[#00E5FF]/30 flex items-center justify-center shrink-0">
              {renderIcon()}
            </div>
            <h1 className="text-lg font-black text-white tracking-tight">{categoryTitle}</h1>
          </div>
        </div>

        <div className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-bold text-neutral-300">
          {count}
        </div>
      </div>

      {/* 3. RESPONSIVE MOVIE GRID (3-cols mobile, 6-7 cols desktop) */}
      <div className="px-4 lg:px-8 pt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5 sm:gap-3 lg:gap-4 max-w-7xl mx-auto w-full flex-1">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onSelectMovie(movie.id, movie.isSeries, movie.title)}
            className="cursor-pointer group flex flex-col active:scale-95 transition-transform"
          >
            {/* Poster Card */}
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 group-hover:scale-[1.03] transition-all shadow-md">
              {movie.customArt}
            </div>

            {/* Bottom Rating and Year */}
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
