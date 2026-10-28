import React, { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { AuthPage, AuthScreenType } from "./components/AuthPage";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";
import { FavoritesPage } from "./components/FavoritesPage";
import { ProfilePage } from "./components/ProfilePage";
import { SeriesDetailsPage } from "./components/SeriesDetailsPage";
import { MovieDetailsPage } from "./components/MovieDetailsPage";
import { NotificationsPage } from "./components/NotificationsPage";
import { DeveloperChatPage } from "./components/DeveloperChatPage";
import { AvailableVJsPage, ALL_VJS, VJDetailItem } from "./components/AvailableVJsPage";
import { VjMoviesPage } from "./components/VjMoviesPage";
import { CategorySeeAllPage } from "./components/CategorySeeAllPage";
import { DownloadsPage } from "./components/DownloadsPage";
import { AppLaunchBannerModal } from "./components/AppLaunchBannerModal";
import { UserProfileData } from "./components/EditProfileModal";
import { DesktopNavRail, DesktopNavTarget } from "./components/DesktopNavRail";
import { DeviceModeToolbar, ViewportMode } from "./components/DeviceModeToolbar";

type ActiveTab = "home" | "search" | "favorites" | "downloads" | "profile";
type ActivePage =
  | "splash"
  | "login"
  | "signup"
  | "series-details"
  | "movie-details"
  | "notifications"
  | "developer-chat"
  | "available-vjs"
  | "vj-movies"
  | "category-see-all"
  | ActiveTab;

export default function App() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>("auto");
  const [currentPage, setCurrentPage] = useState<ActivePage>("home");
  const [previousPage, setPreviousPage] = useState<ActivePage>("home");
  const [_user, setUser] = useState<string | null>("Admin2");
  const [showAppLaunchBanner, setShowAppLaunchBanner] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    displayName: "Admin2",
    bio: "Luganda dubbed movie lover • Streaming on FreeWatch",
    avatarId: "mirabel",
  });
  const [selectedMovieTitle, setSelectedMovieTitle] = useState<string>("The MOST DANGEROUS GAME");
  const [selectedVj, setSelectedVj] = useState<VJDetailItem>(ALL_VJS[1]); // Default VJ JUNIOR as in Screenshot 2
  const [selectedCategory, setSelectedCategory] = useState<{
    title: string;
    count: number;
    iconType: string;
  }>({
    title: "Latest on FreeWatch",
    count: 43,
    iconType: "sparkles",
  });

  const handleAuthSuccess = (nameOrEmail?: string, avatarId?: string) => {
    setUser(nameOrEmail || "Admin2");
    if (nameOrEmail || avatarId) {
      setUserProfile((prev) => ({
        ...prev,
        displayName:
          nameOrEmail && nameOrEmail.includes("@")
            ? nameOrEmail.split("@")[0]
            : nameOrEmail || prev.displayName,
        avatarId: avatarId || prev.avatarId,
      }));
    }
    setShowAppLaunchBanner(true);
    setCurrentPage("home");
  };

  const handleNavigateTab = (tab: ActiveTab) => {
    setCurrentPage(tab);
  };

  const handleNavigateToNotifications = () => {
    setPreviousPage(currentPage);
    setCurrentPage("notifications");
  };

  const handleNavigateToDeveloperChat = () => {
    setPreviousPage(currentPage);
    setCurrentPage("developer-chat");
  };

  const handleNavigateToAvailableVJs = () => {
    setPreviousPage(currentPage);
    setCurrentPage("available-vjs");
  };

  const handleSelectVj = (vj: VJDetailItem) => {
    setSelectedVj(vj);
    setPreviousPage(currentPage);
    setCurrentPage("vj-movies");
  };

  const handleNavigateToCategorySeeAll = (
    title: string = "Latest on FreeWatch",
    count: number = 43,
    iconType: string = "sparkles"
  ) => {
    setSelectedCategory({ title, count, iconType });
    setPreviousPage(currentPage);
    setCurrentPage("category-see-all");
  };

  const handleSelectMovie = (movieId?: string, isSeries?: boolean, title?: string) => {
    setPreviousPage(currentPage);
    if (title) {
      setSelectedMovieTitle(title);
    }
    if (isSeries) {
      setCurrentPage("series-details");
    } else {
      setCurrentPage("movie-details");
    }
  };

  const handleBack = () => {
    if (currentPage === "vj-movies") {
      setCurrentPage("available-vjs");
      return;
    }
    if (
      previousPage === "series-details" ||
      previousPage === "movie-details" ||
      previousPage === "notifications" ||
      previousPage === "developer-chat" ||
      previousPage === "available-vjs" ||
      previousPage === "category-see-all"
    ) {
      setCurrentPage("home");
    } else {
      setCurrentPage(previousPage);
    }
  };

  const isAuthOrSplash = currentPage === "splash" || currentPage === "login" || currentPage === "signup";

  const handleDesktopNav = (target: DesktopNavTarget) => {
    if (target === "home") setCurrentPage("home");
    else if (target === "search") setCurrentPage("search");
    else if (target === "available-vjs") setCurrentPage("available-vjs");
    else if (target === "categories") handleNavigateToCategorySeeAll("Latest on FreeWatch", 43, "sparkles");
    else if (target === "favorites") setCurrentPage("favorites");
    else if (target === "downloads") setCurrentPage("downloads");
    else if (target === "profile") setCurrentPage("profile");
    else if (target === "notifications") setCurrentPage("notifications");
  };

  return (
    <main className="w-full min-h-screen bg-black text-white relative selection:bg-[#00E676] selection:text-black">
      {/* Device Viewport Mode Switcher (Auto Responsive / PC Web / Mobile App) */}
      <DeviceModeToolbar mode={viewportMode} onModeChange={setViewportMode} />

      {/* Frame wrapper when forcing mobile mode on desktop preview */}
      <div
        className={
          viewportMode === "mobile"
            ? "w-full min-h-screen bg-[#07070a] flex justify-center py-12 px-4"
            : "w-full min-h-screen"
        }
      >
        <div
          className={
            viewportMode === "mobile"
              ? "w-full max-w-[420px] min-h-[850px] bg-black rounded-[44px] border-[5px] border-neutral-800 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden relative"
              : "w-full min-h-screen"
          }
        >
          {/* PERSISTENT DESKTOP NAVIGATION RAIL (matching 1793218681981_752aed45.jpg) */}
          {!isAuthOrSplash && viewportMode !== "mobile" && (
            <DesktopNavRail
              currentNav={currentPage}
              onNavigate={handleDesktopNav}
              userProfile={userProfile}
              notificationCount={42}
            />
          )}

          {/* MAIN VIEWPORT CONTENT (Padded on desktop to accommodate left rail) */}
          <div className={`${!isAuthOrSplash && viewportMode !== "mobile" ? "lg:pl-20 xl:pl-22" : ""} w-full min-h-screen transition-all duration-200`}>
            {/* 1. AVAILABLE VJS FULL PAGE (Screenshot 1) */}
            {currentPage === "available-vjs" && (
        <AvailableVJsPage
          onBack={() => setCurrentPage("home")}
          onSelectVj={handleSelectVj}
          onNavigateTab={handleNavigateTab}
          onNavigateToNotifications={handleNavigateToNotifications}
          onLogout={() => setCurrentPage("splash")}
        />
      )}

      {/* 2. PARTICULAR VJ MOVIES PAGE (Screenshot 2) */}
      {currentPage === "vj-movies" && (
        <VjMoviesPage
          vj={selectedVj}
          onBack={() => setCurrentPage("available-vjs")}
          onSelectMovie={handleSelectMovie}
          onNavigateTab={handleNavigateTab}
          onNavigateToNotifications={handleNavigateToNotifications}
          onLogout={() => setCurrentPage("splash")}
        />
      )}

      {/* 3. HOME SECTIONS "SEE ALL" FULL PAGE (Screenshot 4) */}
      {currentPage === "category-see-all" && (
        <CategorySeeAllPage
          categoryTitle={selectedCategory.title}
          count={selectedCategory.count}
          iconType={selectedCategory.iconType}
          onBack={() => setCurrentPage("home")}
          onSelectMovie={handleSelectMovie}
          onNavigateTab={handleNavigateTab}
          onNavigateToNotifications={handleNavigateToNotifications}
          onLogout={() => setCurrentPage("splash")}
        />
      )}

      {/* 4. NOTIFICATIONS PAGE */}
      {currentPage === "notifications" && (
        <NotificationsPage
          onBack={handleBack}
          onNavigateTab={handleNavigateTab}
          onSelectMovie={handleSelectMovie}
          onLogout={() => setCurrentPage("splash")}
        />
      )}

      {/* 5. TALK TO DEVELOPER / CHAT PAGE */}
      {currentPage === "developer-chat" && (
        <DeveloperChatPage
          onBack={handleBack}
          onNavigateTab={handleNavigateTab}
          onNavigateToNotifications={handleNavigateToNotifications}
          onLogout={() => setCurrentPage("splash")}
        />
      )}

      {/* 6. SINGLE MOVIE DETAILS PAGE */}
      {currentPage === "movie-details" && (
        <MovieDetailsPage
          movieTitle={selectedMovieTitle}
          onBack={handleBack}
          onNavigateTab={handleNavigateTab}
          onLogout={() => setCurrentPage("splash")}
          onSelectMovie={(id, isSeries, title) => handleSelectMovie(id, isSeries, title)}
          onNavigateToNotifications={handleNavigateToNotifications}
        />
      )}

      {/* 7. TV SERIES DETAILS PAGE */}
      {currentPage === "series-details" && (
        <SeriesDetailsPage
          onBack={handleBack}
          onNavigateTab={handleNavigateTab}
          onLogout={() => setCurrentPage("splash")}
          onSelectMovie={(id, isSeries, title) => handleSelectMovie(id, isSeries, title)}
          onNavigateToNotifications={handleNavigateToNotifications}
        />
      )}

      {/* 8. FAVORITES PAGE */}
      {currentPage === "favorites" && (
        <FavoritesPage
          onNavigateTab={handleNavigateTab}
          onLogout={() => setCurrentPage("splash")}
          onSelectMovie={(id, isSeries, title) => handleSelectMovie(id, isSeries, title)}
          onNavigateToNotifications={handleNavigateToNotifications}
        />
      )}

      {/* 9. PROFILE PAGE (With Collapsible Watch History & Saved Movies - Screenshot 3) */}
      {currentPage === "profile" && (
        <ProfilePage
          onNavigateTab={handleNavigateTab}
          onLogout={() => setCurrentPage("splash")}
          onNavigateToDeveloperChat={handleNavigateToDeveloperChat}
          onNavigateToNotifications={handleNavigateToNotifications}
          onSelectMovie={handleSelectMovie}
          userProfile={userProfile}
          onUpdateProfile={setUserProfile}
        />
      )}

      {/* 10. SEARCH PAGE */}
      {currentPage === "search" && (
        <SearchPage
          onBackToHome={() => setCurrentPage("home")}
          onNavigateTab={handleNavigateTab}
          onLogout={() => setCurrentPage("splash")}
          onSelectMovie={(id, isSeries, title) => handleSelectMovie(id, isSeries, title)}
          onNavigateToNotifications={handleNavigateToNotifications}
        />
      )}

      {/* 11. HOME PAGE */}
      {currentPage === "home" && (
        <HomePage
          onLogout={() => setCurrentPage("splash")}
          onNavigateTab={handleNavigateTab}
          onNavigateToSearch={() => setCurrentPage("search")}
          onSelectMovie={handleSelectMovie}
          onNavigateToNotifications={handleNavigateToNotifications}
          onNavigateToAvailableVJs={handleNavigateToAvailableVJs}
          onNavigateToCategorySeeAll={handleNavigateToCategorySeeAll}
          onSelectVj={(name) => {
            const found =
              ALL_VJS.find(
                (v) =>
                  v.name.toLowerCase() === name.toLowerCase() ||
                  name.toLowerCase().includes(v.name.toLowerCase()) ||
                  v.name.toLowerCase().includes(name.toLowerCase())
              ) || ALL_VJS[1];
            handleSelectVj(found);
          }}
        />
      )}

      {/* 12. DOWNLOADS TAB */}
      {currentPage === "downloads" && (
        <DownloadsPage
          onNavigateTab={handleNavigateTab}
          onLogout={() => setCurrentPage("splash")}
          onSelectMovie={(id, isSeries, title) => handleSelectMovie(id, isSeries, title)}
          onNavigateToNotifications={handleNavigateToNotifications}
        />
      )}

      {/* 13. SPLASH SCREEN */}
      {currentPage === "splash" && (
        <SplashScreen
          onGetStarted={() => setCurrentPage("signup")}
          onLogIn={() => setCurrentPage("login")}
        />
      )}

      {/* 14. AUTH PAGES */}
      {(currentPage === "login" || currentPage === "signup") && (
        <AuthPage
          initialScreen={currentPage as AuthScreenType}
          onSuccess={handleAuthSuccess}
          onBackToSplash={() => setCurrentPage("splash")}
        />
      )}
      </div>
        </div>
      </div>

      {/* 15. AUTOMATIC APPEARING APP LAUNCH BANNER (Screenshot 2) */}
      <AppLaunchBannerModal
        isOpen={showAppLaunchBanner && (currentPage === "home" || currentPage === "profile" || currentPage === "search")}
        onClose={() => setShowAppLaunchBanner(false)}
      />
    </main>
  );
}
