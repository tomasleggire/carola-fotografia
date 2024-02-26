import { MdMenu } from "react-icons/md";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>
        Carola Alegre <strong>PH</strong>
      </h1>
      <div className="menu-icon-container">
        <MdMenu className="menu-icon" />
      </div>
    </nav>
  );
}
