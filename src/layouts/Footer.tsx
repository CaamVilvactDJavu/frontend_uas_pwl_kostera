import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleCariClick = () => navigate("/cari-kost");
  const handleFavoritClick = () => navigate("/favorit-kost");
  const handleKebijakanPrivasiClick = () => navigate("/kebijakan-privasi-kost");
  const handleSyaratKetentuanClick = () => navigate("/syarat-ketentuan-kost");

  return (
    <footer className="footer p-10 bg-black text-neutral-content">
      <nav>
        <header className="footer-title">Kostera</header>
        <a className="link link-hover" onClick={handleCariClick}>
          Cari Kost
        </a>
        <a className="link link-hover" onClick={handleFavoritClick}>
          Favorit
        </a>
        <a className="link link-hover">Profil</a>
      </nav>
      <nav>
        <header className="footer-title">Kebijakan</header>
        <a className="link link-hover" onClick={handleKebijakanPrivasiClick}>
          Kebijakan & Privasi
        </a>
        <a className="link link-hover" onClick={handleSyaratKetentuanClick}>
          Syarat & Ketentuan
        </a>
      </nav>
      <nav>
        <header className="footer-title">Sosial Media</header>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">X</a>
      </nav>
    </footer>
  );
};

export default Footer;
