import React, { useState } from "react";
import {
  Search as SearchIcon,
  Bell,
  ArrowLeft,
  SlidersHorizontal,
  List,
  Grid,
  X,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FreeWatchLogo } from "./HomePage";

export type SearchViewState = "categories" | "results" | "filters";

interface SearchPageProps {
  onBackToHome?: () => void;
  onLogout?: () => void;
  onNavigateTab?: (tab: "home" | "search" | "favorites" | "downloads" | "profile") => void;
  onSelectMovie?: (movieId: string, isSeries?: boolean, title?: string) => void;
  onNavigateToNotifications?: () => void;
}

interface SearchMovieItem {
  id: string;
  title: string;
  rating: string;
  year: string;
  vj: string;
  category: string;
  posterGradient: string;
  highlightText?: string;
}

const ADVENTURE_MOVIES: SearchMovieItem[] = [
  {
    id: "adv-1",
    title: "Adventureland",
    rating: "8.4",
    year: "2026",
    vj: "VJ Soul",
    category: "Adventure",
    posterGradient: "from-amber-400 via-orange-300 to-amber-100",
    highlightText: "Adventureland",
  },
  {
    id: "adv-2",
    title: "ADVENTURE BOYZ",
    rating: "8.4",
    year: "2026",
    vj: "VJ Kevo",
    category: "Adventure",
    posterGradient: "from-amber-600 via-orange-800 to-black",
    highlightText: "ADVENTURE BOYZ",
  },
  {
    id: "adv-3",
    title: "ADVENTURE FORCE 5",
    rating: "8.4",
    year: "2026",
    vj: "VJ Kevo",
    category: "Adventure",
    posterGradient: "from-blue-600 via-indigo-900 to-fuchsia-950",
    highlightText: "ADVENTURE FORCE 5",
  },
  {
    id: "adv-4",
    title: "JOJO'S BIZARRE ADVENTURE",
    rating: "8.4",
    year: "2026",
    vj: "VJ Soul",
    category: "Adventure",
    posterGradient: "from-purple-900 via-fuchsia-950 to-black",
    highlightText: "JOJO",
  },
  {
    id: "adv-5",
    title: "THE PRICE OF MONEY: A LARGO WINCH ADVENTURE",
    rating: "8.4",
    year: "2026",
    vj: "VJ Ice P",
    category: "Adventure",
    posterGradient: "from-slate-700 via-zinc-900 to-black",
    highlightText: "LARGO WINCH",
  },
  {
    id: "adv-6",
    title: "THE PRICE OF MONEY: A LARGO WINCH ADVENTURE",
    rating: "8.4",
    year: "2026",
    vj: "VJ Emmy",
    category: "Adventure",
    posterGradient: "from-zinc-700 via-neutral-900 to-black",
    highlightText: "LARGO WINCH",
  },
  {
    id: "adv-7",
    title: "RADAR: THE ADVENTURES OF THE BIONIC DOG",
    rating: "8.4",
    year: "2026",
    vj: "VJ Martin K",
    category: "Adventure",
    posterGradient: "from-sky-400 via-blue-900 to-black",
    highlightText: "RADAR",
  },
  {
    id: "adv-8",
    title: "THE ADVENTURES OF CHUCK & FRIENDS",
    rating: "8.4",
    year: "2026",
    vj: "VJ Martin K",
    category: "Adventure",
    posterGradient: "from-yellow-400 via-amber-700 to-stone-900",
    highlightText: "CHUCK",
  },
  {
    id: "adv-9",
    title: "JURASSIC PET 2: THE LOST SECRET",
    rating: "8.4",
    year: "2026",
    vj: "VJ Martin K",
    category: "Adventure",
    posterGradient: "from-blue-700 via-emerald-800 to-black",
    highlightText: "JURASSIC PET 2",
  },
];

