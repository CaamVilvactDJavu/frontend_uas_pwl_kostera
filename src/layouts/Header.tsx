import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");
  const handleBerandaClick = () => navigate("/");
  const handleCariClick = () => navigate("/search-kost");
  const handleFavoritClick = () => navigate("/favorit-kost");
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <header className="w-full border-b-2 border-neutral-800">
      <div className="mx-4 md:mx-20 lg:mx-44">
        <nav className="flex justify-between items-center my-2 py-2">
          <div
            className="p-2 rounded-md font-extralight text-3xl hover:bg-black hover:text-white cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="font-extrabold cursor-pointer">K</span>
            ostera.
          </div>

          <div className="flex">
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="space-x-4">
                    <Button variant="ghost" onClick={handleBerandaClick}>
                      Beranda
                    </Button>
                    <Button variant="ghost" onClick={handleCariClick}>
                      Cari Kost
                    </Button>
                    <Button variant="ghost" onClick={handleFavoritClick}>
                      Favorit
                    </Button>
                    <Button variant="destructive" onClick={handleLogoutClick}>
                      Logout
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="md:hidden ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <div className="flex flex-col">
                  <Button variant="ghost" onClick={handleBerandaClick}>
                    Beranda
                  </Button>
                  <Button variant="ghost" onClick={handleCariClick}>
                    Cari Kost
                  </Button>
                  <Button variant="ghost" onClick={handleFavoritClick}>
                    Favorit
                  </Button>
                  <Button variant="destructive" onClick={handleLogoutClick}>
                    Logout
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
