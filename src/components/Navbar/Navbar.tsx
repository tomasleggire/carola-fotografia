import { useRef, useEffect } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        navRef.current?.classList.add("scroll");
      } else {
        navRef.current?.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="nav">
      <h1>Carola Alegre PH</h1>
      <ul>
        <li>
          <a>Trabajos</a>
        </li>
        <li>
          <a>Información</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
