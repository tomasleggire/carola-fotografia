import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>
        Carola Alegre <strong>PH</strong>
      </h1>
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
