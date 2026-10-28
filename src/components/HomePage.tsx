import React, { useState } from "react";
import {
  Search,
  Bell,
  Play,
  Bookmark,
  Star,
  Headphones,
  Tv,
  Flame,
  Rocket,
  Heart,
  Moon,
  Smile,
  Sparkles,
  Users,
  Compass,
  Film,
  Home,
  Download,
  User as UserIcon,
  ChevronRight,
} from "lucide-react";
import { ALL_VJS } from "./AvailableVJsPage";

interface HomePageProps {
  onSelectMovie?: (movieId: string, isSeries?: boolean, title?: string) => void;
  onLogout?: () => void;
  onNavigateTab?: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onNavigateToSearch?: () => void;
  onNavigateToNotifications?: () => void;
  onNavigateToAvailableVJs?: () => void;
  onNavigateToCategorySeeAll?: (categoryTitle: string, count?: number, iconType?: string) => void;
  onSelectVj?: (vjName: string) => void;
}

export const FreeWatchLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`font-black tracking-tight inline-flex items-center select-none text-[22px] leading-none ${className}`}>
      <span className="text-white">FREE</span>
      <span className="text-[#00E676]">WATCH</span>
    </div>
  );
};

export interface MovieItem {
  id: string;
  title: string;
  rating: string;
  year: string;
  vj: string;
  genres: string;
  bgGradient: string;
  imageUrl?: string;
}

export interface VJItem {
  id: string;
  name: string;
  subtitle: string;
  bgGradient: string;
  accentColor: string;
}

