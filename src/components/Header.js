import { Link, useNavigate } from "react-router-dom";
import logoMarvel from "../images/logo-marvel.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img onClick={() => navigate("/")} src={logoMarvel} alt="logo Marvel" />
      <input type="text" placeholder="Recherche..." className="search" />
      <nav className="nav">
        <Link to="./" className="nav-elem">
          Personnages
        </Link>
        <Link to="./Comics" className="nav-elem">
          Les comics
        </Link>
        <Link to="./Favoris" className="nav-elem">
          Mes favoris
        </Link>
        <Link to="./" className="nav-elem">
          Mon compte
        </Link>
      </nav>
    </div>
  );
};

export default Header;
