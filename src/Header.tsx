import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");
  const handleBerandaClick = () => navigate("/");
  const handleCariClick = () => navigate("/cari");
  const handleFavoritClick = () => navigate("/favorit");
  const handleLoginClick = () => navigate("/login");

  return (
    <header className="w-full border-b-2 border-neutral-800">
      <div className="mx-4 md:mx-20 lg:mx-44">
        <nav className="flex justify-between items-center my-2 py-2">
          <div
            className="p-2 rounded-md font-extralight text-3xl hover:bg-black hover:text-white"
            onClick={handleLogoClick}
          >
            <span className="font-extrabold">K</span>ostera.
          </div>
          <div className="flex flex-row gap-12">
            <Button variant="ghost" onClick={handleBerandaClick}>
              Beranda
            </Button>
            <Button variant="ghost" onClick={handleCariClick}>
              Cari Kos
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
