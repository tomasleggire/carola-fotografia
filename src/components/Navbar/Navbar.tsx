import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>
        Carola Alegre <strong>PH</strong>
      </h1>
      <ul>
        <li>
          <a href="#">Trabajos</a>
        </li>
        <li>
          <a href="#">Información</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
