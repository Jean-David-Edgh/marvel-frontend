import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="./">Accueil</Link>
      <Link to="./personnages">Les héros</Link>
      <Link to="./Comics">Les comics</Link>
    </div>
  );
};

export default Header;
