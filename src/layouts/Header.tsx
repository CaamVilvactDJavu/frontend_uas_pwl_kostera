import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");
  const handleBerandaClick = () => navigate("/");
  const handleCariClick = () => navigate("/cari-kost");
  const handleFavoritClick = () => navigate("/favorit-kost");
  const handleLoginClick = () => navigate("/login");

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
          <div className="flex flex-row space-x-10">
            <Button variant="ghost" onClick={handleBerandaClick}>
              Beranda
            </Button>
            <Button variant="ghost" onClick={handleCariClick}>
              Cari Kost
            </Button>
            <Button variant="ghost" onClick={handleFavoritClick}>
              Favorit
            </Button>
            <Button onClick={handleLoginClick}>Login</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;