export const SearchPage: React.FC<SearchPageProps> = ({
  onBackToHome,
  onLogout,
  onNavigateTab,
  onSelectMovie,
  onNavigateToNotifications,
}) => {
  const [viewState, setViewState] = useState<SearchViewState>("categories");
  const [searchQuery, setSearchQuery] = useState("Adventure");
  const [selectedGenre, setSelectedGenre] = useState("Adventure");
  const [selectedType, setSelectedType] = useState("Movies");
  const [selectedYear, setSelectedYear] = useState("All");

  // Accordion open/close states in Filters
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    type: true,
    genre: false,
    year: true,
    country: false,
    rating: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans flex flex-col pb-24 select-none">
      {/* ============================================================ */}
      {/* 1. TOP HEADER BAR (Present across all screens) */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/5">
        <FreeWatchLogo />

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setViewState("categories")}
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
              28
            </span>
          </button>

          <button
            type="button"
            onClick={onLogout}
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

      {/* ============================================================ */}
      {/* VIEW A: INITIAL CATEGORIES VIEW (Image 1) */}
      {/* ============================================================ */}
      {viewState === "categories" && (
        <div className="px-4 pt-3 flex-1">
          {/* Search Pill Input */}
          <div
            onClick={() => setViewState("results")}
            className="w-full h-12 rounded-full bg-[#18181b] border border-white/10 px-5 flex items-center justify-between cursor-pointer hover:border-white/20 transition-all shadow-inner"
          >
            <span className="text-sm text-neutral-400">Search</span>
            <SearchIcon className="w-4 h-4 text-neutral-400" />
          </div>

          {/* Heading with subtle ambient glow */}
          <div className="text-center mt-7 mb-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />
            <h1 className="relative text-2xl font-bold text-white tracking-tight">Categories</h1>
            <p className="relative text-xs text-neutral-400 mt-2 leading-relaxed">
              Watch Unlimited Movies, Music Video,
              <br />
              TV shows, Gaming and More.
            </p>
          </div>

          {/* 2-Column Grid of Stacked Category Folder Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* 1. Action Card */}
            <div
              onClick={() => {
                setSearchQuery("Action");
                setViewState("results");
              }}
              className="cursor-pointer group"
            >
              <div className="relative pt-2">
                <div className="absolute top-0 left-3 right-3 h-3 bg-[#2a2a30] rounded-t-xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-zinc-900 to-slate-800 border border-white/10 group-hover:border-white/20 transition-all shadow-lg flex flex-col justify-between p-3">
                  <div className="text-sm font-serif italic text-white/90">Awarapan</div>
                  <div className="w-10 h-10 rounded-full bg-white/10 self-center" />
                  <div className="text-[10px] text-neutral-400 font-medium">Bollywood Hit</div>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-bold text-white">Action</h3>
            </div>

            {/* 2. Horror Card */}
            <div
              onClick={() => {
                setSearchQuery("Horror");
                setViewState("results");
              }}
              className="cursor-pointer group"
            >
              <div className="relative pt-2">
                <div className="absolute top-0 left-3 right-3 h-3 bg-[#2a2a30] rounded-t-xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-emerald-950 to-stone-900 border border-white/10 group-hover:border-white/20 transition-all shadow-lg flex flex-col justify-between p-3">
                  <div className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
                    AMITYVILLE HORROR
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/40 self-center" />
                  <div className="text-[10px] text-neutral-400 font-medium">Classic Haunted</div>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-bold text-white">Horror</h3>
            </div>

            {/* 3. Series Card */}
            <div
              onClick={() => {
                setSearchQuery("Series");
                setViewState("results");
              }}
              className="cursor-pointer group"
            >
              <div className="relative pt-2">
                <div className="absolute top-0 left-3 right-3 h-3 bg-[#2a2a30] rounded-t-xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-t from-black via-slate-900 to-indigo-950 border border-white/10 group-hover:border-white/20 transition-all shadow-lg flex flex-col justify-between p-3">
                  <div className="text-xs font-bold text-sky-400">무법 변호사</div>
                  <div className="w-10 h-10 rounded-full bg-white/10 self-center" />
                  <div className="text-[10px] text-neutral-400 font-medium">Korean Drama</div>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-bold text-white">Series</h3>
            </div>

            {/* 4. Adventure Card */}
            <div
              onClick={() => {
                setSearchQuery("Adventure");
                setViewState("results");
              }}
              className="cursor-pointer group"
            >
              <div className="relative pt-2">
                <div className="absolute top-0 left-3 right-3 h-3 bg-[#2a2a30] rounded-t-xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 border border-white/10 group-hover:border-white/20 transition-all shadow-lg flex flex-col justify-between p-3 text-stone-900">
                  <div className="text-sm font-black text-black">Adventureland</div>
                  <div className="w-10 h-10 rounded-full bg-black/10 self-center" />
                  <div className="text-[10px] text-black/70 font-semibold">Comedy Adventure</div>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-bold text-white">Adventure</h3>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW B: SEARCH RESULTS VIEW (Image 2) */}
      {/* ============================================================ */}
      {viewState === "results" && (
        <div className="px-4 pt-3 flex-1">
          {/* Search Header Row with Back Button & Search Input */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setViewState("categories")}
              className="w-11 h-11 rounded-full bg-[#1c1c1e] hover:bg-[#28282b] flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              aria-label="Back to categories"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            <div className="flex-1 relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Adventure..."
                className="w-full h-11 pl-4 pr-10 rounded-full bg-[#1c1c1e] text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              />
              <SearchIcon className="absolute right-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
            </div>
          </div>

          {/* Title Row with Filters & List View Toggle */}
          <div className="flex items-center justify-between mt-5 mb-3 px-0.5">
            <h2 className="text-lg font-bold text-white tracking-tight">
              {searchQuery ? `${searchQuery} movies` : "Adventure movies"}
            </h2>

            <div className="flex items-center gap-4 text-neutral-300">
              <button
                type="button"
                onClick={() => setViewState("filters")}
                className="p-1 hover:text-white transition-colors cursor-pointer"
                title="Filters"
              >
                <SlidersHorizontal className="w-5 h-5 stroke-[2.2]" />
              </button>

              <button
                type="button"
                className="p-1 hover:text-white transition-colors cursor-pointer"
                title="Toggle View Mode"
              >
                <List className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* 3-Column Movie Posters Grid */}
          <div className="grid grid-cols-3 gap-3">
            {ADVENTURE_MOVIES.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onSelectMovie?.(movie.id, false, movie.title)}
                className="cursor-pointer group active:scale-95 transition-transform"
              >
                <div
                  className={`relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-t ${movie.posterGradient} border border-white/10 group-hover:border-white/20 transition-all p-1.5 flex flex-col justify-between`}
                >
                  <div className="flex justify-end">
                    <span className="px-1.5 py-0.5 rounded-full bg-[#7c3aed] text-[8.5px] font-bold text-white flex items-center gap-1 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-white inline-block" /> {movie.vj}
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-[10px] font-black text-white leading-tight drop-shadow-md line-clamp-2">
                      {movie.highlightText || movie.title}
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex items-center gap-1 text-[10.5px] text-neutral-400 font-medium">
                  <span className="text-amber-400">★ {movie.rating}</span>
                  <span>•</span>
                  <span>{movie.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW C: FILTERS PAGE (Image 3) */}
      {/* ============================================================ */}
      {viewState === "filters" && (
        <div className="px-4 pt-3 flex-1 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Close Button */}
            <div>
              <button
                type="button"
                onClick={() => setViewState("results")}
                className="p-1 text-white hover:text-neutral-300 transition-colors cursor-pointer"
                aria-label="Close filters"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Page Heading */}
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Filters</h1>

            {/* QUICK SELECT GENRE */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
                <span>QUICK SELECT GENRE</span>
              </div>

              {/* Horizontal Pill Badges */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {["Action", "Horror", "Series", "Adventure", "Love Story"].map((genre) => {
                  const isActive = selectedGenre === genre;
                  return (
                    <button
                      key={genre}
                      type="button"
                      onClick={() => setSelectedGenre(genre)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#6d28d9] text-white shadow-md shadow-[#6d28d9]/30"
                          : "bg-[#1c1c1e] text-neutral-300 hover:bg-[#252528]"
                      }`}
                    >
                      {genre}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion 1: Type */}
            <div className="border border-white/5 bg-[#141416] rounded-2xl p-4 transition-all">
              <button
                type="button"
                onClick={() => toggleAccordion("type")}
                className="w-full flex items-center justify-between text-sm font-bold text-white cursor-pointer"
              >
                <span>Type</span>
                {openAccordions.type ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>

              {openAccordions.type && (
                <div className="grid grid-cols-2 gap-3.5 mt-4 text-xs font-medium text-neutral-200">
                  {["Movies", "Music videos", "TV shows", "Gaming"].map((type) => {
                    const isSelected = selectedType === type;
                    return (
                      <label
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected ? "border-[#7c3aed]" : "border-neutral-500"
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />}
                        </div>
                        <span>{type}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Accordion 2: Genre */}
            <div className="border border-white/5 bg-[#141416] rounded-2xl p-4 transition-all">
              <button
                type="button"
                onClick={() => toggleAccordion("genre")}
                className="w-full flex items-center justify-between text-sm font-bold text-white cursor-pointer"
              >
                <span>Genre</span>
                {openAccordions.genre ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>
            </div>

            {/* Accordion 3: Year */}
            <div className="border border-white/5 bg-[#141416] rounded-2xl p-4 transition-all">
              <button
                type="button"
                onClick={() => toggleAccordion("year")}
                className="w-full flex items-center justify-between text-sm font-bold text-white cursor-pointer"
              >
                <span>Year</span>
                {openAccordions.year ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>

              {openAccordions.year && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {["2025", "2024", "2023", "2022", "2020-2021", "All"].map((year) => {
                    const isYearActive = selectedYear === year;
                    return (
                      <button
                        key={year}
                        type="button"
                        onClick={() => setSelectedYear(year)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isYearActive
                            ? "bg-[#7c3aed] text-white shadow-sm"
                            : "bg-[#1c1c1e] text-neutral-300 hover:bg-[#252528]"
                        }`}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Accordion 4: Country */}
            <div className="border border-white/5 bg-[#141416] rounded-2xl p-4 transition-all">
              <button
                type="button"
                onClick={() => toggleAccordion("country")}
                className="w-full flex items-center justify-between text-sm font-bold text-white cursor-pointer"
              >
                <span>Country</span>
                {openAccordions.country ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>
            </div>

            {/* Accordion 5: Rating */}
            <div className="border border-white/5 bg-[#141416] rounded-2xl p-4 transition-all">
              <button
                type="button"
                onClick={() => toggleAccordion("rating")}
                className="w-full flex items-center justify-between text-sm font-bold text-white cursor-pointer"
              >
                <span>Rating</span>
                {openAccordions.rating ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>
            </div>
          </div>

          {/* Floating Done Button */}
          <div className="flex justify-center mt-6 mb-2">
            <button
              type="button"
              onClick={() => setViewState("results")}
              className="h-12 px-14 rounded-full bg-white text-black font-extrabold text-sm hover:bg-neutral-200 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation Bar (Hidden on desktop) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 flex items-center justify-around">
        <button
          type="button"
          onClick={() => onNavigateTab ? onNavigateTab("home") : onBackToHome?.()}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-medium text-neutral-500">Home</span>
        </button>

        <button
          type="button"
          onClick={() => setViewState("categories")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <SearchIcon className="w-5 h-5 text-[#00E676]" />
          <span className="text-[10px] font-medium text-[#00E676]">Search</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab?.("favorites")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-[10px] font-medium text-neutral-500">Favorites</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab?.("downloads")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-[10px] font-medium text-neutral-500">Downloads</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab?.("profile")}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors"
        >
          <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[10px] font-medium text-neutral-500">Profile</span>
        </button>
      </nav>
    </div>
  );
};