const AVAILABLE_VJS: VJItem[] = [
  {
    id: "vj-1",
    name: "VJ ISMA PRO",
    subtitle: "LUGANDA DUBBED",
    bgGradient: "from-blue-900 to-indigo-950",
    accentColor: "#2563eb",
  },
  {
    id: "vj-2",
    name: "VJ JOVAN",
    subtitle: "LUGANDA DUBBED",
    bgGradient: "from-amber-900 to-stone-950",
    accentColor: "#d97706",
  },
  {
    id: "vj-3",
    name: "VJ JUNIOR",
    subtitle: "LUGANDA DUBBED",
    bgGradient: "from-purple-900 to-violet-950",
    accentColor: "#7c3aed",
  },
  {
    id: "vj-4",
    name: "VJ ASHIM",
    subtitle: "LUGANDA DUBBED",
    bgGradient: "from-rose-900 to-red-950",
    accentColor: "#e11d48",
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onSelectMovie,
  onLogout,
  onNavigateTab,
  onNavigateToSearch,
  onNavigateToNotifications,
  onNavigateToAvailableVJs,
  onNavigateToCategorySeeAll,
  onSelectVj,
}) => {
  const [activeTab, setActiveTab] = useState<"home" | "search" | "favorites" | "downloads" | "profile">("home");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [desktopFocusedCard, setDesktopFocusedCard] = useState<string>("ape-monster");
  const [desktopFocusedVj, setDesktopFocusedVj] = useState<string>("vj-junior");

  const handleTabClick = (tab: "home" | "search" | "favorites" | "downloads" | "profile") => {
    setActiveTab(tab);
    if (tab === "search" && onNavigateToSearch) {
      onNavigateToSearch();
    } else if (onNavigateTab) {
      onNavigateTab(tab);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans flex flex-col pb-24 select-none">
      {/* 1. TOP BAR */}
      <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md px-4 lg:px-8 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <FreeWatchLogo />
          {/* Subtle Android TV UI Badge on Desktop */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span>TV UI (10-FOOT)</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onNavigateToSearch || (() => onNavigateTab?.("search"))}
            className="p-1 text-white hover:text-[#00E676] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={onNavigateToNotifications}
            className="relative p-1 text-white hover:text-[#00E676] transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#E50914] text-[10px] font-bold text-white flex items-center justify-center">
              28
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab ? onNavigateTab("profile") : onLogout?.()}
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

      {/* 2A. MOBILE HERO FEATURED 3D CAROUSEL (Mirzapur / Frenemies) */}
      <section className="relative px-4 pt-4 pb-2 lg:hidden">
        <div className="relative w-full h-[340px] sm:h-[380px] flex items-center justify-start overflow-hidden">
          {/* Card 4 (Farthest Right) */}
          <div className="absolute left-[240px] sm:left-[300px] w-[180px] sm:w-[210px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950/70 to-stone-900 border border-white/10 opacity-40 scale-85 pointer-events-none">
            <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded bg-[#00E5FF] text-black text-[10px] font-bold flex items-center gap-0.5">
              <span>★</span> 9.1
            </div>
            <div className="absolute bottom-3 left-3 text-lg font-black text-amber-500 tracking-wider">
              RZAPUR
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute left-[160px] sm:left-[200px] w-[185px] sm:w-[215px] h-[290px] sm:h-[330px] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950/80 to-stone-900 border border-white/10 opacity-60 scale-90 pointer-events-none">
            <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded bg-[#00E5FF] text-black text-[10px] font-bold flex items-center gap-0.5">
              <span>★</span> 9.2
            </div>
            <div className="absolute bottom-3 left-3 text-xl font-black text-amber-500 tracking-wider">
              ZAPUR
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute left-[85px] sm:left-[110px] w-[190px] sm:w-[220px] h-[300px] sm:h-[340px] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950/90 to-stone-900 border border-white/10 opacity-80 scale-95 pointer-events-none">
            <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded bg-[#00E5FF] text-black text-[10px] font-bold flex items-center gap-0.5">
              <span>★</span> 9.3
            </div>
            <div className="absolute bottom-3 left-3 text-2xl font-black text-amber-500 tracking-wider">
              APUR
            </div>
          </div>

          {/* Card 1: Front Active Card */}
          <div
            onClick={() => onSelectMovie?.("mirzapur-hero", false, "The MOST DANGEROUS GAME")}
            className="relative z-20 w-[200px] sm:w-[230px] h-[310px] sm:h-[350px] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950 to-stone-900 border border-white/15 shadow-2xl flex flex-col justify-between p-3 cursor-pointer group active:scale-[0.98] transition-transform"
          >
            {/* Top Row Badges */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBookmarked(!isBookmarked);
                }}
                className="w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#00E676] transition-colors cursor-pointer"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-[#00E676] text-[#00E676]" : ""}`} />
              </button>

              <div className="px-1.5 py-0.5 rounded bg-[#00E5FF] text-black text-[10px] font-extrabold flex items-center gap-0.5 shadow-sm">
                <span>★</span> 8.6
              </div>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-white text-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Title */}
            <div className="pt-8">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-amber-400 drop-shadow-md">
                MIRZAPUR
              </h3>
            </div>
          </div>
        </div>

        {/* Hero Metadata & VJ Badge */}
        <div className="mt-3 flex items-center justify-between px-1">
          <div
            onClick={() => onSelectMovie?.("frenemies-hero", false, "The MOST DANGEROUS GAME")}
            className="cursor-pointer group"
          >
            <div className="text-lg font-black tracking-tight text-fuchsia-400 font-serif leading-none group-hover:text-fuchsia-300 transition-colors">
              <span className="text-[9px] font-sans text-neutral-400 block font-normal">Disney</span>
              FRENEMIES
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">
              Action, Drama • 2024
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectMovie?.("frenemies-hero", false, "The MOST DANGEROUS GAME")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4c1d95]/70 border border-[#7c3aed]/50 text-white text-xs font-semibold hover:bg-[#4c1d95] transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span>VJ ASHIM</span>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
              <Headphones className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </section>

      {/* 2B. DESKTOP / 10-FOOT CINEMATIC TV BANNER & EXPERIENCE (matching 1793218681981_752aed45.jpg) */}
      <div className="hidden lg:block px-6 xl:px-10 pt-4 pb-6 max-w-[1600px] mx-auto w-full">
        {/* Massive 10-Foot Hero Banner */}
        <div className="relative w-full h-[470px] xl:h-[510px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#08080c] group">
          {/* Background Cinematic Artwork with Spider-Man & Zendaya backdrop */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1600&auto=format&fit=crop&q=80"
              alt="Spider-Man: Brand New Day"
              className="w-full h-full object-cover object-[center_28%] filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-45% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-30% to-transparent" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gradient from-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Top Right: VJ Junior Badge Pill */}
          <div className="absolute top-6 right-6 z-20">
            <button
              type="button"
              onClick={() => onSelectVj?.("VJ JUNIOR")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4c1d95]/90 hover:bg-[#581c87] border border-[#a855f7]/50 text-white text-xs font-extrabold shadow-xl backdrop-blur-md transition-all cursor-pointer active:scale-95"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden bg-purple-300 border border-white/40">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="VJ JUNIOR"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="tracking-wider">VJ JUNIOR</span>
            </button>
          </div>

          {/* Left Content Column */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 xl:p-12 max-w-2xl">
            {/* SPIDER-MAN: BRAND NEW DAY LOGO */}
            <div className="space-y-1 mb-3">
              <div className="text-4xl xl:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 drop-shadow-[0_4px_12px_rgba(239,68,68,0.5)] font-serif uppercase leading-none">
                SPIDER-MAN
              </div>
              <div className="text-xl xl:text-2xl font-black tracking-widest text-[#FBBF24] uppercase drop-shadow-md">
                BRAND NEW DAY
              </div>
            </div>

            {/* Tags Row */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-xs font-black text-white">
                PG-13
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-neutral-200">
                2h 15min
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-neutral-200">
                2026
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-neutral-200">
                Action
              </span>
            </div>

            {/* Synopsis */}
            <p className="text-sm text-neutral-300 font-medium leading-relaxed mb-6 max-w-xl line-clamp-2">
              Massive cinematic blurred backdrop of - Spider-Man: suit and now, and your signature electric badge translated in full Luganda voiceover by VJ Junior.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onSelectMovie?.("spiderman-hero", false, "SPIDER-MAN: BRAND NEW DAY")}
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00E676] hover:bg-[#00c853] text-black font-black text-sm tracking-wide shadow-[0_0_25px_rgba(0,230,118,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black text-black" />
                <span>PLAY</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectMovie?.("spiderman-hero", false, "SPIDER-MAN: BRAND NEW DAY")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/40 hover:bg-white/15 border border-white/40 text-white font-bold text-sm tracking-wide backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>TRAILER</span>
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 1: AVAILABLE VJs (Focused VJ Badge Row matching 1793218681981_752aed45.jpg) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-extrabold tracking-tight text-white uppercase">
              AVAILABLE VJs
            </h3>
            <button
              type="button"
              onClick={onNavigateToAvailableVJs}
              className="text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              See all ({ALL_VJS.length})
            </button>
          </div>

          <div className="grid grid-cols-3 xl:grid-cols-6 gap-3.5">
            {ALL_VJS.slice(0, 6).map((vj) => {
              const isFocused = desktopFocusedVj === vj.id;
              return (
                <div
                  key={vj.id}
                  onClick={() => {
                    setDesktopFocusedVj(vj.id);
                    onSelectVj ? onSelectVj(vj.name) : onNavigateToAvailableVJs?.();
                  }}
                  onMouseEnter={() => setDesktopFocusedVj(vj.id)}
                  className={`relative h-24 rounded-2xl overflow-hidden bg-gradient-to-r ${vj.bgColor} border flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    isFocused
                      ? "border-[#a855f7] shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-102 ring-2 ring-purple-400/50"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Left Portrait & Slash */}
                  <div className="relative h-full w-[45%] overflow-hidden">
                    <img
                      src={vj.photoUrl}
                      alt={vj.name}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                    />
                    <div
                      className="absolute top-0 right-0 bottom-0 w-6 pointer-events-none"
                      style={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 70%, 50% 30%)",
                        backgroundColor: vj.accentColor,
                        opacity: 0.9,
                      }}
                    />
                  </div>

                  {/* Right Name & Subtitle */}
                  <div className="flex-1 px-3 flex flex-col justify-center items-end text-right">
                    <h4 className="text-xs xl:text-sm font-black tracking-wider text-white">
                      {vj.name}
                    </h4>
                    <span className="text-[9px] xl:text-[10px] font-extrabold tracking-wider text-sky-300 mt-0.5 uppercase">
                      {vj.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: CONTINUE WATCHING & LATEST ON FREEWATCH SIDE-BY-SIDE SHELF (matching 1793218681981_752aed45.jpg) */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Left: CONTINUE WATCHING (5 cols) */}
          <div className="col-span-12 xl:col-span-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-extrabold tracking-tight text-white uppercase">
                CONTINUE WATCHING
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {/* Ghost Whisperer */}
              <div
                onClick={() => onSelectMovie?.("ghost-whisperer", true, "Ghost Whisperer")}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 cursor-pointer transition-all aspect-[16/10] flex flex-col justify-between p-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"
                  alt="Ghost Whisperer"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>
                </div>

                <div />
                <div className="relative z-10">
                  <div className="text-xs font-black text-white drop-shadow-md">Ghost Whisperer</div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/20 rounded-full mt-1.5 overflow-hidden">
                    <div className="w-[45%] h-full bg-[#00E676] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Ghostbusters: Afterlife */}
              <div
                onClick={() => onSelectMovie?.("ghostbusters-afterlife", false, "Ghostbusters: Afterlife")}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 cursor-pointer transition-all aspect-[16/10] flex flex-col justify-between p-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80"
                  alt="Ghostbusters: Afterlife"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>
                </div>

                <div />
                <div className="relative z-10">
                  <div className="text-xs font-black text-white drop-shadow-md">Ghostbusters: Afterlife</div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/20 rounded-full mt-1.5 overflow-hidden">
                    <div className="w-[65%] h-full bg-[#00E676] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: LATEST ON FREEWATCH with D-Pad Focus State on APE vs MONSTER (7 cols) */}
          <div className="col-span-12 xl:col-span-7">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-extrabold tracking-tight text-white uppercase">
                LATEST ON FREEWATCH
              </h3>
              <button
                type="button"
                onClick={() => onNavigateToCategorySeeAll?.("Latest on FreeWatch", 43, "sparkles")}
                className="text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                See all
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3 items-end">
              {/* Card 1: Love & Wine */}
              <div
                onClick={() => {
                  setDesktopFocusedCard("love-wine");
                  onSelectMovie?.("love-wine", false, "Love & Wine");
                }}
                onMouseEnter={() => setDesktopFocusedCard("love-wine")}
                className={`relative rounded-2xl overflow-hidden aspect-[2/3] border cursor-pointer transition-all duration-200 ${
                  desktopFocusedCard === "love-wine"
                    ? "border-[#00E676] shadow-[0_0_20px_rgba(0,230,118,0.5)] scale-105 z-20"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-950/80 to-stone-900 p-2 flex flex-col justify-between">
                  <div />
                  <div className="text-center pb-2">
                    <div className="text-xs font-black text-amber-400 leading-tight">Love &amp; Wine</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Spider-Man */}
              <div
                onClick={() => {
                  setDesktopFocusedCard("spiderman");
                  onSelectMovie?.("spiderman", false, "Spider-Man: Brand New Day");
                }}
                onMouseEnter={() => setDesktopFocusedCard("spiderman")}
                className={`relative rounded-2xl overflow-hidden aspect-[2/3] border cursor-pointer transition-all duration-200 ${
                  desktopFocusedCard === "spiderman"
                    ? "border-[#00E676] shadow-[0_0_20px_rgba(0,230,118,0.5)] scale-105 z-20"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&auto=format&fit=crop&q=80"
                  alt="Spider-Man"
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>

              {/* Card 3: APE vs MONSTER (1.08x D-PAD FOCUS STATE matching 1793218681981_752aed45.jpg) */}
              <div className="flex flex-col items-center">
                {/* 1.08x indicator label on top */}
                <div className="text-[10px] font-black text-[#00E676] mb-1 tracking-wider">
                  1.08x
                </div>

                <div
                  onClick={() => {
                    setDesktopFocusedCard("ape-monster");
                    onSelectMovie?.("ape-monster", false, "APE vs MONSTER");
                  }}
                  onMouseEnter={() => setDesktopFocusedCard("ape-monster")}
                  className={`relative w-full rounded-2xl overflow-hidden aspect-[2/3] border-2 cursor-pointer transition-all duration-300 transform ${
                    desktopFocusedCard === "ape-monster"
                      ? "border-[#00E676] shadow-[0_0_30px_rgba(0,230,118,0.8)] scale-108 z-20 ring-4 ring-[#00E676]/30"
                      : "border-white/20 hover:border-[#00E676] scale-100"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-t from-black via-emerald-950 to-neutral-900 p-2 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-lime-600/30 to-transparent pointer-events-none" />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="px-1.5 py-0.5 rounded bg-[#00E676] text-black text-[8px] font-black uppercase">
                        EPISODE 01
                      </span>
                    </div>

                    <div className="relative z-10 text-center pb-1">
                      <div className="text-sm xl:text-base font-black text-white italic tracking-tight drop-shadow-md">
                        APE <span className="text-[#00E676]">vs</span>
                      </div>
                      <div className="text-xs xl:text-sm font-black text-lime-400 tracking-wider">
                        MONSTER
                      </div>
                    </div>
                  </div>
                </div>

                {/* D-Pad Focus State Annotation beneath it */}
                <div className="flex flex-col items-center mt-2">
                  <div className="flex items-center gap-1 text-[10px] text-white/90 font-bold">
                    {/* D-Pad Icon */}
                    <div className="w-3.5 h-3.5 relative flex items-center justify-center">
                      <div className="w-1 h-3.5 bg-white/80 rounded-sm" />
                      <div className="w-3.5 h-1 bg-white/80 rounded-sm absolute" />
                    </div>
                    <span>D-Pad Focus State</span>
                  </div>
                </div>
              </div>

              {/* Card 4: INSIDIOUS */}
              <div
                onClick={() => {
                  setDesktopFocusedCard("insidious");
                  onSelectMovie?.("insidious", false, "INSIDIOUS: The Red Door");
                }}
                onMouseEnter={() => setDesktopFocusedCard("insidious")}
                className={`relative rounded-2xl overflow-hidden aspect-[2/3] border cursor-pointer transition-all duration-200 ${
                  desktopFocusedCard === "insidious"
                    ? "border-[#00E676] shadow-[0_0_20px_rgba(0,230,118,0.5)] scale-105 z-20"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/70 to-stone-900 p-2 flex flex-col justify-between">
                  <div />
                  <div className="text-center pb-2">
                    <div className="text-xs font-black text-rose-500 tracking-wider">INSIDIOUS</div>
                  </div>
                </div>
              </div>

              {/* Card 5: BRO TR... (Brotherly Love) */}
              <div
                onClick={() => {
                  setDesktopFocusedCard("bro-tr");
                  onSelectMovie?.("brotherly-love", false, "Brotherly Love");
                }}
                onMouseEnter={() => setDesktopFocusedCard("bro-tr")}
                className={`relative rounded-2xl overflow-hidden aspect-[2/3] border cursor-pointer transition-all duration-200 ${
                  desktopFocusedCard === "bro-tr"
                    ? "border-[#00E676] shadow-[0_0_20px_rgba(0,230,118,0.5)] scale-105 z-20"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-950/70 to-zinc-900 p-2 flex flex-col justify-between">
                  <div />
                  <div className="text-center pb-2">
                    <div className="text-xs font-black text-sky-400 tracking-wider">BRO TR...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION: MOBILE AVAILABLE VJS */}
      <section className="mt-6 px-4 lg:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-black text-lg">ហ</span>
            <h2 className="text-lg font-bold text-white tracking-tight">Available VJs</h2>
          </div>
          <button
            type="button"
            onClick={onNavigateToAvailableVJs}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        {/* Horizontal VJ Cards Scroller */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {AVAILABLE_VJS.map((vj) => (
            <div
              key={vj.id}
              onClick={() => onSelectVj ? onSelectVj(vj.name) : onNavigateToAvailableVJs?.()}
              className={`min-w-[190px] h-[95px] rounded-2xl bg-gradient-to-r ${vj.bgGradient} border border-white/10 p-3 flex flex-col justify-end relative overflow-hidden shrink-0 cursor-pointer hover:border-white/20 transition-all`}
            >
              {/* Studio texture / backdrop motif */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-white/5 skew-x-12 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm font-black text-white tracking-tight leading-tight">
                  {vj.name}
                </div>
                <div className="text-[10px] font-bold text-neutral-400 tracking-wider mt-0.5">
                  {vj.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTION: LATEST ON FREEWATCH */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <h2 className="text-lg font-bold text-white tracking-tight">Latest on FreeWatch</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Latest on FreeWatch", 43, "sparkles")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        {/* 3 Posters Row */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: ANIMALS */}
          <div
            onClick={() => onSelectMovie?.("animals", false, "ANIMALS")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-slate-900 to-zinc-800 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" /> VJ Junior
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-white tracking-wider">ANIMALS</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 9.6</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          {/* Card 2: MIRZAPUR */}
          <div
            onClick={() => onSelectMovie?.("mirzapur", false, "The MOST DANGEROUS GAME")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white flex items-center gap-0.5 shadow-sm">
                  ↓ VJ Ashim
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-amber-400 tracking-wider">MIRZAPUR</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 9.6</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          {/* Card 3: BY ANY MEANS */}
          <div
            onClick={() => onSelectMovie?.("by-any-means", false, "BY ANY MEANS")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-yellow-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" /> VJ Junior
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-amber-300 tracking-tight leading-tight">BY ANY MEANS</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 9.5</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: SERIES */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Tv className="w-4 h-4 text-red-500" />
            <h2 className="text-lg font-bold text-white tracking-tight">Series</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Series", 28, "tv")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1 */}
          <div
            onClick={() => onSelectMovie?.("series-story", true, "Wednesday Season 2: Episode 1")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-indigo-950 to-purple-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  VJ Junior
                </span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-black text-white leading-tight">The story behind the hits</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 9.3</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onSelectMovie?.("series-mirzapur", true, "Wednesday Season 2: Episode 1")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ VJ Ashim
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-amber-400 tracking-wider">MIRZAPUR</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 9.3</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onSelectMovie?.("series-mortuary", true, "Wednesday Season 2: Episode 1")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-emerald-950 to-zinc-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  VJ Ulio
                </span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-black text-amber-200 leading-tight">MORTUARY COLLECTION</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 9.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: ACTION */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <h2 className="text-lg font-bold text-white tracking-tight">Action</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Action", 52, "flame")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div
            onClick={() => onSelectMovie?.("thai-fighters", false, "THAI FIGHTERS")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-amber-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  VJ Emmy
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-stone-200 tracking-tight leading-tight">THAI FIGHTERS</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.5</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: SCI-FI */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-purple-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">Sci-Fi</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Sci-Fi", 34, "rocket")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {/* Terminal List Dark Wolf */}
          <div
            onClick={() => onSelectMovie?.("scifi-dark-wolf", false, "TERMINAL LIST: DARK WOLF")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-teal-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ Luganda Dubbed
                </span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-black text-stone-200 leading-tight">TERMINAL LIST: DARK WOLF</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          {/* Terminal List */}
          <div
            onClick={() => onSelectMovie?.("the-terminal-list", false, "THE TERMINAL LIST")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-slate-900 to-sky-950 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ Luganda Dubbed
                </span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-black text-white leading-tight">THE TERMINAL LIST</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>

          {/* Carrie */}
          <div
            onClick={() => onSelectMovie?.("scifi-carrie", false, "CARRIE")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-sky-950 to-slate-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ Luganda Dubbed
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-white tracking-widest">CARRIE</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: ROMANCE */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <h2 className="text-lg font-bold text-white tracking-tight">Romance</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Romance", 19, "heart")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div
            onClick={() => onSelectMovie?.("vivir-amor", false, "Vivir Amor")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-pink-950 to-rose-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ VJ Sammy
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-serif italic text-pink-200">Vivir Amor</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.6</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: HORROR */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-red-500 fill-red-500" />
            <h2 className="text-lg font-bold text-white tracking-tight">Horror</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Horror", 31, "moon")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div
            onClick={() => onSelectMovie?.("horror-dark-wolf", false, "DARK WOLF")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-red-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ Luganda Dubbed
                </span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-black text-stone-200 leading-tight">DARK WOLF</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION: DRAMA */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Smile className="w-4 h-4 text-amber-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">Drama</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Drama", 45, "smile")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div
            onClick={() => onSelectMovie?.("self-made", false, "SELF MADE")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-emerald-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ VJ Aaron
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-rose-200">SELF MADE</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.9</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SECTION: ANIMATION */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-emerald-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">Animation</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Animation", 38, "film")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div
            onClick={() => onSelectMovie?.("anim-carrie", false, "CARRIE")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-sky-950 to-slate-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ Luganda Dubbed
                </span>
              </div>
              <div className="text-center">
                <div className="text-xs font-black text-white tracking-widest">CARRIE</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SECTION: FAMILY */}
      <section className="mt-7 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">Family</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToCategorySeeAll?.("Family", 26, "users")}
            className="px-3 py-1 rounded-full bg-[#1e1b2e] border border-white/5 text-[11px] font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div
            onClick={() => onSelectMovie?.("family-dark-wolf", false, "DARK WOLF")}
            className="w-[115px] sm:w-[130px] shrink-0 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-teal-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all p-2 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[9px] font-bold text-white">
                  ↓ Luganda Dubbed
                </span>
              </div>
              <div className="text-center">
                <div className="text-[10px] font-black text-stone-200 leading-tight">DARK WOLF</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-400 font-medium">
              <span className="text-amber-400">★ 8.0</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FIXED BOTTOM NAVIGATION BAR (Hidden on desktop) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 flex items-center justify-around">
        <button
          type="button"
          onClick={() => handleTabClick("home")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Home className={`w-5 h-5 ${activeTab === "home" ? "text-[#00E676]" : "text-neutral-500"}`} />
          <span className={`text-[10px] font-medium ${activeTab === "home" ? "text-[#00E676]" : "text-neutral-500"}`}>
            Home
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("search")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Search className={`w-5 h-5 ${activeTab === "search" ? "text-[#00E676]" : "text-neutral-500"}`} />
          <span className={`text-[10px] font-medium ${activeTab === "search" ? "text-[#00E676]" : "text-neutral-500"}`}>
            Search
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("favorites")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Heart className={`w-5 h-5 ${activeTab === "favorites" ? "text-[#00E676]" : "text-neutral-500"}`} />
          <span className={`text-[10px] font-medium ${activeTab === "favorites" ? "text-[#00E676]" : "text-neutral-500"}`}>
            Favorites
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("downloads")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <Download className={`w-5 h-5 ${activeTab === "downloads" ? "text-[#00E676]" : "text-neutral-500"}`} />
          <span className={`text-[10px] font-medium ${activeTab === "downloads" ? "text-[#00E676]" : "text-neutral-500"}`}>
            Downloads
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("profile")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <UserIcon className={`w-5 h-5 ${activeTab === "profile" ? "text-[#00E676]" : "text-neutral-500"}`} />
          <span className={`text-[10px] font-medium ${activeTab === "profile" ? "text-[#00E676]" : "text-neutral-500"}`}>
            Profile
          </span>
        </button>
      </nav>
    </div>
  );
};
