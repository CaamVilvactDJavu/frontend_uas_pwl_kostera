const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Kostera</header>
        <a className="link link-hover">Cari Kos</a>
        <a className="link link-hover">Favorit</a>
        <a className="link link-hover">Profil</a>
      </nav>
      <nav>
        <header className="footer-title">Kebijakan</header>
        <a className="link link-hover">Kebijakan & Privasi</a>
        <a className="link link-hover">Syarat & Ketentuan</a>
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
